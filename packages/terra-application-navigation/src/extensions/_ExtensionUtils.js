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

const sliceIndexForBreakpoint = (activeBreakpoint, extensionConfig) => {
  let sliceIndex;
  if (activeBreakpoint === 'tiny' || activeBreakpoint === 'small') {
    sliceIndex = EXTENSION_COUNT.SMALL;
  } else if (activeBreakpoint === 'medium') {
    sliceIndex = extensionConfig.mediumCount || 3;
  } else {
    sliceIndex = extensionConfig.largeCount || 5;
  }

  if (extensionConfig.extensions.length <= sliceIndex + 1) {
    sliceIndex = extensionConfig.extensions.length;
  }
  return sliceIndex;
};

export {
  createKeyDown,
  createOnClick,
  sliceIndexForBreakpoint,
  EXTENSION_COUNT,
};
