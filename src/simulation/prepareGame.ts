import type { Team } from "../definitions/team";
import { prepareMatches } from "./prepareMatches";
import { prepareRounds } from "./prepareRounds";

export function prepareGame(teams: Team[]) {
  const matches = prepareMatches(teams);
  const rounds = prepareRounds(matches);
  return {matches, rounds}
}