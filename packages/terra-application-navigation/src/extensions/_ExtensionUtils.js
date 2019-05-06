const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

const createKeyDown = (onRequestClose, onSelect, extensionKey, metaData) => (
  (event) => {
    if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
      event.preventDefault();
      if (onRequestClose) {
        onRequestClose();
      }
      onSelect(extensionKey, metaData);
    }
  }
);

const createOnClick = (onRequestClose, onSelect, extensionKey, metaData) => (
  () => {
    if (onRequestClose) {
      onRequestClose();
    }
    onSelect(extensionKey, metaData);
  }
);

const sliceIndexForBreakpoint = (activeBreakpoint, extensionItems) => {
  let sliceIndex;
  if (activeBreakpoint === 'enormous') {
    sliceIndex = 4;
  } else if (activeBreakpoint === 'huge') {
    sliceIndex = 3;
  } else if (activeBreakpoint === 'large') {
    sliceIndex = 2;
  } else {
    sliceIndex = 1;
  }

  if (extensionItems.length <= sliceIndex + 1) {
    sliceIndex = extensionItems.length;
  }
  return sliceIndex;
};

export {
  createKeyDown,
  createOnClick,
  sliceIndexForBreakpoint,
};
