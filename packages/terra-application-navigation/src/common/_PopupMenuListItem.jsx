import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';

import PopupCount from './_PopupCount';
import { enableFocusStyles, disableFocusStyles, generateKeyDownSelection } from '../utils/helpers';

import styles from './PopupMenuListItem.module.scss';

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
  /**
   * Whehther or not selected states should display on the menu item.
   */
  showSelections: PropTypes.bool,
};

const PopupMenuListItem = ({
  icon, text, notificationCount, onSelect, showSelections, isSelected,
}) => (
  <li
    role="option"
    tabIndex="0"
    className={cx('item')}
    onClick={onSelect}
    onKeyDown={generateKeyDownSelection(onSelect)}
    onBlur={enableFocusStyles}
    onMouseDown={disableFocusStyles}
    aria-selected={showSelections && isSelected}
    data-focus-styles-enabled
  >
    {showSelections
      ? (
        <div className={cx('selection-icon')}>
          { isSelected ? <IconCheckmark /> : null}
        </div>
      ) : null}
    {icon ? <div className={cx('icon')}>{icon}</div> : null}
    <div className={cx('text')}>{text}</div>
    {notificationCount > 0 && <PopupCount value={notificationCount} isInline className={cx('extension-row-count')} />}
  </li>
);

PopupMenuListItem.propTypes = propTypes;

export default PopupMenuListItem;
