"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _RoutingStack = _interopRequireDefault(require("./RoutingStack"));
var _configurationPropTypes = require("./configurationPropTypes");
var _NavigationLayoutContentModule = _interopRequireDefault(require("./NavigationLayoutContent.module.scss"));
var _excluded = ["navigationLayoutRoutes", "redirectPath", "stackNavigationIsEnabled"];
var cx = _bind.default.bind(_NavigationLayoutContentModule.default);
var propTypes = {
  /**
   * The routing configuration from which Routes will be generated.
   */
  navigationLayoutRoutes: _configurationPropTypes.processedRoutesPropType,
  /**
   * The String path to redirect to should the routes specified by the routeConfig all fail to match.
   */
  redirectPath: _propTypes.default.string,
  /**
   * Flag to enable navigation within the RoutingStack.
   */
  stackNavigationIsEnabled: _propTypes.default.bool
};
var NavigationLayoutContent = function NavigationLayoutContent(_ref) {
  var navigationLayoutRoutes = _ref.navigationLayoutRoutes,
    redirectPath = _ref.redirectPath,
    stackNavigationIsEnabled = _ref.stackNavigationIsEnabled,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content')
  }, /*#__PURE__*/_react.default.createElement(_RoutingStack.default, {
    navEnabled: stackNavigationIsEnabled,
    routes: navigationLayoutRoutes,
    ancestorProps: customProps
  }, redirectPath && /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: redirectPath
  })));
};
NavigationLayoutContent.propTypes = propTypes;
var _default = NavigationLayoutContent;
exports.default = _default;