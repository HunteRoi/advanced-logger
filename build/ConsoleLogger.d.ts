import { DefaultLogger } from './DefaultLogger';
import { ILoggerOptions } from './ILoggerOptions';
/**
 * The console logger class
 *
 * @export
 * @class ConsoleLogger
 */
export declare class ConsoleLogger extends DefaultLogger {
    constructor({ minLevel, includeTimestamp }?: ILoggerOptions);
}
