import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import Count from './_TabCount';
import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the tab is collapsed styled and present in the menu.
   */
  isCollapsed: PropTypes.bool,
  /**
   * The identifier for the tab.
   */
  tabKey: PropTypes.string.isRequired,
  /**
   * The display text for the tab.
   */
  text: PropTypes.string.isRequired,
  /**
   * The click callback of the tab.
   */
  onTabClick: PropTypes.func,
  /**
   * Boolean indicating whether or not the Tab should render as active.
   */
  notificationCount: PropTypes.number,
  /**
   * Boolean indicating whether or not the Tab should render as active.
   */
  isActive: PropTypes.bool,
  /**
   * Boolean indicating whether or not the Tab should render as active.
   */
  refCallback: PropTypes.func,
  /**
   * Boolean indicating whether or not the Tab should render as active.
   */
  hasCount: PropTypes.bool,
  /**
   * Boolean indicating whether or not the Tab should render as active.
   */
  icon: PropTypes.element,
};

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setCountNode = this.setCountNode.bind(this);
    this.listener = this.listener.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.notificationCount > prevProps.notificationCount && this.countNode) {
      this.countNode.addEventListener('animationend', this.listener);
      this.countNode.setAttribute('data-count-pulse', 'true');
    }
  }

  setCountNode(node) {
    this.countNode = node;
  }

  listener() {
    this.countNode.setAttribute('data-count-pulse', 'false');
    this.countNode.removeEventListener('animationend', this.listener);
  }

  handleKeyDown(event) {
    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KEY_SPACE || event.nativeEvent.keyCode === KEY_RETURN) {
      event.preventDefault();
      this.handleOnClick(event);
    }
  }

  handleOnClick() {
    if (this.props.onTabClick) {
      this.props.onTabClick(this.props.tabKey);
    }
  }

  render() {
    const {
      isCollapsed,
      text,
      hasCount,
      icon,
      isActive,
      refCallback,
      notificationCount,
    } = this.props;

    let countClass = hasCount ? 'has-count' : null;
    let numberOfDigits = null;
    if (notificationCount > 0) {
      if (notificationCount < 10) {
        countClass = 'has-one-digit';
        numberOfDigits = 'one';
      } else if (notificationCount < 100) {
        countClass = 'has-two-digit';
        numberOfDigits = 'two';
      } else {
        countClass = 'has-plus-digit';
        numberOfDigits = 'plus';
      }
    }

    const tabClassNames = cx([
      'tab',
      { 'is-disabled': isActive && !isCollapsed },
      { 'has-icon': !!icon },
      countClass,
    ]);
    const tabAttr = { 'aria-current': isActive };

    return (
      <button
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
        <span className={cx(['tab-inner'])}>
          {!!icon && <span className={cx('tab-icon')}>{icon}</span>}
          <span className={cx(['tab-label'])}>{text}</span>
          {!isCollapsed && <span className={cx(['tab-label-bold'])}>{text}</span>}
          {notificationCount > 0 && <span className={cx('tab-count')}><Count refCallback={this.setCountNode} value={notificationCount} tabDigits={numberOfDigits} /></span>}
        </span>
      </button>
    );
  }
}

Tab.propTypes = propTypes;

export default Tab;
