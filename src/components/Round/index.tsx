import type { MatchType } from "../../definitions/types/match.types";
import Card from "../Card";
import Match from "./Match";

export interface IRoundProps {
  matches: MatchType[],
  index: number
}

export default function Round ({index, matches}: IRoundProps) {
  return (
    <Card>
      <h2 className="ms-2 mb-4">Round {index+1} </h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Home</th>
            <th className="text-white">Score</th>
            <th>Away</th>
          </tr>
        </thead>
        <tbody>
          {matches.map(match => 
            <Match key={`${match.homeTeam.name}-${match.awayTeam.name}`} match={match}/>
          )}
        </tbody>
      </table>
    </Card>
  );
}
