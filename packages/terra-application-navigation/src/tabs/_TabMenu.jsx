import React from 'react';
import PropTypes from 'prop-types';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import Popup from 'terra-popup';

import TabMenuList from './_TabMenuList';
import TabMenuDisplay from './_TabMenuDisplay';

const propTypes = {
  /**
   * Child tabs to be placed in the tab menu.
   */
  children: PropTypes.array,
  /**
   * Should the menu be hidden, set to true if there are no hidden items.
   */
  isHidden: PropTypes.bool,
  /**
   * A string identifying the currently active tab.
   */
  activeTabKey: PropTypes.string,
  /**
   * Callback for the ref of the TabMenuDisplay.
   */
  menuRefCallback: PropTypes.func,
  /**
   * Should the count notificaiton be displayed on the menu display.
   */
  showNotificationRollup: PropTypes.bool,
  /**
   * Whether or not the notification should pulse animate.
   */
  isPulsed: PropTypes.bool,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
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
    this.state = {
      isOpen: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeTabKey !== this.props.activeTabKey) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isOpen: false });
    }
  }

  getTargetRef() {
    return this.targetRef;
  }

  setTargetRef(node) {
    this.targetRef = node;
  }

  handleOnRequestClose() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  handleOnClick() {
    if (!this.state.isOpen) {
      this.setState({ isOpen: true });
    }
  }

  handleOnKeyDown(event) {
    if ((event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) && !this.state.isOpen) {
      this.setState({ isOpen: true });
    }
  }

  createHiddenTabs() {
    return (
      <TabMenuList>
        {React.Children.map(this.props.children, child => React.cloneElement(child, {
          onTabClick: (key) => {
            if (child.props.onTabClick) {
              child.props.onTabClick(key);
            }

            this.handleOnRequestClose();
          },
        }))}
      </TabMenuList>
    );
  }

  createDisplay(popup) {
    const { intl } = this.context;
    const moreText = intl.formatMessage({ id: 'Terra.application.tabs.more' });
    let isSelected = false;

    const childArray = this.props.children;
    const count = childArray.length;
    for (let i = 0; i < count; i += 1) {
      const child = childArray[i];
      if (child.props.isActive) {
        // eslint-disable-next-line prefer-destructuring
        isSelected = true;
        break;
      }
    }

    return (
      <TabMenuDisplay
        isPulsed={this.props.isPulsed}
        onClick={this.handleOnClick}
        onKeyDown={this.handleOnKeyDown}
        popup={popup}
        refCallback={(node) => { this.setTargetRef(node); this.props.menuRefCallback(node); }}
        text={moreText}
        isSelected={isSelected}
        key="application-tab-more"
        data-application-tabs-more
        showNotificationRollup={this.props.showNotificationRollup}
      />
    );
  }

  render() {
    if (this.props.isHidden) {
      return null;
    }

    let popup;
    if (this.state.isOpen) {
      popup = (
        <Popup
          contentHeight="auto"
          contentWidth="240"
          onRequestClose={this.handleOnRequestClose}
          targetRef={this.getTargetRef}
          isOpen={this.state.isOpen}
          isArrowDisplayed
        >
          {this.createHiddenTabs()}
        </Popup>
      );
    }

    return this.createDisplay(popup);
  }
}

TabMenu.contextTypes = contextTypes;
TabMenu.propTypes = propTypes;

export default TabMenu;
