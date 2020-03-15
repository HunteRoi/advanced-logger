import chalk from 'chalk';
import moment from 'moment';

export enum LogEventLevel {
    off = 0,
    fatal = 1 << 0,
    error = fatal | 1 << 1,
    warning = error | 1 << 2,
    info = warning | 1 << 3,
    debug = info | 1 << 4,
    verbose = debug | 1 << 5
}

interface LoggerOptions {
    minLevel: LogEventLevel;
    includeTimestamp: boolean;
}

export class Logger {
    private _options: LoggerOptions;

    constructor({ minLevel = LogEventLevel.info, includeTimestamp = false }: LoggerOptions) {
        this._options = {
            minLevel: minLevel,
            includeTimestamp
        };
    }

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


    log(message: string, level: LogEventLevel | LoggerOptions, includeTimestamp?: boolean): void {
        if (typeof level !== 'number') {
            includeTimestamp = level.includeTimestamp;
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
     *
     *
     * @param {string} message
     * @memberof Logger
     */
    fatal = (message: string): void => this.log(message, LogEventLevel.fatal);

    /**
     *
     *
     * @param {string} message
     * @memberof Logger
     */
    error = (message: string): void => this.log(message, LogEventLevel.error);

    /**
     *
     *
     * @param {string} message
     * @memberof Logger
     */
    warn = (message: string): void => this.log(message, LogEventLevel.warning);

    /**
     *
     *
     * @param {string} message
     * @memberof Logger
     */
    info = (message: string): void => this.log(message, LogEventLevel.info);

    /**
     *
     *
     * @param {string} message
     * @memberof Logger
     */
    debug = (message: string): void => this.log(message, LogEventLevel.debug);

    /**
     *
     *
     * @param {string} message
     * @memberof Logger
     */
    verbose = (message: string): void => this.log(message, LogEventLevel.verbose);
}

const _default = { LogEventLevel, Logger };
export default _default;
