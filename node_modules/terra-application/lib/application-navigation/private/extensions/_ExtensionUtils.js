"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliceIndexForBreakpoint = exports.default = void 0;
var sliceIndexForBreakpoint = function sliceIndexForBreakpoint(activeBreakpoint, extensionItems) {
  var sliceIndex;
  if (activeBreakpoint === 'enormous') {
    sliceIndex = 4;
  } else if (activeBreakpoint === 'huge') {
    sliceIndex = 3;
  } else if (activeBreakpoint === 'large') {
    sliceIndex = 2;
  } else {
    sliceIndex = 1;
  }
  if (extensionItems.length <= sliceIndex + 1) {
    sliceIndex = extensionItems.length;
  }
  return sliceIndex;
};
exports.sliceIndexForBreakpoint = sliceIndexForBreakpoint;
var _default = sliceIndexForBreakpoint;
exports.default = _default;