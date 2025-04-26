# Age Functions Documentation

This document provides an overview of the functions available in the `age.ts` file, along with examples of their usage.

---

## `getSolOfMission`

**Description:**  
Returns the number of sols since the mission start date on Mars.

**Overloads:**  
1. `getSolOfMission(date: Date, missionStartDate: Date): number`  
   - **Parameters:**
     - `date: Date` – Current Earth date.
     - `missionStartDate: Date` – Earth date of mission landing.
   - **Returns:**  
     - `number` – Sol number of the mission.

2. `getSolOfMission(current: MarsDate, missionStart: MarsDate): number`  
   - **Parameters:**
     - `current: MarsDate` – MarsDate representing the current moment.
     - `missionStart: MarsDate` – MarsDate representing the mission start time.
   - **Returns:**  
     - `number` – Number of sols since mission start (can be fractional).

**Example:**
```typescript
import { getSolOfMission } from './age';
import { MarsDate } from './marsDate';

const missionStart = new Date("2023-02-18T00:00:00Z");
const current = new Date("2025-04-22T00:00:00Z");
const sol = getSolOfMission(current, missionStart);
console.log(`Sol of mission: ${sol}`);

const marsStart = new MarsDate(missionStart);
const marsCurrent = new MarsDate(current);
const marsSol = getSolOfMission(marsCurrent, marsStart);
console.log(`Sol of mission (MarsDate): ${marsSol}`);
```

---

## `getAnniversary`

**Description:**  
Returns the Earth date or Mars Sol Date (MSD) of a mission anniversary.

**Overloads:**  
1. `getAnniversary(missionStartDate: Date, sol: number): Date`  
   - **Parameters:**
     - `missionStartDate: Date` – Earth date of mission landing.
     - `sol: number` – Sol number (e.g., 100 for 100th sol).
   - **Returns:**  
     - `Date` – Earth date of the given sol anniversary.

2. `getAnniversary(missionStart: MarsDate, year: number): number`  
   - **Parameters:**
     - `missionStart: MarsDate` – MarsDate representing the mission start.
     - `year: number` – Number of Mars years since start (e.g., 1 for first anniversary).
   - **Returns:**  
     - `number` – MSD of the anniversary.

**Example:**
```typescript
import { getAnniversary } from './age';
import { MarsDate } from './marsDate';

const missionStart = new Date("2023-02-18T00:00:00Z");
const solAnniversary = getAnniversary(missionStart, 100);
console.log(`100th sol anniversary: ${solAnniversary}`);

const marsStart = new MarsDate(missionStart);
const marsAnniversary = getAnniversary(marsStart, 1);
console.log(`1st Mars year anniversary MSD: ${marsAnniversary}`);
```

---

## `getNextAnniversary`

**Description:**  
Returns the next sol anniversary date after today.

**Overloads:**  
1. `getNextAnniversary(missionStartDate: Date): Date`  
   - **Parameters:**
     - `missionStartDate: Date` – Earth date of mission landing.
   - **Returns:**  
     - `Date` – Earth date of the next sol anniversary (rounded to whole sol).

2. `getNextAnniversary(current: MarsDate, missionStart: MarsDate): number`  
   - **Parameters:**
     - `current: MarsDate` – Current MarsDate.
     - `missionStart: MarsDate` – MarsDate of mission start.
   - **Returns:**  
     - `number` – MSD of the next Mars anniversary.

**Example:**
```typescript
import { getNextAnniversary } from './age';
import { MarsDate } from './marsDate';

const missionStart = new Date("2023-02-18T00:00:00Z");
const nextAnniversary = getNextAnniversary(missionStart);
console.log(`Next sol anniversary: ${nextAnniversary}`);

const marsStart = new MarsDate(missionStart);
const marsCurrent = MarsDate.now();
const marsNextAnniversary = getNextAnniversary(marsCurrent, marsStart);
console.log(`Next Mars year anniversary MSD: ${marsNextAnniversary}`);
```

---

# Darian Calendar Functions Documentation

This document provides an overview of the functions available in the `darianCalendar.ts` file, along with examples of their usage.

---

## `getDarianDate`

**Description:**  
Converts a UTC date to a Darian calendar date.

**Parameters:**  
- `date: Date` – UTC date.

