// src/MarsDate.ts
import { utcToMarsSolDate } from './marsSolDate';


export class MarsDate {
  private readonly earthDate: Date;
  public readonly msd: number;

  constructor(date: Date = new Date()) {
    this.earthDate = date;
    this.msd = utcToMarsSolDate(date);
  }

  /**
   * Returns a MarsDate instance with current Earth time.
   */
  static now(): MarsDate {
    return new MarsDate(new Date());
  }

  /**
   * Returns the sol (Mars Sol Date) as an integer (without decimals).
   */
  get sol(): number {
    return Math.trunc(this.msd);
  }
}