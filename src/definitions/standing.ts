import { pointValues } from "./points";
import type { Team } from "./team";
import type { IResult, StandingType } from "./types/standing.types";
import type { TeamType } from "./types/team.types";

interface ShortConstructor {
  type: 'short'
  team: Team
}

interface LongConstructor extends IResult {
  type: 'long'
}

type standingInitType = ShortConstructor | LongConstructor

export class Standing implements StandingType {
  team; // Assumed unique
  win; // Which teams did this team win against?
  draw; // Which teams did this team draw against?
  loss; // Which teams did this team lose against?
  goalsFor; // How many goals were scored by this team in total
  goalsAgainst; // How many goals were scored against this team in total

  constructor (standingInit: standingInitType) {
    if (standingInit.type === "short") {
      const { team } = standingInit;
      this.team = team;
      this.win = [] as TeamType[];
      this.draw = [] as TeamType[];
      this.loss = [] as TeamType[];
      this.goalsFor = 0;
      this.goalsAgainst = 0;
    } else if (standingInit.type === "long") {
      const { team, win = [], draw = [], loss = [], goalsFor = 0, goalsAgainst = 0 } = standingInit;
      this.team = team;
      this.win = win;
      this.draw = draw;
      this.loss = loss;
      this.goalsFor = goalsFor;
      this.goalsAgainst = goalsAgainst;
    }
    else throw TypeError("init value is of invalid type");
  }

  get points() {
    
    if (!this.played) return 0;

    // check all outcomes in case the point rules need to be changed
    const points = 
      (this.win.length) * pointValues.win + 
      (this.draw.length) * pointValues.draw +
      (this.loss.length) * pointValues.loss

    return points;
  }

  get goalDifference() {
    return this.goalsFor - this.goalsAgainst;
  }

  get played() {
    return this.win.length + this.draw.length + this.loss.length;
  }

}