import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';

import Count from './_DrawerCount';
import styles from './DrawerMenuListItem.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  notificationCount: PropTypes.number,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

const DrawerMenuListItem = ({
  icon, text, notificationCount, isSelected, onSelect,
}) => (
  <li
    className={cx(['item', { 'is-selected': isSelected }])}
    aria-selected={isSelected}
    data-item-show-focus
    onClick={onSelect}
    onKeyDown={(event) => {
      if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
        event.preventDefault();
        onSelect();
      }
    }}
    onBlur={(event) => {
      event.currentTarget.setAttribute('data-item-show-focus', 'true');
    }}
    onMouseDown={(event) => {
      event.currentTarget.setAttribute('data-item-show-focus', 'false');
    }}
    role="option"
    tabIndex="0"
  >
    {icon ? <div className={cx('icon')}>{icon}</div> : null}
    <div className={cx('text')}>{text}</div>
    {notificationCount > 0 && <Count value={notificationCount} />}
  </li>
);

DrawerMenuListItem.propTypes = propTypes;

export default DrawerMenuListItem;
