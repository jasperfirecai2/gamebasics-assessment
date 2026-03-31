import { Match } from "../definitions/match";
import type { Team } from "../definitions/team";
import { d2 } from "./random";

export function prepareMatches(teams: Team[]): Match[] {
  const matches = [] as Match[];
  // for every unique combination of Team
  for (let i = 0; i < teams.length; i++) {
    for(let j = i + 1; j < teams.length; j++) {
      const coinflip = d2(); // Randomly choose which team is home and which is away
      if (coinflip === 1) {
        matches.push(new Match(teams[i], teams[j]));
      } else {
        matches.push(new Match(teams[j], teams[i]));
      }
    }
  }
  return matches;
}
