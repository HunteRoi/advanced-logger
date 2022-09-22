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
import { DefaultLogger } from './DefaultLogger';
import { LogEventLevel } from './LogEventLevel';
/**
 * The console logger class
 *
 * @export
 * @class ConsoleLogger
 */
var ConsoleLogger = /** @class */ (function (_super) {
    __extends(ConsoleLogger, _super);
    function ConsoleLogger(_a) {
        var _b = _a === void 0 ? { minLevel: LogEventLevel.info, includeTimestamp: false } : _a, _c = _b.minLevel, minLevel = _c === void 0 ? LogEventLevel.info : _c, _d = _b.includeTimestamp, includeTimestamp = _d === void 0 ? false : _d;
        return _super.call(this, { write: console.log }, { minLevel: minLevel, includeTimestamp: includeTimestamp }) || this;
    }
    return ConsoleLogger;
}(DefaultLogger));
export { ConsoleLogger };
