import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AppDelegate from 'terra-app-delegate';
import RoutingStackDelegate from 'terra-navigation-layout/lib/routing/RoutingStackDelegate';
import ApplicationMenuLayout from 'terra-application-menu-layout';
import { ApplicationMeniuUtility } from 'terra-application-utility';
import { ApplicationMenuName } from 'terra-application-name';

import 'terra-base/lib/baseStyles';

import styles from './ApplicationMenu.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: AppDelegate.propType,
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  content: PropTypes.element,
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

  onDiscloseUtilty(content) {
    return false;
  }

  render() {
    const {
      app,
      applicationLinks,
      content,
      layoutConfig,
      routingStackDelegate,
      utilityConfig,
      ...customProps
    } = this.props;

    const slidePanelClassNames = cx([
      'application-menu',
      customProps.className,
    ]);

    const header = (

    );

    const footer = (
      <ApplicationUtility />
    );

    return (
      <div {...customProps} className={slidePanelClassNames}>
        <ApplicationMenuLayout
          header={header}
          content={content}
          footer={footer}
        />
      </div>
    );
  }
}

ApplicationMenu.propTypes = propTypes;
ApplicationMenu.defaultProps = defaultProps;

export default ApplicationMenu;
