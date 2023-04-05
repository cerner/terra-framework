"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableFocusStyles = exports.disableFocusStyles = exports.default = void 0;
exports.extensionItemId = extensionItemId;
exports.generateKeyDownSelection = void 0;
exports.helpUtilityItemId = helpUtilityItemId;
exports.logoutUtilityItemId = logoutUtilityItemId;
exports.navigationItemId = navigationItemId;
exports.settingsUtilityItemId = settingsUtilityItemId;
exports.useAnimatedCount = exports.shouldRenderCompactNavigation = void 0;
exports.utilityItemId = utilityItemId;
var _react = require("react");
var _keycodeJs = require("keycode-js");
/**
 * Determines whether or not the navigation components will render in the compact style based on the given breakpoint.
 */
var shouldRenderCompactNavigation = function shouldRenderCompactNavigation(activeBreakpoint) {
  return activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || activeBreakpoint === 'medium';
};

/**
 * Enables focus styles for the target of the given event. Typically used as an onBlur callback on selectable elements.
 */
exports.shouldRenderCompactNavigation = shouldRenderCompactNavigation;
var enableFocusStyles = function enableFocusStyles(event) {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'true');
};

/**
 * Disables focus styles for the target of the given event. Typically used as an onMouseDown callback on selectable elements.
 */
exports.enableFocusStyles = enableFocusStyles;
var disableFocusStyles = function disableFocusStyles(event) {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'false');
};

/**
 * Returns a function that will execute the provided function upon detection of a KEY_RETURN or KEY_SPACE keydown event.
 * @param {Function} onSelect The function to be executed after event detection.
 */
exports.disableFocusStyles = disableFocusStyles;
var generateKeyDownSelection = function generateKeyDownSelection(onSelect) {
  return onSelect ? function (event) {
    if (event.nativeEvent.keyCode === _keycodeJs.KEY_RETURN || event.nativeEvent.keyCode === _keycodeJs.KEY_SPACE) {
      event.preventDefault();
      onSelect();
    }
  } : undefined;
};

/**
 * A custom hook that manages the attributes on the given countRef to control
 * the elements animation states.
 */
exports.generateKeyDownSelection = generateKeyDownSelection;
var useAnimatedCount = function useAnimatedCount(countRef, countValue) {
  var previousValueRef = (0, _react.useRef)(countValue);
  (0, _react.useLayoutEffect)(function () {
    var countElement = countRef.current;
    if (!countElement) {
      return;
    }
    function handleAnimation() {
      countElement.setAttribute('data-count-pulse', 'false');
      countElement.removeEventListener('animationend', handleAnimation);
    }
    if (countValue > previousValueRef.current) {
      countElement.setAttribute('data-count-pulse', 'true');
      countElement.addEventListener('animationend', handleAnimation);
    }
    previousValueRef.current = countValue;
  }, [countRef, countValue]);
};
exports.useAnimatedCount = useAnimatedCount;
function itemId(appNavId, itemType, itemKey) {
  return "".concat(appNavId, "-").concat(itemType, "-").concat(itemKey);
}
function navigationItemId(appNavId, navigationItemKey) {
  return itemId(appNavId, 'NavigationItem', navigationItemKey);
}
function utilityItemId(appNavId, utilityItemKey) {
  return itemId(appNavId, 'UtilityItem', utilityItemKey);
}
function helpUtilityItemId(appNavId) {
  return utilityItemId(appNavId, 'TerraHelp');
}
function settingsUtilityItemId(appNavId) {
  return utilityItemId(appNavId, 'TerraSettings');
}
function logoutUtilityItemId(appNavId) {
  return utilityItemId(appNavId, 'TerraLogout');
}
function extensionItemId(appNavId, extenstionItemKey) {
  return itemId(appNavId, 'ExtensionItem', extenstionItemKey);
}
var _default = {
  shouldRenderCompactNavigation: shouldRenderCompactNavigation,
  enableFocusStyles: enableFocusStyles,
  disableFocusStyles: disableFocusStyles,
  generateKeyDownSelection: generateKeyDownSelection,
  useAnimatedCount: useAnimatedCount
};
exports.default = _default;