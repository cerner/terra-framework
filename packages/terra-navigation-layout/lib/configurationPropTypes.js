"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedComponentBreakpoints = exports.routePropType = exports.routeConfigPropType = exports.processedRoutesPropType = exports.navigationLayoutConfigPropType = exports.componentConfigPropType = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var supportedComponentBreakpoints = ['tiny', 'small', 'medium', 'large', 'huge'];

/**
 * PropType definition for component definitions in the NavigationLayout's configuration object.
 * It is an Object that is keyed by a String breakpoint value (or `default`) and has Object values that
 * represent Components.
 *
 * Example:
 *   {
 *     default: {
 *       componentClass: DefaultComponent,
 *       props: {
 *         prop1: 'Value',
 *         prop2: 'Other value',
 *       },
 *     },
 *     small: {
 *       componentClass: SmallComponent,
 *       // props are optional
 *     },
 *     huge: {
 *       // The same component can be rendered with different prop values at different breakpoints
 *       componentClass: DefaultComponent,
 *       props: {
 *         prop1: 'Huge Value for prop1',
 *       },
 *     },
 *   }
 */
exports.supportedComponentBreakpoints = supportedComponentBreakpoints;
var componentConfigPropType = _propTypes.default.objectOf(function (propValue, key, componentName, location, propFullName) {
  var validKey = key === 'default' || supportedComponentBreakpoints.indexOf(key) >= 0;
  if (!validKey) {
    return new Error("Invalid prop '".concat(propFullName, "' supplied to '").concat(componentName, "'. Validation failed."));
  }
  var value = propValue[key];
  var validValue = true;
  if (value !== null) {
    if ((0, _typeof2.default)(value) !== 'object') {
      validValue = false;
    } else if (!value.componentClass || (0, _typeof2.default)(value.props) !== 'object' && value.props !== null && value.props !== undefined) {
      validValue = false;
    }
  }
  if (!validValue) {
    return new Error("Invalid prop '".concat(propFullName, "' supplied to '").concat(componentName, "'. Validation failed."));
  }
  return true;
});

/**
 * PropType definition for routes definitions in the NavigationLayout's configuration object.
 * It is an Object that contains a path and a component to render for that path.
 * The path must start with a forward slash.
 *
 * Example:
 *   {
 *     path: '/a',
 *     component: {...}, // [componentConfigPropType]
 *   }
 */
exports.componentConfigPropType = componentConfigPropType;
var routePropType = _propTypes.default.shape({
  path: function path(props, propName, componentName) {
    if (!/\/.*/.test(props[propName])) {
      return new Error("Invalid prop `".concat(propName, "` supplied to") + " `".concat(componentName, "`. Validation failed. ").concat(propName, " must start with a forward slash (/)."));
    }
    return true;
  },
  component: componentConfigPropType.isRequired
});
exports.routePropType = routePropType;
var routeConfigPropType = _propTypes.default.objectOf(routePropType);

/**
 * PropType definition for the configuration Object used by the NavigationLayout.
 * It is an Object containing routing configurations for the header, menu, and content layout areas.
 *
 * Example:
 *   {
 *     header: {...}, [routeConfigPropType]
 *     menu: {...},    [routeConfigPropType]
 *     content: {...}, [routeConfigPropType]
 *   }
 */
exports.routeConfigPropType = routeConfigPropType;
var navigationLayoutConfigPropType = _propTypes.default.shape({
  header: routeConfigPropType,
  menu: routeConfigPropType,
  content: routeConfigPropType
});

/**
 * PropType definition for the processed configuration array created by the NavigationLayout and utilized
 * by the NavigationLayoutContent and RoutingStack. It is an Array containing Objects with data neccessary for the
 * creation of routes.
 *
 * Example:
 *   [{
 *     path: '/a/b/c',
 *     componentClass: CComponentClass,
 *     componentProps: {
 *       propName: 'prop value',
 *     },
 *   }, {
 *     path: '/a/b',
 *     componentClass: BComponentClass,
 *   }, {
 *     path: '/a',
 *     componentClass: AComponentClass,
 *   }]
 */
exports.navigationLayoutConfigPropType = navigationLayoutConfigPropType;
var processedRoutesPropType = _propTypes.default.arrayOf(_propTypes.default.shape({
  path: _propTypes.default.string,
  componentClass: _propTypes.default.func,
  componentProps: _propTypes.default.object
}));
exports.processedRoutesPropType = processedRoutesPropType;