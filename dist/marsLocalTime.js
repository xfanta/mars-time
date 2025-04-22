/**
 * Converts Mars Sol Date (MSD) and longitude to Local Mean Solar Time (LMST).
 * @param msd Mars Sol Date
 * @param longitude East longitude in degrees (0–360°E)
 * @returns LMST in HH:MM:SS format
 */
export function getLMST(msd, longitude) {
    const lmst = (24 * ((msd + longitude / 360) % 1));
    return decimalHoursToHMS(lmst);
}
/**
 * Converts Mars Sol Date (MSD) and longitude to Local True Solar Time (LTST).
 * This version includes a simplified equation of time.
 * @param msd Mars Sol Date
 * @param longitude East longitude in degrees (0–360°E)
 * @returns LTST in HH:MM:SS format
 */
export function getLTST(msd, longitude) {
    const lmstHours = 24 * ((msd + longitude / 360) % 1);
    const eqTime = marsEquationOfTime(msd); // in minutes
    const ltstHours = (lmstHours + eqTime / 60 + 24) % 24;
    return decimalHoursToHMS(ltstHours);
}
/**
 * Approximate Mars Equation of Time in minutes (based on Allison & McEwen 2000)
 * @param msd Mars Sol Date
 * @returns Equation of time in minutes
 */
function marsEquationOfTime(msd) {
    const marsYear = (msd - 44796.0) / 668.6;
    const M = (19.3871 + 0.52402075 * (msd - 44796.0)) % 360; // Mean anomaly
    const alphaFMS = (270.3863 + 0.5240384 * (msd - 44796.0)) % 360; // Fiction mean sun
    const EOT = 2.861 * Math.sin(deg2rad(2 * M))
        - 0.071 * Math.sin(deg2rad(4 * M))
        + 0.002 * Math.sin(deg2rad(6 * M))
        - (alphaFMS - M); // Simplified EOT formula
    return EOT;
}
/**
 * Converts decimal hours to HH:MM:SS time format.
 * @param hours Time in decimal hours
 * @returns Time as a formatted string
 */
function decimalHoursToHMS(hours) {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    const s = Math.floor(((hours - h) * 60 - m) * 60);
    return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
}
/**
 * Converts degrees to radians.
 * @param deg Angle in degrees
 * @returns Angle in radians
 */
function deg2rad(deg) {
    return deg * Math.PI / 180;
}
