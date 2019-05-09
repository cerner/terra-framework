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

export default {
  shouldRenderCompactNavigation,
  enableFocusStyles,
  disableFocusStyles,
};

export {
  shouldRenderCompactNavigation,
  enableFocusStyles,
  disableFocusStyles,
};
