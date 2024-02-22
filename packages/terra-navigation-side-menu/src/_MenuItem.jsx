import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
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
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
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
  /**
   * @private
   * Menu container Ref for menu items
   * */
  getMenuContainerRef: PropTypes.func,
};

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.textRender = this.textRender.bind(this);
    this.handleMenuItemRef = this.handleMenuItemRef.bind(this);
  }

  handleKeyDown(event) {
    const MenuContainerRef = this.props.getMenuContainerRef();
    const listMenuItems = MenuContainerRef && MenuContainerRef.querySelectorAll('[data-menu-item]');
    const currentIndex = Array.from(listMenuItems).indexOf(event.target);
    const lastIndex = listMenuItems.length - 1;

    if (event.nativeEvent.keyCode === KeyCode.KEY_DOWN) {
      const nextIndex = currentIndex < lastIndex ? currentIndex + 1 : 0;
      if (listMenuItems && listMenuItems[nextIndex]) {
        listMenuItems[nextIndex].focus();
      }
      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
      event.preventDefault();
    }

    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      // Add active state to FF browsers
      this.setState({ active: true });
      this.props.onKeyDown(event);
    }

    if (event.nativeEvent.keyCode === KeyCode.KEY_UP) {
      // Remove active state from FF broswers
      if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        this.setState({ active: false });
      }
      const previousIndex = currentIndex > 0 ? currentIndex - 1 : lastIndex;
      if (listMenuItems && listMenuItems[previousIndex]) {
        listMenuItems[previousIndex].focus();
      }
      if (this.props.onKeyUp) {
        this.props.onKeyUp(event);
      }
      event.preventDefault();
    }
  }

  handleMenuItemRef(node) {
    this.contentNode = node;
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
      theme.className,
    ),
    customProps.className);

    return (
      <li
        className={cx('list-item')}
        role="none"
      >
        <div
          role="menuitem"
          ref={this.handleMenuItemRef}
          {...customProps}
          tabIndex="0"
          className={itemClassNames}
          onKeyDown={this.handleKeyDown}
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
