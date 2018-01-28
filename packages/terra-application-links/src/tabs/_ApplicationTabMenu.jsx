import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import { Switch, Route } from 'react-router-dom';
import ApplicationTabMenuContent from './_ApplicationTabMenuContent';
import ApplicationTabUtils from './ApplicationTabUtils';
import MenuButton from './_MenuButton';

const propTypes = {
  /**
   * Child tabs to be placed in the tab menu.
   */
  children: PropTypes.node,
  /**
   * Should the menu he hidden, set to true if there are no hidden items.
   */
  isMenuHidden: PropTypes.bool,
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

class ApplicationTabMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChildClick = this.handleChildClick.bind(this);
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
    if (event.nativeEvent.keyCode === ApplicationTabUtils.KEYCODES.ENTER) {
      this.setState({ isOpen: true });
    }
  }

  wrapOnClick(child) {
    return (event) => {
      if (child.props.onClick) {
        child.props.onClick(event);
      }

      this.setState({ isOpen: false });
    };
  }

  createRoutes(popup) {
    const props = {
      role: 'tab',
      tabIndex: '0',
      onClick: this.handleOnClick,
      onKeyDown: this.handleOnKeyDown,
      'data-application-tabs-more': true,
    };

    const routes = this.props.children.map(child => (
      <Route
        path={child.props.path}
        key={child.props.path}
        render={() => (
          <MenuButton {...props} text={child.props.text} popup={popup} refCallback={this.setTargetRef} isSelected isMenuHidden={this.props.isMenuHidden} />
        )}
      />
    ));

    const { intl } = this.context;
    const menuToggleText = intl.formatMessage({ id: 'Terra.application.tabs.more' });
    routes.push(
      <Route
        key={'application-tab-more'}
        render={() => (
          <MenuButton {...props} text={menuToggleText} popup={popup} refCallback={this.setTargetRef} isMenuHidden={this.props.isMenuHidden} />
        )}
      />,
    );

    return routes;
  }

  handleChildClick() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  createHiddenTabs() {
    return (
      <ApplicationTabMenuContent>
        {React.Children.map(this.props.children, child => React.cloneElement(child, { onClick: this.handleChildClick }))}
      </ApplicationTabMenuContent>
    );
  }

  render() {
    const popup = (
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
    return (
      <Switch>
        {this.createRoutes(popup)}
      </Switch>
    );
  }
}

ApplicationTabMenu.contextTypes = contextTypes;
ApplicationTabMenu.propTypes = propTypes;

export default ApplicationTabMenu;
