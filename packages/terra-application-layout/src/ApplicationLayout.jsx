/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import NavigationLayout from 'terra-navigation-layout';
import { routeConfigPropType } from 'terra-navigation-layout/lib/configurationPropTypes';
import { matchPath } from 'react-router-dom';
import { withModalManager } from 'terra-modal-manager';

import PrimaryNavigationSideMenu from './menu/_PrimaryNavigationSideMenu';
import ApplicationMenuConfigAdapter from './menu/_ApplicationMenuConfigAdapter';
import ApplicationHeader from './header/_ApplicationHeader';
import ApplicationLayoutPropTypes from './utils/propTypes';
import Helpers from './utils/helpers';
import UtilityHelpers from './utils/utilityHelpers';

const navigationLayoutSizes = ['default', 'tiny', 'small', 'medium', 'large', 'huge'];

const propTypes = {
  /**
   * The AppDelegate instance provided by `withModalManager`. If an AppDelegate instance is
   * explicitly provided to the ApplicationLayout, the ModalManager will wrap it and
   * fall back to its defined APIs as needed.
   */
  app: AppDelegate.propType,
  /**
   * The index, or default, path of the routing configuration. The ApplicationLayout will redirect to this path
   * when the router reaches an unknown location.
   */
  indexPath: PropTypes.string.isRequired,
  /**
   * An array of Objects describing the ApplicationLayout's primary navigation items.
   */
  navigationItems: ApplicationLayoutPropTypes.navigationItemsPropType,
  /**
   * The configuration values for the ApplicationName component.
   */
  nameConfig: ApplicationLayoutPropTypes.nameConfigPropType,
  /**
   * The configuration values for the ApplicationUtility component.
   */
  utilityConfig: ApplicationLayoutPropTypes.utilityConfigPropType,
  /**
   * The routing configuration Object. This is very similar to the routingConfig supported by the NavigationLayout; however,
   * the ApplicationLayout only supports configuration for the `menu` and `content` regions of the layout. The '/' path is also blacklisted
   * within this configuration object, as the ApplicationLayout uses it for navigation purposes. Any configuration provided for the '/' path
   * will be disregarded.
   */
  routingConfig: PropTypes.shape({
    menu: routeConfigPropType,
    content: routeConfigPropType,
  }),
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  extensions: PropTypes.element,
};

const defaultProps = {
  navigationItems: [],
};

class ApplicationLayout extends React.Component {
  /**
   * Builds and returns the menu items for the PrimaryNavigationSideMenu from the navigationItems.
   */
  static buildMenuNavigationItems(props) {
    const { navigationItems, routingConfig } = props;

    if (!routingConfig.menu) {
      return navigationItems;
    }

    const menuPaths = Object.keys(routingConfig.menu).map(key => (routingConfig.menu[key].path));
    return navigationItems.map(navigationItem => ({
      path: navigationItem.path,
      text: navigationItem.text,
      hasSubMenu: menuPaths.filter(configPath => matchPath(navigationItem.path, { path: configPath })).length > 0,
    }));
  }

  /**
   * Builds and returns the routing configuration object for the PrimaryNavigationSideMenu.
   */
  static buildNavigationMenuConfig(props) {
    const menuNavigationItems = ApplicationLayout.buildMenuNavigationItems(props);

    const componentConfig = {
      componentClass: PrimaryNavigationSideMenu,
      props: {
        navigationItems: menuNavigationItems,
      },
      refuseRoutingStackNavigation: menuNavigationItems.length === 0,
    };

    return {
      '/': {
        path: '/',
        component: {
          tiny: componentConfig,
          small: componentConfig,
        },
      },
    };
  }

  /**
   * Builds and returns the routing configuration object for all menus with ApplicationMenuConfigAdapters
   * wrapped around each component entry.
   */
  static buildWrappedMenuConfig(props, menuConfig) {
    const { nameConfig, utilityConfig, extensions } = props;

    const updatedMenuConfig = {};
    Object.keys(menuConfig).forEach((menuKey) => {
      const newMenu = Object.assign({}, menuConfig[menuKey]);

      const newMenuComponent = Object.assign({}, newMenu.component);

      navigationLayoutSizes.forEach((size) => {
        if (!newMenuComponent[size]) {
          return;
        }

        const configForSize = Object.assign({}, newMenuComponent[size]);

        const propsForSize = Object.assign({}, configForSize.props);

        propsForSize.applicationMenuConfigAdapterProps = {
          overrideComponentClass: configForSize.componentClass,
          nameConfig,
          utilityConfig,
          extensions,
        };
        configForSize.props = propsForSize;
        configForSize.componentClass = ApplicationMenuConfigAdapter;

        newMenuComponent[size] = configForSize;
      });

      newMenu.component = newMenuComponent;
      updatedMenuConfig[menuKey] = newMenu;
    });

    return updatedMenuConfig;
  }

  /**
   * Builds and returns the routing configuration object for the ApplicationLayout by injecting the PrimaryNavigationSideMenu
   * and ApplicationMenuConfigAdapters as necessary.
   */
  static buildRoutingConfig(props) {
    const { routingConfig } = props;

    const updatedConfig = Object.assign({}, routingConfig, {
      menu: ApplicationLayout.buildWrappedMenuConfig(props, Object.assign({}, routingConfig.menu, ApplicationLayout.buildNavigationMenuConfig(props))),
    });

    return updatedConfig;
  }

  constructor(props) {
    super(props);

    this.state = {
      applicationLayoutRoutingConfig: ApplicationLayout.buildRoutingConfig(this.props),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.nameConfig !== nextProps.nameConfig ||
        this.props.utilityConfig !== nextProps.utilityConfig ||
        this.props.routingConfig !== nextProps.routingConfig ||
        this.props.navigationItems !== nextProps.navigationItems ||
        this.props.indexPath !== nextProps.indexPath) {
      this.setState({
        applicationLayoutRoutingConfig: ApplicationLayout.buildRoutingConfig(nextProps),
      });
    }
  }

  render() {
    const { app, nameConfig, utilityConfig, navigationItems, indexPath, extensions } = this.props;
    const { applicationLayoutRoutingConfig } = this.state;

    return (
      <NavigationLayout
        app={app}
        config={applicationLayoutRoutingConfig}
        header={(
          <ApplicationHeader
            nameConfig={nameConfig}
            utilityConfig={utilityConfig}
            extensions={extensions}
            applicationLinks={navigationItems ? navigationItems.map(route => ({
              id: route.path,
              path: route.path,
              text: route.text,
            })) : undefined}
          />
        )}
        indexPath={indexPath}
      />
    );
  }
}

ApplicationLayout.propTypes = propTypes;
ApplicationLayout.defaultProps = defaultProps;

export default withModalManager(ApplicationLayout);

const Utils = {
  helpers: Helpers,
  utilityHelpers: UtilityHelpers,
  propTypes: ApplicationLayoutPropTypes,
};
export { Utils };
