/**
 * Converts Mars Sol Date (MSD) and longitude to Local Mean Solar Time (LMST).
 * @param msd Mars Sol Date
 * @param longitude East longitude in degrees (0–360°E)
 * @returns LMST in HH:MM:SS format
 */
export declare function getLMST(msd: number, longitude: number): string;
/**
 * Converts Mars Sol Date (MSD) and longitude to Local True Solar Time (LTST).
 * This version includes a simplified equation of time.
 * @param msd Mars Sol Date
 * @param longitude East longitude in degrees (0–360°E)
 * @returns LTST in HH:MM:SS format
 */
export declare function getLTST(msd: number, longitude: number): string;
