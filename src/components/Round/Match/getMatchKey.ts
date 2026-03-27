import type { MatchType } from "../../../definitions/types/match.types";

export default function getMatchKey(match: MatchType) {
  const {home, away} = match;
  const [homeTeam, _homeScore] = home;
  const [awayTeam, _awayScore] = away;

  return `${homeTeam.name}-${awayTeam.name}` //assuming name is unique, this key is always unique
}