**Returns:**  
- `DarianDate` – Darian date object containing:
  - `year: number` – The year in the Darian calendar.
  - `month: string` – The name of the month.
  - `monthIndex: number` – The index of the month (0–23).
  - `sol: number` – The sol (day) of the month.

**Example:**
```typescript
import { getDarianDate } from './darianCalendar';

const date = new Date("2025-04-22T00:00:00Z");
const darianDate = getDarianDate(date);
console.log(`Darian Date: ${darianDate.sol} ${darianDate.month}, Year ${darianDate.year}`);
```

---

## `msdToDarianDate`

**Description:**  
Converts Mars Sol Date (MSD) to a Darian calendar date.

**Parameters:**  
- `msd: number` – Mars Sol Date.

**Returns:**  
- `DarianDate` – Darian date object.

**Example:**
```typescript
import { msdToDarianDate } from './darianCalendar';

const msd = 52000; // Example Mars Sol Date
const darianDate = msdToDarianDate(msd);
console.log(`Darian Date: ${darianDate.sol} ${darianDate.month}, Year ${darianDate.year}`);
```

---

## `darianDateToMSD`

**Description:**  
Converts a Darian calendar date to Mars Sol Date (MSD).

**Parameters:**  
- `darian: DarianDate` – Darian date object.

**Returns:**  
- `number` – Mars Sol Date.

**Example:**
```typescript
import { darianDateToMSD } from './darianCalendar';

const darianDate = {
  year: 35,
  month: "Vrishika",
  monthIndex: 23,
  sol: 3
};
const msd = darianDateToMSD(darianDate);
console.log(`Mars Sol Date: ${msd}`);
```

---

## `darianDateToUTC`

**Description:**  
Converts a Darian calendar date to a UTC date.

**Parameters:**  
- `darian: DarianDate` – Darian date object.

**Returns:**  
- `Date` – UTC date.

**Example:**
```typescript
import { darianDateToUTC } from './darianCalendar';

const darianDate = {
  year: 35,
  month: "Vrishika",
  monthIndex: 23,
  sol: 3
};
const utcDate = darianDateToUTC(darianDate);
console.log(`UTC Date: ${utcDate}`);
```

---

## `formatDarianDate`

**Description:**  
Formats a Darian date object into a readable string.

**Parameters:**  
- `darian: DarianDate` – Darian date object.

**Returns:**  
- `string` – Formatted string (e.g., "3 Vrishika, Year 35").

**Example:**
```typescript
import { formatDarianDate } from './darianCalendar';

const darianDate = {
  year: 35,
  month: "Vrishika",
  monthIndex: 23,
  sol: 3
};
const formattedDate = formatDarianDate(darianDate);
console.log(`Formatted Darian Date: ${formattedDate}`);
```

---

# Julian Date Functions Documentation

This document provides an overview of the functions available in the `julian.ts` file, along with examples of their usage.

---

## `utcToJulianDate`

**Description:**  
Converts a UTC date to Julian Date.

**Parameters:**  
- `date: Date` – UTC date.

**Returns:**  
- `number` – Julian Date.

**Example:**
```typescript
import { utcToJulianDate } from './julian';

const date = new Date("2025-04-22T00:00:00Z");
const julianDate = utcToJulianDate(date);
console.log(`Julian Date: ${julianDate}`);
```

---

## `julianDateToUTC`

**Description:**  
Converts a Julian Date to a UTC date.

**Parameters:**  
- `jd: number` – Julian Date.

**Returns:**  
- `Date` – UTC date.

**Example:**
```typescript
import { julianDateToUTC } from './julian';

const julianDate = 2460080.5; // Example Julian Date
const utcDate = julianDateToUTC(julianDate);
console.log(`UTC Date: ${utcDate}`);
```

---

# MarsDate Class Documentation

This document provides an overview of the `MarsDate` class available in the `marsDate.ts` file, along with examples of its usage.

---

## `MarsDate` Class

**Description:**  
Represents a date on Mars, including the Mars Sol Date (MSD) and the corresponding Earth date.

### Constructor

**Signature:**  
`constructor(date: Date = new Date())`

**Parameters:**  
- `date: Date` – Earth date (default is the current date).

**Description:**  
Initializes a `MarsDate` instance with the given Earth date and calculates the corresponding Mars Sol Date (MSD).

