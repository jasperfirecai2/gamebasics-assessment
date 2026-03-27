import type { IAttributes } from "./attribute.types";
import type { Phase } from "./phase.types";

export interface Weakness extends IAttributes {
    disadvantage: number // How much the win rate should be impacted for having this weakness targeted
    phases: Phase[] // In which phases is this weakness active?
}