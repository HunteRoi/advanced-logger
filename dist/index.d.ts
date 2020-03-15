export declare enum LogEventLevel {
    off = 0,
    fatal = 1,
    error = 3,
    warning = 7,
    info = 15,
    debug = 31,
    verbose = 63
}
interface LoggerOptions {
    minLevel: LogEventLevel;
    includeTimestamp: boolean;
}
export declare class Logger {
    private _options;
    constructor({ minLevel, includeTimestamp }: LoggerOptions);
    /**
     *
     *
     * @private
     * @param {string} message
     * @param {LogEventLevel} level
     * @param {boolean} [includeTimestamp]
     * @memberof Logger
     */
    log(message: string, level: LogEventLevel, includeTimestamp?: boolean): void;
    /**
     *
     *
     * @private
     * @param {string} message
     * @param {LoggerOptions} localOptions
     * @memberof Logger
     */
    log(message: string, localOptions: LoggerOptions): void;
    /**
     *
     *
     * @param {string} message
     * @memberof Logger
     */
    fatal: (message: string) => void;
    /**
     *
     *
     * @param {string} message
     * @memberof Logger
     */
    error: (message: string) => void;
    /**
     *
     *
     * @param {string} message
     * @memberof Logger
     */
    warn: (message: string) => void;
    /**
     *
     *
     * @param {string} message
     * @memberof Logger
     */
    info: (message: string) => void;
    /**
     *
     *
     * @param {string} message
     * @memberof Logger
     */
    debug: (message: string) => void;
    /**
     *
     *
     * @param {string} message
     * @memberof Logger
     */
    verbose: (message: string) => void;
}
declare const _default: {
    LogEventLevel: typeof LogEventLevel;
    Logger: typeof Logger;
};
export default _default;
