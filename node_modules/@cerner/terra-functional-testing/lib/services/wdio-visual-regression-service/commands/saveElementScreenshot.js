const lodashIsPlainObject = require('lodash.isplainobject');
const lodashIsString = require('lodash.isstring');
const lodashIsUndefined = require('lodash.isundefined');
const makeElementScreenshot = require('../modules/makeElementScreenshot');
const saveBase64Image = require('../utils/saveBase64Image');

/**
 * Captures and can save a screenshot of a given element if the element is within the viewport dimensions.
 * This will remove scroll bars, hide any elements specified in the options, then take the screenshot
 * before restoring the dom to it's original position and structure.
 *
 * @alias browser.checkElement
 * @param {string=} fileName - The filename to use to save the screenshot.
 * @param {string} elementSelector - The css selector of the element that should be captured in the screenshot.
 * @param {Object=} options - The screenshot capturing and comparison options.
 * @param {string[]} options.hide - The list of elements to set opacity 0 on to 'hide' from the dom when capturing the screenshot.
 * @param {string[]} options.remove - The list of elements to set display: none on to 'remove' from dom when capturing the screenshot.
 * @returns {String} - The base64 string of the screenshot image that was captured.
 */
// Note: function name must be async to signalize WebdriverIO that this function returns a promise
async function async(fileName, elementSelector, options) {
  /* eslint-disable no-param-reassign */
  if ((lodashIsString(fileName) || Array.isArray(fileName)) && lodashIsPlainObject(elementSelector) && lodashIsUndefined(options)) {
    options = elementSelector;
    elementSelector = fileName;
    fileName = undefined;
  } else if ((lodashIsString(fileName) || Array.isArray(fileName)) && lodashIsUndefined(elementSelector)) {
    elementSelector = fileName;
    fileName = undefined;
  }
  /* eslint-enable no-param-reassign */

  if (!(lodashIsString(elementSelector) || Array.isArray(elementSelector))) {
    throw new Error('Please pass a valid selector value to parameter elementSelector');
  }

  // make screenshot of area
  const base64Image = await makeElementScreenshot(this, elementSelector, options);
  if (typeof fileName !== 'undefined') {
    // store base64 image as real png
    await saveBase64Image(fileName, base64Image);
  }
  return base64Image;
}
module.exports = async;