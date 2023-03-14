/**
 * Returns true if the given element is focusable.
 */
const isFocusable = element => {
  if (element.tabIndex < 0) {
    return false;
  }
  switch (element.tagName) {
    case 'A':
      return !!element.href;
    case 'INPUT':
      return element.type !== 'hidden' && !element.disabled;
    case 'SELECT':
    case 'TEXTAREA':
    case 'BUTTON':
      return !element.disabled;
    default:
      return false;
  }
};

/**
 * Returns the first focusable element in the container.
 */
const findFirstFocusableElement = (container) => {
  const elements = Array.from(container.querySelectorAll('*'));
  return (elements.find(isFocusable));
}

const SlidePanelUtils = {
  findFirstFocusableElement
}

export default SlidePanelUtils;