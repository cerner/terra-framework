const setViewport = require('./setViewport');
const setViewportSize = require('./setViewportSize');
const getViewportSize = require('./getViewportSize');

/**
 * Mocha `describe` block to run tests through a defined list of viewports.
 * This is intended to be used as an alias replacement for the root-level Mocha `describe`.
 * Note: If a FORM_FACTOR has been specified for the test run only that form factor will be run.
 * @param {string} title - The `describe` block title.
 * @param {string[]} viewports - A list of viewports. [tiny, small, medium, large, huge, enormous]
 * @param {function} - The block of tests to execute against each viewport.
 */
const describeViewports = (title, viewports, fn) => {
  const {
    formFactor
  } = global.Terra.serviceOptions;
  let previousViewportSize;
  viewports.forEach(viewport => {
    // If a form factor has been specified run only that form factor.
    if (formFactor && viewport !== formFactor) {
      return;
    }
    global.describe(`[${viewport}]`, () => {
      global.before(() => {
        // Store the original browser window size so it can be restored after the test has run.
        previousViewportSize = getViewportSize();
        setViewport(viewport);
      });
      global.describe(title, fn);
      global.after(() => {
        // Restore the browser window to the original size.
        setViewportSize(previousViewportSize);
      });
    });
  });
};
module.exports = describeViewports;