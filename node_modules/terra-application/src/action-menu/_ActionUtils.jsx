import React from 'react';
import {
  KEY_RETURN,
  KEY_SPACE,
  KEY_RIGHT,
  KEY_LEFT,
  KEY_UP,
  KEY_DOWN,
  KEY_HOME,
  KEY_END,
} from 'keycode-js';

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
 * Validates whether or not the char is acceptable for use in a first char search,
 * @param {string} char The char to validate.
 */
const isValidChar = char => char.length === 1 && char.match(/\S/);

/**
 * Returns a function that will execute the provided function upon detection of a KEY_RETURN or KEY_SPACE keydown event.
 * @param {string} key The uniquely identifiable key.
 * @param {Function} onAction The function to be executed after event detection.
 * @param {Function} onArrow The function to be executed after event detection.
 * @param {Function} onChar The function to be executed after event detection.
 */
const generateOnKeyDown = (key, onAction, onArrow, onChar) => (
  event => {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    let shouldPrevent = false;
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      shouldPrevent = true;
      onAction(key);
    } else if (event.nativeEvent.keyCode === KEY_UP || event.nativeEvent.keyCode === KEY_LEFT) {
      shouldPrevent = true;
      onArrow(key, 'previous');
    } else if (event.nativeEvent.keyCode === KEY_DOWN || event.nativeEvent.keyCode === KEY_RIGHT) {
      shouldPrevent = true;
      onArrow(key, 'next');
    } else if (event.nativeEvent.keyCode === KEY_HOME) {
      shouldPrevent = true;
      onArrow(key, 'first');
    } else if (event.nativeEvent.keyCode === KEY_END) {
      shouldPrevent = true;
      onArrow(key, 'last');
    } else {
      const char = event.key;
      if (isValidChar(char)) {
        shouldPrevent = true;
        onChar(key, char);
      }
    }

    if (shouldPrevent) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
);

/**
 * Returns the items with their first character matching the char parameter.
 * @param {string} char The char to search upon.
 * @param {array} items The flattened array of child items.
 */
const itemsByChar = (char, items) => items.filter(item => item.label.charAt(0).toLowerCase() === char.toLowerCase());

/**
 * Disables focus styles for the target of the given event. Typically used as an onMouseDown callback on selectable elements.
 * @param {string} key The action key to search by.
 * @param {array} items The flattened array of child items.
 */
const indexOfKey = (key, items) => items.findIndex(item => item.actionKey === key);

/**
 * Returns a flattened array of enabled items in the order they are visible.
 * @param {string} key The currently active item key.
 * @param {array} items The flattened array of child items.
 * @param {string} direction The child node to strip the items from.
 */
const itemByDirection = (key, items, direction) => {
  const currentIndex = indexOfKey(key, items);
  const maxIndex = items.length - 1;

  let newIndex;
  if (direction === 'first') {
    newIndex = 0;
  } else if (direction === 'last') {
    newIndex = maxIndex;
  } else if (direction === 'next') {
    if (currentIndex === maxIndex || currentIndex < 0) {
      newIndex = 0;
    } else {
      newIndex = currentIndex + 1;
    }
  } else if (direction === 'previous') {
    if (currentIndex <= 0) {
      newIndex = maxIndex;
    } else {
      newIndex = currentIndex - 1;
    }
  }

  return items[newIndex];
};

/**
 * Returns the next matching item for the char and currently active key.
 * @param {string} key The currently active item key.
 * @param {array} items The flattened array of child items.
 * @param {string} char The current char from keystroke.
 */
const itemByChar = (key, items, char) => {
  const charMatches = itemsByChar(char, items);
  const matchCount = charMatches.length;
  if (!matchCount) {
    return undefined;
  }

  let newIndex = 0;
  const currentIndex = indexOfKey(key, charMatches);
  if (matchCount > 1 && currentIndex >= 0 && currentIndex < matchCount - 1) {
    newIndex = currentIndex + 1;
  }

  return charMatches[newIndex];
};

/**
 * Returns a flattened array of enabled items in the order they are visible.
 * @param {node} children The child node to strip the items from.
 * @param {bool} showSelection Flag indicating whether selection is shown for these action items.
 */
const flattenActionItems = (children, showSelection = false) => {
  let tempSelection = showSelection;
  const actionItems = [];
  React.Children.forEach(children, child => {
    if (!child) {
      return;
    }

    if (child.props.actionKey) {
      if (child.type.interactiveType) {
        tempSelection = true;
      }

      if (!child.props.isDisabled) {
        actionItems.push({
          actionKey: child.props.actionKey,
          label: child.props.label,
        });
      }
    } else if (child.props.children) {
      const { items, indentChildren } = flattenActionItems(child.props.children, tempSelection);
      actionItems.push(...items);
      tempSelection = indentChildren || tempSelection;
    }
  });
  return { items: actionItems, indentChildren: tempSelection };
};

export default {
  enableFocusStyles,
  disableFocusStyles,
  generateOnKeyDown,
  itemByDirection,
  itemByChar,
  flattenActionItems,
};

export {
  enableFocusStyles,
  disableFocusStyles,
  generateOnKeyDown,
  itemByDirection,
  itemByChar,
  flattenActionItems,
};
