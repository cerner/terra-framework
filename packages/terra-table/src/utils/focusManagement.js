const getFocusableElements = (parentElement) => {
  // add all elements we want to include in our selection
  const focusableElementSelector = "a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), "
      + "select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), "
      + "iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1']), div[role='button']";

  const focusableElements = [...parentElement.querySelectorAll(`${focusableElementSelector}`)].filter(
    element => !element.hasAttribute('disabled')
        && !element.getAttribute('aria-hidden')
        && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
        && window.getComputedStyle(element).visibility !== 'hidden',
  );

  return focusableElements;
};

export default getFocusableElements;
