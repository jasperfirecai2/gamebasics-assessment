import type { Strength } from "./strength.types"
import type { Weakness } from "./weakness.types"

export type Team = {
    name: string,
    description: string,
    winOdds: number,
    strength: Strength,
    weakness: Weakness
}