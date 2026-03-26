import type { Score } from "./score.types"
import type { Team } from "./team.types"

export type MatchType = {
    homeTeam: Team,
    awayTeam: Team,
    score?: Score
}