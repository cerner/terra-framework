import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';

import Count from './_DrawerCount';
import { enableFocusStyles, disableFocusStyles } from '../utils/helpers';

import styles from './DrawerMenuListItem.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Icon to be rendered
   */
  icon: PropTypes.element,
  /**
   * Text display and/or aria-label
   */
  text: PropTypes.string.isRequired,
  /**
   * The number value representing the notification count.
   */
  notificationCount: PropTypes.number,
  /**
   * Function callback for item selection.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Whether or not this item is the active item.
   */
  isSelected: PropTypes.bool,
};

const DrawerMenuListItem = ({
  icon, text, notificationCount, isSelected, onSelect,
}) => (
  <li
    role="option"
    tabIndex="0"
    className={cx(['item', { 'is-selected': isSelected }])}
    onClick={onSelect}
    onKeyDown={(event) => {
      if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
        event.preventDefault();
        onSelect();
      }
    }}
    onBlur={enableFocusStyles}
    onMouseDown={disableFocusStyles}
    aria-selected={isSelected}
    data-focus-styles-enabled
  >
    {icon ? <div className={cx('icon')}>{icon}</div> : null}
    <div className={cx('text')}>{text}</div>
    {notificationCount > 0 && <Count value={notificationCount} />}
  </li>
);

DrawerMenuListItem.propTypes = propTypes;

export default DrawerMenuListItem;
