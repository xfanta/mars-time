import { MarsDate } from './marsDate';
/**
 * Approximates the distance between Earth and Mars in AU for a given date.
 * Based on heliocentric circular orbit model.
 * @param date Earth UTC date
 * @returns Distance in AU
 */
export declare function getDistanceBetweenEarthAndMars(date: Date): number;
/**
 * Calculates the light time delay between Earth and Mars in seconds.
 * @param date Earth UTC date
 * @returns Time delay in seconds
 */
export declare function getLightDelay(date: Date): number;
/**
 * Estimates one-way light delay between Earth and Mars in minutes.
 *
 * @param marsDate MarsDate object
 * @returns Light delay in minutes (approximate)
 */
export declare function getLightDelayFromMarsDate(marsDate: MarsDate): number;
