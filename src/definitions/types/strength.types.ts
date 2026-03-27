import type { IAttributes } from "./attribute.types"
import type { Weakness } from "./weakness.types"

export interface Strength extends IAttributes {
    targets: Weakness[] // Weaknesses this strength gains an advantage on
}

