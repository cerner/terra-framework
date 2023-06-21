import {
  KEY_LEFT,
  KEY_RIGHT,
  KEY_UP,
  KEY_DOWN,
  KEY_HOME,
  KEY_END,
  KEY_RETURN,
  KEY_SPACE,
} from 'keycode-js';

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
 * Sets focus to the 'next' tab element.
 * @param {object} event The triggering event.
 * @param {number} index The index of the current element.
 * @param {array} ids The array of id strings.
 */
const nextFocus = (event, index, ids) => {
  event.preventDefault();
  event.stopPropagation();

  if (index < 0) {
    const element = document.getElementById(ids[0]);
    if (element) {
      element.focus();
    }
    return;
  }

  const newIndex = index + 1 >= ids.length ? 0 : index + 1;
  const element = document.getElementById(ids[newIndex]);
  if (element) {
    element.focus();
  }
};

/**
 * Sets focus to the 'previous' tab element.
 * @param {object} event The triggering event.
 * @param {number} index The index of the current element.
 * @param {array} ids The array of id strings.
 */
const previousFocus = (event, index, ids) => {
  event.preventDefault();
  event.stopPropagation();

  if (index < 0) {
    const element = document.getElementById(ids[ids.length - 1]);
    if (element) {
      element.focus();
    }
    return;
  }

  const newIndex = index - 1 < 0 ? ids.length - 1 : index - 1;
  const element = document.getElementById(ids[newIndex]);
  if (element) {
    element.focus();
  }
};

/**
 * Sets focus to the 'first' tab element.
 * @param {object} event The triggering event.
 * @param {number} index The index of the current element.
 * @param {array} ids The array of id strings.
 */
const firstFocus = (event, index, ids) => {
  event.preventDefault();
  event.stopPropagation();

  if (index !== 0) {
    const element = document.getElementById(ids[0]);
    if (element) {
      element.focus();
    }
  }
};

/**
 * Sets focus to the 'end' tab element.
 * @param {object} event The triggering event.
 * @param {number} index The index of the current element.
 * @param {array} ids The array of id strings.
 */
const lastFocus = (event, index, ids) => {
  event.preventDefault();
  event.stopPropagation();

  if (index !== ids.length - 1) {
    const element = document.getElementById(ids[ids.length - 1]);
    if (element) {
      element.focus();
    }
  }
};

/**
 * The default event handler for navigational arrow keys.
 * @param {object} event The triggering event.
 * @param {number} index The index of the current element.
 * @param {array} ids The array of id strings.
 */
const handleArrows = (event, index, ids) => {
  const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
  const nextKey = !isRTL ? KEY_RIGHT : KEY_LEFT;
  const previousKey = !isRTL ? KEY_LEFT : KEY_RIGHT;
  if (event.nativeEvent.keyCode === nextKey || event.nativeEvent.keyCode === KEY_DOWN) {
    nextFocus(event, index, ids);
  } else if (event.nativeEvent.keyCode === previousKey || event.nativeEvent.keyCode === KEY_UP) {
    previousFocus(event, index, ids);
  } else if (event.nativeEvent.keyCode === KEY_HOME) {
    firstFocus(event, index, ids);
  } else if (event.nativeEvent.keyCode === KEY_END) {
    lastFocus(event, index, ids);
  }
};

/**
 * The more button's event handler for navigational arrow keys.
 * @param {object} event The triggering event.
 * @param {number} hiddenIndex The index of the first hidden index.
 * @param {array} ids The array of id strings.
 */
const handleMoreButtonArrows = (event, hiddenIndex, ids) => {
  const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
  const nextKey = !isRTL ? KEY_RIGHT : KEY_LEFT;
  const previousKey = !isRTL ? KEY_LEFT : KEY_RIGHT;

  if (event.nativeEvent.keyCode === nextKey || event.nativeEvent.keyCode === KEY_DOWN) {
    event.preventDefault();
    event.stopPropagation();

    const element = document.getElementById(ids[hiddenIndex]);
    if (element) {
      element.focus();
    }
  } else if (event.nativeEvent.keyCode === KEY_HOME) {
    firstFocus(event, -1, ids);
  } else if (event.nativeEvent.keyCode === previousKey || event.nativeEvent.keyCode === KEY_UP || event.nativeEvent.keyCode === KEY_END) {
    lastFocus(event, -1, ids);
  }
};

export {
  enableFocusStyles,
  disableFocusStyles,
  generateKeyDownSelection,
  handleArrows,
  handleMoreButtonArrows,
  nextFocus,
  previousFocus,
  firstFocus,
  lastFocus,
};
