//import { useState } from 'react';
import type { StandingType } from "../../definitions/types/standing.types";

export interface IStandingProps {
  standing: StandingType,
  position: number
}

export default function Standing ({position, standing}: IStandingProps) {

  //const [persistentPosition, setPersistentPosition] = useState(position); TODO if custom sorting is allowed we can't assume position = index+1. will need a 'reset' mechanism

  return (
    <tr>
      <td>{position}.</td>
      <td>{standing.team.name}</td>
      <td>{standing.played ?? 'X'}</td>
      <td>{standing.win?.length ?? 'X'}</td>
      <td>{standing.draw?.length ?? 'X'}</td>
      <td>{standing.loss?.length ?? 'X'}</td>
      <td>{standing.goalsFor ?? 'X'}</td>
      <td>{standing.goalsAgainst ?? 'X'}</td>
      <td>{standing.goalDifference}</td>
      <td>{standing.points}</td>
    </tr>
  );
}
