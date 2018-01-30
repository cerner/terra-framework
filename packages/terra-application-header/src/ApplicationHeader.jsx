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

import 'terra-base/lib/baseStyles';

import styles from './ApplicationHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: AppDelegate.propType,
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
    accesory: PropTypes.string,
    title: PropTypes.element,
  }),
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  layoutConfig: {
    size: PropTypes.string,
    toggleMenu: PropTypes.bool,
    menuIsOpen: PropTypes.bool,
    togglePin: PropTypes.bool,
    menuIsPinned: PropTypes.bool,
  },
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
  }),
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
  }

  onDiscloseUtilty(utility) {
    if (this.props.app && utility) {
      this.props.app.disclose({
        preferredType: 'modal',
        size: 'small',
        content: {
          component: utility,
          key: 'application-utility-menu',
        },
      });
    }
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

    const slidePanelClassNames = cx([
      'application-menu',
      customProps.className,
    ]);

    const toggle = (
      <Button className={cx('toggle-button')} variant="link" icon={<IconMenu />} onClick={layoutConfig.toggleMenu} />
    );

    const appName = (
      <ApplicationHeaderName accessory={nameConfig.name} title={nameConfig.title} />
    );

    const utilities = (
      <ApplicationHeaderUtility {...utilityConfig} onDiscloseUtilityMenu={this.onDiscloseUtilty} />
    );

    const navigation = (
      <ApplicationTabs links={applicationLinks} />
    );

    return (
      <div {...customProps} className={slidePanelClassNames} onclicka={this.handleonclciak}>
        <ApplicationHeaderLayout
          toggle={toggle}
          logo={appName}
          navigation={navigation}
          utilities={utilities}
        />
      </div>
    );
  }
}

ApplicationMenu.propTypes = propTypes;
ApplicationMenu.defaultProps = defaultProps;

export default ApplicationMenu;
