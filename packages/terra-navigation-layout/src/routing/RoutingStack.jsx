import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  withRouter,
  matchPath,
} from 'react-router-dom';
import AppDelegate from 'terra-app-delegate';

import RoutingStackDelegate from './RoutingStackDelegate';
import { processedRoutesPropType } from '../configurationPropTypes';

const propTypes = {
  /**
   * The AppDelegate instance that will be provided to the components rendered by the RoutingStack.
   */
  app: AppDelegate.propType,
  /**
   * The routing configuration from which Routes will be generated.
   */
  routes: processedRoutesPropType,
  /**
   * Flag to enable navigation within the RoutingStack. If true, functions will be exposed to the Routes that
   * will allow for traversal up to parent paths.
   */
  navEnabled: PropTypes.bool,
  /**
   * The current react-router location. Provided by the `withRouter()` HOC.
   */
  location: PropTypes.object,
  /**
   * Any additional Routes that will be inserted after the configuration-generated Routes. Generally used
   * to insert custom Redirects or fallback Routes.
   */
  children: PropTypes.node,
  /**
   * Any additional props that should be propagated to the generated Route components.
   */
  ancestorProps: PropTypes.object,
};

class RoutingStack extends React.Component {
  constructor(props) {
    super(props);

    this.updateStackLocation = this.updateStackLocation.bind(this);
    this.createRoutes = this.createRoutes.bind(this);

    this.state = {
      stackLocation: undefined,
    };
  }

  componentWillReceiveProps() {
    this.setState({
      // The stackLocation must be reset upon rerendering to be in sync with any navigation that may have occurred.
      stackLocation: undefined,
    });
  }

  updateStackLocation(path) {
    this.setState({
      stackLocation: { pathname: path },
    });
  }

  createRoutes(routes) {
    const { navEnabled, app, location, ancestorProps } = this.props;

    if (!routes || !routes.length) {
      return undefined;
    }

    return routes.map((routeData) => {
      const routingStackDelegate = RoutingStackDelegate.create({
        location,
        stackLocation: this.state.stackLocation,
        parentPaths: routeData.parentPaths,
        goBack: navEnabled && routeData.parentPaths && routeData.parentPaths.length ? () => {
          const backRoute = routeData.parentPaths[routeData.parentPaths.length - 1];
          const matchToCurrentLocation = matchPath(location.pathname, { path: backRoute.path });

          this.updateStackLocation(matchToCurrentLocation.url);
        } : undefined,
        goToRoot: navEnabled && routeData.parentPaths && routeData.parentPaths.length > 1 ? () => {
          const rootRoute = routeData.parentPaths[0];
          const matchToCurrentLocation = matchPath(location.pathname, { path: rootRoute.path });

          this.updateStackLocation(matchToCurrentLocation.url);
        } : undefined,
      });

      const ComponentClass = routeData.componentClass;

      return (
        <Route
          exact={routeData.exact}
          strict={routeData.strict}
          path={routeData.path}
          key={routeData.path}
          render={() => (
            <ComponentClass
              {...ancestorProps}
              {...routeData.componentProps}
              routingStackDelegate={routingStackDelegate}
              app={app}
            />
          )}
        />
      );
    });
  }

  render() {
    const { routes, location, children } = this.props;

    return (
      <Switch location={this.state.stackLocation || location}>
        {this.createRoutes(routes)}
        {children}
      </Switch>
    );
  }
}

RoutingStack.propTypes = propTypes;

export default withRouter(RoutingStack);
