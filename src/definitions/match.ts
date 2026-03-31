import { Team } from "./team";
import type { MatchType } from "./types/match.types";


export class Match implements MatchType {
  home;
  away;

  constructor (homeTeam: Team, awayTeam: Team) {
    this.home = [homeTeam, 0] as [Team, number]
    this.away = [awayTeam, 0] as [Team, number]
  }

  get teams() {
    return [this.home[0], this.away[0]]
  }

  get homeTeam() {
    return this.home[0]
  }

  get awayTeam() {
    return this.away[0]
  }

  get homeScore() {
    return this.home[1];
  }

  set homeScore(score: number) {
    this.home[1] = score;
  }
  
  get awayScore() {
    return this.away[1];
  }

  set awayScore(score: number) {
    this.away[1] = score;
  }
}