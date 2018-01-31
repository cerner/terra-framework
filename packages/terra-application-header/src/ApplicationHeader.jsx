import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AppDelegate from 'terra-app-delegate';
import RoutingStackDelegate from 'terra-navigation-layout/lib/routing/RoutingStackDelegate';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import { ApplicationHeaderUtility } from 'terra-application-utility';
import { ApplicationHeaderName } from 'terra-application-name';
import { ApplicationTabs } from 'terra-application-links';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import Button from 'terra-button';
import Popup from 'terra-popup';

import 'terra-base/lib/baseStyles';

import styles from './ApplicationHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: AppDelegate.propType.isRequired,
  /**
   * Enables animations for panel state transitions.
   */
  applicationLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  /**
   * Enables animations for panel state transitions.
   */
  nameConfig: PropTypes.shape({
    accessory: PropTypes.string,
    title: PropTypes.element,
  }),
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  layoutConfig: PropTypes.shape({
    size: PropTypes.string,
    toggleMenu: PropTypes.bool,
    menuIsOpen: PropTypes.bool,
    togglePin: PropTypes.bool,
    menuIsPinned: PropTypes.bool,
  }).isRequired,
  /**
   * Enables animations for panel state transitions.
   */
  routingStackDelegate: RoutingStackDelegate.propType,
  /**
   * Enables animations for panel state transitions.
   */
  utilityConfig: PropTypes.shape({
    userName: PropTypes.string,
    userPhoto: PropTypes.element,
    userDetails: PropTypes.string,
    onUtilityChange: PropTypes.func,
  }).isRequired,
};

const defaultProps = {
  applicationLinks: [],
  layoutConfig: {},
  utilityConfig: {},
};

class ApplicationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.onDiscloseUtilty = this.onDiscloseUtilty.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.getTargetRef = this.getTargetRef.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.state = { isUtilityOpen: false };
  }

  onDiscloseUtilty(utility) {
    if (this.props.app && utility && !this.state.isUtilityOpen) {
      this.popupContent = utility;
      this.setState({ isUtilityOpen: true });
    }
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  getTargetRef() {
    if (this.contentNode) {
      this.contentNode.querySelector('[data-application-header-utility]');
    }
  }

  handleRequestClose() {
    this.popupContent = null;
    this.setState({ isUtilityOpen: false });
  }

  render() {
    const {
      app,
      applicationLinks,
      layoutConfig,
      nameConfig,
      routingStackDelegate,
      utilityConfig,
      ...customProps
    } = this.props;

    const headerClassNames = cx([
      'application-header',
      customProps.className,
    ]);

    let toggle;
    if (layoutConfig.toggleMenu) {
      toggle = (
        <div className={cx('toolbar-toggle')}>
          <Button className={cx('toggle-button')} variant="link" icon={<IconMenu />} onClick={layoutConfig.toggleMenu} />
        </div>
      );
    }

    let appName;
    if (nameConfig.accessory || nameConfig.title) {
      appName = <ApplicationHeaderName accessory={nameConfig.accessory} title={nameConfig.title} />;
    }

    let navigation;
    if (applicationLinks.length) {
      navigation = <ApplicationTabs links={applicationLinks} />;
    }

    const utilities = <ApplicationHeaderUtility {...utilityConfig} onDiscloseUtilityMenu={this.onDiscloseUtilty} data-application-header-utility />;

    let popup;
    if (this.popupContent) {
      popup = (
        <Popup
          contentAttachment="top center"
          contentHeight="auto"
          contentWidth="240"
          isArrowDisplayed
          isOpen={this.state.isUtilityOpen}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getTargetRef}
        >
          {this.popupContent}
        </Popup>
      );
    }

    return (
      <div {...customProps} className={headerClassNames} ref={this.setContentNode}>
        <ApplicationHeaderLayout
          toggle={toggle}
          logo={appName}
          navigation={navigation}
          utilities={utilities}
        />
        {popup}
      </div>
    );
  }
}

ApplicationMenu.propTypes = propTypes;
ApplicationMenu.defaultProps = defaultProps;

export default ApplicationMenu;
