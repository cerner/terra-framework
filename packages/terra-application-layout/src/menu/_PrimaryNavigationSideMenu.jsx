/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';
import NavigationSideMenu from 'terra-navigation-side-menu';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import ApplicationLayoutPropTypes from '../utils/propTypes';

const propTypes = {
  /**
   * The array of navigation Objects to be rendered as items within the navigation menu.
   */
  navigationItems: ApplicationLayoutPropTypes.navigationItemsPropType,
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: ApplicationLayoutPropTypes.layoutConfigPropType,
  /**
   * The Object containing RoutingStack APIs provided to children of the RoutingStack.
   */
  routingStackDelegate: RoutingStackDelegate.propType,
  /**
   * The location from the router context. This prop is provided by the `withRouter` HOC-generator.
   */
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

/**
 * This string is used as the root level menu identifier for the PrimaryNavigationSideMenu's side
 * menu implementation.
 */
const navMenuKey = 'navigationMenu';

class PrimaryNavigationSideMenu extends React.Component {
  /**
   * Builds and returns the NavigationSideMenu API items from the given navigationItems.
   */
  static buildChildSideNavItems(navigationItems) {
    return navigationItems.map(item => ({
      key: item.path,
      text: item.text,
      hasSubMenu: !!item.hasSubMenu,
      metaData: {
        /**
         * metaData is added to the item to make handleMenuChange's life easier.
         */
        url: item.path,
        hasSubMenu: !!item.hasSubMenu,
      },
    }));
  }

  /**
   * Finds and returns the first navigationItem path that matches the current location.
   */
  static getSelectedChildKey(path, navigationItems) {
    for (let i = 0, itemCount = navigationItems.length; i < itemCount; i += 1) {
      const navItemPath = navigationItems[i].path;
      if (matchPath(path, { path: navItemPath })) {
        return navItemPath;
      }
    }
    return undefined;
  }

  constructor(props) {
    super(props);

    this.handleMenuChange = this.handleMenuChange.bind(this);

    this.state = {
      selectedMenuKey: navMenuKey,
      selectedChildKey: PrimaryNavigationSideMenu.getSelectedChildKey(props.location.pathname, props.navigationItems),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedMenuKey: navMenuKey,
      selectedChildKey: PrimaryNavigationSideMenu.getSelectedChildKey(nextProps.location.pathname, nextProps.navigationItems),
    });
  }

  handleMenuChange(event, data) {
    const { routingStackDelegate, layoutConfig } = this.props;

    this.setState({
      selectedMenuKey: data.selectedMenuKey,
      selectedChildKey: data.selectedChildKey,
    });

    /**
     * The menu will be toggled closed if no submenus exist for the selected item.
     */
    if (!data.metaData.hasSubMenu && layoutConfig.toggleMenu) {
      return layoutConfig.toggleMenu().then(() => {
        routingStackDelegate.show({ path: data.metaData.url });
      });
    }

    return Promise.resolve().then(() => routingStackDelegate.show({ path: data.metaData.url }));
  }

  render() {
    const { routingStackDelegate, navigationItems } = this.props;
    const { selectedMenuKey, selectedChildKey } = this.state;

    const childItems = PrimaryNavigationSideMenu.buildChildSideNavItems(navigationItems);

    return (
      <NavigationSideMenu
        menuItems={[{
          key: navMenuKey,
          text: '',
          childKeys: childItems.map(item => item.key),
          isRootMenu: true,
        }].concat(...childItems)}
        onChange={this.handleMenuChange}
        routingStackBack={routingStackDelegate.showParent}
        selectedMenuKey={selectedMenuKey}
        selectedChildKey={selectedChildKey}
      />
    );
  }
}

PrimaryNavigationSideMenu.propTypes = propTypes;

export default withRouter(PrimaryNavigationSideMenu);
