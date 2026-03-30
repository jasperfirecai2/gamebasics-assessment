export interface IAttributes { //re-used basic traits
    name: string, // Assumed unique
    description?: string,
}

export interface IStats {
  shoot: number, // shoot/2 + 50 = chance to shoot on goal
  control: number, // control - defend + 50 = chance to advance to shooting
  defend: number, // defend - control + 50 = chance to take control
  block: number // block/2 + 50 = chance to block goal
}

export type Stat = keyof IStats;