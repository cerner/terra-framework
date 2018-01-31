import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AppDelegate from 'terra-app-delegate';
import ApplicationMenuLayout from 'terra-application-menu-layout';
import { ApplicationMenuUtility } from 'terra-application-utility';
import { ApplicationMenuName } from 'terra-application-name';
import RoutingStackDelegate from 'terra-navigation-layout/lib/routing/RoutingStackDelegate';

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
  nameConfig: PropTypes.shape({
    accessory: PropTypes.string,
    title: PropTypes.element,
  }),
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
  nameConfig: {},
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
      content,
      layoutConfig,
      nameConfig,
      routingStackDelegate,
      utilityConfig,
      ...customProps
    } = this.props;

    const menuClassNames = cx([
      'application-menu',
      customProps.className,
    ]);

    let header;
    if (nameConfig.accessory || nameConfig.title) {
      header = <ApplicationMenuName accessory={nameConfig.accessory} title={nameConfig.title} />;
    }

    const footer = <ApplicationMenuUtility {...utilityConfig} onDiscloseUtilityMenu={this.onDiscloseUtilty} />;

    let clonedContent;
    if (content) {
      clonedContent = React.cloneElement(content, { layoutConfig });
    }

    return (
      <div {...customProps} className={menuClassNames}>
        <ApplicationMenuLayout
          header={header}
          content={clonedContent}
          footer={footer}
        />
      </div>
    );
  }
}

ApplicationMenu.propTypes = propTypes;
ApplicationMenu.defaultProps = defaultProps;

export default ApplicationMenu;
