const {
  Logger
} = require('@cerner/terra-cli');
const logger = new Logger({
  prefix: '[terra-functional-testing:hideInputCaret]'
});

/**
 * Hides the blinking input caret that appears within editable text areas to prevent inconsistent test failures.
 * @param {string} selector - The target element selector.
 */
const hideInputCaret = selector => {
  if (global.browser.$(selector).isExisting()) {
    global.browser.execute(`document.querySelector("${selector.replace(/"/g, '\\"')}").style.caretColor = "transparent";`);
  } else {
    logger.error(`No element could be found with the selector '${selector}'.`);
  }
};
module.exports = hideInputCaret;