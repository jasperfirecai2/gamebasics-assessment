import type { TeamType } from "../../definitions/types/team.types";

export interface ITeamProps {
  team: TeamType
}

export default function Team ({ team }: ITeamProps) {
  return (
    <li title={team.description} className="hover:text-gray-400 cursor-help">
      {team.name}
    </li>
  );
}
