import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AppDelegate from 'terra-app-delegate';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import ApplicationHeaderLayout from 'terra-application-header-layout';
// import { ApplicationHeaderUtility } from 'terra-application-utility';
// import { ApplicationHeaderName } from 'terra-application-name';
// import { ApplicationTabs } from 'terra-application-links';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import Button from 'terra-button';
import Popup from 'terra-popup';

import 'terra-base/lib/baseStyles';

import ApplicationHeaderUtility from './mock-components/MockApplicationUtility';
import ApplicationHeaderName from './mock-components/MockApplicationName';
import ApplicationTabs from './mock-components/MockApplicationLinks';

import styles from './ApplicationHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: AppDelegate.propType.isRequired,
  /**
   * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
+  */
  applicationLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  /**
   * Configutation values for the ApplicationName component.
   */
  nameConfig: PropTypes.shape({
    accessory: PropTypes.string,
    title: PropTypes.element,
  }),
  /**
   * Layout config provided from the Layout component.
   */
  layoutConfig: PropTypes.shape({
    size: PropTypes.string,
    toggleMenu: PropTypes.bool,
    menuIsOpen: PropTypes.bool,
    togglePin: PropTypes.bool,
    menuIsPinned: PropTypes.bool,
  }).isRequired,
  /**
   * Delegate prop that is padded by the NavigationLayout.
   */
  routingStackDelegate: RoutingStackDelegate.propType,
  /**
   * Configration to be provided to the ApplicationUtility component.
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
    if (utility && !this.state.isUtilityOpen) {
      this.popupContent = utility;
      this.setState({ isUtilityOpen: true });
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
