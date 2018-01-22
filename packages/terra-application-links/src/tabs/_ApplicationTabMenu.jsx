import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import { Switch, Route } from 'react-router-dom';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import styles from './ApplicationTabs.scss';
import ApplicationTabMenuContent from './_ApplicationTabMenuContent';
import ApplicationTabUtils from './ApplicationTabUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Ref callback for menu toggle.
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

  createRoutes() {
    const routes = this.props.children.map(child => (
      <Route
        path={child.props.path}
        key={child.props.path}
        render={() => (
          <span>{child.props.text}</span>
        )}
      />
    ));

    const { intl } = this.context;
    const menuToggleText = intl.formatMessage({ id: 'Terra.application.tabs.more' });
    routes.push(
      <Route
        key={'application-tab-more'}
        render={() => (
          <span>{menuToggleText}</span>
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
    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        role="button"
        tabIndex="0"
        ref={this.setTargetRef}
        onClick={this.handleOnClick}
        onKeyDown={this.handleOnKeyDown}
        className={cx(['tab-menu'])}
        data-terra-tabs-menu
      >
        <Switch>
          {this.createRoutes()}
        </Switch>
        <IconCaretDown data-applicaiton-tabs-chevron />
        <Popup
          contentAttachment="bottom right"
          contentHeight="auto"
          contentWidth="240"
          onRequestClose={this.handleOnRequestClose}
          targetRef={this.getTargetRef}
          isOpen={this.state.isOpen}
        >
          {this.createHiddenTabs()}
        </Popup>
      </div>
      /* eslint-enable jsx-ally/no-static-element-interactions */
    );
  }
}

ApplicationTabMenu.contextTypes = contextTypes;
ApplicationTabMenu.propTypes = propTypes;

export default ApplicationTabMenu;
