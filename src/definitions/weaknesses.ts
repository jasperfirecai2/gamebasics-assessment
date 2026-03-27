
import { BLOCK, CONTROL, DEFENSE, SHOOT } from "./phases";
import type { Weakness } from "./types/weakness.types";

export const Advanced = {
    name: "Advanced",
    description: "Most players are far forward",
    disadvantage: 10, // How much the success rate should be impacted for having this weakness targeted
    phases: [BLOCK] // In which phase(s) is this weakness active?
} as Weakness

export const BallWatching = {
    name: "Ball Watching",
    description: "So focused on the ball that enemy players get past them unseen",
    disadvantage: 5,
    phases: [CONTROL]
} as Weakness

export const Cautious = {
    name: "Cautious",
    description: "Unlikely to attack first",
    disadvantage: 10,
    phases: [SHOOT]
} as Weakness

export const Drained = {
    name: "Drained",
    description: "Tires quickly against relentless players",
    disadvantage: 20,
    phases: [DEFENSE]
} as Weakness