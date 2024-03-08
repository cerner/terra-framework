import React from 'react';

const stopPropagation = (event) => {
  // stop event propagation in case Menu oppened inside the layout component that has its own event handler for that event.
  // currently needed for Menu Button support in `terra-compact-interactive-list`
  event.stopPropagation();
};

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

const isMac = () => navigator.userAgent.indexOf('Mac') !== -1 && navigator.userAgent.indexOf('Win') === -1;

const totalItems = (children) => {
  let count = 0;
  React.Children.map(children, (item) => {
    if (item.props.text) {
      count += 1;
    } else if (item.props.children) {
      React.Children.forEach(item.props.children, () => {
        count += 1;
      });
    }
  });

  return count;
};

const findMenuItem = (updatedStack, key) => {
  for (let i = 0; i < updatedStack.length; i += 1) {
    if (updatedStack[i].key === key) {
      return updatedStack[i];
    }
    if (updatedStack[i].props.subMenuItems) {
      return findMenuItem(updatedStack[i].props.subMenuItems, key);
    }
  }
  return undefined;
};

/**
 * Util to determine if the user agent indicates that the browser is Safari
 * @return {boolean}
 */
const isSafari = () => navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;

const MenuUtils = {
  isFullScreen,
  isMac,
  totalItems,
  findMenuItem,
  isSafari,
};

export default MenuUtils;
export { stopPropagation };
