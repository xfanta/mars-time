// src/utils.ts

/**
 * Converts degrees to radians.
 * Commonly used in trigonometric calculations involving angles.
 * 
 * @param deg Angle in degrees
 * @returns Angle in radians
 */
export function deg2rad(deg: number): number {
    return deg * Math.PI / 180;
  }

  /**
 * Returns the sol of the year (day number in the current Martian year) from Mars Sol Date (MSD).
 * @param msd Mars Sol Date
 * @returns Sol of the year (1–669)
 */
export function getSolOfYear(msd: number): number {
  const MARTIAN_YEAR_SOLS = 668.6; // Average number of sols in a Martian year
  const solOfYear = Math.floor(msd % MARTIAN_YEAR_SOLS) + 1; // Calculate sol of year (1-based index)
  return solOfYear;
}