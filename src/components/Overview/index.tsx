import type { StandingType } from '../../definitions/types/standing.types';
import Standing from './Standing';
import { calculatePoints } from '../../definitions/points';
import { useCallback } from 'react';

export interface IOverviewProps {
  standings: StandingType[]
}

export default function Overview ({standings}: IOverviewProps) {

  
  const defaultSortRule = useCallback((standingA: StandingType, standingB: StandingType) => {
    if ((standingA.points ?? 0) > (standingB.points ?? 0)) return 1; // Points are most important for sorting
    if (!standingA.played && !standingB.played) return 0; // No games played means no other info either, keep sorting untouched
    if (standingA.goalDifference > standingB.goalDifference) return 1; // If points are tied, check the goal difference next
    if ((standingA.goalsFor ?? 0) > (standingB.goalsFor ?? 0)) return 1; // If goal difference is the same, compare the total goals scored
    if ((standingA.goalsAgainst ?? 0) > (standingB.goalsAgainst ?? 0)) return -1; // If the goal difference and goals for are the same (e.g. both 0) check the goals against just in case. note the -1 here since more goals against means lower position
    if (standingA.win?.some(beatenTeam => beatenTeam.name === standingB.team.name)) return 1; // If team A won against team B
    if (standingB.win?.some(beatenTeam => beatenTeam.name === standingA.team.name)) return -1; // If team B won against team A
    return 0; //always return a number
  }, []);

  const calculatedStandings = standings.map(standing => {
    const newStanding = {...standing};
    newStanding.goalDifference = (standing.goalsFor ?? 0) - (standing.goalsAgainst ?? 0);
    newStanding.played = (standing.win?.length ?? 0) + (standing.draw?.length ?? 0) + (standing.loss?.length ?? 0);
    newStanding.points = calculatePoints(newStanding);
    return newStanding
  })
  .toSorted(defaultSortRule) // Sort with our custom sort rules
  .toReversed() // Reverse order, we want LARGEST 'values' first

  return (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Team</th>
          <th>Played</th>
          <th>Win</th>
          <th>Draw</th>
          <th>Loss</th>
          <th>For</th>
          <th>Against</th>
          <th>-/+</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {calculatedStandings.map((standing, index) => 
          <Standing standing={standing} position={index+1} key={standing.team.name}/>
        )}
      </tbody>
    </table>
  );
}
