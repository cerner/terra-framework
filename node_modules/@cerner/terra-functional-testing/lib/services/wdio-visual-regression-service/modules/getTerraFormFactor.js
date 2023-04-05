"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _require = require('../../../constants'),
  TERRA_VIEWPORTS = _require.TERRA_VIEWPORTS;
var _require2 = require('../../../commands/utils'),
  getViewportSize = _require2.getViewportSize;

/**
 * Determines the Terra form factor for the current viewport size.
 *
 * @returns {String} - Terra form factor the current viewport falls under.
 */
function getTerraFormFactor() {
  var viewports = Object.entries(TERRA_VIEWPORTS);
  var currentWidth = getViewportSize().width;
  for (var index = 0; index < viewports.length; index += 1) {
    var _viewports$index = (0, _slicedToArray2.default)(viewports[index], 2),
      formFactor = _viewports$index[0],
      size = _viewports$index[1];
    if (currentWidth <= size.width) {
      return formFactor;
    }
  }
  return 'enormous';
}
module.exports = getTerraFormFactor;