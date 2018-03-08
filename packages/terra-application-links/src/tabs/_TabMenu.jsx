import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import { Switch, Route } from 'react-router-dom';
import TabMenuList from './_TabMenuList';
import TabMenuDisplay from './_TabMenuDisplay';
import TabUtils from './_TabUtils';

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
   * Ref callback for menu button.
   */
  refCallback: PropTypes.func,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

const createRouteDisplay = (props, key, path, text, isSelected) => (
  <Route
    path={path}
    key={key}
    render={() => (
      <TabMenuDisplay
        {...props}
        text={text}
        isSelected={isSelected}
      />
    )}
  />
);

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

  componentDidUpdate() {
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

    if (this.props.refCallback) {
      this.props.refCallback(node);
    }
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
    if ((event.nativeEvent.keyCode === TabUtils.KEYCODES.ENTER || event.nativeEvent.keyCode === TabUtils.KEYCODES.SPACE) && !this.state.isOpen) {
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

  createRoutes(popup) {
    const props = {
      role: 'tab',
      tabIndex: '0',
      onClick: this.handleOnClick,
      onKeyDown: this.handleOnKeyDown,
      popup,
      refCallback: this.setTargetRef,
      isHidden: this.props.isHidden,
      'data-application-tabs-more': true,
    };

    const routes = this.props.children.map(child => (
      createRouteDisplay(props, child.props.path, child.props.path, child.props.text, true)
    ));

    const { intl } = this.context;
    const moreText = intl.formatMessage({ id: 'Terra.application.tabs.more' });
    routes.push(createRouteDisplay(props, 'menu-display-more', undefined, moreText, false));

    return routes;
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

    return (
      <Switch>
        {this.createRoutes(popup)}
      </Switch>
    );
  }
}

TabMenu.contextTypes = contextTypes;
TabMenu.propTypes = propTypes;

export default TabMenu;
