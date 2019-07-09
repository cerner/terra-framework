import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import TabCount from './_TabCount';
import { enableFocusStyles, disableFocusStyles, generateKeyDownSelection } from '../utils/helpers';

import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The display text for the tab.
   */
  text: PropTypes.string.isRequired,
  /**
   * The selection callback for the tab.
   */
  onTabSelect: PropTypes.func,
  /**
   * The number of notifications to be displayed for the tab.
   */
  notificationCount: PropTypes.number,
  /**
   * Boolean indicating whether or not the Tab should render as active.
   */
  isActive: PropTypes.bool,
  /**
   * Boolean indicating whether or not the tab is a placeholder for height calculation.
   */
  isPlaceholder: PropTypes.bool,
  /**
   * Ref object that will be updated with a reference to the Tab's root element.
   */
  tabRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  /**
   * Boolean indicating whether or not the Tab should account for count spacing.
   */
  hasCount: PropTypes.bool,
  /**
   * Render prop for dynamic tab contents.
   */
  render: PropTypes.func,
};

const Tab = ({
  text,
  hasCount,
  isActive,
  isPlaceholder,
  tabRef,
  render,
  notificationCount,
  onTabSelect,
}) => {
  function renderTabContent() {
    if (render) {
      return render({
        text,
        hasCount,
        isActive,
        notificationCount,
      });
    }

    return (
      <div aria-hidden className={cx('tab-inner')}>
        <span aria-hidden className={cx('tab-label')}>{text}</span>
        {notificationCount > 0 && <span className={cx('tab-count')}><TabCount value={notificationCount} /></span>}
      </div>
    );
  }

  let validatedValue = notificationCount;
  if (validatedValue > 99) {
    validatedValue = '99+';
  }

  return (
    <div
      type="button"
      role="link"
      tabIndex="0"
      className={cx(
        'tab',
        { 'is-disabled': isActive },
        { 'is-placeholder': !render && isPlaceholder },
        { 'has-count': !render && hasCount },
      )}
      onClick={!isActive ? onTabSelect : undefined}
      onKeyDown={!isActive ? generateKeyDownSelection(onTabSelect) : undefined}
      onBlur={enableFocusStyles}
      onMouseDown={disableFocusStyles}
      ref={tabRef}
      aria-current={isActive}
      aria-hidden={isPlaceholder}
      data-focus-styles-enabled
      aria-label={validatedValue ? `${text} ${validatedValue}` : text}
    >
      {renderTabContent()}
    </div>
  );
};

Tab.propTypes = propTypes;

export default Tab;
