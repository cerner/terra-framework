import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import { matchPath } from 'react-router-dom';
import KeyCode from 'keycode-js';
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
   * The location as provided by the `withRouter()` HOC.
   */
  location: PropTypes.object.isRequired,
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
    this.shouldResetFocus = false;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isOpen: false });
    }

    if (this.shouldResetFocus && this.targetRef) {
      this.targetRef.focus();
      this.shouldResetFocus = this.targetRef !== document.activeElement;
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
      this.shouldResetFocus = true;
      this.setState({ isOpen: false });
    }
  }

  handleOnClick() {
    if (!this.state.isOpen) {
      this.setState({ isOpen: true });
    }
  }

  handleOnKeyDown(event) {
    if ((event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) && !this.state.isOpen) {
      this.setState({ isOpen: true });
    }
  }

  createHiddenTabs() {
    return (
      <TabMenuList>
        {React.Children.map(this.props.children, child => React.cloneElement(child, { onTabClick: this.handleOnRequestClose }))}
      </TabMenuList>
    );
  }

  createDisplay(popup) {
    const { intl } = this.context;
    let text = intl.formatMessage({ id: 'Terra.application.tabs.more' });
    let isSelected = false;

    const childArray = this.props.children;
    const count = childArray.length;
    for (let i = 0; i < count; i += 1) {
      const child = childArray[i];
      if (matchPath(this.props.location.pathname, { path: child.props.path })) {
        // eslint-disable-next-line prefer-destructuring
        text = child.props.text;
        isSelected = true;
        break;
      }
    }

    return (
      <TabMenuDisplay
        onClick={this.handleOnClick}
        onKeyDown={this.handleOnKeyDown}
        popup={popup}
        refCallback={this.setTargetRef}
        isHidden={this.props.isHidden}
        text={text}
        isSelected={isSelected}
        key="application-tab-more"
        data-application-tabs-more
      />
    );
  }

  render() {
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
