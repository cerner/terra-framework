import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';

import styles from './UtilityMenuListItem.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const UtilityMenuListItem = ({
  icon, text, onSelect,
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
    {icon ? <div className={cx('icon')}>{icon}</div> : null}
    <div className={cx('text')}>{text}</div>
  </li>
);

UtilityMenuListItem.propTypes = propTypes;

export default UtilityMenuListItem;
