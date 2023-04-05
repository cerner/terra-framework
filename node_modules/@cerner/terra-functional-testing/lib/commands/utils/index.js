const cleanScreenshots = require('./cleanScreenshots');
const describeTests = require('./describeTests');
const describeViewports = require('./describeViewports');
const dispatchCustomEvent = require('./dispatchCustomEvent');
const eventEmitter = require('./eventEmitter');
const getViewports = require('./getViewports');
const getViewportSize = require('./getViewportSize');
const hideInputCaret = require('./hideInputCaret');
const setApplicationLocale = require('./setApplicationLocale');
const setViewport = require('./setViewport');
const setViewportSize = require('./setViewportSize');
const ScreenshotRequestor = require('./ScreenshotRequestor');
module.exports = {
  cleanScreenshots,
  describeTests,
  describeViewports,
  dispatchCustomEvent,
  eventEmitter,
  getViewports,
  getViewportSize,
  hideInputCaret,
  setApplicationLocale,
  setViewport,
  setViewportSize,
  ScreenshotRequestor
};