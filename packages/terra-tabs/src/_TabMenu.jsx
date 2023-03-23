import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Menu from 'terra-menu';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import * as KeyCode from 'keycode-js';
import { FormattedMessage, injectIntl } from 'react-intl';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import uuidv4 from 'uuid/v4';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Key of the current active tab.
   */
  activeKey: PropTypes.string,

  /**
   * Tabs that should be displayed collapsed as selectable menu items.
   */
  children: PropTypes.node,

  /**
   * Ref callback for menu toggle.
   */
  refCallback: PropTypes.func,

  /**
   * The current active tab
   */
  selectedTab: PropTypes.element,

  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

class TabMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.getTargetRef = this.getTargetRef.bind(this);
    this.setTargetRef = this.setTargetRef.bind(this);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  handleOnRequestClose() {
    this.setState({ isOpen: false });
  }

  handleOnClick() {
    this.setState({ isOpen: true });
  }

  handleOnKeyDown(event) {
    if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_DOWN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ isOpen: true });
    }
  }

  getTargetRef() {
    return this.targetRef;
  }

  setTargetRef(node) {
    this.targetRef = node;

    if (this.props.refCallback) {
      this.props.refCallback(node);
    }
  }

  wrapOnClick(child) {
    return (event) => {
      event.stopPropagation();

      if (child.props.onClick) {
        child.props.onClick(event);
      }

      this.setState({ isOpen: false });
    };
  }

  render() {
    const menuItems = [];
    let menuActive = false;
    let toggleText;

    React.Children.forEach(this.props.children, (child) => {
      const {
        label, customDisplay, icon, isIconOnly, showIcon, ...otherProps
      } = child.props;
      let isSelected = false;

      if (this.props.activeKey === child.key) {
        toggleText = label;
        isSelected = true;
        menuActive = true;
      }

      menuItems.push((
        <Menu.Item
          {...otherProps}
          text={label}
          onClick={this.wrapOnClick(child)}
          key={child.key}
          icon={(showIcon) ? icon : null}
          isHighlighted={isSelected}
        />
      ));
    });

    const theme = this.context;
    let icon = null;
    // allow icon to be displayed on the tab, but not for the 'More' dropdown tab
    if (toggleText && this.props.selectedTab) {
      if (this.props.selectedTab.props.icon && this.props.selectedTab.props.showIcon) {
        icon = <div className={cx('active-tab-icon')}>{this.props.selectedTab.props.icon}</div>;
      }
    }

    const hiddenTabsCount = menuItems.length;
    const buttonHintId = `terra-tabs-button-interaction-hint-${uuidv4()}`;
    const buttonHint = this.props.intl.formatMessage({ id: 'Terra.tabs.hint.tabMenu' }, { hiddenTabs: hiddenTabsCount });

    return (
      <>
        <div
          role="button"
          tabIndex="0"
          ref={this.setTargetRef}
          onClick={this.handleOnClick}
          onKeyDown={this.handleOnKeyDown}
          className={cx('tab-menu', { 'is-active': menuActive }, theme.className)}
          data-terra-tabs-menu
          aria-hidden="true"
          aria-describedby={buttonHintId}
        >
          {icon}
          <FormattedMessage id="Terra.tabs.more">
            {menuToggleText => (
              <span>{toggleText || menuToggleText}</span>
            )}
          </FormattedMessage>
          <IconCaretDown />
          <Menu
            onRequestClose={this.handleOnRequestClose}
            targetRef={this.getTargetRef}
            isOpen={this.state.isOpen}
          >
            {menuItems}
          </Menu>
        </div>
        <VisuallyHiddenText
          aria-live="polite"
          id={buttonHintId}
          text={buttonHint}
          aria-hidden="true"
        />
      </>
    );
  }
}

TabMenu.propTypes = propTypes;
TabMenu.contextType = ThemeContext;

export default injectIntl(TabMenu);
