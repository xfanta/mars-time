// src/marsDate.ts

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

export class FutureMarsDate extends MarsDate {
  constructor(date: Date = new Date()) {
    // Add 100 Earth years (100 * 365.25 days) to the input date
    const futureDate = new Date(date.getTime() + 100 * 365.25 * 24 * 60 * 60 * 1000);
    super(futureDate);
  }

  /**
   * Returns a FutureMarsDate instance with current Earth time shifted 100 years into the future.
   */
  static now(): FutureMarsDate {
    return new FutureMarsDate(new Date());
  }

  /**
   * Returns the sol (Mars Sol Date) as an integer (without decimals).
   */
  get sol(): number {
    return Math.trunc(this.msd);
  }
}