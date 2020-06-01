import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import styles from './MenuItem.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Whether or not the menu item should display a disclosure indicator.
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
    this.textRender = this.textRender.bind(this);
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

  textRender() {
    const { intl, isSelected, text } = this.props;
    const selected = intl.formatMessage({ id: 'Terra.navigation.side.menu.selected' });

    if (isSelected) {
      return (
        <Fragment>
          {text}
          <VisuallyHiddenText text={selected} />
        </Fragment>
      );
    }

    return text;
  }

  render() {
    const {
      hasChevron,
      intl,
      isSelected,
      text,
      ...customProps
    } = this.props;
    const theme = this.context;

    const itemClassNames = classNames(cx(
      'menu-item',
      { 'is-selected': isSelected },
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
      theme.className,
    ),
    customProps.className);

    return (
      <li
        className={cx('list-item')}
      >
        <div
          role="link"
          {...customProps}
          tabIndex="0"
          className={itemClassNames}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          onBlur={this.handleOnBlur}
          aria-haspopup={hasChevron}
        >
          <div className={cx('title')}>
            {this.textRender()}
          </div>
          {hasChevron && <span className={cx('chevron')}><ChevronRight /></span>}
        </div>
      </li>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.contextType = ThemeContext;

export default injectIntl(MenuItem);
