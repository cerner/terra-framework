import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AppDelegate from 'terra-app-delegate';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import ApplicationHeaderLayout from 'terra-application-header-layout';
// import { ApplicationHeaderUtility } from 'terra-application-utility';
import { ApplicationHeaderName } from 'terra-application-name';
import { ApplicationTabs } from 'terra-application-links';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import Button from 'terra-button';
import Popup from 'terra-popup';

import 'terra-base/lib/baseStyles';

import ApplicationHeaderUtility from './mock-components/MockApplicationUtility';

import styles from './ApplicationHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: AppDelegate.propType,
  /**
   * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
+  */
  applicationLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: PropTypes.shape({
    accessory: PropTypes.element,
    title: PropTypes.string,
  }),
  /**
   * Layout config provided from the Layout component.
   */
  layoutConfig: PropTypes.shape({
    size: PropTypes.string,
    toggleMenu: PropTypes.func,
    menuIsOpen: PropTypes.bool,
    togglePin: PropTypes.bool,
    menuIsPinned: PropTypes.bool,
  }).isRequired,
  /**
   * Delegate prop that is padded by the NavigationLayout.
   */
  routingStackDelegate: RoutingStackDelegate.propType,
  /**
   * Configuration to be provided to the ApplicationUtility component.
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
};

class ApplicationHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onDiscloseUtilty = this.onDiscloseUtilty.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.getTargetRef = this.getTargetRef.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.state = { utilityComponent: null };
  }

  onDiscloseUtilty(utility) {
    if (utility) {
      this.setState({ utilityComponent: utility });
    }
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  getTargetRef() {
    if (this.contentNode) {
      return this.contentNode.querySelector('[data-application-header-utility]');
    }
    return undefined;
  }

  handleRequestClose() {
    this.setState({ utilityComponent: null });
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
    if (this.state.utilityComponent) {
      popup = (
        <Popup
          contentAttachment="top center"
          contentHeight="auto"
          contentWidth="240"
          isArrowDisplayed
          isOpen
          onRequestClose={this.handleRequestClose}
          targetRef={this.getTargetRef}
        >
          {this.state.utilityComponent}
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

ApplicationHeader.propTypes = propTypes;
ApplicationHeader.defaultProps = defaultProps;

export default ApplicationHeader;
