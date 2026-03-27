import type { IAttributes, IStats } from "./attribute.types"
import type { Strength } from "./strength.types"
import type { Weakness } from "./weakness.types"

export interface TeamType extends IAttributes, IStats { 
    strengths: Strength[], // What is this team good at (beating)
    weaknesses: Weakness[] // What can an enemy team target with their strength?
}