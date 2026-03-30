import { Team } from "./team";
import type { MatchType } from "./types/match.types";


export class Match implements MatchType {
  home;
  away;

  constructor (homeTeam: Team, awayTeam: Team) {
    this.home = [homeTeam, 0] as [Team, number]
    this.away = [awayTeam, 0] as [Team, number]
  }
}