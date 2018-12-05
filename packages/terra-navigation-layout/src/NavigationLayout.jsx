import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Layout from 'terra-layout';
import breakpoints from 'terra-responsive-element/lib/breakpoints.module.scss';

import NavigationLayoutContent from './NavigationLayoutContent';
import { navigationLayoutConfigPropType, supportedComponentBreakpoints } from './configurationPropTypes';
import { reduceRouteConfig, validateMatchExists } from './routingUtils';

const getBreakpointSize = (queryWidth) => {
  const width = queryWidth || window.innerWidth;
  const {
    small, medium, large, huge,
  } = breakpoints;

  if (width >= huge) {
    return 'huge';
  } if (width >= large) {
    return 'large';
  } if (width >= medium) {
    return 'medium';
  } if (width >= small) {
    return 'small';
  }
  return 'tiny';
};

const propTypes = {
  /**
   * The component to render within the NavigationLayout's `header` region. If provided, this component
   * must appropriately handle the NavigationLayout-supplied props: `routeConfig`, and `navigationLayoutSize`.
   */
  header: PropTypes.element,
  /**
   * The component to render within the NavigationLayout's `menu` region. If provided, this component
   * must appropriately handle the NavigationLayout-supplied props: `routeConfig`, and `navigationLayoutSize`.
   */
  menu: PropTypes.element,
  /**
   * The component to render within the NavigationLayout's `content` region. If provided, this component
   * must appropriately handle the NavigationLayout-supplied props: `routeConfig`, and `navigationLayoutSize`.
   */
  children: PropTypes.element,
  /**
   * The String to display in the NavigationLayout's hover-target menu disclosure.
   */
  menuText: PropTypes.string,
  /**
   * The configuration Object that will be used to generate the specified regions of the NavigationLayout.
   * Note: The config prop is treated as an immutable object to prevent unnecessary processing and improve performance.
   * If the configuration is changed after the first render, a new configuration object instance must be provided.
   */
  config: navigationLayoutConfigPropType.isRequired,
  /**
   * The index path of the consuming application's routing structure. If provided, the NavigationLayout will
   * ensure Redirects are present where necessary.
   */
  indexPath: PropTypes.string,
  /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: PropTypes.object.isRequired,
  /**
   * The match as provided by the `withRouter()` HOC.
   */
  match: PropTypes.object.isRequired,
  /**
   * The history as provided by the `withRouter()` HOC.
   */
  history: PropTypes.object.isRequired,
  /**
   * The staticContext as provided by the `withRouter()` HOC. This will only be provided when
   * within a StaticRouter.
   */
  staticContext: PropTypes.object,
};

/**
 * The NavigationLayout utilizes the Terra Layout and a configuration object to generate a routing-based application layout.
 */
class NavigationLayout extends React.Component {
  static processRouteConfig(config) {
    const processedRoutes = {};

    supportedComponentBreakpoints.forEach((size) => {
      const processedRoutesForSize = {};
      processedRoutesForSize.header = reduceRouteConfig(config.header, size);
      processedRoutesForSize.menu = reduceRouteConfig(config.menu, size);
      processedRoutesForSize.content = reduceRouteConfig(config.content, size);

      processedRoutes[size] = processedRoutesForSize;
    });

    return processedRoutes;
  }

  constructor(props) {
    super(props);

    this.updateSize = this.updateSize.bind(this);

    this.state = {
      size: getBreakpointSize(),
      processedRoutes: NavigationLayout.processRouteConfig(props.config),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSize);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.config !== this.props.config) {
      this.setState({
        processedRoutes: NavigationLayout.processRouteConfig(nextProps.config),
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }

  updateSize() {
    const newSize = getBreakpointSize();

    if (this.state.size !== newSize) {
      this.setState({
        size: newSize,
      });
    }
  }

  decorateElement(element, routes) {
    if (!element) {
      return null;
    }

    const { size } = this.state;

    return React.cloneElement(element, {
      navigationLayoutRoutes: routes,
      navigationLayoutSize: size,
    });
  }

  render() {
    const {
      header,
      children,
      menu,
      menuText,
      config,
      indexPath,
      location,
      match,
      history,
      staticContext,
      ...customProps
    } = this.props; // eslint-disable-line no-unused-vars

    const {
      size,
      processedRoutes,
    } = this.state;

    const headerComponent = header || <NavigationLayoutContent />;

    const contentComponent = children || <NavigationLayoutContent redirectPath={indexPath} />;

    let menuComponent = menu;
    // The routes for the menu are examined for evidence of a valid component for the current location.
    // If one is not found, we do not provide one to the Layout to ensure that the Layout renders appropriately (without a menu present).
    if (!menuComponent && validateMatchExists(location.pathname, processedRoutes[size].menu)) {
      menuComponent = <NavigationLayoutContent stackNavigationIsEnabled />;
    }

    return (
      <Layout
        {...customProps}
        header={this.decorateElement(headerComponent, processedRoutes[size].header)}
        menu={this.decorateElement(menuComponent, processedRoutes[size].menu)}
        menuText={menuText}
      >
        {this.decorateElement(contentComponent, processedRoutes[size].content)}
      </Layout>
    );
  }
}

NavigationLayout.propTypes = propTypes;

export default withRouter(NavigationLayout);
