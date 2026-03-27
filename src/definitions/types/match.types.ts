import type { TeamType } from "./team.types"

type Score = number;

export interface MatchType {
    home: [TeamType, Score?]
    away: [TeamType, Score?]
}
