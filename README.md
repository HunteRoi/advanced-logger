# advanced-logger

Advanced Logger is a logging framework using [Javascript's Console object](https://developer.mozilla.org/en-US/docs/Web/API/Console), [moment](https://www.npmjs.com/package/moment) and [chalk](https://www.npmjs.com/package/chalk) libraries to log strings to your console.

[![npm](https://img.shields.io/npm/v/@hunteroi/advanced-logger.svg)](https://www.npmjs.com/package/@hunteroi/advanced-logger)

## Usage

This library can be used within Javascript and Typescript applications.
```ts
// Javascript

const { ConsoleLogger } = require('@hunteroi/advanced-logger');

const log = new ConsoleLogger();


// Typescript

import { ConsoleLogger } from '@hunteroi/advanced-logger';

const log = new ConsoleLogger();
```

## Installation

**advanced-logger** can be found on [npm](https://www.npmjs.com/package/@hunteroi/advanced-logger). Run the following:
    
    yarn add @hunteroi/advanced-logger

## Configuration

**advanced-logger** provides a constructor with a `LoggerOptions` parameter. It supports the following properties:

| Key                | Type    | Description                                                                                     | Default |
| ------------------ | ------- | ----------------------------------------------------------------------------------------------- | ------- |
| `includeTimestamp` | boolean | If `true`, timestamp will be included in the message that is written to the console.            | `false` |
| `minLevel`         | LogEventLevel  | The minimum level for which events with specified level or higher will be output to the console | `info`  |

```js
const log = new ConsoleLogger({ includeTimestamp: true });
```

### Log Levels

There are 6 log levels available by default, in addition to a setting to disable logging completely.
In decreasing order of severity (with descriptions borrowed from [Seq](https://github.com/serilog/serilog/wiki/Writing-Log-Events#log-event-levels)):

| Label     | Description                                                                                        | Bitfield |
| --------- | -------------------------------------------------------------------------------------------------- | -------- |
| `off`     | When the minimum level is set to this, nothing will be logged.                                     | 0        |
| `fatal`   | Critical errors causing complete failure of the application.                                       | 1        |
| `error`   | Indicates failures within the application or connected systems.                                    | 3        |
| `warning` | Indicators of possible issues or service/functionality degradation.                                | 7        |
| `info`    | Events of interest or that have relevance to outside observers (default).                          | 15       |
| `debug`   | Internal control flow and diagnostic state dumps to facilitate pinpointing of recognised problems. | 31       |
| `verbose` | Tracing information and debugging minutiae; generally only switched on in unusual situations.      | 63       |

The log levels can also be represented as bitfields, and each log level also includes any levels of higher severity.
For example, `warning` will also allow events of the `error` level through, but block `info`,
`debug` and `verbose`.

The Logger object contains shorthand methods for logging to each level.

```js
log.fatal('some fatal logging');
log.error('some error logging');
log.warn('some warning logging');
log.info('some info logging');
log.debug('some debug logging');
log.verbose('some verbose logging');
```
