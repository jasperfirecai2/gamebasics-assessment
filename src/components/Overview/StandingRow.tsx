//import { useState } from 'react';
import type { StandingType } from "../../definitions/types/standing.types";

export interface IStandingRowProps {
  standing: StandingType,
  position: number
}

export default function StandingRow ({position, standing}: IStandingRowProps) {

  //const [persistentPosition, setPersistentPosition] = useState(position); TODO if custom sorting is allowed we can't assume position = index+1. will need a 'reset' mechanism

  return (
    <tr className={`*:py-2 text-lg ${(position > 2 && standing.played) ? "text-red-700" : "text-black"}`}>
      <td className="text-xl">{position}.</td>
      <td className="text-xl">{standing.team.name}</td>
      <td>{standing.played ?? 'X'}</td>
      <td>{standing.win?.length ?? 'X'}</td>
      <td>{standing.draw?.length ?? 'X'}</td>
      <td>{standing.loss?.length ?? 'X'}</td>
      <td>{standing.goalsFor ?? 'X'}</td>
      <td>{standing.goalsAgainst ?? 'X'}</td>
      <td>{standing.goalDifference}</td>
      <td className="font-bold">{standing.points}</td>
    </tr>
  );
}
