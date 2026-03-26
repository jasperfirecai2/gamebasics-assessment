import type { Strength } from "./types/strength.types";
import { Advanced, BallWatching, Cautious, Drained } from "./weaknesses";

export const Aggressive = {
    name: "Aggressive",
    description: "Tries to advance and shoot on goal as often as possible",
    target: BallWatching,
    winImpact: 5
} as Strength

export const BreakAway = {
    name: "Breakaway",
    description: "Tries to force a player past the enemy defense.",
    target: Drained,
    winImpact: 20
} as Strength

export const CounterAttack = {
    name: "Counterattack",
    description: "Tries to stop attacks and punish players for being far advanced",
    target: Advanced,
    winImpact: 10
} as Strength

export const Defensive = {
    name: "Defensive",
    description: "Has most players on defense to not leave any gaps",
    target: Cautious,
    winImpact: 10
} as Strength