**Example:**
```typescript
import { MarsDate } from './marsDate';

const marsDate = new MarsDate(new Date("2025-04-22T00:00:00Z"));
console.log(`MSD: ${marsDate.msd}`);
```

---

### Static Method: `now`

**Description:**  
Returns a `MarsDate` instance representing the current Earth time.

**Signature:**  
`static now(): MarsDate`

**Returns:**  
- `MarsDate` – A `MarsDate` instance with the current Earth date and corresponding MSD.

**Example:**
```typescript
import { MarsDate } from './marsDate';

const currentMarsDate = MarsDate.now();
console.log(`Current MSD: ${currentMarsDate.msd}`);
```

## `sol` (Getter)

**Description:**  
Returns the sol (Mars Sol Date) as an integer, truncating any decimal places.

**Usage:**  
This getter provides a simplified way to retrieve the current sol without fractional values.

**Returns:**  
- `number` – The sol (Mars Sol Date) as an integer.

**Example:**
```typescript
import { MarsDate } from './marsDate';

const marsDate = MarsDate.now();
console.log(`Current MSD: ${marsDate.msd}`); // Full Mars Sol Date with decimals
console.log(`Current Sol: ${marsDate.sol}`); // Truncated sol as an integer
```

---

### Properties

1. **`earthDate`**  
   - **Type:** `Date`  
   - **Description:** The Earth date corresponding to this `MarsDate` instance.

2. **`msd`**  
   - **Type:** `number`  
   - **Description:** The Mars Sol Date (MSD) corresponding to the Earth date.

---

# Mars Local Time Functions Documentation

This document provides an overview of the functions available in the `marsLocalTime.ts` file, along with examples of their usage.

---

## `getLMST`

**Description:**  
Converts Mars Sol Date (MSD) and longitude to Local Mean Solar Time (LMST).

**Parameters:**  
- `msd: number` – Mars Sol Date.  
- `longitude: number` – East longitude in degrees (0–360°E).

**Returns:**  
- `string` – LMST in `HH:MM:SS` format.

**Example:**
```typescript
import { getLMST } from './marsLocalTime';

const msd = 52000; // Example Mars Sol Date
const longitude = 45.0; // 45° east longitude
const lmst = getLMST(msd, longitude);
console.log(`Local Mean Solar Time: ${lmst}`);
```

---

## `getLTST`

**Description:**  
Converts Mars Sol Date (MSD) and longitude to Local True Solar Time (LTST). This version includes a simplified equation of time.

**Parameters:**  
- `msd: number` – Mars Sol Date.  
- `longitude: number` – East longitude in degrees (0–360°E).

**Returns:**  
- `string` – LTST in `HH:MM:SS` format.

**Example:**
```typescript
import { getLTST } from './marsLocalTime';

const msd = 52000; // Example Mars Sol Date
const longitude = 45.0; // 45° east longitude
const ltst = getLTST(msd, longitude);
console.log(`Local True Solar Time: ${ltst}`);
```

---

## `marsEquationOfTime` (Internal Function)

**Description:**  
Calculates the approximate Mars Equation of Time (EOT) in minutes, based on Allison & McEwen 2000.

**Parameters:**  
- `msd: number` – Mars Sol Date.

**Returns:**  
- `number` – Equation of time in minutes.

---

## `decimalHoursToHMS` (Internal Function)

**Description:**  
Converts decimal hours to `HH:MM:SS` time format.

**Parameters:**  
- `hours: number` – Time in decimal hours.

**Returns:**  
- `string` – Time as a formatted string.

---

## `deg2rad` (Internal Function)

**Description:**  
Converts degrees to radians.

**Parameters:**  
- `deg: number` – Angle in degrees.

**Returns:**  
- `number` – Angle in radians.

---

# Mars Sol Date Functions Documentation

This document provides an overview of the functions available in the `marsSolDate.ts` file, along with examples of their usage.

---

## `utcToMarsSolDate`

**Description:**  
Converts a UTC date to Mars Sol Date (MSD).

**Parameters:**  
- `date: Date` – UTC date.

**Returns:**  
- `number` – Mars Sol Date (MSD).

**Example:**
```typescript
import { utcToMarsSolDate } from './marsSolDate';

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
import { marsSolDateToUTC } from './marsSolDate';

const msd = 52000; // Example Mars Sol Date
const date = marsSolDateToUTC(msd);
console.log(`UTC Date: ${date}`);
```

