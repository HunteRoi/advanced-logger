/**
 * An output stream
 *
 * @export
 * @interface Stream
 */
export interface Stream {
    write: (message: string) => void;
}
