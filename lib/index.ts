import chalk from 'chalk';
import moment from 'moment';

/**
 * The log event level
 *
 * @export
 * @enum {number}
 */
export enum LogEventLevel {
    off = 0,
    fatal = 1 << 0,
    error = fatal | 1 << 1,
    warning = error | 1 << 2,
    info = warning | 1 << 3,
    debug = info | 1 << 4,
    verbose = debug | 1 << 5
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
export class Logger {
    private _options: ILoggerOptions;

    constructor({ minLevel = LogEventLevel.info, includeTimestamp = false }: ILoggerOptions) {
        this._options = {
            minLevel: minLevel,
            includeTimestamp
        };
    }

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


    log(message: string, level: LogEventLevel | ILoggerOptions, includeTimestamp?: boolean): void {
        if (typeof level !== 'number') {
            includeTimestamp = level.includeTimestamp;
            level = level.minLevel;
        }

        if (this._options.minLevel === LogEventLevel.off || level > this._options.minLevel) return;

        const result = [];

        if (includeTimestamp || this._options.includeTimestamp) result.push(`[${moment().format('DD-MM-YYYY HH:mm:ss')}]`);

        switch (level) {
            case LogEventLevel.fatal:
                result.push(chalk.black.bgWhite('FATAL'));
                break;
            case LogEventLevel.error:
                result.push(chalk.bgRed('ERROR'));
                break;
            case LogEventLevel.warning:
                result.push(chalk.black.bgYellow('WARNING'));
                break;
            case LogEventLevel.info:
                result.push(chalk.bgBlue('INFO'));
                break;
            case LogEventLevel.debug:
                result.push(chalk.green('DEBUG'));
                break;
            case LogEventLevel.verbose:
                result.push(chalk.black.bgGreen('VERBOSE'));
                break;

            default: throw new TypeError('Logger type must be either fatal, error, warning, info, website, debug, verbose or log.');
        }

        result.push(message);

        return console.log(result.join(' '));
    };

    /**
     * Logs a fatal error to the console. 
     * When it occurs, it is good practice to kill the process afterwards.
     *
     * @param {string} message
     * @memberof Logger
     */
    fatal = (message: string): void => this.log(message, LogEventLevel.fatal);

    /**
     * Logs an error to the console
     * 
     * @param {string} message
     * @memberof Logger
     */
    error = (message: string): void => this.log(message, LogEventLevel.error);

    /**
     * Logs a warning to the console
     *
     * @param {string} message
     * @memberof Logger
     */
    warn = (message: string): void => this.log(message, LogEventLevel.warning);

    /**
     * Logs an information to the console
     *
     * @param {string} message
     * @memberof Logger
     */
    info = (message: string): void => this.log(message, LogEventLevel.info);

    /**
     * Logs debug information to the console.
     *
     * @param {string} message
     * @memberof Logger
     */
    debug = (message: string): void => this.log(message, LogEventLevel.debug);

    /**
     * Logs everything in the console.
     * Called verbose because it can be quite spammy.
     * 
     * @param {string} message
     * @memberof Logger
     */
    verbose = (message: string): void => this.log(message, LogEventLevel.verbose);
}

const _default = { LogEventLevel, Logger };
export default _default;
