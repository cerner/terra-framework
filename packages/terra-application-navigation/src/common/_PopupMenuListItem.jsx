import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';

import PopupCount from './_PopupCount';

import styles from './PopupMenuListItem.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  notificationCount: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
};

const PopupMenuListItem = ({
  icon, text, notificationCount, onSelect, showSelections, isSelected,
}) => (
  <li
    className={cx('item')}
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
