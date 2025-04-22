import { MarsDate } from './marsDate';
/**
 * Returns the number of sols since the mission start date (on Mars).
 * @param date Current Earth date
 * @param missionStartDate Earth date of mission landing
 * @returns Sol number of the mission
 */
export declare function getSolOfMission(date: Date, missionStartDate: Date): number;
/**
 * Returns the number of sols since the start of a mission.
 *
 * @param current MarsDate representing the current moment
 * @param missionStart MarsDate representing the mission start time
 * @returns Number of sols since mission start (can be fractional)
 */
export declare function getSolOfMission(current: MarsDate, missionStart: MarsDate): number;
/**
   * Returns the Earth date of the N-th mission anniversary (sol).
   * @param missionStartDate Earth date of mission landing
   * @param sol Sol number (e.g., 100 for 100th sol)
   * @returns Earth date of the given sol anniversary
   */
export declare function getAnniversary(missionStartDate: Date, sol: number): Date;
/**
* Returns the MSD of the given anniversary (e.g., 1st, 2nd, etc.) since mission start.
*
* @param missionStart MarsDate representing the mission start
* @param year Number of Mars years since start (e.g., 1 for first anniversary)
* @returns MSD of the anniversary
*/
export declare function getAnniversary(missionStart: MarsDate, year: number): number;
/**
   * Returns the next sol anniversary date after today.
   * @param missionStartDate Earth date of mission landing
   * @returns Earth date of next sol anniversary (rounded to whole sol)
   */
export declare function getNextAnniversary(missionStartDate: Date): Date;
/**
* Returns the MSD of the next anniversary after a given current date.
*
* @param current Current MarsDate
* @param missionStart MarsDate of mission start
* @returns MSD of next Mars anniversary
*/
export declare function getNextAnniversary(current: MarsDate, missionStart: MarsDate): number;
