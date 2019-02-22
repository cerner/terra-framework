const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

const EXTENSION_COUNT = {
  LARGE: 3,
  SMALL: 1,
};

const createKeyDown = (onRequestClose, onSelect, metaData) => (
  (event) => {
    if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
      event.preventDefault();
      if (onRequestClose) {
        onRequestClose(event);
      }
      onSelect(event, metaData);
    }
  }
);

const createOnClick = (onRequestClose, onSelect, metaData) => (
  (event) => {
    if (onRequestClose) {
      onRequestClose(event);
    }
    onSelect(event, metaData);
  }
);

export {
  createKeyDown,
  createOnClick,
  EXTENSION_COUNT,
};
