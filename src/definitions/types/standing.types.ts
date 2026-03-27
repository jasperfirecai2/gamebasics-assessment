import type { TeamType } from "./team.types"


// Results from simulation
export interface IResult {
  team: TeamType, // Assumed unique
  win?: TeamType[], // Which teams did this team win against?
  draw?: TeamType[], // Which teams did this team draw against?
  loss?: TeamType[], // Which teams did this team lose against?
  goalsFor?: number, // How many goals were scored by this team in total
  goalsAgainst?: number, // How many goals were scored against this team in total
}


// Calculated values for standings display
export interface StandingType extends IResult {
  played?: number, // How many games were played?
  goalDifference?: number // How many more goals were scored by versus against this team
  points?: number // How many points does this team have in the standings
}