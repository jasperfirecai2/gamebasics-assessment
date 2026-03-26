import type { Weakness } from "./weakness.types"

export type Strength = {
    name: string,
    description?: string,
    target: Weakness
    winImpact: number
}