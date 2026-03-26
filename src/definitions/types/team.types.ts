import type { Strength } from "./strength.types"
import type { Weakness } from "./weakness.types"

export type Team = {
    name: string, // Assumed unique
    description: string,
    winOdds: number, // The base rate of winning (a game/an event/etc)
    strengths: Strength[], // What is this team good at (beating)
    weaknesses: Weakness[] // What can an enemy team target with their strength?
}