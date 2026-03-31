import Overview from "./components/Overview";
import RoundCard from "./components/Round";
import TeamDetails from "./components/TeamDetails";
import { use, useState } from "react";
import { prepareGame } from "./simulation/prepareGame";
import { allTeams } from "./definitions/teams";
import Button from "./components/Button";
import { simulate } from "./simulation";
import { StandingContext } from "./context/StandingContext";

export default function Game () {

  const {standings, updateStandingsByMatch, resetStandings} = use(StandingContext)

  //TODO: Should be a (mock) data request
  const [teams, _setTeams] = useState(() => allTeams)

  const [game, setGame] = useState(() => prepareGame(teams))

  const {rounds, matches} = game;

  const resetGame = () => {
    setGame(() => prepareGame(teams));
  }

  const simulateAll = () => {
    matches.forEach(match => {
      const outcome = simulate(match);
      updateStandingsByMatch(match, outcome);
    })
  }


  return (
    <div className='w-full h-full pt-7'>
      <h2 className="text-white font-outline">Meet the teams</h2>
      <section id="Teams" className="ps-4">
        <div className="flex row-auto items-start flex-wrap space-x-4 space-y-2">
          {allTeams.map(team => (
            <TeamDetails key={team.name} team={team}/>
          ))}
        </div>
      </section>
      <h2 className="text-white font-outline">Rounds</h2>
      <section id="Rounds" className="px-4 space-x-2 space-y-1">
        <Button onClick={() => resetGame()}>Randomize Rounds & Matches</Button>
        <Button onClick={() => simulateAll()}>Simulate Matches</Button>
        <div className="flex justify-center space-x-4">
          {rounds.map((round, index) => (
            <RoundCard key={round.id} index={index} matches={round.matches}/>
          ))}
        </div>
      </section>
      <h2 className="text-white font-outline">Overview</h2>
      <section id="overview" className="p-4 space-y-1">
        <Overview standings={standings}/>
        <Button onClick={() => resetStandings()}>Reset Standings</Button>
      </section>
    </div>
  );
}
