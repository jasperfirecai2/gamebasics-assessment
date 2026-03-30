import { Match } from "../definitions/match";
import type { Standing } from "../definitions/standing";
import { Simulation } from "./simulation";

// kickoff: 50/50 who gets control

// loop design:

// breakout check: minutes = 90? -> exit

// defense phase team: rolls for defense
// success: gain control phase, apply defense phase, advance 1 minute
// fail: nothing happens

// control phase team: rolls for control
// success: gain shoot phase, apply block phase, advance 1 minute
// fail: nothing happens

// no shoot phase: advance 1 minute, continue loop

// shoot phase: rolls for shoot
// fail: gain defense phase, apply control phase, advance 1 minute, continue loop
// success: go to block phase

// block phase: rolls for block
// fail: +1 goals for shooter, advance 1 minute, gain control phase, apply defense phase, continue loop
// success: gain defense phase, apply control phase, advance 1 minute, continue loop


// after loop:
// determine outcome of match and save to teams' win/loss/draw arrays
// add goal counts to correct teams' goalsFor & goalsAgainst properties

export function simulate(homeStanding: Standing, awayStanding: Standing, match: Match) {

    const gameEnd = 90; // minutes when game ends

    const simulation = new Simulation(match, gameEnd)

    // set the initial phases from match data and coin flip.
    simulation.kickoff();

    while (simulation.minute < gameEnd) { // each phase increments timer. phaseOutcome type has a timeout result too
      if (simulation.defensePhase() === "timeout") break;
      const controlOutcome = simulation.controlPhase()
      if (controlOutcome === "timeout") break;
      if (!controlOutcome) continue // if control phase failed, there is no shoot phase
      if (simulation.shootPhase() === "timeout") break; // shoot phase calls block phase on success
    }

    // endMatch also updates goals for match
    const matchOutcome = simulation.endMatch();

    // apply goals
    homeStanding.goalsFor += match.home[1];
    homeStanding.goalsAgainst += match.away[1];

    awayStanding.goalsFor += match.away[1];
    awayStanding.goalsAgainst += match.home[1];

    // handle draw/win/loss
    switch (matchOutcome) {
      case "draw":
        homeStanding.draw.push(match.away[0]);
        awayStanding.draw.push(match.home[0]);
        break;
      case "home":
        homeStanding.win.push(match.away[0]);
        awayStanding.loss.push(match.home[0]);
        break;
      case "away":
        awayStanding.win.push(match.home[0]);
        homeStanding.loss.push(match.away[0]);
    }

    return matchOutcome;
}



