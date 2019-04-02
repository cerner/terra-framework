import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import KeyCode from 'keycode-js';
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

  icon: PropTypes.node,
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
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: true });
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ focused: true });

      event.preventDefault();
      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
    }
  }

  handleKeyUp(event) {
    // Remove active state from FF broswers
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: false });
    }

    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
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
      icon,
      ...customProps
    } = this.props;

    const hasIcon = !!icon;

    const displayClassNames = cx([
      'tab-menu-display',
      { 'is-hidden': isHidden },
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
      customProps.className,
    ]);
    const attributes = { 'aria-current': isSelected };

    const moreButtonClassNames = cx([
      'tab-inner',
      { 'tab-inner-with-icon': hasIcon },
    ]);

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
        <div className={moreButtonClassNames}>
          {hasIcon && <span className={cx(['tab-menu-display-icon'])}>{icon}</span>}
          <div className={cx(['tab-menu-display-label'])}>
            <span>{text}</span>
            <IconCaretDown />
          </div>
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
