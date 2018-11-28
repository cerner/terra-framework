import React from 'react';
import PropTypes from 'prop-types';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import ApplicationMenu from './_ApplicationMenu';
import ApplicationLayoutPropTypes from '../utils/propTypes';

const propTypes = {
  /**
   * Array of navigation Objects to be rendered as tabs within the Application Header.
   */
  navigationItems: ApplicationLayoutPropTypes.navigationItemsPropType,
  /**
   * The Object of layout-related APIs provided to the components of the Layout. This prop is provided by the Layout.
   */
  layoutConfig: ApplicationLayoutPropTypes.layoutConfigPropType.isRequired,
  /**
   * The Object containing RoutingStack APIs provided to children of the RoutingStack. This prop is provided by the RoutingStack.
   */
  routingStackDelegate: RoutingStackDelegate.propType.isRequired,
  /**
   * The Object containing props from the configuration necessary for ApplicationMenu creation.
   */
  applicationMenuWrapperProps: PropTypes.shape({
    /**
     * The Component class that will be rendered as content within the ApplicationMenu.
     */
    contentComponentClass: PropTypes.func.isRequired,
    /**
     * The configuration for ApplicationName component.
     */
    nameConfig: ApplicationLayoutPropTypes.nameConfigPropType,
    /**
     * The configuration for ApplicationUtility component.
     */
    utilityConfig: ApplicationLayoutPropTypes.utilityConfigPropType,
    /**
     * The content to render in the menu's extensions region.
     */
    extensions: PropTypes.node,
  }).isRequired,
};

const ApplicationMenuWrapper = (props) => {
  const {
    layoutConfig,
    routingStackDelegate,
    applicationMenuWrapperProps,
    ...contentProps
  } = props;

  /**
   * This Content component is the component class originally registered in the routingConfig
   * pre-wrapping. The contentProps are the props that were originally specified in the routingConfig for that component.
   */
  const Content = applicationMenuWrapperProps.contentComponentClass;

  return (
    <ApplicationMenu
      layoutConfig={layoutConfig}
      routingStackDelegate={routingStackDelegate}
      nameConfig={applicationMenuWrapperProps.nameConfig}
      utilityConfig={applicationMenuWrapperProps.utilityConfig}
      extensions={applicationMenuWrapperProps.extensions}
      content={
        <Content {...contentProps} />
      }
    />
  );
};

ApplicationMenuWrapper.propTypes = propTypes;

export default ApplicationMenuWrapper;
