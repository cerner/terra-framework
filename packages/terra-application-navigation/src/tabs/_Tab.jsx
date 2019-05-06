import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import Count from './_TabCount';
import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The identifier for the tab.
   */
  tabKey: PropTypes.string.isRequired,
  /**
   * The display text for the tab.
   */
  text: PropTypes.string.isRequired,
  /**
   * Meta data to be returned in the onSelect callback.
   */
  metaData: PropTypes.object,
  /**
   * The click callback of the tab.
   */
  onTabClick: PropTypes.func,
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
   * Callback function for the tab node.
   */
  refCallback: PropTypes.func,
  /**
   * Boolean indicating whether or not the Tab should account for count spacing.
   */
  hasCount: PropTypes.bool,
  /**
   * Render prop for dynamic tab contents.
   */
  render: PropTypes.func,
};

const getRenderTabClasses = isActive => cx([
  'tab',
  'is-custom',
  { 'is-disabled': isActive },
]);

const getDefaultTabClasses = (isActive, isPlaceholder, hasCount) => cx([
  'tab',
  { 'is-disabled': isActive },
  { 'is-placeholder': isPlaceholder },
  { 'has-count': hasCount },
]);

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KEY_SPACE || event.nativeEvent.keyCode === KEY_RETURN) {
      event.preventDefault();
      this.handleOnClick();
    }
  }

  handleOnClick() {
    if (this.props.onTabClick) {
      this.props.onTabClick(this.props.tabKey, this.props.metaData);
    }
  }

  render() {
    const {
      text,
      hasCount,
      metaData,
      isActive,
      isPlaceholder,
      refCallback,
      render,
      notificationCount,
    } = this.props;

    const tabAttr = { 'aria-current': isActive, 'aria-hidden': isPlaceholder };
    let tabClassNames;
    let tabContent;

    if (render) {
      tabClassNames = getRenderTabClasses(isActive);

      tabContent = (
        render({
          text,
          hasCount,
          metaData,
          isActive,
          notificationCount,
        })
      );
    } else {
      tabClassNames = getDefaultTabClasses(isActive, isPlaceholder, hasCount);

      tabContent = (
        <span className={cx(['tab-inner'])}>
          <span className={cx(['tab-label'])}>{text}</span>
          {notificationCount > 0 && <span className={cx('tab-count')}><Count value={notificationCount} /></span>}
        </span>
      );
    }

    return (
      <div
        {...tabAttr}
        type="button"
        role="link"
        tabIndex="0"
        className={tabClassNames}
        onClick={this.handleOnClick}
        onKeyDown={this.handleKeyDown}
        data-item-show-focus
        onBlur={(event) => {
          event.currentTarget.setAttribute('data-item-show-focus', 'true');
        }}
        onMouseDown={(event) => {
          event.currentTarget.setAttribute('data-item-show-focus', 'false');
        }}
        ref={refCallback}
      >
        {tabContent}
      </div>
    );
  }
}

Tab.propTypes = propTypes;

export default Tab;
