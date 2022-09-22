import { Stream } from "./Stream";

/**
 * The base class for a logger.
 *
 * @export
 * @class BaseLogger
 */
export class BaseLogger {
    protected readonly stream: Stream;

    constructor(stream: Stream) {
        this.stream = stream;
    }
}
