import type { IResult, StandingType } from '../../definitions/types/standing.types';
import Standing from './Standing';
import { calculatePoints } from '../../definitions/points';
import { defaultSortRule } from './sortStandings';

export interface IOverviewProps {
  results: IResult[]
}

export default function Overview ({results}: IOverviewProps) {

  const calculatedStandings = results.map(result => {
    const newStanding = {...result} as StandingType;
    newStanding.goalDifference = (result.goalsFor ?? 0) - (result.goalsAgainst ?? 0);
    newStanding.played = (result.win?.length ?? 0) + (result.draw?.length ?? 0) + (result.loss?.length ?? 0);
    newStanding.points = calculatePoints(newStanding);
    return newStanding
  })
  .toSorted(defaultSortRule) // Sort with our custom sort rules
  .toReversed() // Reverse order, we want LARGEST 'values' first

  return (
    <table className='max-w-full min-w-10/12 mx-auto mt-6 border-2 border-theme border-collapse bg-theme-light'>
      <thead className=''>
        <tr className='*:p-2 border-b border-theme'>
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
      <tbody className='*:border-b *:border-theme'>
        {calculatedStandings.map((standing, index) => 
          <Standing standing={standing} position={index+1} key={standing.team.name}/>
        )}
      </tbody>
    </table>
  );
}
