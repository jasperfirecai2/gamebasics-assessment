import type { Weakness } from "./types/weakness.types";

export const Advanced = {
    name: "Advanced",
    description: "Most players are far forward",
    disadvantage: 10 // How much the win rate should be impacted for having this weakness targeted
} as Weakness

export const BallWatching = {
    name: "Ball Watching",
    description: "So focused on the ball that enemy players get past them unseen",
    disadvantage: 5
} as Weakness

export const Cautious = {
    name: "Cautious",
    description: "Unlikely to attack first",
    disadvantage: 10
} as Weakness

export const Drained = {
    name: "Drained",
    description: "Tires quickly",
    disadvantage: 20
} as Weakness