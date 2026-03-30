import type { Stat } from "./types/attribute.types";
import type { Phase } from "./types/phase.types";
import type { Strength } from "./types/strength.types";
import type { TeamType } from "./types/team.types";

export class Team implements TeamType {
  name;
  description;
  strengths;
  weaknesses;
  shoot = 50;
  control = 50;
  defend = 50;
  block = 50;

  constructor(teamInit: TeamType) {
    this.name = teamInit.name;
    this.description = teamInit.description;
    this.strengths = teamInit.strengths;
    this.weaknesses = teamInit.weaknesses;
    this.shoot = teamInit.shoot;
    this.control = teamInit.control;
    this.defend = teamInit.defend;
    this.block = teamInit.block;
  }

  private getDisadvantage(enemyStrengths: Strength[], phase: Phase) {
    // find every weakness that's active in the current phase and is targeted by any enemy strength
    const targetedWeaknesses = this.weaknesses.filter(weakness => weakness.phases.includes(phase) && enemyStrengths.some(strength => strength.targets.includes(weakness)));
    // sum their disadvantages together
    return targetedWeaknesses.reduce((accumulator, currentWeakness) => accumulator + currentWeakness.disadvantage, 0);
  }

  getEffectiveShoot(enemyStrengths: Strength[], phase: Phase) {
    const totalDisadvantage = this.getDisadvantage(enemyStrengths, phase);
    return this.shoot - totalDisadvantage;
  }

  getEffectiveControl(enemyStrengths: Strength[], phase: Phase) {
    const totalDisadvantage = this.getDisadvantage(enemyStrengths, phase);
    return this.control - totalDisadvantage;
  }

  getEffectiveDefend(enemyStrengths: Strength[], phase: Phase) {
    const totalDisadvantage = this.getDisadvantage(enemyStrengths, phase);
    return this.defend - totalDisadvantage;
  }

  getEffectiveBlock(enemyStrengths: Strength[], phase: Phase) {
    const totalDisadvantage = this.getDisadvantage(enemyStrengths, phase);
    return this.block - totalDisadvantage;
  }

  getEffectiveStat(stat: Stat, phase: Phase, enemyStrengths: Strength[]): number {

    switch(stat) {
      case "shoot":
        return this.getEffectiveShoot(enemyStrengths, phase);
      case "control":
        return this.getEffectiveControl(enemyStrengths, phase);
      case "defend":
        return this.getEffectiveDefend(enemyStrengths, phase);
      case "block":
        return this.getEffectiveBlock(enemyStrengths, phase);
      default:
        throw new Error("stat type not found");
    };
  }

}