import PropTypes from 'prop-types';
import { matchPath } from 'react-router-dom';

const supportedComponentBreakpoints = ['tiny', 'small', 'medium', 'large', 'huge'];

const componentConfigPropType = PropTypes.objectOf((propValue, key, componentName, location, propFullName) => {
  const keyIsValid = key === 'default' || supportedComponentBreakpoints.indexOf(key) >= 0;

  if (!keyIsValid) {
    return new Error(`Invalid prop '${propFullName}' supplied to '${componentName}'. Validation failed.`);
  }

  const value = propValue[key];

  let valueIsValid = true;
  if (value !== null) {
    if (typeof (value) !== 'object') {
      valueIsValid = false;
    } else if (!value.componentClass || (typeof (value.props) !== 'object' && value.props !== null && value.props !== undefined)) {
      valueIsValid = false;
    }
  }

  if (!valueIsValid) {
    return new Error(`Invalid prop '${propFullName}' supplied to '${componentName}'. Validation failed.`);
  }
});

const routePropType = PropTypes.shape({
  path: PropTypes.string.isRequired,
  component: componentConfigPropType.isRequired,
  meta: PropTypes.object,
});
routePropType.children = PropTypes.objectOf(PropTypes.objectOf(routePropType)); // Recursive PropTypes are funky

const routeConfigPropType = PropTypes.objectOf(routePropType);

const navigationConfigPropType = PropTypes.shape({
  navigation: PropTypes.object,
  menuRoutes: routeConfigPropType,
  contentRoutes: routeConfigPropType,
});

export { navigationConfigPropType, routeConfigPropType, routePropType, componentConfigPropType };

/**
 * Given a route configuration and size, returns an Array of ordered routing data objects
 * representing the routes available at that size.
 * @param {Object} routeConfig The route configuration to flatten. The expected shape matches that of the routeConfigPropType.
 */
const flattenRouteConfig = (routeConfig, size, parentPaths) => {
  if (!routeConfig) {
    return undefined;
  }

  const routes = Object.keys(routeConfig).map((routeKey) => {
    const config = routeConfig[routeKey];

    let componentConfig;

    if (typeof (config.component) === 'object') {
      const configForSize = config.component[size];

      if (configForSize) {
        componentConfig = configForSize;
      }

      if (configForSize === undefined && config.component.default) {
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

      routeData = flattenRouteConfig(config.children, size, updatedParentPaths);
    }

    // If a component does not exist for the route, and if the route has no child routes, then we can ignore it.
    if (!componentConfig && !routeData.length) {
      return undefined;
    }

    if (componentConfig && componentConfig.componentClass) {
      routeData.push({
        path: config.path,
        parentPaths,
        exact: config.exact,
        strict: config.strict,
        key: config.key || config.path,
        meta: config.meta,
        componentClass: componentConfig.componentClass,
        componentProps: componentConfig.props,
      });
    }

    return routeData;
  });

  // Flatten nested arrays and remove undefined entries
  return [].concat(...(routes.filter(n => n)));
};

const configHasMatchingRoute = (pathname, routeConfig, size) => {
  if (!routeConfig || !pathname) {
    return false;
  }

  const processedRoutes = flattenRouteConfig(routeConfig, size);

  if (!processedRoutes) {
    return false;
  }

  for (let i = 0, length = processedRoutes.length; i < length; i += 1) {
    const match = matchPath(pathname, { path: processedRoutes[i].path, exact: processedRoutes[i].exact, strict: processedRoutes[i].strict });

    if (match) {
      return true;
    }
  }

  return false;
};


export { flattenRouteConfig, configHasMatchingRoute };
