import type { MatchType } from "../../definitions/types/match.types";
import Card from "../Card";
import getMatchKey from "./Match/getMatchKey";
import Match from "./Match";

export interface IRoundProps {
  matches: MatchType[],
  index: number
}

export default function Round ({index, matches}: IRoundProps) {
  return (
    <Card>
      <h3 className="ms-2 mb-4">Round {index+1} </h3>
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th>Home</th>
            <th className="text-theme">Score</th>
            <th>Away</th>
          </tr>
        </thead>
        <tbody>
          {matches.map(match => 
            <Match key={getMatchKey(match)} match={match}/>
          )}
        </tbody>
      </table>
    </Card>
  );
}
