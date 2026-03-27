import type { StandingType } from "../../definitions/types/standing.types";
import type { TeamType } from "../../definitions/types/team.types";

export function defaultSortRule (standingA: StandingType, standingB: StandingType) {
  // Points are most important for sorting
  if (standingA.points !== standingB.points) return sortByPoints(standingA.points ?? 0, standingB.points ?? 0); 
  // No games played means no other info either, keep sorting untouched
  if (!standingA.played && !standingB.played) return 0; 
  // If points are tied, check the goal difference next
  if (standingA.goalDifference !== standingB.goalDifference) return sortByGoalDifference(standingA.goalDifference ?? 0, standingB.goalDifference ?? 0); 
  // If goal difference is the same, compare the total goals scored
  if (standingA.goalsFor !== standingB.goalsFor) return sortByGoals(standingA.goalsFor ?? 0, standingB.goalsFor ?? 0);
  // If the goal difference and goals for are the same (e.g. both 0) check the goals against just in case. 
  if (standingA.goalsAgainst !== standingB.goalsAgainst) return sortByGoalsAgainst(standingA.goalsAgainst ?? 0, standingB.goalsAgainst ?? 0);
  // If either team has at least 1 win, check their head-to-head result (if it exists)
  if (standingA.win?.length || standingB.win?.length) return sortByFaceOff(standingA.win ?? [], standingA.team, standingB.win ?? [], standingB.team)
  // No info: don't sort
  return 0
};

function numericalSort(a: number, b:number) {
  return a - b;
}

export function sortByPoints(pointsA: number, pointsB: number) {
  return numericalSort(pointsA, pointsB);
}

export function sortByGoalDifference(goalDiffA: number, goalDiffB: number) {
  return numericalSort(goalDiffA, goalDiffB);
}

export function sortByGoals(goalsA: number, goalsB: number) {
  return numericalSort(goalsA, goalsB);
}

export function sortByGoalsAgainst(goalsAgainstA: number, goalsAgainstB: number) {
  return numericalSort(goalsAgainstA, goalsAgainstB) * -1; // note the -1 here since more goals against means lower position
}

export function sortByFaceOff(winsA: TeamType[], teamA: TeamType, winsB: TeamType[], teamB: TeamType) {
  if (winsA.some(beatenTeam => beatenTeam.name === teamB.name)) return 1; // If team A won against team B
  if (winsB.some(beatenTeam => beatenTeam.name === teamA.name)) return -1; // If team B won against team A
  return 0
}