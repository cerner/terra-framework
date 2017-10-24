import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import AppDelegate from 'terra-app-delegate';

import RoutingManagerDelegate from './RoutingManagerDelegate';
import { flattenRouteConfig } from './RoutingConfigUtils';

const propTypes = {
  size: PropTypes.string,
  routeConfig: PropTypes.object,
  navEnabled: PropTypes.bool,
  location: PropTypes.object,
  routingManager: RoutingManagerDelegate.propType,
  app: AppDelegate.propType,
  children: PropTypes.node,
};

class RoutingStack extends React.Component {
  constructor(props) {
    super(props);

    this.updateStackLocation = this.updateStackLocation.bind(this);
    this.createMenuRoutes = this.createMenuRoutes.bind(this);

    this.state = {
      stackLocation: undefined,
    };
  }

  componentWillReceiveProps() {
    this.setState({
      stackLocation: undefined, // We reset the stack location whenever new props are received to reset its position.
    });
  }

  updateStackLocation(path) {
    this.setState({
      stackLocation: { pathname: path },
    });
  }

  createMenuRoutes(routeConfig) {
    const { navEnabled, routingManager, app, location, size } = this.props;

    return flattenRouteConfig(routeConfig, size).map((routeData) => {
      const routingManagerDelegate = RoutingManagerDelegate.clone(routingManager, {
        location: this.state.stackLocation,
        browserLocation: location,
        goBack: navEnabled && routeData.parentPaths && routeData.parentPaths.length ? () => {
          this.updateStackLocation(routeData.parentPaths[routeData.parentPaths.length - 1]);
        } : undefined,
        goToRoot: navEnabled && routeData.parentPaths && routeData.parentPaths.length > 1 ? () => {
          this.updateStackLocation(routeData.parentPaths[0]);
        } : undefined,
      });

      const ComponentClass = routeData.componentClass;

      return (
        <Route
          exact={routeData.exact}
          strict={routeData.strict}
          path={routeData.path}
          key={routeData.key}
          render={routeProps => (
            <ComponentClass
              {...routeProps}
              {...routeData.componentProps}
              meta={routeData.meta}
              routingManager={routingManagerDelegate}
              app={app}
            />
          )}
        />
      );
    });
  }

  render() {
    const { routeConfig, location, children, size } = this.props;

    return (
      <Switch location={this.state.stackLocation || location}>
        {this.createMenuRoutes(routeConfig, size)}
        {children}
      </Switch>
    );
  }
}

RoutingStack.propTypes = propTypes;

export default withRouter(RoutingStack);
