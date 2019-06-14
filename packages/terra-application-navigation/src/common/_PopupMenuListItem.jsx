import React, {
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';

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
  loopFocus: PropTypes.func,
};

const PopupMenuListItem = ({
  icon, text, notificationCount, onSelect, showSelections, isSelected, loopFocus,
}) => {
  const itemRef = useRef();

  function myKeyDown(event) {
    let sibling;
    if (event.nativeEvent.keyCode === 13 || event.nativeEvent.keyCode === 32) {
      event.preventDefault();
      event.stopPropagation();
      onSelect();
      return;
    }
    if (event.nativeEvent.keyCode === 40) { // down
      event.preventDefault();
      event.stopPropagation();
      sibling = itemRef.current.nextSibling;
    } else if (event.nativeEvent.keyCode === 38) { // up
      event.preventDefault();
      event.stopPropagation();
      sibling = itemRef.current.previousSibling;
    }
    if (sibling) {
      sibling.focus();
    } else {
      loopFocus(event);
    }
  }

  return (
    <li
      role="option"
      tabIndex="0"
      className={cx('item')}
      onClick={onSelect}
      onKeyDown={myKeyDown}
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
