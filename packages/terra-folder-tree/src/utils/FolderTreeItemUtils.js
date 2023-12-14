import * as KeyCode from 'keycode-js';

/**
 * Returns a wrapped onClick callback function. If the onSelect method isn't passed, we return the initial onClick.
 */
const wrappedOnClickForItem = (onClick, onSelect, metaData) => {
  if (!onSelect) {
    return onClick;
  }
  return (event) => {
    onSelect(event, metaData);

    if (onClick) {
      onClick(event);
    }
  };
};

/**
 * Returns a wrapped onKeyDown callback function with enter and space keys triggering onSelect. If the onSelect method isn't passed, we return the initial onClick.
 */
const wrappedOnKeyDownForItem = (onSelect) => (event) => {
  if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
    onSelect(event);
  }
};

const SelectableUtils = {
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
};

export default SelectableUtils;
