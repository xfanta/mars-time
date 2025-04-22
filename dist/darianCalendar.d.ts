export interface DarianDate {
    year: number;
    month: string;
    monthIndex: number;
    sol: number;
}
/**
 * Converts a UTC date to Darian calendar date.
 * @param date UTC date
 * @returns Darian date object
 */
export declare function getDarianDate(date: Date): DarianDate;
/**
 * Converts Mars Sol Date (MSD) to Darian calendar date.
 * @param msd Mars Sol Date
 * @returns Darian date object
 */
export declare function msdToDarianDate(msd: number): DarianDate;
/**
 * Converts a Darian calendar date to Mars Sol Date (MSD).
 * @param darian Darian date object
 * @returns Mars Sol Date
 */
export declare function darianDateToMSD(darian: DarianDate): number;
/**
 * Converts a Darian calendar date to UTC date.
 * @param darian Darian date object
 * @returns UTC date
 */
export declare function darianDateToUTC(darian: DarianDate): Date;
/**
 * Formats a Darian date object into a readable string.
 * @param darian Darian date object
 * @returns Formatted string e.g. "3 Vrishika, Year 35"
 */
export declare function formatDarianDate(darian: DarianDate): string;
