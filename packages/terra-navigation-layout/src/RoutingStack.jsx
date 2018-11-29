import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  withRouter,
  matchPath,
} from 'react-router-dom';

import RoutingStackDelegate from './RoutingStackDelegate';
import { processedRoutesPropType } from './configurationPropTypes';

const propTypes = {
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
   * The current react-router history. Provided by the `withRouter()` HOC.
   */
  history: PropTypes.object,
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
    const {
      navEnabled, location, history, ancestorProps,
    } = this.props;
    const { stackLocation } = this.state;

    if (!routes || !routes.length) {
      return undefined;
    }

    return routes.map((routeData) => {
      const delegateData = {
        location: stackLocation || location,
      };

      delegateData.show = ({ path }) => {
        if (matchPath(location.pathname, { path })) {
          this.updateStackLocation(path);
        } else {
          history.push(path);
        }
      };

      if (routeData.parentPaths && routeData.parentPaths.length) {
        delegateData.parentPaths = routeData.parentPaths.reduce((matchingPaths, path) => {
          const match = matchPath(location.pathname, { path });
          if (match) {
            matchingPaths.push(match.url);
          }

          return matchingPaths;
        }, []);

        if (navEnabled && delegateData.parentPaths.length) {
          delegateData.showParent = () => {
            this.updateStackLocation(delegateData.parentPaths[delegateData.parentPaths.length - 1]);
          };

          if (delegateData.parentPaths.length > 1) {
            delegateData.showRoot = () => {
              this.updateStackLocation(delegateData.parentPaths[0]);
            };
          }
        }
      }

      const ComponentClass = routeData.componentClass;

      return (
        <Route
          path={routeData.path}
          key={routeData.path}
          render={() => (
            <Route
              location={this.props.location}
              render={() => (
                <ComponentClass
                  {...ancestorProps}
                  {...routeData.componentProps}
                  routingStackDelegate={RoutingStackDelegate.create(delegateData)}
                />
              )}
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
