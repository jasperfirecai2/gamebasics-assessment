import type { IResult } from '../../definitions/types/standing.types';
import StandingRow from './StandingRow';
import { defaultSortRule } from './sortStandings';
import { Standing } from '../../definitions/standing';

export interface IOverviewProps {
  results: IResult[]
}

export default function Overview ({results}: IOverviewProps) {

  const calculatedStandings = results.map(result => {
    const newStanding = new Standing({...result, type: 'long'}); // TODO these shouldn't be NEW
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
          <StandingRow standing={standing} position={index+1} key={standing.team.name}/>
        )}
      </tbody>
    </table>
  );
}
