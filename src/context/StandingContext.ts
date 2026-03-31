import { createContext } from "react";
import { allTeams } from "../definitions/teams";
import { Standing } from "../definitions/standing";
import type { Team } from "../definitions/team";
import type { Match } from "../definitions/match";
import type { MatchOutcome } from "../simulation/simulation";

export const mapTeamsToStandings = (teams = allTeams) => 
  teams.map(team => new Standing({team, type: 'short'}));

export interface IStandingContext {
  standings: Standing[],
  resetStandings: (teams?: Team[]) => void,

  getStandingByTeam: (team: Team) => Standing,
  updateStandingsByMatch: (match: Match, matchOutcome: MatchOutcome) => void
}

// Context definition for type-safety. use providers for values only
export const StandingContext = createContext<IStandingContext>({
  standings: [], 
  resetStandings: () => {}, 
  getStandingByTeam: (team: Team) => {return new Standing({team, type: 'short'})},
  updateStandingsByMatch: (_m: Match, _mo: MatchOutcome) => {}
  
})
