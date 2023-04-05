/* global browser */

/**
 * Injects axe-core into the browser.
 * @param {Object} options - The axe configuration options.
 */
const injectAxe = options => {
  // eslint-disable-next-line global-require
  const {
    source
  } = require('axe-core/axe.min');
  browser.execute(`${source}\n ${options ? `axe.configure(${JSON.stringify(options)})` : ''}`);
};
module.exports = injectAxe;