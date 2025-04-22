/**
 * Converts a UTC date to Julian Date.
 * @param date UTC date
 * @returns Julian Date
 */
export function utcToJulianDate(date) {
    return date.getTime() / 86400000 + 2440587.5;
}
/**
 * Converts a Julian Date to a UTC date.
 * @param jd Julian Date
 * @returns UTC Date
 */
export function julianDateToUTC(jd) {
    const timestamp = (jd - 2440587.5) * 86400000;
    return new Date(timestamp);
}
