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

export default {
  shouldRenderCompactNavigation,
  enableFocusStyles,
  disableFocusStyles,
  generateKeyDownSelection,
};

export {
  shouldRenderCompactNavigation,
  enableFocusStyles,
  disableFocusStyles,
  generateKeyDownSelection,
};
