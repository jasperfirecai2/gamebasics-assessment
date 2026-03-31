import type { Match } from "../definitions/match";
import { Round } from "../definitions/round";
import { getRandomInt } from "./random";

// Organize matches randomly into rounds of size 2 (2 matches each)
export function prepareRounds(matches: Match[]): Round[] {
  const matchesCopy = [...matches];
  const rounds = [] as Round[];
  while (matchesCopy.length > 0) { // loop until all matches are added
    // first randomly grab a match
    const randomIndex = getRandomInt(matchesCopy.length);
    const randomMatch = matchesCopy[randomIndex];
    //remove the match
    matchesCopy.splice(randomIndex, 1); 

    // This logic will have to be changed if round length changes from size 2
    const pairIndex = matchesCopy.findIndex((match) => 
      // find the first match whose teams aren't in the random match
      !randomMatch.teams.some(team => match.teams.includes(team))
    )

    const pairMatch = matchesCopy[pairIndex];
    // create a round with these 2 matches
    rounds.push(new Round([randomMatch, pairMatch]));
    //remove the match
    matchesCopy.splice(pairIndex, 1); 
  }
  return rounds;
}