export declare class MarsDate {
    private readonly earthDate;
    readonly msd: number;
    constructor(date?: Date);
    /**
     * Returns a MarsDate instance with current Earth time.
     */
    static now(): MarsDate;
    /**
     * Returns the sol (Mars Sol Date) as an integer (without decimals).
     */
    get sol(): number;
}
export declare class FutureMarsDate extends MarsDate {
    constructor(date?: Date);
    /**
     * Returns a FutureMarsDate instance with current Earth time shifted 100 years into the future.
     */
    static now(): FutureMarsDate;
    /**
     * Returns the sol (Mars Sol Date) as an integer (without decimals).
     */
    get sol(): number;
}
