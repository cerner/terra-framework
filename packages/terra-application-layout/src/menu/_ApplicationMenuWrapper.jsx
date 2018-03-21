import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import { processedRoutesPropType } from 'terra-navigation-layout';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import ApplicationMenu from './_ApplicationMenu';
import ApplicationLayoutPropTypes from '../utils/propTypes';

const propTypes = {
  /**
   * The AppDelegate instance to provide to the ApplicationMenu.
   */
  app: AppDelegate.propType,
  /**
   * Array of navigation Objects to be rendered as tabs within the Application Header.
   */
  navigationItems: ApplicationLayoutPropTypes.navigationItemsPropType,
  /**
   * The Object of layout-related APIs provided to the components of the Layout. This prop is provided by the Layout.
   */
  layoutConfig: ApplicationLayoutPropTypes.layoutConfigPropType.isRequired,
  /**
   * The set of routes currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutRoutes: PropTypes.arrayOf(processedRoutesPropType),
  /**
   * The window size currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutSize: PropTypes.string,
  /**
   * The Object containing RoutingStack APIs provided to children of the RoutingStack. This prop is provided by the RoutingStack.
   */
  routingStackDelegate: RoutingStackDelegate.propType,
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
    app,
    layoutConfig,
    navigationLayoutRoutes,
    navigationLayoutSize,
    routingStackDelegate,
    applicationMenuWrapperProps,
    ...contentProps
  } = props;

  const Content = applicationMenuWrapperProps.contentComponentClass;

  return (
    <ApplicationMenu
      app={app}
      layoutConfig={layoutConfig}
      routingStackDelegate={routingStackDelegate}
      navigationLayoutRoutes={navigationLayoutRoutes}
      navigationLayoutSize={navigationLayoutSize}
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
