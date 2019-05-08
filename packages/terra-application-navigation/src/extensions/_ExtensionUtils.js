import { KEY_SPACE, KEY_RETURN } from 'keycode-js';

const createKeyDown = (onRequestClose, onSelect) => (
  (event) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      if (onRequestClose) {
        onRequestClose();
      }
      onSelect();
    }
  }
);

const createOnClick = (onRequestClose, onSelect) => (
  () => {
    if (onRequestClose) {
      onRequestClose();
    }
    onSelect();
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
