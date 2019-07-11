import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import { injectIntl, intlShape } from 'react-intl';

import TabCount from './_TabCount';
import { enableFocusStyles, disableFocusStyles, generateKeyDownSelection } from '../utils/helpers';

import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
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
   * Ref object that will be updated with a reference to the TabRollup's inner element.
   */
  innerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  /**
   * Ref object that will be updated with a reference to the TabRollup's root element.
   */
  tabRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  /**
   * Should the count notification be displayed on the menu display.
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
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: intlShape,
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
  innerRef,
  tabRef,
  hasChildNotifications,
  text,
  isPulsed,
  intl,
}) => {
  let ariaLabel = intl.formatMessage({ id: 'Terra.applicationNavigation.tabs.rollupButtonDescription' });
  if (hasChildNotifications) {
    ariaLabel = `${ariaLabel} ${intl.formatMessage({ id: 'Terra.applicationNavigation.notifications.new' })}`;
  }

  return (
    <div
      type="button"
      role="link"
      tabIndex="0"
      className={cx(
        'tab-rollup',
        { 'has-count': hasCount },
      )}
      onClick={onTabSelect}
      onKeyDown={generateKeyDownSelection(onTabSelect)}
      onBlur={enableFocusStyles}
      onMouseDown={disableFocusStyles}
      ref={tabRef}
      aria-current={isSelected}
      aria-haspopup
      data-focus-styles-enabled
      aria-label={ariaLabel}
    >
      <div aria-hidden className={cx('tab-inner')} data-tab-menu-inner>
        <div id={`terra-navigation-link-${text}`} className={cx('tab-rollup-label')} ref={innerRef}>
          {<span className={cx('tab-rollup-text')}>{text}</span>}
          {hasChildNotifications && <span className={cx('tab-count')}><TabCount value={isPulsed ? 1 : 0} isRollup /></span>}
          <IconCaretDown className={cx('tab-rollup-icon')} />
        </div>
      </div>
    </div>
  );
};

TabRollup.propTypes = propTypes;
TabRollup.defaultProps = defaultProps;

export default injectIntl(TabRollup);
