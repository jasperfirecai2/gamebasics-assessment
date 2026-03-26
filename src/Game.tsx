import Round from "./components/Round";
import { TeamA, TeamB, TeamC, TeamD } from "./definitions/teams";
import type { RoundType } from "./definitions/types/round.types";
import {v4 as uuidv4} from 'uuid';

export default function Game () {

  const rounds = [
    {
      matches: [
        {homeTeam: TeamA, awayTeam: TeamD},
        {homeTeam: TeamC, awayTeam: TeamB}
      ],
      id: uuidv4()
    },
    {
      matches: [
        {homeTeam: TeamB, awayTeam: TeamA},
        {homeTeam: TeamD, awayTeam: TeamC}
      ],
      id: uuidv4()
    },
    {
      matches: [
        {homeTeam: TeamD, awayTeam: TeamB},
        {homeTeam: TeamC, awayTeam: TeamA}
      ],
      id: uuidv4()
    }
  ] as RoundType[]

  return (
    <div className='w-full h-full pt-7'>
      <div id="Rounds" className="flex justify-center space-x-4">
        {rounds.map((round, index) => (
          <Round key={round.id} index={index} matches={round.matches}/>
        ))}
      </div>
      <div id="results">

      </div>
    </div>
  );
}
