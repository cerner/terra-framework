"use strict";

/**
 * Script to apply a negative 2D-translate transformation method to move the document from its current position
 * to the specified number of pixels horizontally and vertically.
 *
 * @param {number} x - The number of pixels moved along the horizontal axis from the current position.
 * @param {number} y - The number of pixels moved along the vertical axis from the current position.
 * @param {boolean} enabled - Whether or not the transform style should be applied.
 * @returns {undefined}
 */
function virtualScroll(x, y, enabled) {
  var xLength = x === 0 ? 0 : -1 * x;
  var yLength = y === 0 ? 0 : -1 * y;
  var translate = enabled ? 'none' : "translate(".concat(xLength, "px,").concat(yLength, "px)");
  var html = document.documentElement;
  html.style.webkitTransform = translate;
  html.style.mozTransform = translate;
  html.style.msTransform = translate;
  html.style.oTransform = translate;
  html.style.transform = translate;
}
module.exports = virtualScroll;