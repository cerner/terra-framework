import React from 'react';

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
      const result = findMenuItem(updatedStack[i].props.subMenuItems, key);
      if (result) {
        return result;
      }
    }
  }
  return undefined;
};

const MenuUtils = {
  isFullScreen,
  isMac,
  totalItems,
  findMenuItem,
};

export default MenuUtils;
