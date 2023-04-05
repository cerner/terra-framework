const isFullScreen = (isHeightBounded, isWidthBounded, boundingFrame, popupWidth) => {
  const width = popupWidth;
  let maxWidth;

  if (boundingFrame && !isWidthBounded) {
    maxWidth = boundingFrame.clientWidth;
  } else {
    maxWidth = window.innerWidth;
  }

  if (maxWidth <= 0) {
    return false;
  }

  return isHeightBounded && (width >= maxWidth || isWidthBounded);
};

const MenuUtils = {
  isFullScreen,
};

export default MenuUtils;
