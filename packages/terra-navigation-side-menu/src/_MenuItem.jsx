import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { IconDocuments, IconFolder } from 'terra-icon';
import VARIANTS from './constants';

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
   * tabIndex for the menu item.
   * */
  tabIndex: PropTypes.string,
  /**
   * @private
   * The icon to display to the left for the menu item.
   */
  icon: PropTypes.element,
  /**
   * If enabled, this prop will show the icon to the left for the menu item.
   */
  showIcon: PropTypes.bool,
  /**
   * Renders either Navigation Side Menu or Drill-IN
   */
  variant: PropTypes.oneOf([VARIANTS.NAVIGATION_SIDE_MENU, VARIANTS.DRILL_IN]),
  /**
   * Indicates if menu item should be disabled.
   */
  isDisabled: PropTypes.bool,
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
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      // Add active state to FF browsers
      this.setState({ active: true });
      this.props.onKeyDown(event);
    }

    if (event && event.nativeEvent) {
      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
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
      isDisabled,
      text,
      icon,
      variant,
      ...customProps
    } = this.props;
    const theme = this.context;

    const itemIcon = hasChevron && !icon ? <IconFolder /> : (icon || <IconDocuments />);

    const itemClassNames = classNames(cx(
      'menu-item',
      { 'is-selected': isSelected && !hasChevron },
      { 'is-active': this.state.active },
      { 'is-drill-in': (variant === VARIANTS.DRILL_IN) },
      theme.className,
    ),
    customProps.className);

    const listItemClassNames = cx(
      'list-item',
      { 'has-border': (variant === VARIANTS.DRILL_IN) },
      { 'is-disabled': isDisabled },
    );

    return (
      <li
        className={listItemClassNames}
        role="none"
      >
        <div
          role="menuitem"
          ref={this.handleMenuItemRef}
          {...customProps}
          tabIndex={this.props.tabIndex}
          className={itemClassNames}
          onKeyDown={this.handleKeyDown}
          aria-haspopup={hasChevron}
        >
          {variant === VARIANTS.DRILL_IN && itemIcon && <span className={cx('icon')}>{itemIcon}</span>}
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
