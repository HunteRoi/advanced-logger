"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var moment_1 = __importDefault(require("moment"));
/**
 * The log event level
 *
 * @export
 * @enum {number}
 */
var LogEventLevel;
(function (LogEventLevel) {
    LogEventLevel[LogEventLevel["off"] = 0] = "off";
    LogEventLevel[LogEventLevel["fatal"] = 1] = "fatal";
    LogEventLevel[LogEventLevel["error"] = 3] = "error";
    LogEventLevel[LogEventLevel["warning"] = 7] = "warning";
    LogEventLevel[LogEventLevel["info"] = 15] = "info";
    LogEventLevel[LogEventLevel["debug"] = 31] = "debug";
    LogEventLevel[LogEventLevel["verbose"] = 63] = "verbose";
})(LogEventLevel = exports.LogEventLevel || (exports.LogEventLevel = {}));
/**
 * The logger class
 *
 * @export
 * @class Logger
 */
var Logger = /** @class */ (function () {
    function Logger(_a) {
        var _this = this;
        var _b = _a.minLevel, minLevel = _b === void 0 ? LogEventLevel.info : _b, _c = _a.includeTimestamp, includeTimestamp = _c === void 0 ? false : _c;
        /**
         * Logs a fatal error to the console.
         * When it occurs, it is good practice to kill the process afterwards.
         *
         * @param {string} message
         * @memberof Logger
         */
        this.fatal = function (message) { return _this.log(message, LogEventLevel.fatal); };
        /**
         * Logs an error to the console
         *
         * @param {string} message
         * @memberof Logger
         */
        this.error = function (message) { return _this.log(message, LogEventLevel.error); };
        /**
         * Logs a warning to the console
         *
         * @param {string} message
         * @memberof Logger
         */
        this.warn = function (message) { return _this.log(message, LogEventLevel.warning); };
        /**
         * Logs an information to the console
         *
         * @param {string} message
         * @memberof Logger
         */
        this.info = function (message) { return _this.log(message, LogEventLevel.info); };
        /**
         * Logs debug information to the console.
         *
         * @param {string} message
         * @memberof Logger
         */
        this.debug = function (message) { return _this.log(message, LogEventLevel.debug); };
        /**
         * Logs everything in the console.
         * Called verbose because it can be quite spammy.
         *
         * @param {string} message
         * @memberof Logger
         */
        this.verbose = function (message) { return _this.log(message, LogEventLevel.verbose); };
        this._options = {
            minLevel: minLevel,
            includeTimestamp: includeTimestamp
        };
    }
    Logger.prototype.log = function (message, level, includeTimestamp) {
        if (typeof level !== 'number') {
            includeTimestamp = level.includeTimestamp;
            level = level.minLevel;
        }
        if (this._options.minLevel === LogEventLevel.off || level > this._options.minLevel)
            return;
        var result = [];
        if (includeTimestamp || this._options.includeTimestamp)
            result.push("[" + moment_1.default().format('DD-MM-YYYY HH:mm:ss') + "]");
        switch (level) {
            case LogEventLevel.fatal:
                result.push(chalk_1.default.black.bgWhite('FATAL'));
                break;
            case LogEventLevel.error:
                result.push(chalk_1.default.bgRed('ERROR'));
                break;
            case LogEventLevel.warning:
                result.push(chalk_1.default.black.bgYellow('WARNING'));
                break;
            case LogEventLevel.info:
                result.push(chalk_1.default.bgBlue('INFO'));
                break;
            case LogEventLevel.debug:
                result.push(chalk_1.default.green('DEBUG'));
                break;
            case LogEventLevel.verbose:
                result.push(chalk_1.default.black.bgGreen('VERBOSE'));
                break;
            default: throw new TypeError('Logger type must be either fatal, error, warning, info, website, debug, verbose or log.');
        }
        result.push(message);
        return console.log(result.join(' '));
    };
    ;
    return Logger;
}());
exports.Logger = Logger;
var _default = { LogEventLevel: LogEventLevel, Logger: Logger };
exports.default = _default;
