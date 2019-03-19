import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN, KEY_TAB } from 'keycode-js';
import Count from './_TabCount';
import styles from './Tabs.module.scss';

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
  notificationCount: PropTypes.number,
  /**
   * Boolean indicating whether or not the Tab should render as active.
   */
  isActive: PropTypes.bool,
  refCallback: PropTypes.func,
  hasCount: PropTypes.bool,
};

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, focused: false };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.setNode = this.setNode.bind(this);
    this.listener = this.listener.bind(this);
  }

  componentDidMount() {
    if (this.node) {
      this.node.addEventListener('animationend', this.listener);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.notificationCount > prevProps.notificationCount) {
      this.node.setAttribute('data-count-pulse', 'true');
    }
  }

  setNode(node) {
    this.node = node;
  }

  listener() {
    this.node.setAttribute('data-count-pulse', 'false');
  }

  handleOnBlur() {
    this.setState({ focused: false });
  }

  handleKeyDown(event) {
    // Add active state to FF browsers
    if (event.nativeEvent.keyCode === KEY_SPACE) {
      this.setState({ active: true });
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KEY_SPACE || event.nativeEvent.keyCode === KEY_RETURN) {
      this.setState({ focused: true });

      event.preventDefault();
      this.handleOnClick(event);
    }
  }

  handleKeyUp(event) {
    // Remove active state from FF broswers
    if (event.nativeEvent.keyCode === KEY_SPACE) {
      this.setState({ active: false });
    }

    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KEY_TAB) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ focused: true });
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
      isActive,
      refCallback,
      notificationCount,
    } = this.props;

    // if props change add animations.

    let countClass = hasCount && !isCollapsed ? 'has-count' : null;
    let numberOfDigits = null;
    if (notificationCount > 0 && !isCollapsed) {
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
      { tab: !isCollapsed },
      { 'collapsed-tab': isCollapsed },
      { 'is-disabled': isActive && !isCollapsed },
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
      countClass,
    ]);
    const tabAttr = { 'aria-current': isActive };

    let ComponentClass = 'div';
    if (!isCollapsed) {
      tabAttr.role = 'link';
      ComponentClass = 'button';
    }

    return (
      <ComponentClass
        {...tabAttr}
        tabIndex="0"
        className={tabClassNames}
        onClick={this.handleOnClick}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
        ref={refCallback}
      >
        <span className={cx(['tab-inner'])}>
          <span className={cx(['tab-label'])}>{text}</span>
          {!isCollapsed && <span className={cx(['tab-label-bold'])}>{text}</span>}
          {notificationCount > 0 && <span className={cx([{ 'tab-count': !isCollapsed, 'tab-count-inline': isCollapsed }])}><Count refCallback={this.setNode} value={notificationCount} isInline={isCollapsed} tabDigits={numberOfDigits} /></span>}
        </span>
      </ComponentClass>
    );
  }
}

Tab.propTypes = propTypes;

export default Tab;
