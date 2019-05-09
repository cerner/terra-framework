import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import TabCount from './_TabCount';

import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Should the menu be limited to icon only.
   */
  isIconOnly: PropTypes.bool,
  /**
   * Whether or not the menu display should be animated with selection.
   */
  isSelected: PropTypes.bool,
  /**
   * The selection callback for the tab.
   */
  onTabSelect: PropTypes.func,
  /**
   * The display text for the tab.
   */
  text: PropTypes.string,
  /**
   * Ref object that will be updated with a reference to the TabRollup's root element.
   */
  tabRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  /**
   * Should the count notificaiton be displayed on the menu display.
   */
  hasChildNotifications: PropTypes.bool,
  /**
   * Whether or not the notification should pulse animate.
   */
  isPulsed: PropTypes.bool,
  /**
   * Boolean indicating whether or not the Tab should account for count spacing.
   */
  hasCount: PropTypes.bool,
};

const defaultProps = {
  hasCount: false,
  isPulsed: false,
  isSelected: false,
  hasChildNotifications: false,
};

const TabRollup = ({
  hasCount,
  isSelected,
  onTabSelect,
  tabRef,
  hasChildNotifications,
  text,
  isPulsed,
  isIconOnly,
}) => {
  function onKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_SPACE || event.nativeEvent.keyCode === KEY_RETURN) {
      event.preventDefault();
      if (onTabSelect) {
        onTabSelect();
      }
    }
  }

  function onBlur(event) {
    event.currentTarget.setAttribute('data-item-show-focus', 'true');
  }

  function onMouseDown(event) {
    event.currentTarget.setAttribute('data-item-show-focus', 'false');
  }

  return (
    <div
      role="tab"
      tabIndex="0"
      className={cx([
        'tab-rollup',
        { 'has-count': hasCount },
      ])}
      onClick={onTabSelect}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onMouseDown={onMouseDown}
      ref={tabRef}
      aria-current={isSelected}
      data-item-show-focus
    >
      <div className={cx('tab-inner')} data-tab-menu-inner>
        <div className={cx('tab-rollup-label')}>
          {!isIconOnly && <span className={cx('tab-rollup-text')}>{text}</span>}
          {hasChildNotifications && <span className={cx('tab-count')}><TabCount value={isPulsed ? 1 : 0} isRollup /></span>}
          <IconCaretDown className={cx(['tab-rollup-icon', { 'is-icon-only': isIconOnly }])} />
        </div>
      </div>
    </div>
  );
};

TabRollup.propTypes = propTypes;
TabRollup.defaultProps = defaultProps;

export default TabRollup;
