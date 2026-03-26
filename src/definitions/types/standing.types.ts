import type { Team } from "./team.types"

export type StandingType = {
  team: Team, // Assumed unique
  played?: number, // How many games were played?
  win?: Team[], // Which teams did this team win against?
  draw?: Team[], // Which teams did this team draw against?
  loss?: Team[], // Which teams did this team lose against?
  goalsFor?: number, // How many goals were scored by this team in total
  goalsAgainst?: number, // How many goals were scored against this team in total
  goalDifference: number // How many more goals were scored by versus against this team
  points?: number // How many points does this team have in the standings
}