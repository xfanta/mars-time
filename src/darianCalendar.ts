import { utcToMarsSolDate, marsSolDateToUTC } from "./marsSolDate";

const DARIAN_MONTHS = [
  "Sagittarius", "Dhanus", "Capricornus", "Makara",
  "Aquarius", "Kumbha", "Pisces", "Mina",
  "Aries", "Mesha", "Taurus", "Vrishabha",
  "Gemini", "Mithuna", "Cancer", "Karka",
  "Leo", "Simha", "Virgo", "Kanya",
  "Libra", "Tula", "Scorpius", "Vrishika"
];

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
export function getDarianDate(date: Date): DarianDate {
  const msd = utcToMarsSolDate(date);
  return msdToDarianDate(msd);
}

/**
 * Converts Mars Sol Date (MSD) to Darian calendar date.
 * @param msd Mars Sol Date
 * @returns Darian date object
 */
export function msdToDarianDate(msd: number): DarianDate {
  const sols = Math.floor(msd);
  const year = Math.floor(sols / 668.6);
  const solOfYear = sols % 669;
  const monthIndex = Math.floor(solOfYear / 28) % 24;
  const sol = (solOfYear % 28) + 1;
  return {
    year: year + 1,
    month: DARIAN_MONTHS[monthIndex],
    monthIndex,
    sol
  };
}

/**
 * Converts a Darian calendar date to Mars Sol Date (MSD).
 * @param darian Darian date object
 * @returns Mars Sol Date
 */
export function darianDateToMSD(darian: DarianDate): number {
  const yearOffset = (darian.year - 1) * 668.6;
  const solOffset = darian.monthIndex * 28 + (darian.sol - 1);
  return yearOffset + solOffset;
}

/**
 * Converts a Darian calendar date to UTC date.
 * @param darian Darian date object
 * @returns UTC date
 */
export function darianDateToUTC(darian: DarianDate): Date {
  const msd = darianDateToMSD(darian);
  return marsSolDateToUTC(msd);
}

/**
 * Formats a Darian date object into a readable string.
 * @param darian Darian date object
 * @returns Formatted string e.g. "3 Vrishika, Year 35"
 */
export function formatDarianDate(darian: DarianDate): string {
  return `${darian.sol} ${darian.month}, Year ${darian.year}`;
}
