


// kickoff: 50/50 who gets control

// loop design:

// breakout check: minutes = 90? -> exit

// defense phase team: rolls for defense
// success: gain control phase, apply defense phase, advance 1 minute
// fail: nothing happens

// control phase team: rolls for control
// success: gain shoot phase, apply block phase, advance 1 minute
// fail: nothing happens

// no shoot phase: advance 1 minute, continue loop

// shoot phase: rolls for shoot
// fail: gain defense phase, apply control phase, advance 1 minute, continue loop
// success: go to block phase

// block phase: rolls for block
// fail: +1 goals for shooter, for blocker, advance 1 minute, gain control phase, apply defense phase, continue loop
// success: gain defense phase, apply control phase, advance 1 minute, continue loop


// after loop:
// determine outcome of match and save to teams' win/loss/draw arrays
// add goal counts to correct teams' goalsFor & goalsAgainst properties
