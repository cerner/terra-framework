"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Determines whether or not the given size is considered `compact` or not.
 * This can be used to synchronize component rendering with responsive changes
 * to the ApplicationLayout.
 */
var isSizeCompact = function isSizeCompact(size) {
  return size === 'tiny' || size === 'small';
};
var _default = {
  isSizeCompact: isSizeCompact
};
exports.default = _default;