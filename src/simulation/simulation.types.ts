
import { type Phase } from "../definitions/types/phase.types";
import type { TeamType } from "../definitions/types/team.types"

export interface TeamTracker {
    team: TeamType,
    goals: number
}

export interface MatchSimulation {
    minute: number
    phaseLookup: Record<Phase, TeamTracker | undefined>
}