/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';
import NavigationSideMenu from 'terra-navigation-side-menu';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import SearchField from 'terra-search-field';
import { FormattedMessage } from 'react-intl';
import ApplicationLayoutPropTypes from '../utils/propTypes';

const propTypes = {
  /**
   * The title to render within the DevSiteRoutingMenu's header.
   */
  title: PropTypes.string,
  /**
   * The array of routing shapes to be rendered as menu items within the DevSiteRoutingMenu.
   */
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    hasSubMenu: PropTypes.bool,
  })),
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: ApplicationLayoutPropTypes.layoutConfigPropType.isRequired,
  /**
   * The Object containing RoutingStack APIs provided to children of the RoutingStack. This is
   * used to render a Back button upon presence of a `showParent` implementation.
   */
  routingStackDelegate: RoutingStackDelegate.propType.isRequired,
  /**
   * The location from the router context. This prop is provided by the `withRouter` HOC-generator.
   */
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

const devSiteRoutingMenuRootMenuKey = 'devSiteRoutingMenuRootMenuKey';

/**
 * This function is curried and allows you to quickly determine if the searchable contains a case-insensitive match with
 * by.
 * @param {string} by is the string to match by
 * @returns {(searchable?: string) => Boolean}
 */
const searchFilter = (by = '') => (searchable = '') => searchable.toLowerCase().search(by.toLowerCase()) >= 0;

/**
 * This function converts the given menuItems from the DevSiteRoutingMenu API to the NavigationSideMenu API.
 * The path is used to uniquely identify the item within the NavigationSideMenu. The path and hasSubMenu
 * values are set as metaData on the item so that `handleMenuChange` will have easy access to those values.
 * @param {Array} menuItems is the Array of menuItem objects as specified by the DevSiteRoutingMenu's proptype definition.
 */
const buildSideMenuItems = menuItems => menuItems.map(item => ({
  key: item.path,
  text: item.text,
  hasSubMenu: !!item.hasSubMenu,
  metaData: {
    path: item.path,
    externalLink: item.externalLink,
    hasSubMenu: !!item.hasSubMenu,
  },
}));

/**
 * This function compares the given path against the paths of the given menuItems. If a match
 * (partial or otherwise) is detected, that path is returned. If no match is detected, `undefined` is returned.
 * @param {String} path is the path to be matched against
 * @param {Array} menuItems is the Array of menuItem objects as specified by the DevSiteRoutingMenu's proptype definition.
 */
const getSelectedChildKey = (path, menuItems) => {
  for (let i = 0, itemCount = menuItems.length; i < itemCount; i += 1) {
    const navItem = menuItems[i];
    if (navItem.path && matchPath(path, { path: navItem.path })) {
      return navItem.path;
    }
  }
  return undefined;
};

class DevSiteRoutingMenu extends Component {
  constructor(props) {
    super(props);

    this.handleMenuChange = this.handleMenuChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);

    /**
     * The menuItems are checked against the current location at initialization to ensure the
     * the desired selection styles are present.
     */
    this.state = {
      selectedChildKey: getSelectedChildKey(props.location.pathname, props.menuItems),
      items: props.menuItems,
    };
  }

  componentWillReceiveProps(nextProps) {
    /**
     * The selectedChildKey is re-evaluated when new props are received to keep the internal state consistent.
     */
    this.setState({
      selectedChildKey: getSelectedChildKey(nextProps.location.pathname, nextProps.menuItems),
      items: nextProps.menuItems,
    });
  }

  handleMenuChange(event, data) {
    const { routingStackDelegate, layoutConfig } = this.props;


    let routeFunc;
    if (data.metaData.externalLink) {
      routeFunc = () => window.open(data.metaData.externalLink.path, data.metaData.externalLink.target || '_blank');
    } else {
      this.setState({
        selectedChildKey: data.selectedChildKey,
      });
      routeFunc = () => routingStackDelegate.show({ path: data.metaData.path });
    }

    /**
     * If the menuItem does not indicate the presence of a subsequent menu, it is assumed that a terminal
     * menu item has been selected. If the `toggleMenu` function is defined on the layoutConfig, then it is called
     * to close the menu before navigating.
     */
    if (!data.metaData.hasSubMenu && layoutConfig.toggleMenu) {
      return layoutConfig.toggleMenu().then(() => {
        routeFunc();
      });
    }

    /**
     * Otherwise, the layout is left alone and navigation occurs immediately.
     */
    return Promise.resolve().then(() => routeFunc());
  }

  handleFilter(event) {
    const filterText = event.target.value;
    const { menuItems } = this.props;

    const filter = searchFilter(filterText);
    const items = menuItems.filter(({ text }) => filter(text));

    this.setState({ items });
  }

  render() {
    const { title, routingStackDelegate } = this.props;
    const { selectedChildKey, items } = this.state;

    /**
     * The items using the simplified DevSiteRoutingMenu menuItem API must be converted into the NavigationSideMenu's API.
     */
    const processedMenuItems = buildSideMenuItems(items);

    /**
     * The DevSiteRoutingMenu then constructs a menuItem that will act as the main page and render the menuItems as child items.
     * If there is no title and no `showParent` implementation present, the isRootMenu flag is set on the item to hide
     * the header altogether.
     */
    processedMenuItems.push({
      key: devSiteRoutingMenuRootMenuKey,
      text: title || '',
      childKeys: processedMenuItems.map(item => item.key),
      isRootMenu: !routingStackDelegate.showParent && !title,
    });

    const toolbar = (
      <FormattedMessage id="Terra.applicationLayout.devSiteRoutingMenu.filter">
        {placeholder => (
          <SearchField
            isBlock
            placeholder={placeholder}
            onChange={this.handleFilter}
          />
        )}
      </FormattedMessage>
    );

    return (
      <NavigationSideMenu
        menuItems={processedMenuItems}
        onChange={this.handleMenuChange}
        routingStackBack={routingStackDelegate.showParent}
        selectedMenuKey={devSiteRoutingMenuRootMenuKey}
        selectedChildKey={selectedChildKey}
        toolbar={toolbar}
        data-routing-menu
      />
    );
  }
}

DevSiteRoutingMenu.propTypes = propTypes;

export default withRouter(DevSiteRoutingMenu);
