const accessibility = require('./accessibility');
const screenshot = require('./screenshot');

/**
 * An assertion method to assert the page is accessible and the screenshot comparison result is within
 * the mismatch tolerance.
 *
 * This should be used within a Mocha `it` block.
 * @param {string} [testName] - the required test case name.
 * @param {Object} [options] - the test options
 * @param {Object} [options.rules] - the axe rules to use to assert accessibility.
 * @param {number} [options.mismatchTolerance] - the mismatch tolerance for the screenshot comparison.
 * @param {string} [options.selector] - the element selector to use for the screenshot comparison.
 */
const element = (testName, options = {}) => {
  if (!testName || typeof testName !== 'string' || testName.length === 0) {
    throw new Error('[terra-functional-testing:element] Terra.validate.element requires a unique test name as the first argument.');
  }
  const {
    rules,
    mismatchTolerance,
    selector
  } = options;
  accessibility({
    rules
  });
  screenshot(testName, {
    mismatchTolerance,
    selector
  });
};
module.exports = element;