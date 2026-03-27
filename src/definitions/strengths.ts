import type { Strength } from "./types/strength.types";
import { Advanced, BallWatching, Cautious, Drained } from "./weaknesses";

export const Aggressive = {
    name: "Aggressive",
    description: "Tries to advance and shoot on goal as often as possible",
    targets: [BallWatching], // Weaknesses this strength gains an advantage on
} as Strength

export const BreakAway = {
    name: "Breakaway",
    description: "Tries to force a player past the enemy defense.",
    targets: [Drained],
} as Strength

export const CounterAttack = {
    name: "Counterattack",
    description: "Tries to stop attacks and punishes players for being far advanced",
    targets: [Advanced],
} as Strength

export const Defensive = {
    name: "Defensive",
    description: "Has most players on defense to not leave any gaps",
    targets: [Cautious],
} as Strength