# Mars-Time Library Documentation

This document provides an overview of all functions available in the `src` directory, along with examples of their usage.

---

## `getHeliocentricDistance`

**Description:**  
Calculates the heliocentric distance of Mars from the Sun in astronomical units (AU) for a given Earth UTC date. Uses a simplified elliptical orbit model.

**Parameters:**  
- `date: Date` – Earth UTC date.

**Returns:**  
- `number` – Distance in AU.

**Example:**
```typescript
const date = new Date("2025-04-22T00:00:00Z");
const distance = getHeliocentricDistance(date);
console.log(`Heliocentric distance: ${distance} AU`);
```

---

## `getSolarElevation`

**Description:**  
Calculates the solar elevation angle above the horizon at a specific location on Mars.

**Parameters:**  
- `date: Date` – Earth UTC date.
- `lat: number` – Latitude on Mars in degrees (positive for north).
- `lon: number` – Longitude on Mars in degrees (positive for east).

**Returns:**  
- `number` – Solar elevation angle in degrees.

**Example:**
```typescript
const date = new Date("2025-04-22T12:00:00Z");
const latitude = 10.0; // 10° north latitude
const longitude = 45.0; // 45° east longitude
const elevation = getSolarElevation(date, latitude, longitude);
console.log(`Solar elevation: ${elevation}°`);
```

---

## `getSolarAzimuth`

**Description:**  
Calculates the solar azimuth angle (direction from north) at a specific location on Mars.

**Parameters:**  
- `date: Date` – Earth UTC date.
- `lat: number` – Latitude on Mars in degrees (positive for north).
- `lon: number` – Longitude on Mars in degrees (positive for east).

**Returns:**  
- `number` – Solar azimuth angle in degrees (0° = north, 90° = east).

**Example:**
```typescript
const date = new Date("2025-04-22T12:00:00Z");
const latitude = 10.0; // 10° north latitude
const longitude = 45.0; // 45° east longitude
const azimuth = getSolarAzimuth(date, latitude, longitude);
console.log(`Solar azimuth: ${azimuth}°`);
```

---

## `getSolarDeclination`

**Description:**  
Approximates the solar declination angle (angular distance of the Sun above the Martian equator) based on Mars Sol Date (MSD). It uses Mars' axial tilt and orbital position (Ls).

**Parameters:**  
- `msd: number` – Mars Sol Date.

**Returns:**  
- `number` – Declination angle in degrees.

**Example:**
```typescript
const msd = 52000; // Example Mars Sol Date
const declination = getSolarDeclination(msd);
console.log(`Solar declination: ${declination}°`);
```

---

## `utcToMarsSolDate`

**Description:**  
Converts a UTC date to Mars Sol Date (MSD).

**Parameters:**  
- `date: Date` – UTC date.

**Returns:**  
- `number` – Mars Sol Date.

**Example:**
```typescript
const date = new Date("2025-04-22T00:00:00Z");
const msd = utcToMarsSolDate(date);
console.log(`Mars Sol Date: ${msd}`);
```

---

## `marsSolDateToUTC`

**Description:**  
Converts Mars Sol Date (MSD) to a UTC date.

**Parameters:**  
- `msd: number` – Mars Sol Date.

**Returns:**  
- `Date` – UTC date.

**Example:**
```typescript
const msd = 52000; // Example Mars Sol Date
const date = marsSolDateToUTC(msd);
console.log(`UTC date: ${date}`);
```

---

## `getMartianCoordinatedTime`

**Description:**  
Returns Martian Coordinated Time (MTC) in HH:MM:SS format.

**Parameters:**  
- `msd: number` – Mars Sol Date.

**Returns:**  
- `string` – MTC in HH:MM:SS format.

**Example:**
```typescript
const msd = 52000; // Example Mars Sol Date
const mtc = getMartianCoordinatedTime(msd);
console.log(`Martian Coordinated Time: ${mtc}`);
```

---

## `getDarianDate`

**Description:**  
Converts a UTC date to a Darian calendar date.

**Parameters:**  
- `date: Date` – UTC date.

**Returns:**  
- `DarianDate` – Darian date object.

**Example:**
```typescript
const date = new Date("2025-04-22T00:00:00Z");
const darianDate = getDarianDate(date);
console.log(`Darian Date: ${darianDate.year} ${darianDate.month} ${darianDate.sol}`);
```

---

## `getLMST`

**Description:**  
Converts Mars Sol Date (MSD) and longitude to Local Mean Solar Time (LMST).

**Parameters:**  
- `msd: number` – Mars Sol Date.
- `longitude: number` – East longitude in degrees (0–360°E).

**Returns:**  
- `string` – LMST in HH:MM:SS format.

**Example:**
```typescript
const msd = 52000; // Example Mars Sol Date
const longitude = 45.0; // 45° east longitude
const lmst = getLMST(msd, longitude);
console.log(`Local Mean Solar Time: ${lmst}`);
```

---

## `getLightDelay`

**Description:**  
Calculates the light time delay between Earth and Mars in seconds.

**Parameters:**  
- `date: Date` – Earth UTC date.

**Returns:**  
- `number` – Time delay in seconds.

**Example:**
```typescript
const date = new Date("2025-04-22T00:00:00Z");
const delay = getLightDelay(date);
console.log(`Light delay: ${delay} seconds`);
```

---

For further details or contributions, refer to the source code or the project repository.