import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
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
   * The number of notifications to be displayed for the tab.
   */
  notificationCount: PropTypes.number,
  /**
   * Boolean indicating whether or not the Tab should render as active.
   */
  isActive: PropTypes.bool,
  /**
   * Callback function for the tab node.
   */
  refCallback: PropTypes.func,
  /**
   * An option icon for tab.
   */
  icon: PropTypes.element,
};

class CollpasedTab extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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
      text,
      icon,
      isActive,
      refCallback,
      notificationCount,
    } = this.props;

    const tabClassNames = cx([
      'collapsed-tab',
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
        data-item-show-focus
        onBlur={(event) => {
          event.currentTarget.setAttribute('data-item-show-focus', 'true');
        }}
        onMouseDown={(event) => {
          event.currentTarget.setAttribute('data-item-show-focus', 'false');
        }}
        ref={refCallback}
      >
        <span className={cx(['collapsed-inner'])}>
          <div className={cx(['collapsed-check', { 'is-active': isActive }])} />
          {!!icon && <div className={cx(['collapsed-icon'])}>{icon}</div>}
          <span className={cx(['collapsed-label'])}>{text}</span>
          {notificationCount > 0 && <span className={cx('collapsed-count')}><Count value={notificationCount} isInline /></span>}
        </span>
      </div>
    );
  }
}

CollpasedTab.propTypes = propTypes;

export default CollpasedTab;
