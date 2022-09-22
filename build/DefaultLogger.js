var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import chalk from 'chalk';
import moment from 'moment';
import { BaseLogger } from './BaseLogger';
import { LogEventLevel } from "./LogEventLevel";
var DefaultLogger = /** @class */ (function (_super) {
    __extends(DefaultLogger, _super);
    /**
     * Creates an instance of Logger.
     * @param {ILoggerOptions} [{ minLevel = LogEventLevel.info, includeTimestamp = false }={ minLevel: LogEventLevel.info, includeTimestamp: false }]
     * @memberof Logger
     */
    function DefaultLogger(stream, _a) {
        var _b = _a === void 0 ? { minLevel: LogEventLevel.info, includeTimestamp: false } : _a, _c = _b.minLevel, minLevel = _c === void 0 ? LogEventLevel.info : _c, _d = _b.includeTimestamp, includeTimestamp = _d === void 0 ? false : _d;
        var _this = _super.call(this, stream) || this;
        /**
         * Logs a fatal error to the console.
         * When it occurs, it is good practice to kill the process afterwards.
         *
         * @param {string} message
         * @memberof Logger
         */
        _this.fatal = function (message) { return _this.log(message, LogEventLevel.fatal); };
        /**
         * Logs an error to the console
         *
         * @param {string} message
         * @memberof Logger
         */
        _this.error = function (message) { return _this.log(message, LogEventLevel.error); };
        /**
         * Logs a warning to the console
         *
         * @param {string} message
         * @memberof Logger
         */
        _this.warn = function (message) { return _this.log(message, LogEventLevel.warning); };
        /**
         * Logs an information to the console
         *
         * @param {string} message
         * @memberof Logger
         */
        _this.info = function (message) { return _this.log(message, LogEventLevel.info); };
        /**
         * Logs debug information to the console.
         *
         * @param {string} message
         * @memberof Logger
         */
        _this.debug = function (message) { return _this.log(message, LogEventLevel.debug); };
        /**
         * Logs everything in the console.
         * Called verbose because it can be quite spammy.
         *
         * @param {string} message
         * @memberof Logger
         */
        _this.verbose = function (message) { return _this.log(message, LogEventLevel.verbose); };
        _this._options = {
            minLevel: minLevel,
            includeTimestamp: includeTimestamp
        };
        return _this;
    }
    DefaultLogger.prototype.log = function (message, level, includeTimestamp) {
        if (typeof level !== 'number') {
            includeTimestamp = level.includeTimestamp;
            level = level.minLevel;
        }
        if (this._options.minLevel === LogEventLevel.off || level > this._options.minLevel)
            return;
        var result = [];
        if (includeTimestamp || this._options.includeTimestamp)
            result.push("[".concat(moment().format('DD-MM-YYYY HH:mm:ss'), "]"));
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
        return this.stream.write(result.join(' '));
    };
    ;
    return DefaultLogger;
}(BaseLogger));
export { DefaultLogger };
