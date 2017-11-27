import React from 'react';
import PropTypes from 'prop-types';
import {
  withRouter,
} from 'react-router-dom';

import AppDelegate from 'terra-app-delegate';
import Layout from 'terra-layout';
import breakpoints from 'terra-responsive-element/lib/breakpoints.scss';

import NavigationLayoutContent from './NavigationLayoutContent';
import { navigationLayoutConfigPropType } from './configurationPropTypes';
import { configHasMatchingRoute } from './routing/routingUtils';

const getBreakpointSize = (queryWidth) => {
  const width = queryWidth || window.innerWidth;
  const { small, medium, large, huge } = breakpoints;

  if (width >= huge) {
    return 'huge';
  } else if (width >= large) {
    return 'large';
  } else if (width >= medium) {
    return 'medium';
  } else if (width >= small) {
    return 'small';
  }
  return 'tiny';
};

const propTypes = {
  /**
   * The component to render within the NavigationLayout's `header` region. If provided, this component
   * must appropriately handle the NavigationLayout-supplied props: `app`, `routeConfig`, and `navigationLayoutSize`.
   */
  header: PropTypes.element,
  /**
   * The component to render within the NavigationLayout's `menu` region. If provided, this component
   * must appropriately handle the NavigationLayout-supplied props: `app`, `routeConfig`, and `navigationLayoutSize`.
   */
  menu: PropTypes.element,
  /**
   * The component to render within the NavigationLayout's `content` region. If provided, this component
   * must appropriately handle the NavigationLayout-supplied props: `app`, `routeConfig`, and `navigationLayoutSize`.
   */
  children: PropTypes.element,
  /**
   * The String to display in the NavigationLayout's hover-target menu disclosure.
   */
  menuText: PropTypes.string,
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: AppDelegate.propType,
  /**
   * The configuration Object that will be used to generate the specified regions of the NavigationLayout.
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
  location: PropTypes.object,
  /**
   * The match as provided by the `withRouter()` HOC.
   */
  match: PropTypes.object,
  /**
   * The history as provided by the `withRouter()` HOC.
   */
  history: PropTypes.object,
  /**
   * The staticContext as provided by the `withRouter()` HOC.
   */
  staticContext: PropTypes.object,
};

/**
 * The NavigationLayout utilizes the Terra Layout and a configuration object to generate a routing-based application layout.
 */
class NavigationLayout extends React.Component {
  constructor(props) {
    super(props);

    this.updateSize = this.updateSize.bind(this);

    this.state = {
      size: getBreakpointSize(),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSize);
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

  decorateElement(element, routeConfig) {
    if (!element) {
      return null;
    }

    const { app } = this.props;
    const { size } = this.state;

    return React.cloneElement(element, {
      app,
      routeConfig,
      navigationLayoutSize: size,
    });
  }

  render() {
    const {
      header,
      children,
      menu,
      app,
      menuText,
      config,
      indexPath,
      location,
      match,
      history,
      staticContext,
      ...customProps
    } = this.props; // eslint-disable-line no-unused-vars
    const { size } = this.state;

    const headerComponent = header || <NavigationLayoutContent />;

    const contentComponent = children || <NavigationLayoutContent redirect={indexPath} />;

    let menuComponent = menu;
    // The configuration is examined for evidence of a valid menu component for the current size and location.
    // If one is not found, we do not provide one to the Layout to ensure that the Layout renders appropriately.
    if (!menuComponent && configHasMatchingRoute(location.pathname, config.menu, size)) {
      menuComponent = <NavigationLayoutContent stackNavigationIsEnabled />;
    }

    return (
      <Layout
        {...customProps}
        header={this.decorateElement(headerComponent, config.header)}
        menu={this.decorateElement(menuComponent, config.menu)}
        menuText={menuText}
      >
        {this.decorateElement(contentComponent, config.content)}
      </Layout>
    );
  }
}

NavigationLayout.propTypes = propTypes;

export default withRouter(NavigationLayout);
