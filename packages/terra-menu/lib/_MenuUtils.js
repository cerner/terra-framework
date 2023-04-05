"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var isFullScreen = function isFullScreen(isHeightBounded, isWidthBounded, boundingFrame, popupWidth) {
  var width = popupWidth;
  var maxWidth;
  if (boundingFrame && !isWidthBounded) {
    maxWidth = boundingFrame.clientWidth;
  } else {
    maxWidth = window.innerWidth;
  }
  if (maxWidth <= 0) {
    return false;
  }
  return isHeightBounded && (width >= maxWidth || isWidthBounded);
};
var MenuUtils = {
  isFullScreen: isFullScreen
};
var _default = MenuUtils;
exports.default = _default;