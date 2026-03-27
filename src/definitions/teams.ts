import { Aggressive, BreakAway, CounterAttack, Defensive } from "./strengths";
import type { TeamType } from "./types/team.types";
import { Advanced, BallWatching, Cautious, Drained } from "./weaknesses";

export const TeamA = {
    name: "Agitated team", // Assumed unique
    description: "This team only knows how to attack. They'll keep going for shots on goal. to their credit, they're quite accurate",
    strengths: [Aggressive], // What is this team good at (beating)
    weaknesses: [Advanced], // What can an enemy team target with their strength?
    shoot: 75,
    control: 60,
    defend: 50,
    block: 40
} as TeamType

export const TeamB = {
    name: "Ballsy Team",
    description: "This team likes to play with risky strategies but doesn't see success in that often.",
    strengths: [BreakAway],
    weaknesses: [BallWatching],
    shoot: 60,
    control: 75,
    defend: 40,
    block: 50
} as TeamType

export const TeamC = {
    name: "Counter Team",
    description: "Having trained on effective countering strategies this team feels confident against offensive teams. But they havent quite thought of how to take initiative.",
    strengths: [CounterAttack],
    weaknesses: [Cautious],
    shoot: 40,
    control: 60,
    defend: 75,
    block: 50
} as TeamType

export const TeamD = {
    name: "Down-to-earth Team",
    description: "This well-trained team in a strong defensive formation does good against most teams. But it takes a lot of energy to stop sneaky plays effectively.",
    strengths: [Defensive],
    weaknesses: [Drained],
    shoot: 50,
    control: 40,
    defend: 60,
    block: 75
} as TeamType

//TODO: should represent a fetch of data
export const allTeams = [TeamA, TeamB, TeamC, TeamD]