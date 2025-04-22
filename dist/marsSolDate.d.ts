/**
 * Converts UTC date to Mars Sol Date (MSD).
 * @param date UTC date
 * @returns Mars Sol Date (MSD)
 */
export declare function utcToMarsSolDate(date: Date): number;
/**
 * Converts Mars Sol Date (MSD) to UTC date.
 * @param msd Mars Sol Date
 * @returns UTC Date
 */
export declare function marsSolDateToUTC(msd: number): Date;
/**
 * Returns Martian Coordinated Time (MTC) in HH:MM:SS format.
 * @param msd Mars Sol Date
 * @returns MTC string
 */
export declare function getMartianCoordinatedTime(msd: number): string;
