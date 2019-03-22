import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import Count from './_TabCount';

import styles from './Tab.module.scss';

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
  /**
   * Ref callback for menu display.
   */
  showNotificationRollup: PropTypes.bool,
  /**
   * Ref callback for menu display.
   */
  isPulsed: PropTypes.bool,
};

const defaultProps = {
  isPulsed: false,
  isSelected: false,
  isHidden: false,
  showNotificationRollup: false,
};

class TabMenuDisplay extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KEY_SPACE || event.nativeEvent.keyCode === KEY_RETURN) {
      event.preventDefault();
      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
    }
  }

  render() {
    const {
      isHidden,
      isSelected,
      onKeyDown,
      popup,
      refCallback,
      showNotificationRollup,
      text,
      isPulsed,
      ...customProps
    } = this.props;

    const displayClassNames = cx([
      'tab-menu-display',
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
        ref={refCallback}
        onKeyDown={this.handleKeyDown}
        data-item-show-focus
        onBlur={(event) => {
          event.currentTarget.setAttribute('data-item-show-focus', 'true');
        }}
        onMouseDown={(event) => {
          event.currentTarget.setAttribute('data-item-show-focus', 'false');
        }}
      >
        <div className={cx(['tab-inner'])}>
          <div className={cx(['tab-menu-display-label'])}>
            <span className={cx(['tab-menu-display-text'])}>{text}</span>
            {showNotificationRollup && <Count className={cx(['tab-menu-count'])} value={isPulsed ? 1 : 0} isRollup />}
            <IconCaretDown className={cx(['tab-menu-display-icon'])} />
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
