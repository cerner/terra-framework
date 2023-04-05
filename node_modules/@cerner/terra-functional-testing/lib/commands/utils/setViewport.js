const {
  Logger
} = require('@cerner/terra-cli');
const {
  TERRA_VIEWPORTS
} = require('../../constants');
const setViewportSize = require('./setViewportSize');
const logger = new Logger({
  prefix: '[terra-functional-testing:setViewport]'
});

/**
 * Sets the dimensions of the current window to the viewport size.
 * @param {string} viewport - The viewport name.
 */
const setViewport = viewport => {
  if (!viewport || !TERRA_VIEWPORTS[viewport]) {
    logger.error(`Unsupported viewport supplied to setViewport. "${viewport}" is not a Terra supported viewport.`);
    return;
  }
  const terraViewport = TERRA_VIEWPORTS[viewport];
  setViewportSize(terraViewport);
};
module.exports = setViewport;