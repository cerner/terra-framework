import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import { matchPath } from 'react-router-dom';
import TabUtils from './_TabUtils';
import styles from './ApplicationTabs.module.scss';

const cx = classNames.bind(styles);

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
   * Whether or not the tab is collapsed styled and present in the menu.
   */
  isCollapsed: PropTypes.bool,
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
};

class ApplicationTab extends React.Component {
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
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.SPACE) {
      this.setState({ active: true });
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.SPACE || event.nativeEvent.keyCode === TabUtils.KEYCODES.ENTER) {
      this.setState({ focused: true });

      event.preventDefault();
      this.handleOnClick(event);
    }
  }

  handleKeyUp(event) {
    // Remove active state from FF broswers
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.SPACE) {
      this.setState({ active: false });
    }

    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.TAB) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ focused: true });
    }
  }

  isCurrentPath() {
    return !!matchPath(this.props.location.pathname, { path: this.props.path });
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

  render() {
    const {
      externalLink,
      history,
      isCollapsed,
      location,
      onTabClick,
      path,
      text,
      ...customProps
    } = this.props;

    const isCurrent = this.isCurrentPath();
    const tabClassNames = cx([
      { tab: !isCollapsed },
      { 'collapsed-tab': isCollapsed },
      { 'is-disabled': isCurrent && !isCollapsed },
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
      customProps.className,
    ]);
    const tabAttr = { 'aria-current': isCurrent };

    let ComponentClass = 'div';
    if (!isCollapsed) {
      tabAttr.role = 'tab';
      ComponentClass = 'button';
    }

    return (
      <ComponentClass
        {...customProps}
        {...tabAttr}
        tabIndex="0"
        className={tabClassNames}
        onClick={this.handleOnClick}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
      >
        <span className={cx(['tab-inner'])}>
          {text}
        </span>
      </ComponentClass>
    );
  }
}

ApplicationTab.propTypes = propTypes;

export default ApplicationTab;
