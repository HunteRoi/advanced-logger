import { BaseLogger } from './BaseLogger';
import { LogEventLevel } from "./LogEventLevel";
import { ILoggerOptions } from "./ILoggerOptions";
import { Stream } from './Stream';
export declare class DefaultLogger extends BaseLogger {
    private _options;
    /**
     * Creates an instance of Logger.
     * @param {ILoggerOptions} [{ minLevel = LogEventLevel.info, includeTimestamp = false }={ minLevel: LogEventLevel.info, includeTimestamp: false }]
     * @memberof Logger
     */
    constructor(stream: Stream, { minLevel, includeTimestamp }?: ILoggerOptions);
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
