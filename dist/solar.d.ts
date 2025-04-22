/**
 * Calculates the heliocentric distance of Mars from the Sun in astronomical units (AU)
 * for a given Earth UTC date. Uses a simplified elliptical orbit model.
 *
 * @param date Earth UTC date
 * @returns Distance in AU
 */
export declare function getHeliocentricDistance(date: Date): number;
/**
 * Calculates the solar elevation angle above the horizon at a specific location on Mars.
 *
 * @param date Earth UTC date
 * @param lat Latitude on Mars in degrees (positive north)
 * @param lon Longitude on Mars in degrees (positive east)
 * @returns Solar elevation angle in degrees
 */
export declare function getSolarElevation(date: Date, lat: number, lon: number): number;
/**
 * Calculates the solar azimuth angle (direction from north) at a specific location on Mars.
 *
 * @param date Earth UTC date
 * @param lat Latitude on Mars in degrees (positive north)
 * @param lon Longitude on Mars in degrees (positive east)
 * @returns Solar azimuth angle in degrees (0° = north, 90° = east)
 */
export declare function getSolarAzimuth(date: Date, lat: number, lon: number): number;
