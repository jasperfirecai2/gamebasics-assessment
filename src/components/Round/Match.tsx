import type { MatchType } from "../../definitions/types/match.types";
import './Match.css'

export interface IMatchProps {
  match: MatchType
}

export default function Match ({match}: IMatchProps) {
  const {homeTeam, awayTeam, score} = match;
  
  return (
    <tr>
      <td>{homeTeam.name}</td>
      <td className="font-bold">{score ? `${score.home} - ${score.away}` : 'X - X'}</td>
      <td>{awayTeam.name}</td>
    </tr>
  );
}
