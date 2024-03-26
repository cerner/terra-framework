import React from 'react';
import './PlaceholderList.module.scss';

/* eslint-disable */
const PlaceholderListItem = ({
  children,
  isSelected,
  onSelect,
  ...customProps
}) => {
  const keyDown = event => {
    if (event.nativeEvent.keyCode === 13 || event.nativeEvent.keyCode === 32) {
      event.preventDefault();
      onSelect(event);
    }
  };

  const classNames = isSelected ? 'placeholder-list-item is-selected' : 'placeholder-list-item ';
  return (
    <li
      {...customProps}
      aria-selected={isSelected}
      tabIndex="0"
      className={classNames}
      onClick={onSelect}
      onKeyDown={keyDown}
      role="tab"
    >
      {children}
    </li>
  );
};

export default PlaceholderListItem;