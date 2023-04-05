const log = require('npmlog');

const Logger = require('../../../src/utils/Logger');

describe('Logger', () => {
  it('sets up logging for all log levels', () => {
    const logger = new Logger({ prefix: 'prefix' });

    Object.keys(log.levels).forEach((level) => {
      const oldLogFn = log[level];
      log[level] = jest.fn();

      logger[level](`test message for ${level}`);

      expect(log[level]).toHaveBeenCalledWith('prefix', `test message for ${level}`);

      log[level] = oldLogFn;
    });
  });
});
