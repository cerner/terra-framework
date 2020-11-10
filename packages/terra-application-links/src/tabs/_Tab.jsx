import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { matchPath } from 'react-router-dom';
import * as KeyCode from 'keycode-js';
import styles from './ApplicationTabs.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The optional external link. Executes on window.open();
   */
  externalLink: PropTypes.shape({
    path: PropTypes.string.isRequired,
    target: PropTypes.string,
  }),
  /**
   * The history as provided by the `withRouter()` HOC.
   */
  history: PropTypes.object.isRequired,
  /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: PropTypes.object.isRequired,
  /**
   * The path to push to the route.
   */
  path: PropTypes.string.isRequired,
  /**
   * The display text for the tab.
   */
  text: PropTypes.string.isRequired,
  /**
   * The click callback of the tab.
   */
  onTabClick: PropTypes.func,
  /**
   * The display icon for the tab
   */
  icon: PropTypes.node,
};

class ApplicationTab extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false, focused: false };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.isCurrentPath = this.isCurrentPath.bind(this);
  }

  handleOnBlur() {
    this.setState({ focused: false });
  }

  handleKeyDown(event) {
    // Add active state to FF browsers
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: true });
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ focused: true });

      event.preventDefault();
      this.handleOnClick(event);
    }
  }

  handleKeyUp(event) {
    // Remove active state from FF broswers
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: false });
    }

    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ focused: true });
    }
  }

  handleOnClick(event) {
    if (this.props.externalLink) {
      window.open(this.props.externalLink.path, this.props.externalLink.target || '_blank');
      if (this.props.onTabClick) {
        this.props.onTabClick(event);
      }
      return;
    }

    if (!this.isCurrentPath()) {
      this.props.history.push(this.props.path);
    } else if (this.props.onTabClick) {
      this.props.onTabClick(event);
    }
  }

  isCurrentPath() {
    return !!matchPath(this.props.location.pathname, { path: this.props.path });
  }

  render() {
    const {
      externalLink,
      history,
      location,
      onTabClick,
      path,
      text,
      icon,
      ...customProps
    } = this.props;

    const { active, focused } = this.state;

    const isCollapsed = false;
    const hasIcon = !!icon;
    const isCurrent = this.isCurrentPath();

    const theme = this.context;

    const tabClassNames = classNames(cx(
      'tab',
      { 'tab-with-icon': hasIcon },
      { 'is-disabled': isCurrent && !isCollapsed },
      { 'is-active': active },
      { 'is-focused': focused },
      theme.className,
    ),
    customProps.className);
    const tabAttr = { 'aria-current': isCurrent };

    const childrenClassNames = cx(
      'tab-inner',
      { 'tab-inner-with-icon': hasIcon },
    );
    const ChildElement = hasIcon ? 'div' : 'span';

    return (
      <button
        {...customProps}
        {...tabAttr}
        role="link"
        type="button"
        tabIndex="0"
        className={tabClassNames}
        onClick={this.handleOnClick}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
      >
        <ChildElement className={childrenClassNames}>
          {hasIcon && <span className={cx('tab-icon')}>{icon}</span>}
          <span className={cx('tab-label')}>{text}</span>
        </ChildElement>
      </button>
    );
  }
}

ApplicationTab.propTypes = propTypes;
ApplicationTab.contextType = ThemeContext;

export default ApplicationTab;
