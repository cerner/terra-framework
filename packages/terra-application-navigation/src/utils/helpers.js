import { useRef, useLayoutEffect } from 'react';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';

/**
 * Determines whether or not the navigation components will render in the compact style based on the given breakpoint.
 */
const shouldRenderCompactNavigation = activeBreakpoint => activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || activeBreakpoint === 'medium';

/**
 * Enables focus styles for the target of the given event. Typically used as an onBlur callback on selectable elements.
 */
const enableFocusStyles = (event) => {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'true');
};

/**
 * Disables focus styles for the target of the given event. Typically used as an onMouseDown callback on selectable elements.
 */
const disableFocusStyles = (event) => {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'false');
};

/**
 * Returns a function that will execute the provided function upon detection of a KEY_RETURN or KEY_SPACE keydown event.
 * @param {Function} onSelect The function to be executed after event detection.
 */
const generateKeyDownSelection = onSelect => (
  onSelect ? (event) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      onSelect();
    }
  } : undefined
);

/**
 * A custom hook that manages the attributes on the given countRef to control
 * the elements animation states.
 */
const useAnimatedCount = (countRef, countValue) => {
  const previousValueRef = useRef(countValue);

  useLayoutEffect(() => {
    const countElement = countRef.current;

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

function itemId(appNavId, itemType, itemKey) {
  return `${appNavId}-${itemType}-${itemKey}`;
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

export default {
  shouldRenderCompactNavigation,
  enableFocusStyles,
  disableFocusStyles,
  generateKeyDownSelection,
  useAnimatedCount,
};

export {
  shouldRenderCompactNavigation,
  enableFocusStyles,
  disableFocusStyles,
  generateKeyDownSelection,
  useAnimatedCount,
  navigationItemId,
  utilityItemId,
  extensionItemId,
  helpUtilityItemId,
  settingsUtilityItemId,
  logoutUtilityItemId,
};
