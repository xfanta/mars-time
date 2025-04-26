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
