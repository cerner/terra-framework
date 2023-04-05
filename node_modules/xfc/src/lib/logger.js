/* eslint no-console: 0 */
export default {
  log: (...params) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(...params);
    }
  },

  warn: (...args) => console.warn(...args),
  error: (...args) => console.error(...args),
};
