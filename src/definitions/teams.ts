import { Aggressive, BreakAway, CounterAttack, Defensive } from "./strengths";
import type { Team } from "./types/team.types";
import { Advanced, BallWatching, Cautious, Drained } from "./weaknesses";

export const TeamA = {
    name: "Agitated team",
    description: "This team only knows how to attack. They'll keep going for shots on goal. to their credit, they're quite accurate",
    strength: Aggressive,
    weakness: Advanced,
    winOdds: 50
} as Team

export const TeamB = {
    name: "Ballsy Team",
    description: "This team likes to play with risky strategies and doesn't see success in that often.",
    strength: BreakAway,
    weakness: BallWatching,
    winOdds: 40
} as Team

export const TeamC = {
    name: "Control Team",
    description: "Having trained on effective strategies this team feels confident against offensive teams. But they havent quite thought of how to take initiative.",
    strength: CounterAttack,
    weakness: Cautious,
    winOdds: 45
} as Team

export const TeamD = {
    name: "Down-to-earth Team",
    description: "This well-trained team in a strong defensive formation does good against most teams. But it takes a lot of energy to stop sneaky plays effectively.",
    strength: Defensive,
    weakness: Drained,
    winOdds: 50
} as Team