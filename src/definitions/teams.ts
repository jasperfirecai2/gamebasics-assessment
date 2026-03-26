import { Aggressive, BreakAway, CounterAttack, Defensive } from "./strengths";
import type { Team } from "./types/team.types";
import { Advanced, BallWatching, Cautious, Drained } from "./weaknesses";

export const TeamA = {
    name: "Agitated team", // Assumed unique
    description: "This team only knows how to attack. They'll keep going for shots on goal. to their credit, they're quite accurate",
    strengths: [Aggressive], // What is this team good at (beating)
    weaknesses: [Advanced], // What can an enemy team target with their strength?
    winOdds: 50 // The base rate of winning (a game/an event/etc)
} as Team

export const TeamB = {
    name: "Ballsy Team",
    description: "This team likes to play with risky strategies but doesn't see success in that often.",
    strengths: [BreakAway],
    weaknesses: [BallWatching],
    winOdds: 40
} as Team

export const TeamC = {
    name: "Control Team",
    description: "Having trained on effective strategies this team feels confident against offensive teams. But they havent quite thought of how to take initiative.",
    strengths: [CounterAttack],
    weaknesses: [Cautious],
    winOdds: 45
} as Team

export const TeamD = {
    name: "Down-to-earth Team",
    description: "This well-trained team in a strong defensive formation does good against most teams. But it takes a lot of energy to stop sneaky plays effectively.",
    strengths: [Defensive],
    weaknesses: [Drained],
    winOdds: 50
} as Team