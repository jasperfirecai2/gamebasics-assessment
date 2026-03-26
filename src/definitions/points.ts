import type { StandingType } from "./types/standing.types";

// Three-point system ruleset https://en.wikipedia.org/wiki/Three_points_for_a_win
export const pointValues = {
  win: 3,
  draw: 1,
  loss: 0
}

export function calculatePoints(standing: StandingType) {

  if (!standing.played) return 0;

  // check all outcomes in case the point rules need to be changed
  const points = 
    (standing.win?.length ?? 0) * pointValues.win + 
    (standing.draw?.length ?? 0) * pointValues.draw +
    (standing.loss?.length ?? 0) * pointValues.loss

  return points;
}