import { matchPath } from 'react-router-dom';

/**
 * Given a route configuration and size, returns an Array of ordered routing data objects
 * representing the routes available at that size.
 * @param {Object} routeConfig The route configuration to flatten. The expected shape matches that of the routeConfigPropType.
 * @param {String} size The breakpoint size used during configuration parsing.
 * @param {Array[String]} parentPaths The array of String paths that are ancestors to the given routeConfig.
 */
const flattenRouteConfig = (routeConfig, size) => {
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
        exact: config.exact,
        strict: config.strict,
        componentClass: componentConfig.componentClass,
        componentProps: componentConfig.props,
      });
    }

    return availableRoutes;
  }, [])
  .sort((routeA, routeB) => {
    if (routeA.path < routeB.path) {
      return 1;
    } else if (routeA.path > routeB.path) {
      return -1;
    }

    return 0;
  })
  .map((route, index, array) => {
    // The root path '/' cannot have any parent routes, so further processing is unnecessary.
    if (route.path === '/') {
      return route;
    }

    const pathSegments = route.path.split('/');
    if (pathSegments.length < 2) {
      return route;
    }

    const testPath = `/${pathSegments[1]}`;
    const parentRoutes = array.filter(testRoute => (
      // If the testRoute is the index route (/), it is accepted as parent route right away.
      // If the testPath matches the start of the testRoute, and the number of path segments of the testRoute is less than that of the
      // route in question, the testRoute is determined to be a parent route.
      testRoute.path === '/' || (testRoute.path.indexOf(testPath) === 0 && testRoute.path.split('/').length < route.path.split('/').length)
    ));

    return Object.assign({}, route, {
      parentPaths: parentRoutes.map(parentRoute => parentRoute.path).reverse(),
    });
  });
};

/**
 * Determines whether or not the given routeConfig has a valid Component specified to display
 * at the given pathname and size.
 * @param {String} pathname The path to be searched for in the routeConfig.
 * @param {Object} routeConfig The configuration object to search within.
 * @param {String} size The breakpoint size used for configuration parsing.
 */
const configHasMatchingRoute = (pathname, routeConfig, size) => {
  if (!routeConfig || !pathname) {
    return false;
  }

  const processedRoutes = flattenRouteConfig(routeConfig, size);

  if (!processedRoutes) {
    return false;
  }

  for (let i = 0, length = processedRoutes.length; i < length; i += 1) {
    if (matchPath(pathname, { path: processedRoutes[i].path, exact: processedRoutes[i].exact, strict: processedRoutes[i].strict })) {
      return true;
    }
  }

  return false;
};

export { flattenRouteConfig, configHasMatchingRoute };
