import { matchPath } from 'react-router-dom';

/**
 * Given a route configuration and size, returns an Array of ordered routing data objects
 * representing the routes available at that size.
 *
 * To summarize the what is happening here:
 * 1. Responsive route configuration comes in, along with the current size.
 * 2. Responsive route configuration is transformed into an array of route objects for that size.
 * 3. Array of route objects is reverse-sorted by path to ensure nested paths preceed their parents paths.
 * 4. Sorted array is iterated on one more time in order to build out the parent paths for each route object.
 *
 * @param {Object} routeConfig The route configuration to reduce. The expected shape matches that of the routeConfigPropType.
 * @param {String} size The breakpoint size used during configuration parsing.
 * @param {Array[String]} parentPaths The array of String paths that are ancestors to the given routeConfig.
 */
const reduceRouteConfig = (routeConfig, size) => {
  if (!routeConfig) {
    return [];
  }

  return Object.keys(routeConfig).reduce((availableRoutes, routeKey) => {
    const config = routeConfig[routeKey];

    let componentConfig;
    if (typeof (config.component) === 'object') {
      const configForSize = config.component[size];

      if (configForSize) {
        componentConfig = configForSize;
      } else if (config.component.default) {
        // If no component is defined for the current size, check for a default component
        // and use it, if one is provided.
        componentConfig = config.component.default;
      }
    }

    if (componentConfig && componentConfig.componentClass) {
      availableRoutes.push({
        path: config.path,
        componentClass: componentConfig.componentClass,
        componentProps: componentConfig.props,
        parentPaths: [],
        refuseRoutingStackNavigation: componentConfig.refuseRoutingStackNavigation,
      });
    }

    return availableRoutes;
  }, [])
    .sort((routeA, routeB) => {
      if (routeA.path < routeB.path) {
        return 1;
      } if (routeA.path > routeB.path) {
        return -1;
      }

      return 0;
    })
    .map((route, index, array) => {
    // The root path '/' cannot have any parent routes, so further processing is unnecessary.
      if (route.path === '/') {
        return route;
      }

      // The path being tested is split into segments. Those segments are then rejoined to produce the set of
      // potential parent paths. Those potential paths are then filtered against the set of actual paths that
      // were generated so that only matching parent paths are returned.

      const pathSegments = route.path.split('/');

      const potentialParentPaths = [];
      // The number of necessary iterations is 2 less than the number of total segments.
      // eslint-disable-next-line prefer-destructuring
      for (let i = 0, length = pathSegments.length; i < length - 2; i += 1) {
        pathSegments.pop();
        potentialParentPaths.push(pathSegments.join('/'));
      }

      // The root path is added manually as it cannot be produced by the above joins.
      potentialParentPaths.push('/');

      const matchedParentPaths = array.filter(testRoute => (
        potentialParentPaths.indexOf(testRoute.path) !== -1 && !testRoute.refuseRoutingStackNavigation
      ))
        .map(parentRoute => parentRoute.path);

      return Object.assign({}, route, {
        parentPaths: matchedParentPaths.reverse(),
      });
    });
};

/**
 * Determines whether the given pathname matches against any of the given routes configurations.
 * @param {String} pathname The path to be searched for in the routeConfig.
 * @param {Array} routes The route data to match against.
 * @param {String} size The breakpoint size used for configuration parsing.
 */
const validateMatchExists = (pathname, routes) => {
  if (!routes || !pathname) {
    return false;
  }
  // eslint-disable-next-line prefer-destructuring
  for (let i = 0, length = routes.length; i < length; i += 1) {
    const testRoute = routes[i];
    if (matchPath(pathname, { path: testRoute.path })) {
      return true;
    }
  }

  return false;
};

export { reduceRouteConfig, validateMatchExists };
