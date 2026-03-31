import StandingRow from './StandingRow';
import { defaultSortRule } from './sortStandings';
import { Standing } from '../../definitions/standing';

export interface IOverviewProps {
  standings: Standing[]
}

export default function Overview ({standings}: IOverviewProps) {

  const sortedStandings = standings
  .toSorted(defaultSortRule) // Sort with our custom sort rules
  .toReversed() // Reverse order, we want LARGEST 'values' first

  return (
    <table className='w-full mx-auto mt-6 border-2 border-theme border-collapse bg-theme-light'>
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
        {sortedStandings.map((standing, index) => 
          <StandingRow standing={standing} position={index+1} key={standing.team.name}/>
        )}
      </tbody>
    </table>
  );
}
