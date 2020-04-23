/**
 * The log event level
 *
 * @export
 * @enum {number}
 */
export declare enum LogEventLevel {
    off = 0,
    fatal = 1,
    error = 3,
    warning = 7,
    info = 15,
    debug = 31,
    verbose = 63
}
/**
 * The logger options
 *
 * @interface ILoggerOptions
 */
export interface ILoggerOptions {
    minLevel: LogEventLevel;
    includeTimestamp: boolean;
}
/**
 * The logger class
 *
 * @export
 * @class Logger
 */
export declare class Logger {
    private _options;
    constructor({ minLevel, includeTimestamp }: ILoggerOptions);
    /**
     * Log a message to the console at the provided `level`. Include the timestamp if `includeTimestamp` is set.
     *
     * @param {string} message the message to log
     * @param {LogEventLevel} level the level to log the message at
     * @param {boolean} [includeTimestamp] whether to log the message with the timestamp or not. Defaults to false.
     * @memberof Logger
     */
    log(message: string, level: LogEventLevel, includeTimestamp?: boolean): void;
    /**
     * Log a message to the console based on the provided `localOptions`
     *
     * @param {string} message the message to log
     * @param {ILoggerOptions} localOptions - the local options which are used by the logger
     * @memberof Logger
     */
    log(message: string, localOptions: ILoggerOptions): void;
    /**
     * Logs a fatal error to the console.
     * When it occurs, it is good practice to kill the process afterwards.
     *
     * @param {string} message
     * @memberof Logger
     */
    fatal: (message: string) => void;
    /**
     * Logs an error to the console
     *
     * @param {string} message
     * @memberof Logger
     */
    error: (message: string) => void;
    /**
     * Logs a warning to the console
     *
     * @param {string} message
     * @memberof Logger
     */
    warn: (message: string) => void;
    /**
     * Logs an information to the console
     *
     * @param {string} message
     * @memberof Logger
     */
    info: (message: string) => void;
    /**
     * Logs debug information to the console.
     *
     * @param {string} message
     * @memberof Logger
     */
    debug: (message: string) => void;
    /**
     * Logs everything in the console.
     * Called verbose because it can be quite spammy.
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
