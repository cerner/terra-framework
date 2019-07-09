import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Count from './_DrawerCount';
import { enableFocusStyles, disableFocusStyles, generateKeyDownSelection } from '../utils/helpers';

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

const DrawerMenuLinkItem = ({
  icon, text, notificationCount, isSelected, onSelect,
}) => (
  <li>
    <div
      role="link"
      aria-current={isSelected}
      tabIndex="0"
      className={cx('item', { 'is-selected': isSelected }, 'has-border')}
      onClick={onSelect}
      onKeyDown={generateKeyDownSelection(onSelect)}
      onBlur={enableFocusStyles}
      onMouseDown={disableFocusStyles}
      data-focus-styles-enabled
    >
      {icon ? <div className={cx('icon')}>{icon}</div> : null}
      <div className={cx('text')}>{text}</div>
      {notificationCount > 0 && <Count value={notificationCount} />}
    </div>
  </li>
);

DrawerMenuLinkItem.propTypes = propTypes;

export default DrawerMenuLinkItem;
