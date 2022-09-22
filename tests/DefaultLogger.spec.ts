import chalk from 'chalk';

import { LogEventLevel } from '../src';
import { DefaultLogger } from '../src/DefaultLogger';

jest.mock('chalk', () => ({
    bgBlue: jest.fn(),
}));
const mockedChalk = chalk as jest.Mocked<typeof chalk>;

let messages: string[];
describe('Logger', () => {
    describe('log', () => {

        beforeEach(() => {
            messages = [];
            mockedChalk.bgBlue.mockReturnValueOnce('INFO');
        });

        it('should log given message based on given level', () => {
            const message = 'this is a message to log';
            const level = LogEventLevel.info;
            const logger = new DefaultLogger({ write: (msg: string) => messages.push(msg) });

            logger.log(message, level);

            expect(chalk.bgBlue).toBeCalled();
            expect(messages.length).toBe(1);
            expect(messages[0]).toMatch(`INFO ${message}`);
        });


        it('should log given message based on given level with timestamp', () => {
            const message = 'this is a message to log';
            const level = LogEventLevel.info;
            const logger = new DefaultLogger({ write: (msg: string) => messages.push(msg) }, { minLevel: LogEventLevel.debug, includeTimestamp: true });

            logger.log(message, level);

            expect(chalk.bgBlue).toBeCalled();
            expect(messages.length).toBe(1);
            expect(messages[0]).toMatch(new RegExp(`\\[\\d{2}-\\d{2}-\\d{4} \\d{2}:\\d{2}:\\d{2}\\] INFO ${message}`, 'g'));
        });
    });
});
