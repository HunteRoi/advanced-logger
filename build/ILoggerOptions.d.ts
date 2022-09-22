import { LogEventLevel } from "./LogEventLevel";
/**
 * The logger options
 *
 * @interface ILoggerOptions
 */
export interface ILoggerOptions {
    minLevel: LogEventLevel;
    includeTimestamp: boolean;
}
