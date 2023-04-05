const {
  chrome,
  firefox,
  ie
} = require('../capabilities');

/**
 * Determines the browser capabilities for the WebDriver session.
 * @param {string|array} browsers - A string or array containing a list of browser names. (chrome, firefox, ie)
 * @param {boolean} isGridEnabled - Whether the WebDriver session is running against the remote selenium grid.
 * @returns {array} - An array of browser capabilities.
 */
const getCapabilities = (browsers, isGridEnabled) => {
  const capabilities = [];
  if (!browsers || browsers.length === 0) {
    // Enable chrome as the default browser.
    capabilities.push(chrome);

    // Enable all supported grid browsers by default.
    if (isGridEnabled) {
      capabilities.push(firefox, ie);
    }
  } else {
    if (browsers.indexOf('chrome') > -1) {
      capabilities.push(chrome);
    }
    if (browsers.indexOf('firefox') > -1) {
      capabilities.push(firefox);
    }
    if (browsers.indexOf('ie') > -1 && isGridEnabled) {
      capabilities.push(ie);
    }
  }

  // Randomize the browser order.
  return capabilities.sort(() => 0.5 - Math.random());
};
module.exports = getCapabilities;