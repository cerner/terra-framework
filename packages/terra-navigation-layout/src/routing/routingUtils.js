import { matchPath } from 'react-router-dom';

/**
 * Given a route configuration and size, returns an Array of ordered routing data objects
 * representing the routes available at that size.
 * @param {Object} routeConfig The route configuration to flatten. The expected shape matches that of the routeConfigPropType.
 * @param {String} size The breakpoint size used during configuration parsing.
 * @param {Array[String]} parentPaths The array of String paths that are ancestors to the given routeConfig.
 */
const flattenRouteConfig = (routeConfig, size, parentPaths) => {
  if (!routeConfig) {
    return [];
  }

  const routes = Object.keys(routeConfig).map((routeKey) => {
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

    let routeData = [];
    if (config.children) {
      let updatedParentPaths = [];
      if (parentPaths) {
        updatedParentPaths = updatedParentPaths.concat(parentPaths);
      }

      if (componentConfig) {
        updatedParentPaths.push(config.path);
      }

      // Iterate over the child route configurations. We initialize the routeData array with the child routes because
      // we need the child routes to preceed the ancestor routes in the final array; this will ensure that ancestor routes do
      // not take precedent over child routes if both match.
      routeData = flattenRouteConfig(config.children, size, updatedParentPaths);
    }

    // If a component does not exist for the route, and if the route has no defined child routes, then we can ignore it.
    if (!componentConfig && !routeData.length) {
      return undefined;
    }

    if (componentConfig && componentConfig.componentClass) {
      routeData.push({
        path: config.path,
        parentPaths,
        exact: config.exact,
        strict: config.strict,
        componentClass: componentConfig.componentClass,
        componentProps: componentConfig.props,
      });
    }

    return routeData;
  });

  // Flatten nested arrays and remove undefined entries
  return [].concat(...(routes.filter(n => n)));
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
