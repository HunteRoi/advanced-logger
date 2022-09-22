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
