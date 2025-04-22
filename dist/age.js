import { utcToMarsSolDate, marsSolDateToUTC } from "./marsSolDate";
import { MarsDate } from './marsDate';
export function getSolOfMission(first, second) {
    if (first instanceof Date && second instanceof Date) {
        const msdNow = utcToMarsSolDate(first);
        const msdStart = utcToMarsSolDate(second);
        return Math.floor(msdNow - msdStart);
    }
    else if (first instanceof MarsDate && second instanceof MarsDate) {
        return first.msd - second.msd;
    }
    throw new Error('Invalid parameter types for getSolOfMission');
}
export function getAnniversary(first, second) {
    if (first instanceof Date) {
        const msdStart = utcToMarsSolDate(first);
        const msdTarget = msdStart + second;
        return marsSolDateToUTC(msdTarget);
    }
    else if (first instanceof MarsDate) {
        const MARTIAN_YEAR_SOLS = 668.6;
        return first.msd + MARTIAN_YEAR_SOLS * second;
    }
    throw new Error('Invalid parameter types for getAnniversary');
}
export function getNextAnniversary(first, second) {
    if (first instanceof Date) {
        const today = new Date();
        const solNow = getSolOfMission(today, first);
        return getAnniversary(first, solNow + 1);
    }
    else if (first instanceof MarsDate && second instanceof MarsDate) {
        const MARTIAN_YEAR_SOLS = 668.6;
        const solsSinceStart = first.msd - second.msd;
        const nextAnniv = Math.ceil(solsSinceStart / MARTIAN_YEAR_SOLS);
        return second.msd + MARTIAN_YEAR_SOLS * nextAnniv;
    }
    throw new Error('Invalid parameter types for getNextAnniversary');
}
