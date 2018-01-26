import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import { Switch, Route } from 'react-router-dom';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import styles from './ApplicationTabs.scss';
import ApplicationTabMenuContent from './_ApplicationTabMenuContent';
import ApplicationTabUtils from './ApplicationTabUtils';
import MenuButton from './_MenuButton';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Ref callback for menu toggle.
   */
  children: PropTypes.node,
  /**
   * Ref callback for menu toggle.
   */
  isHidden: PropTypes.bool,
  /**
   * Ref callback for menu toggle.
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
      'data-terra-tabs-menu': true,
    };

    if (this.props.isHidden) {
      props.style = { display: 'none' };
    }

    const routes = this.props.children.map(child => (
      <Route
        path={child.props.path}
        key={child.props.path}
        render={() => (
          <MenuButton {...props} text={child.props.text} popup={popup} refCallback={this.setTargetRef} />
        )}
      />
    ));

    const { intl } = this.context;
    const menuToggleText = intl.formatMessage({ id: 'Terra.application.tabs.more' });
    routes.push(
      <Route
        key={'application-tab-more'}
        render={() => (
          <div {...props} className={cx(['tab-menu'])} ref={this.setTargetRef}>
            <span>{menuToggleText}</span>
            <IconCaretDown />
            {popup}
          </div>
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
