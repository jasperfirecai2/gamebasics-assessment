import type { TeamType } from "../../definitions/types/team.types";

export interface ITeamDetailsProps {
  team: TeamType
}

export default function TeamDetails ({ team }: ITeamDetailsProps) {
  return (
    <li title={team.description} className="hover:text-gray-400 cursor-help">
      {team.name}
    </li>
  );
}
