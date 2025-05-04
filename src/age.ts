// src/age.ts

import { utcToMarsSolDate, marsSolDateToUTC } from "./marsSolDate";
import { MarsDate } from './marsDate';

/**
 * Returns the number of sols since the mission start date (on Mars).
 * @param date Current Earth date
 * @param missionStartDate Earth date of mission landing
 * @returns Sol number of the mission
 */
export function getSolOfMission(date: Date, missionStartDate: Date): number;
/**
 * Returns the number of sols since the start of a mission.
 * 
 * @param current MarsDate representing the current moment
 * @param missionStart MarsDate representing the mission start time
 * @returns Number of sols since mission start (can be fractional)
 */
export function getSolOfMission(current: MarsDate, missionStart: MarsDate): number;
export function getSolOfMission(first: Date | MarsDate, second: Date | MarsDate): number {
    if (first instanceof Date && second instanceof Date) {
        const msdNow = utcToMarsSolDate(first);
        const msdStart = utcToMarsSolDate(second);
        return Math.floor(msdNow - msdStart);
    } else if (first instanceof MarsDate && second instanceof MarsDate) {
        return first.msd - second.msd;
    }
    throw new Error('Invalid parameter types for getSolOfMission');
}
  
/**
   * Returns the Earth date of the N-th mission anniversary (sol).
   * @param missionStartDate Earth date of mission landing
   * @param sol Sol number (e.g., 100 for 100th sol)
   * @returns Earth date of the given sol anniversary
   */
  export function getAnniversary(missionStartDate: Date, sol: number): Date;
  /**
 * Returns the MSD of the given anniversary (e.g., 1st, 2nd, etc.) since mission start.
 * 
 * @param missionStart MarsDate representing the mission start
 * @param year Number of Mars years since start (e.g., 1 for first anniversary)
 * @returns MSD of the anniversary
 */
export function getAnniversary(missionStart: MarsDate, year: number): number;
export function getAnniversary(first: Date | MarsDate, second: number): Date | number {
    if (first instanceof Date) {
      const msdStart = utcToMarsSolDate(first);
      const msdTarget = msdStart + second;
      return marsSolDateToUTC(msdTarget);
    } else if (first instanceof MarsDate) {
      const MARTIAN_YEAR_SOLS = 668.6;
      return first.msd + MARTIAN_YEAR_SOLS * second;
    }
    throw new Error('Invalid parameter types for getAnniversary');
  }
  
/**
   * Returns the next sol anniversary date after today.
   * @param missionStartDate Earth date of mission landing
   * @returns Earth date of next sol anniversary (rounded to whole sol)
   */
  export function getNextAnniversary(missionStartDate: Date): Date;
  /**
 * Returns the MSD of the next anniversary after a given current date.
 * 
 * @param current Current MarsDate
 * @param missionStart MarsDate of mission start
 * @returns MSD of next Mars anniversary
 */
export function getNextAnniversary(current: MarsDate, missionStart: MarsDate): number;
export function getNextAnniversary(first: Date | MarsDate, second?: Date | MarsDate): Date | number {
    if (first instanceof Date) {
      const today = new Date();
      const solNow = getSolOfMission(today, first);
      return getAnniversary(first, solNow + 1);
    } else if (first instanceof MarsDate && second instanceof MarsDate) {
      const MARTIAN_YEAR_SOLS = 668.6;
      const solsSinceStart = first.msd - second.msd;
      const nextAnniv = Math.ceil(solsSinceStart / MARTIAN_YEAR_SOLS);
      return second.msd + MARTIAN_YEAR_SOLS * nextAnniv;
    }
    throw new Error('Invalid parameter types for getNextAnniversary');
  }