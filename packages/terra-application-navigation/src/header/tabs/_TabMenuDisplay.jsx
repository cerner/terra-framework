import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

import { KEYCODES } from '../../utils/helpers';
import styles from './ApplicationTabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the menu display should be hidden.
   */
  isHidden: PropTypes.bool,
  /**
   * Whether or not the menu display should be animated with selection.
   */
  isSelected: PropTypes.bool,
  /**
   * Callback func for onKeyDown.
   */
  onKeyDown: PropTypes.func,
  /**
   * The terra-popup to attach to the menu display.
   */
  popup: PropTypes.node,
  /**
   * The display text for the display.
   */
  text: PropTypes.string,
  /**
   * Ref callback for menu display.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  isSelected: false,
  isHidden: false,
};

class TabMenuDisplay extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);

    this.state = { focused: false };
  }

  handleOnBlur() {
    if (!this.props.popup) {
      this.setState({ focused: false });
    }
  }

  handleKeyDown(event) {
    // Add active state to FF browsers
    if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
      this.setState({ active: true });
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KEYCODES.SPACE || event.nativeEvent.keyCode === KEYCODES.ENTER) {
      this.setState({ focused: true });

      event.preventDefault();
      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
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
  }

  render() {
    const {
      isHidden,
      isSelected,
      onKeyDown,
      popup,
      refCallback,
      text,
      ...customProps
    } = this.props;

    const displayClassNames = cx([
      'tab-menu-display',
      { 'is-hidden': isHidden },
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
      customProps.className,
    ]);
    const attributes = { 'aria-current': isSelected };

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        {...customProps}
        {...attributes}
        role="tab"
        tabIndex="0"
        className={displayClassNames}
        ref={(node) => { this.contentNode = node; this.props.refCallback(node); }}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
      >
        <div className={cx(['inner'])}>
          <span>{text}</span>
          <IconCaretDown />
        </div>
        {popup}
      </div>
      /* eslint-enable jsx-ally/no-static-element-interactions */
    );
  }
}

TabMenuDisplay.propTypes = propTypes;
TabMenuDisplay.defaultProps = defaultProps;

export default TabMenuDisplay;
