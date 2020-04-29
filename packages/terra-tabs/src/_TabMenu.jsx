import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import { handleArrows } from './_TabUtils';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Tabs that should be displayed collapsed as selectable menu items.
   */
  children: PropTypes.node,

  /**
   * Ref callback for menu toggle.
   */
  refCallback: PropTypes.func,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

class TabMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
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

  getTargetRef() {
    return this.targetRef;
  }

  setTargetRef(node) {
    this.targetRef = node;

    if (this.props.refCallback) {
      this.props.refCallback(node);
    }
  }

  handleOnRequestClose() {
    this.setState({ isOpen: false });
  }

  handleOnClick() {
    this.setState({ isOpen: true });
  }

  handleOnKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      this.setState({ isOpen: true });
    } else {
      handleArrows(event);
    }
  }

  wrapOnClick(child, metaData) {
    return (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (child.props.onSelect) {
        child.props.onSelect(metaData);
      }

      this.setState({ isOpen: false });
    };
  }

  render() {
    const { intl } = this.context;
    const menuItems = [];
    let menuToggleText = intl.formatMessage({ id: 'Terra.tabs.more' });
    let menuActive = false;

    React.Children.forEach(this.props.children, (child) => {
      const {
        label, customDisplay, icon, isIconOnly, isSelected, metaData, ...otherProps
      } = child.props;

      if (isSelected) {
        menuToggleText = label;
        menuActive = true;
      }
      menuItems.push((
        <Menu.Item
          {...otherProps}
          text={label}
          onClick={this.wrapOnClick(child, metaData)}
          isSelected={isSelected}
          isSelectable
          key={child.key}
        />
      ));
    });

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        role="button"
        tabIndex={menuActive ? '0' : '-1'}
        ref={this.setTargetRef}
        onClick={this.handleOnClick}
        onKeyDown={this.handleOnKeyDown}
        className={cx(['tab-menu', { 'is-active': menuActive }])}
        data-terra-tabs-menu
      >
        <span>{menuToggleText}</span>
        <IconCaretDown />
        <Menu
          onRequestClose={this.handleOnRequestClose}
          targetRef={this.getTargetRef}
          isOpen={this.state.isOpen}
        >
          {menuItems}
        </Menu>
      </div>
      /* eslint-enable jsx-ally/no-static-element-interactions */
    );
  }
}

TabMenu.contextTypes = contextTypes;
TabMenu.propTypes = propTypes;

export default TabMenu;