---

## `getMartianCoordinatedTime`

**Description:**  
Returns Martian Coordinated Time (MTC) in `HH:MM:SS` format.

**Parameters:**  
- `msd: number` – Mars Sol Date.

**Returns:**  
- `string` – MTC string in `HH:MM:SS` format.

**Example:**
```typescript
import { getMartianCoordinatedTime } from './marsSolDate';

const msd = 52000; // Example Mars Sol Date
const mtc = getMartianCoordinatedTime(msd);
console.log(`Martian Coordinated Time: ${mtc}`);
```

---

## Internal Helper: `pad`

**Description:**  
Pads a number with leading zeros to ensure it has at least two digits.

**Parameters:**  
- `n: number` – The number to pad.

**Returns:**  
- `string` – The padded number as a string.

---

# Planetary Functions Documentation

This document provides an overview of the functions available in the `planetary.ts` file, along with examples of their usage.

---

## `getDistanceBetweenEarthAndMars`

**Description:**  
Approximates the distance between Earth and Mars in astronomical units (AU) for a given date. This function uses a heliocentric circular orbit model.

**Parameters:**  
- `date: Date` – Earth UTC date.

**Returns:**  
- `number` – Distance between Earth and Mars in AU.

**Example:**
```typescript
import { getDistanceBetweenEarthAndMars } from './planetary';

const date = new Date("2025-04-22T00:00:00Z");
const distance = getDistanceBetweenEarthAndMars(date);
console.log(`Distance between Earth and Mars: ${distance} AU`);
```

---

## `getLightDelay`

**Description:**  
Calculates the light time delay between Earth and Mars in seconds.

**Parameters:**  
- `date: Date` – Earth UTC date.

**Returns:**  
- `number` – Light time delay in seconds.

**Example:**
```typescript
import { getLightDelay } from './planetary';

const date = new Date("2025-04-22T00:00:00Z");
const delay = getLightDelay(date);
console.log(`Light delay between Earth and Mars: ${delay} seconds`);
```

---

## `getLightDelayFromMarsDate`

**Description:**  
Estimates the one-way light delay between Earth and Mars in minutes, based on the MarsDate object.

**Parameters:**  
- `marsDate: MarsDate` – MarsDate object representing the current time on Mars.

**Returns:**  
- `number` – Light delay in minutes (approximate).

**Example:**
```typescript
import { MarsDate } from './marsDate';
import { getLightDelayFromMarsDate } from './planetary';

const marsDate = new MarsDate(new Date("2025-04-22T00:00:00Z"));
const delay = getLightDelayFromMarsDate(marsDate);
console.log(`Light delay from MarsDate: ${delay} minutes`);
```

---

## Internal Helper: `getPlanetAngle`

**Description:**  
Returns the approximate angular position of a planet in radians based on the date. This function uses a circular orbit approximation.

**Parameters:**  
- `date: Date` – Earth UTC date.  
- `orbitalPeriod: number` – Orbital period of the planet in days.

**Returns:**  
- `number` – Angular position of the planet in radians.

---

## Internal Helper: `dateToJulianDate`

**Description:**  
Converts a `Date` object to Julian Date.

**Parameters:**  
- `date: Date` – Earth UTC date.

**Returns:**  
- `number` – Julian Date.

---

# Solar Functions Documentation

This document provides an overview of the functions available in the `solar.ts` file, along with examples of their usage.

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
import { getHeliocentricDistance } from './solar';

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
import { getSolarElevation } from './solar';

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
import { getSolarAzimuth } from './solar';

const date = new Date("2025-04-22T12:00:00Z");
const latitude = 10.0; // 10° north latitude
const longitude = 45.0; // 45° east longitude
const azimuth = getSolarAzimuth(date, latitude, longitude);
console.log(`Solar azimuth: ${azimuth}°`);
```

---

## Internal Helper: `getSolarDeclination`

**Description:**  
Approximates the solar declination angle (angular distance of the Sun above the Martian equator) based on Mars Sol Date. Uses Mars' axial tilt and orbital position (Ls).

**Parameters:**  
- `msd: number` – Mars Sol Date.

**Returns:**  
- `number` – Declination angle in degrees.

---

For further details or contributions, refer to the source code or the project repository.