"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateMatchExists = exports.reduceRouteConfig = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _reactRouterDom = require("react-router-dom");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
var reduceRouteConfig = function reduceRouteConfig(routeConfig, size) {
  if (!routeConfig) {
    return [];
  }
  return Object.keys(routeConfig).reduce(function (availableRoutes, routeKey) {
    var config = routeConfig[routeKey];
    var componentConfig;
    if ((0, _typeof2.default)(config.component) === 'object') {
      var configForSize = config.component[size];
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
        refuseRoutingStackNavigation: componentConfig.refuseRoutingStackNavigation
      });
    }
    return availableRoutes;
  }, []).sort(function (routeA, routeB) {
    if (routeA.path < routeB.path) {
      return 1;
    }
    if (routeA.path > routeB.path) {
      return -1;
    }
    return 0;
  }).map(function (route, index, array) {
    // The root path '/' cannot have any parent routes, so further processing is unnecessary.
    if (route.path === '/') {
      return route;
    }

    // The path being tested is split into segments. Those segments are then rejoined to produce the set of
    // potential parent paths. Those potential paths are then filtered against the set of actual paths that
    // were generated so that only matching parent paths are returned.

    var pathSegments = route.path.split('/');
    var potentialParentPaths = [];
    // The number of necessary iterations is 2 less than the number of total segments.
    // eslint-disable-next-line prefer-destructuring
    for (var i = 0, length = pathSegments.length; i < length - 2; i += 1) {
      pathSegments.pop();
      potentialParentPaths.push(pathSegments.join('/'));
    }

    // The root path is added manually as it cannot be produced by the above joins.
    potentialParentPaths.push('/');
    var matchedParentPaths = array.filter(function (testRoute) {
      return potentialParentPaths.indexOf(testRoute.path) !== -1 && !testRoute.refuseRoutingStackNavigation;
    }).map(function (parentRoute) {
      return parentRoute.path;
    });
    return _objectSpread(_objectSpread({}, route), {}, {
      parentPaths: matchedParentPaths.reverse()
    });
  });
};

/**
 * Determines whether the given pathname matches against any of the given routes configurations.
 * @param {String} pathname The path to be searched for in the routeConfig.
 * @param {Array} routes The route data to match against.
 * @param {String} size The breakpoint size used for configuration parsing.
 */
exports.reduceRouteConfig = reduceRouteConfig;
var validateMatchExists = function validateMatchExists(pathname, routes) {
  if (!routes || !pathname) {
    return false;
  }
  // eslint-disable-next-line prefer-destructuring
  for (var i = 0, length = routes.length; i < length; i += 1) {
    var testRoute = routes[i];
    if ((0, _reactRouterDom.matchPath)(pathname, {
      path: testRoute.path
    })) {
      return true;
    }
  }
  return false;
};
exports.validateMatchExists = validateMatchExists;