// This is a temporary file for the purpose of adding a new feature without need for refactoring across multiple components.
// This will be removed is a separate refactor effort.

const getFocusableButtonsOrHyperlinks = (parentElement) => {
  const focusableElementSelector = 'a[href]:not([tabindex=\'-1\']), button:not([disabled]):not([tabindex=\'-1\'])';

  const focusableElements = [...parentElement.querySelectorAll(`${focusableElementSelector}`)].filter(
    element => !element.hasAttribute('disabled')
      && !element.getAttribute('aria-hidden')
      && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
      && window.getComputedStyle(element).visibility !== 'hidden',
  );

  return focusableElements;
};

export default getFocusableButtonsOrHyperlinks;
