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
