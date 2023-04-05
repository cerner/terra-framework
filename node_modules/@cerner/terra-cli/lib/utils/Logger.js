const log = require('npmlog');

/**
 * Logger for use when running cli commands in terra
 */
class Logger {
  /**
   * Constructor for the logger
   * @param {string} options - the prefix to append to all logs used by this logger
   */
  constructor(options) {
    const { prefix } = options;

    this.prefix = prefix;
  }
}

/**
 * Loop through all the levels in the npm logger and sets them up for terra logging by:
 *
 * 1. Setting up a terra heading
 * 2. Attaching the prefix set up for the current logger
 */
Object.keys(log.levels).forEach((level) => {
  Logger.prototype[level] = function logMessage(...message) {
    const oldHeading = log.heading;
    log.heading = 'terra';
    log[level](this.prefix, ...message);
    log.heading = oldHeading;
  };
});

module.exports = Logger;
