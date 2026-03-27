import type { MatchType } from "../../../definitions/types/match.types";
import './index.css'

export interface IMatchProps {
  match: MatchType
}

export default function Match ({match}: IMatchProps) {
  const {home, away} = match;
  const [homeTeam, homeScore] = home;
  const [awayTeam, awayScore] = away;
  
  return (
    <tr>
      <td>{homeTeam.name}</td>
      <td className="font-bold">{homeScore ?? 'X'} - {awayScore ?? 'X'}</td>
      <td>{awayTeam.name}</td>
    </tr>
  );
}
