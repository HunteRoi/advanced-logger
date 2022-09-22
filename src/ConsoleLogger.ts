import { DefaultLogger } from './DefaultLogger';
import { ILoggerOptions } from './ILoggerOptions';
import { LogEventLevel } from './LogEventLevel';

/**
 * The console logger class
 *
 * @export
 * @class ConsoleLogger
 */
export class ConsoleLogger extends DefaultLogger {
    constructor({ minLevel = LogEventLevel.info, includeTimestamp = false }: ILoggerOptions = { minLevel: LogEventLevel.info, includeTimestamp: false }) {
        super({ write: console.log }, { minLevel, includeTimestamp });
    }
}
