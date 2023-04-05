const LOGGER_ENABLED = process.env.NODE_ENV !== 'production';
const NO_OP = () => {};

/* eslint-disable no-console */
const Logger = {
  info: LOGGER_ENABLED ? (...args) => console.info(...args) : NO_OP,
  warn: LOGGER_ENABLED ? (...args) => console.warn(...args) : NO_OP,
  error: (...args) => console.error(...args),
};
/* eslint-enable no-console */

const initializeLogger = ({ onInfo, onWarn, onError }) => {
  Logger.info = onInfo || Logger.info;
  Logger.warn = onWarn || Logger.warn;
  Logger.error = onError || Logger.error;
};

export default Logger;
export { initializeLogger };
