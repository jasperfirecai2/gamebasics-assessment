import Overview from "./components/Overview";
import Round from "./components/Round";
import { allTeams, TeamA, TeamB, TeamC, TeamD } from "./definitions/teams";
import type { RoundType } from "./definitions/types/round.types";
import {v4 as uuidv4} from 'uuid';
import type { IResult } from "./definitions/types/standing.types";
import Team from "./components/Team";

export default function Game () {

  // TODO: should come from (mock) data request
  const rounds = [
    {
      matches: [
        {home: [TeamA], away: [TeamD]},
        {home: [TeamC], away: [TeamB]},
      ],
      id: uuidv4()
    },
    {
      matches: [
        {home: [TeamB], away: [TeamA]},
        {home: [TeamD], away: [TeamC]},
      ],
      id: uuidv4()
    },
    {
      matches: [
        {home: [TeamD], away: [TeamB]},
        {home: [TeamC], away: [TeamA]},
      ],
      id: uuidv4()
    }
  ] as RoundType[]

  // TODO: should come from (mock) data request
  const results = [
    {
      team: TeamA,
      win: [TeamB],
      loss: [TeamC],
      draw: [TeamD],
      goalsFor: 10,
      goalsAgainst: 2
    },
    {
      team: TeamB,
      win: [TeamD],
      loss: [TeamA],
      draw: [TeamC],
      goalsFor: 2,
      goalsAgainst: 15
    },
    {
      team: TeamC,
      win: [TeamA],
      loss: [TeamD],
      draw: [TeamB],
      goalsFor: 5,
      goalsAgainst: 1
    },
    {
      team: TeamD,
      win: [TeamC],
      loss: [TeamB],
      draw: [TeamA],
      goalsFor: 2,
      goalsAgainst: 4
    }
  ] as IResult[]

  return (
    <div className='w-full h-full pt-7'>
      <h2 className="text-white font-outline ms-10">Meet the teams</h2>
      <section id="Teams" className="flex flex-col justify-center items-start ps-10 space-x-4">
        <ul>
        {allTeams.map(team => (
          <Team key={team.name} team={team}/>
        ))}
        </ul>
      </section>
      <h2 className="text-white font-outline ms-10">Rounds</h2>
      <section id="Rounds" className="flex justify-center space-x-4">
        {rounds.map((round, index) => (
          <Round key={round.id} index={index} matches={round.matches}/>
        ))}
      </section>
      <h2 className="text-white font-outline ms-10">Overview</h2>
      <section id="overview">
        <Overview results={results}/>
      </section>
    </div>
  );
}
