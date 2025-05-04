// src/marsSolDate.ts

import { utcToJulianDate } from "./julian";

const JD_UNIX_EPOCH = 2440587.5;
const MSD_OFFSET = 2405522.0028779;
const SECONDS_IN_DAY = 86400;
const MARS_SOL_IN_SECONDS = 88775.244;

/**
 * Converts UTC date to Mars Sol Date (MSD).
 * @param date UTC date
 * @returns Mars Sol Date (MSD)
 */
export function utcToMarsSolDate(date: Date): number {
  const jd = utcToJulianDate(date);
  return (jd - MSD_OFFSET) * (SECONDS_IN_DAY / MARS_SOL_IN_SECONDS);
}

/**
 * Converts Mars Sol Date (MSD) to UTC date.
 * @param msd Mars Sol Date
 * @returns UTC Date
 */
export function marsSolDateToUTC(msd: number): Date {
  const jd = msd * (MARS_SOL_IN_SECONDS / SECONDS_IN_DAY) + MSD_OFFSET;
  return new Date((jd - JD_UNIX_EPOCH) * SECONDS_IN_DAY * 1000);
}

/**
 * Returns Martian Coordinated Time (MTC) in HH:MM:SS format.
 * @param msd Mars Sol Date
 * @returns MTC string
 */
export function getMartianCoordinatedTime(msd: number): string {
  const mtc = (24 * msd) % 24;
  const hours = Math.floor(mtc);
  const minutes = Math.floor((mtc - hours) * 60);
  const seconds = Math.floor(((mtc - hours) * 60 - minutes) * 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}