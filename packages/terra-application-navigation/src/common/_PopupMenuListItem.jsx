import React, {
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import {
  KEY_SPACE,
  KEY_RETURN,
  KEY_UP,
  KEY_DOWN,
} from 'keycode-js';

import PopupCount from './_PopupCount';
import { enableFocusStyles, disableFocusStyles } from '../utils/helpers';

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
   * Whether or not selected states should display on the menu item.
   */
  showSelections: PropTypes.bool,
  /**
   * Function callback for item when no sibling is present.
   */
  loopFocus: PropTypes.func,
};

const PopupMenuListItem = ({
  icon, text, notificationCount, onSelect, showSelections, isSelected, loopFocus,
}) => {
  const itemRef = useRef();

  function nextFocus(event, sibling) {
    if (sibling) {
      sibling.focus();
    } else {
      loopFocus(event);
    }
  }

  function handleKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelect();
      return;
    }
    if (event.nativeEvent.keyCode === KEY_DOWN) {
      event.preventDefault();
      event.stopPropagation();
      nextFocus(event, itemRef.current.nextSibling);
    } else if (event.nativeEvent.keyCode === KEY_UP) {
      event.preventDefault();
      event.stopPropagation();
      nextFocus(event, itemRef.current.previousSibling);
    }
  }

  return (
    <li
      role="option"
      tabIndex="0"
      className={cx('item')}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      onBlur={enableFocusStyles}
      onMouseDown={disableFocusStyles}
      aria-selected={showSelections && isSelected}
      data-focus-styles-enabled
      ref={itemRef}
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
};

PopupMenuListItem.propTypes = propTypes;

export default PopupMenuListItem;
