import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN, KEY_TAB } from 'keycode-js';
import Count from './_TabCount';
import styles from './CollapsedTab.module.scss';

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
  icon: PropTypes.element,
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
      text,
      icon,
      isActive,
      refCallback,
      notificationCount,
    } = this.props;

    const tabClassNames = cx([
      'collapsed-tab',
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
    ]);
    const tabAttr = { 'aria-current': isActive };

    return (
      <div
        {...tabAttr}
        role="button"
        tabIndex="0"
        className={tabClassNames}
        onClick={this.handleOnClick}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
        ref={refCallback}
      >
        <span className={cx(['collapsed-inner'])}>
          {!!icon && <div className={cx(['collapsed-icon'])}>{icon}</div>}
          <span className={cx(['collapsed-label'])}>{text}</span>
          {notificationCount > 0 && <span className={cx('collapsed-count')}><Count refCallback={this.setNode} value={notificationCount} isInline /></span>}
        </span>
      </div>
    );
  }
}

Tab.propTypes = propTypes;

export default Tab;
