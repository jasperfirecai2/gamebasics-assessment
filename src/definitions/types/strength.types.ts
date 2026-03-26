import type { Weakness } from "./weakness.types"

export type Strength = {
    name: string,
    description?: string,
    targets: Weakness[] // Weaknesses this strength gains an advantage on
}