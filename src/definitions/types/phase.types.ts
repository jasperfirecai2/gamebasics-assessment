export const Phases = {
  Block: 0,
  Defense: 1,
  Control: 2,
  Shoot: 3
} as const;

export type Phase = typeof Phases[keyof typeof Phases];