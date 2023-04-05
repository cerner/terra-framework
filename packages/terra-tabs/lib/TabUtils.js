"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Returns true if the selected tab is not the currently selected index.
 */
var shouldHandleSelection = function shouldHandleSelection(currentSelectedKey, newSelectedKey) {
  return newSelectedKey !== currentSelectedKey;
};

/**
 * Returns the active key if given, else returns the key of the first tab.
 * To be used in the constructor, to set initial state.
 */
var initialSelectedTabKey = function initialSelectedTabKey(tabs, activeKey) {
  if (activeKey) {
    return activeKey;
  }
  if (tabs.length) {
    return tabs[0].key;
  }
  return tabs.key;
};
var TabUtils = {
  shouldHandleSelection: shouldHandleSelection,
  initialSelectedTabKey: initialSelectedTabKey
};
var _default = TabUtils;
exports.default = _default;