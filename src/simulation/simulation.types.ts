
import type { Team } from "../definitions/team";
import { type Phase } from "../definitions/types/phase.types";

export type TeamLocation = "home" | "away"

export interface TeamTracker {
    team: Team,
    goals: number,
    type: TeamLocation
}

export type phaseLookupType = Record<Phase, TeamTracker | undefined>

export interface MatchSimulation {
    minute: number
    phaseLookup: phaseLookupType
}