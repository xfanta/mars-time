import { MarsDate } from './marsDate';
/**
 * Approximate heliocentric orbital period in days
 */
const EARTH_ORBITAL_PERIOD = 365.25;
const MARS_ORBITAL_PERIOD = 686.98;

/**
 * Returns approximate angular position of a planet in radians based on date.
 * Uses a circular orbit approximation.
 */
function getPlanetAngle(date: Date, orbitalPeriod: number): number {
  const jd = dateToJulianDate(date);
  const daysSinceEpoch = jd - 2451545.0; // J2000.0
  const meanAnomaly = (2 * Math.PI * (daysSinceEpoch % orbitalPeriod)) / orbitalPeriod;
  return meanAnomaly;
}

/**
 * Approximates the distance between Earth and Mars in AU for a given date.
 * Based on heliocentric circular orbit model.
 * @param date Earth UTC date
 * @returns Distance in AU
 */
export function getDistanceBetweenEarthAndMars(date: Date): number {
  const angleEarth = getPlanetAngle(date, EARTH_ORBITAL_PERIOD);
  const angleMars = getPlanetAngle(date, MARS_ORBITAL_PERIOD);

  // Assume circular orbits: Earth = 1 AU, Mars ≈ 1.524 AU
  const earthX = Math.cos(angleEarth);
  const earthY = Math.sin(angleEarth);

  const marsX = 1.524 * Math.cos(angleMars);
  const marsY = 1.524 * Math.sin(angleMars);

  const dx = marsX - earthX;
  const dy = marsY - earthY;

  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Calculates the light time delay between Earth and Mars in seconds.
 * @param date Earth UTC date
 * @returns Time delay in seconds
 */
export function getLightDelay(date: Date): number {
  const AU_IN_KM = 149597870.7;
  const SPEED_OF_LIGHT_KM_S = 299792.458;

  const distanceAU = getDistanceBetweenEarthAndMars(date);
  const distanceKm = distanceAU * AU_IN_KM;

  return distanceKm / SPEED_OF_LIGHT_KM_S;
}

/**
 * Estimates one-way light delay between Earth and Mars in minutes.
 * 
 * @param marsDate MarsDate object
 * @returns Light delay in minutes (approximate)
 */
export function getLightDelayFromMarsDate(marsDate: MarsDate): number {
    const AU = 149597870.7; // km
    const c = 299792.458; // km/s
  
    // Use heliocentric distance of Mars and Earth to compute distance
    const marsDistanceAU = 1.523679; // average Mars distance
    const earthDistanceAU = 1.0; // average Earth distance
    const AUdiff = Math.abs(marsDistanceAU - earthDistanceAU);
  
    const kmDistance = AUdiff * AU;
    const seconds = kmDistance / c;
    return seconds / 60;
  }

/**
 * Converts a Date to Julian Date.
 * @param date Earth UTC date
 */
function dateToJulianDate(date: Date): number {
  return date.getTime() / 86400000 + 2440587.5;
}