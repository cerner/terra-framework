"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Takes pill as input and returns its width.
 */
var getPillWidth = function getPillWidth(pill) {
  var pillWidth = pill.offsetWidth + parseFloat(window.getComputedStyle(pill, null).getPropertyValue('margin-right'), 10);
  return pillWidth;
};

/**
 * Takes rollUpPill as input and returns its width.
 */
var getRollUpPillWidth = function getRollUpPillWidth(rollUpPill) {
  var rollupPillWidth = rollUpPill.parentElement.offsetWidth + parseFloat(window.getComputedStyle(rollUpPill.parentElement, null).getPropertyValue('margin-right'), 10);
  return rollupPillWidth;
};

/**
 * Takes pill container ref as input and returns the index value from which the pills need to be hidden/rolled up.
 */
var getRollUpIndex = function getRollUpIndex(pillListRef) {
  var rollUpPill = pillListRef.current.querySelector('[data-terra-rollup-pill]');
  var pills = pillListRef.current.querySelectorAll('[data-terra-pill]');
  var containerWidth = pillListRef.current.offsetWidth;
  var totalPillWidth = 0;
  var startIndex = 0;
  var rollupPillWidth = 0;
  if (rollUpPill) {
    rollupPillWidth = getRollUpPillWidth(rollUpPill);
  }
  for (var i = 0; i < pills.length; i += 1) {
    if (totalPillWidth >= containerWidth) {
      break;
    }
    var pillWidth = getPillWidth(pills[i]);
    if (pillWidth + totalPillWidth + rollupPillWidth < containerWidth) {
      startIndex = i + 1;
    }
    totalPillWidth += pillWidth;
  }
  return startIndex;
};

/**
 * Takes 'pill' element and tabindex 'val' as inputs and sets the pill elements tabindex.
 */
var setPillsTabIndex = function setPillsTabIndex(pills, val) {
  for (var i = 0; i < pills.length; i += 1) {
    pills[i].setAttribute('tabindex', val);
  }
};

/**
 * Takes 'rollUpPill' element and tabindex 'val' as inputs and sets the rollUpPill tabindex.
 */
var setRollUpPillTabIndex = function setRollUpPillTabIndex(rollUpPill, val) {
  rollUpPill.setAttribute('tabindex', val);
};
var PillsUtils = {
  getRollUpIndex: getRollUpIndex,
  setPillsTabIndex: setPillsTabIndex,
  setRollUpPillTabIndex: setRollUpPillTabIndex
};
var _default = PillsUtils;
exports.default = _default;