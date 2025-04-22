import { utcToMarsSolDate } from './marsSolDate';
import { deg2rad } from './utils';
/**
 * Calculates the heliocentric distance of Mars from the Sun in astronomical units (AU)
 * for a given Earth UTC date. Uses a simplified elliptical orbit model.
 *
 * @param date Earth UTC date
 * @returns Distance in AU
 */
export function getHeliocentricDistance(date) {
    const msd = utcToMarsSolDate(date);
    const meanAnomaly = (19.3871 + 0.52402075 * (msd - 44796.0)) % 360;
    const eccentricity = 0.0934;
    const semiMajorAxis = 1.523679; // in AU
    // Approximate heliocentric distance using the orbit equation:
    // r = a * (1 - e^2) / (1 + e * cos(θ))
    const theta = meanAnomaly; // approximate true anomaly
    const r = semiMajorAxis * (1 - eccentricity ** 2) / (1 + eccentricity * Math.cos(deg2rad(theta)));
    return r;
}
/**
 * Calculates the solar elevation angle above the horizon at a specific location on Mars.
 *
 * @param date Earth UTC date
 * @param lat Latitude on Mars in degrees (positive north)
 * @param lon Longitude on Mars in degrees (positive east)
 * @returns Solar elevation angle in degrees
 */
export function getSolarElevation(date, lat, lon) {
    const msd = utcToMarsSolDate(date);
    const lmst = (24 * ((msd + lon / 360) % 1)); // Local mean solar time in hours
    const hourAngle = 15 * (lmst - 12); // degrees from local noon
    const decl = getSolarDeclination(msd); // solar declination in degrees
    // Convert to radians
    const haRad = deg2rad(hourAngle);
    const latRad = deg2rad(lat);
    const decRad = deg2rad(decl);
    // Solar elevation formula
    const sinEl = Math.sin(latRad) * Math.sin(decRad) + Math.cos(latRad) * Math.cos(decRad) * Math.cos(haRad);
    return Math.asin(sinEl) * (180 / Math.PI);
}
/**
 * Calculates the solar azimuth angle (direction from north) at a specific location on Mars.
 *
 * @param date Earth UTC date
 * @param lat Latitude on Mars in degrees (positive north)
 * @param lon Longitude on Mars in degrees (positive east)
 * @returns Solar azimuth angle in degrees (0° = north, 90° = east)
 */
export function getSolarAzimuth(date, lat, lon) {
    const msd = utcToMarsSolDate(date);
    const lmst = (24 * ((msd + lon / 360) % 1)); // Local mean solar time in hours
    const hourAngle = 15 * (lmst - 12); // degrees
    const decl = getSolarDeclination(msd); // degrees
    // Convert to radians
    const haRad = deg2rad(hourAngle);
    const latRad = deg2rad(lat);
    const decRad = deg2rad(decl);
    // Solar azimuth formula
    const sinAz = Math.sin(haRad) * Math.cos(decRad);
    const cosAz = Math.cos(haRad) * Math.cos(decRad) * Math.sin(latRad) - Math.sin(decRad) * Math.cos(latRad);
    let az = Math.atan2(sinAz, cosAz) * (180 / Math.PI);
    az = (az + 360) % 360; // Normalize to 0–360°
    return az;
}
/**
 * Approximates the solar declination angle (angular distance of the Sun above the Martian equator)
 * based on Mars Sol Date. Uses Mars' axial tilt and orbital position (Ls).
 *
 * @param msd Mars Sol Date
 * @returns Declination angle in degrees
 */
function getSolarDeclination(msd) {
    const Ls = (270.3863 + 0.5240384 * (msd - 44796.0)) % 360; // Areocentric solar longitude
    const obliquity = 25.19; // Mars axial tilt in degrees
    return Math.asin(Math.sin(deg2rad(obliquity)) * Math.sin(deg2rad(Ls))) * (180 / Math.PI);
}
