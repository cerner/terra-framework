import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import List from 'terra-list';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';

import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  TAB: 9,
};

const propTypes = {
  /**
   * Whether or not the menu item should display a disclosure idicator.
   * */
  hasChevron: PropTypes.bool,
  /**
   * Whether or not the menu item is selection.
   * */
  isSelected: PropTypes.bool,
  /**
   * Callback function triggered when key is pressed.
   */
  onKeyDown: PropTypes.func,
  /**
   * Callback function triggered when key is released.
   */
  onKeyUp: PropTypes.func,
  /**
   * Text display for the menu item.
   * */
  text: PropTypes.string,
};

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, focused: false };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnBlur() {
    this.setState({ focused: false });
  }

  handleKeyDown(event) {
    // Add active state to FF browsers
    if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
      this.setState({ active: true });
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KEYCODES.SPACE || event.nativeEvent.keyCode === KEYCODES.ENTER) {
      this.setState({ focused: true });
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  handleKeyUp(event) {
    // Remove active state from FF broswers
    if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
      this.setState({ active: false });
    }

    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KEYCODES.TAB) {
      this.setState({ focused: true });
    }

    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  }

  render() {
    const {
      hasChevron,
      isSelected,
      text,
      ...customProps
    } = this.props;

    const itemClassNames = cx([
      'menu-item',
      { 'is-selected': isSelected },
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
      customProps.className,
    ]);

    return (
      <List.Item
        className={cx('list-item')}
        content={(
          /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */
          <div
            {...customProps}
            tabIndex="0"
            className={itemClassNames}
            onKeyDown={this.handleKeyDown}
            onKeyUp={this.handleKeyUp}
            onBlur={this.handleOnBlur}
          >
            <div className={cx('title')}>
              {text}
            </div>
            {hasChevron && <span className={cx('chevron')}><ChevronRight /></span>}
          </div>
          /* eslint-enable jsx-ally/no-static-element-interactions */
        )}
      />
    );
  }
}

MenuItem.propTypes = propTypes;

export default MenuItem;
