import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import KeyCode from 'keycode-js';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';

import styles from './MenuItem.module.scss';

/** Warning! The below logic should be used for edge cases only.
 * This user agent detection exists to fix an issue with Voiceover on mobile Safari vs desktop Safari.
 * Mobile Safari detects aria-selected, while desktop Safari does not. In order to support a11y standards
 * This allows us to conditionally toggle aria-selected on a menu item, and use aria-label to announce the selection state.
 * Fixes https://github.com/cerner/terra-framework/issues/284
 * */
const isSafari = (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1);

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the menu item should display a disclosure idicator.
   * */
  hasChevron: PropTypes.bool,
  /**
   * @private
   * Internationalization object with translation APIs. Provided by `injectIntl`.
   */
  intl: intlShape.isRequired,
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
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: true });
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ focused: true });
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
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

    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  }

  render() {
    const {
      hasChevron,
      intl,
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

    const selected = intl.formatMessage({ id: 'Terra.navigation.side.menu.selected' });

    /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */
    return (
      <li
        className={cx('list-item')}
        role="presentation"
      >
        <div
          aria-selected={isSafari ? false : isSelected} // Mobile safari detects both aria-selected & aria-label. Desktop does not. This stops mobile from announcing selected twice.
          role="option"
          aria-label={isSelected ? `${selected} ${text}` : text}
          {...customProps}
          tabIndex="0"
          className={itemClassNames}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          onBlur={this.handleOnBlur}
        >
          <div aria-hidden className={cx('title')}>
            {text}
          </div>
          {hasChevron && <span className={cx('chevron')}><ChevronRight /></span>}
        </div>
      </li>
    );
    /* eslint-enable jsx-ally/no-static-element-interactions */
  }
}

MenuItem.propTypes = propTypes;

export default injectIntl(MenuItem);
