import type { Match } from "../definitions/match";
import { BLOCK, CONTROL, DEFENSE, SHOOT } from "../definitions/phases";
import type { Stat } from "../definitions/types/attribute.types";
import type { Phase } from "../definitions/types/phase.types";
import { d100, d2 } from "./random";
import type { MatchSimulation, phaseLookupType, TeamLocation, TeamTracker } from "./simulation.types";

type phaseOutcome = true | false | 'timeout';

export type MatchOutcome = TeamLocation |  "draw";

export class Simulation implements MatchSimulation {

  minute = 0;
  phaseLookup = {} as phaseLookupType;

  gameEnd = 90;

  match: Match;

  private baseChance = 50;
  
  constructor(match: Match, gameEnd = 90) {
    this.gameEnd = gameEnd;
    this.match = match
  }

  private rollByStats(actorStat: number, receiverStat: number) {
    // roll a % based effect with a math.random between 2 teams
    // e.g. attack   -  block  (+ base chance) >= 1-100
    return actorStat - receiverStat + this.baseChance >= d100();
  }

  private rollByStat(actorStat: number) {
    // roll a % based effect with a math.random for a single team
    // e.g. shoot / 2  (+ base chance) >= 1-100
    return actorStat / 2 + this.baseChance >= d100();
  }

  kickoff () {
    this.match.homeScore = 0;
    this.match.awayScore = 0;
    const trackerHome = {team: this.match.homeTeam, goals: 0, type: "home"} as TeamTracker;
    const trackerAway = {team: this.match.awayTeam, goals: 0, type: "away"} as TeamTracker;
    const coinflip = d2();
    if (coinflip === 1) {
      this.phaseLookup[CONTROL] = trackerHome
      this.phaseLookup[DEFENSE] = trackerAway
    } else {
      this.phaseLookup[CONTROL] = trackerAway
      this.phaseLookup[DEFENSE] = trackerHome
    }
  }

  private getStats(trackerA: TeamTracker, phaseA: Phase, statA: Stat, trackerB: TeamTracker, phaseB: Phase, statB: Stat) {
    if (!trackerA.team || !trackerB?.team ) throw new Error("No teams in these phases");
    const returnA = trackerA.team.getEffectiveStat(statA, phaseA, trackerB.team.strengths);
    const returnB = trackerB.team.getEffectiveStat(statB, phaseB, trackerA.team.strengths);
    return [returnA, returnB]
  }

  defensePhase(): phaseOutcome { // defender tries to steal control
    if (this.minute === this.gameEnd) return "timeout";
    const defenderTracker = this.phaseLookup[DEFENSE];
    if (!defenderTracker?.team) return false; // no defender, skip defense phase
    const controlTracker = this.phaseLookup[CONTROL];
    if (!controlTracker?.team) throw new Error("Improper phasing occurred in defensePhase"); // no controller, data is wrong

    const [defend, control] = this.getStats(defenderTracker, DEFENSE, "defend", controlTracker, CONTROL, "control");
    const success = this.rollByStats(defend, control);

    if (success) {
      this.phaseLookup = {
        [CONTROL]: defenderTracker,
        [DEFENSE]: controlTracker,
        [SHOOT]: undefined,
        [BLOCK]: undefined
      } as phaseLookupType
    }

    this.minute += 1;
    return success;
  }

  controlPhase(): phaseOutcome { // controller tries to push forward
    if (this.minute === this.gameEnd) return "timeout";
    const controlTracker = this.phaseLookup[CONTROL];
    if (!controlTracker?.team) return false; // no controller, skip control phase
    const defenderTracker = this.phaseLookup[DEFENSE];
    if (!defenderTracker?.team) throw new Error("Improper phasing occurred in controlPhase"); // no defender, data is wrong

    const [defend, control] = this.getStats(defenderTracker, DEFENSE, "defend", controlTracker, CONTROL, "control");
    const success = this.rollByStats(control, defend);

    if (success) {
      this.phaseLookup = {
        [CONTROL]: undefined,
        [DEFENSE]: undefined,
        [SHOOT]: controlTracker,
        [BLOCK]: defenderTracker
      } as phaseLookupType
    }

    this.minute += 1;
    return success;
  }

  shootPhase(): phaseOutcome { // shooter tries to shoot on goal
    if (this.minute === this.gameEnd) return "timeout";
    const shootTracker = this.phaseLookup[SHOOT];
    if (!shootTracker?.team) return false; // no shooter, skip shoot phase
    const blockTracker = this.phaseLookup[BLOCK];
    if (!blockTracker?.team) throw new Error("Improper phasing occurred in shootPhase"); // no blocker, data is wrong

    const shoot = shootTracker.team.getEffectiveShoot(blockTracker.team.strengths, BLOCK);
    const success = this.rollByStat(shoot);

    if (!success) {
      this.phaseLookup = {
        [CONTROL]: blockTracker,
        [DEFENSE]: shootTracker,
        [SHOOT]: undefined,
        [BLOCK]: undefined
      } as phaseLookupType
      this.minute += 1;
      return success;
    }

    return this.blockPhase(shootTracker);

  }

  blockPhase(shootTracker: TeamTracker): phaseOutcome { // block tries to block shot on goal
    const blockTracker = this.phaseLookup[BLOCK];
    if (!blockTracker?.team) throw new Error("Improper phasing occurred in blockPhase"); // no blocker, data is wrong

    const block = blockTracker.team.getEffectiveBlock(shootTracker.team.strengths, BLOCK);
    const success = this.rollByStat(block);

    if (success) { // blocked successfully
      this.phaseLookup = {
        [CONTROL]: shootTracker,
        [DEFENSE]: blockTracker,
        [SHOOT]: undefined,
        [BLOCK]: undefined
      } as phaseLookupType
    } else { // goal goes in
      shootTracker.goals += 1; // the actual goal scoring
      this.phaseLookup = {
        [CONTROL]: blockTracker,
        [DEFENSE]: shootTracker,
        [SHOOT]: undefined,
        [BLOCK]: undefined
      } as phaseLookupType
    }
    
    this.minute += 1;
    if (this.minute === this.gameEnd) return "timeout";
    return success
  }

  endMatch(): MatchOutcome {
    const allTrackers = 
      Object.values(this.phaseLookup)
      .filter(tracker => tracker !== undefined) // any phases that have a teamtracker in it
      .sort((trackerA, trackerB) => trackerB.goals - trackerA.goals) // sort by goals. b - a so biggest goals are sorted first
    if (allTrackers.length !== 2) throw new Error("phase lookup state is not correct");
    // Add goals to match data. for a real-time display this should be done for every point scored instead
    allTrackers.forEach(tracker => {
      if (this.match.homeTeam === tracker.team) this.match.homeScore = tracker.goals;
      if (this.match.awayTeam === tracker.team) this.match.awayScore = tracker.goals;
    })
    const [winner, loser] = allTrackers; // due to earlier sorting index 0 should be the most goals

    // check winner
    if (winner.goals === loser.goals) {
      return "draw";
    }
    return (winner.type)

  }

}