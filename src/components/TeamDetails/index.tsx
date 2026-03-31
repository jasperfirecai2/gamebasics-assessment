import type { Team } from "../../definitions/team";
import Card from "../Card";


export interface ITeamDetailsProps {
  team: Team
}

export default function TeamDetails ({ team }: ITeamDetailsProps) {
  return (
    <Card className="w-49/100">
      <div className="*:hover:text-gray-400 *:cursor-help ms-2 space-x-2">
        <h4 title={team.description} className="text-xl font-semibold">{team.name}</h4>
        <span title="How likely a shot is to be aimed at the goal"><em>Shoot:</em> {team.shoot}</span>
        <span title="How likely a team will get into shooting range"><em>Control:</em> {team.control}</span>
        <span title="How likely a team is to steal control back"><em>Defend:</em> {team.defend}</span>
        <span title="How likely a shot will be blocked from scoring a goal"><em>Block:</em> {team.block}</span>
        <div title="What this team is good at"><em className="text-green-800">Strengths: </em></div>
        <ul>
          {team.strengths.map(strength => 
            <li key={strength.name} title={strength.description}>{strength.name}</li>
          )}
        </ul>
        <div title="What this team is vulnerable to"><em className="text-red-800">Weaknesses: </em></div>
        <ul>
          {team.weaknesses.map(weakness => 
            <li key={weakness.name} title={weakness.description}>{weakness.name}</li>
          )}
        </ul>
      </div>
    </Card>
  );
}
