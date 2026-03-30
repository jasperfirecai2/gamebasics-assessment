import type { Match } from "./match";
import type { RoundType } from "./types/round.types";
import {v4 as uuidv4} from 'uuid';
export class Round implements RoundType {
  readonly id = uuidv4();

  matches;

  constructor(matches: Match[]) {
    this.matches = matches;
  }
}