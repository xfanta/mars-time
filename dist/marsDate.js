// src/MarsDate.ts
import { utcToMarsSolDate } from './marsSolDate';
export class MarsDate {
    constructor(date = new Date()) {
        this.earthDate = date;
        this.msd = utcToMarsSolDate(date);
    }
    /**
     * Returns a MarsDate instance with current Earth time.
     */
    static now() {
        return new MarsDate(new Date());
    }
    /**
     * Returns the sol (Mars Sol Date) as an integer (without decimals).
     */
    get sol() {
        return Math.trunc(this.msd);
    }
}
export class FutureMarsDate extends MarsDate {
    constructor(date = new Date()) {
        // Add 100 Earth years (100 * 365.25 days) to the input date
        const futureDate = new Date(date.getTime() + 100 * 365.25 * 24 * 60 * 60 * 1000);
        super(futureDate);
    }
    /**
     * Returns a FutureMarsDate instance with current Earth time shifted 100 years into the future.
     */
    static now() {
        return new FutureMarsDate(new Date());
    }
    /**
     * Returns the sol (Mars Sol Date) as an integer (without decimals).
     */
    get sol() {
        return Math.trunc(this.msd);
    }
}
