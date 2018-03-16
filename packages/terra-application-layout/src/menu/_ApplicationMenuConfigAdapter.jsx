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
  applicationMenuConfigAdapterProps: PropTypes.shape({
    /**
     * The Component class that will be rendered as content within the ApplicationMenu.
     */
    overrideComponentClass: PropTypes.func,
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

const ApplicationMenuConfigAdapter = (props) => {
  const {
    app,
    layoutConfig,
    navigationLayoutRoutes,
    navigationLayoutSize,
    routingStackDelegate,
    applicationMenuConfigAdapterProps,
    ...contentProps
  } = props;

  const Content = applicationMenuConfigAdapterProps.overrideComponentClass;

  return (
    <ApplicationMenu
      key={applicationMenuConfigAdapterProps.key}
      app={app}
      layoutConfig={layoutConfig}
      routingStackDelegate={routingStackDelegate}
      navigationLayoutRoutes={navigationLayoutRoutes}
      navigationLayoutSize={navigationLayoutSize}
      nameConfig={applicationMenuConfigAdapterProps.nameConfig}
      utilityConfig={applicationMenuConfigAdapterProps.utilityConfig}
      extensions={applicationMenuConfigAdapterProps.extensions}
      content={
        <Content {...contentProps} />
      }
    />
  );
};

ApplicationMenuConfigAdapter.propTypes = propTypes;

export default ApplicationMenuConfigAdapter;
