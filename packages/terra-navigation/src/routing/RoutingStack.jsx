import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import AppDelegate from 'terra-app-delegate';

import RoutingStackDelegate from './RoutingStackDelegate';
import { flattenRouteConfig } from './routingUtils';

const propTypes = {
  app: AppDelegate.propType,
  size: PropTypes.string,
  routeConfig: PropTypes.object,
  navEnabled: PropTypes.bool,
  location: PropTypes.object,
  children: PropTypes.node,
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
      stackLocation: undefined, // We reset the stack location whenever new props are received to reset its position.
    });
  }

  updateStackLocation(path) {
    this.setState({
      stackLocation: { pathname: path },
    });
  }

  createRoutes(routeConfig) {
    const { navEnabled, app, location, size } = this.props;

    return flattenRouteConfig(routeConfig, size).map((routeData) => {
      const routingStackDelegate = RoutingStackDelegate.create({
        location,
        stackLocation: this.state.stackLocation,
        parentPaths: routeData.parentPaths,
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
              routingStackDelegate={routingStackDelegate}
              app={app}
            />
          )}
        />
      );
    });
  }

  render() {
    const { routeConfig, location, children, size } = this.props;

    const routes = this.createRoutes(routeConfig, size);

    return (
      <Switch location={this.state.stackLocation || location}>
        {routes}
        {children}
      </Switch>
    );
  }
}

RoutingStack.propTypes = propTypes;

export default withRouter(RoutingStack);
