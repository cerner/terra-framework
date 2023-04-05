"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _RoutingStackDelegate = _interopRequireDefault(require("terra-navigation-layout/lib/RoutingStackDelegate"));
var _ApplicationMenu = _interopRequireDefault(require("./_ApplicationMenu"));
var _propTypes2 = _interopRequireDefault(require("../utils/propTypes"));
var _excluded = ["layoutConfig", "routingStackDelegate", "applicationMenuWrapperProps"];
var propTypes = {
  /**
   * Array of navigation Objects to be rendered as tabs within the Application Header.
   */
  navigationItems: _propTypes2.default.navigationItemsPropType,
  /**
   * The Object of layout-related APIs provided to the components of the Layout. This prop is provided by the Layout.
   */
  layoutConfig: _propTypes2.default.layoutConfigPropType.isRequired,
  /**
   * The Object containing RoutingStack APIs provided to children of the RoutingStack. This prop is provided by the RoutingStack.
   */
  routingStackDelegate: _RoutingStackDelegate.default.propType.isRequired,
  /**
   * The Object containing props from the configuration necessary for ApplicationMenu creation.
   */
  applicationMenuWrapperProps: _propTypes.default.shape({
    /**
     * The Component class that will be rendered as content within the ApplicationMenu.
     */
    contentComponentClass: _propTypes.default.func.isRequired,
    /**
     * The configuration for ApplicationName component.
     */
    nameConfig: _propTypes2.default.nameConfigPropType,
    /**
     * The configuration for ApplicationUtility component.
     */
    utilityConfig: _propTypes2.default.utilityConfigPropType,
    /**
     * The content to render in the menu's extensions region.
     */
    extensions: _propTypes.default.node
  }).isRequired
};
var ApplicationMenuWrapper = function ApplicationMenuWrapper(props) {
  var layoutConfig = props.layoutConfig,
    routingStackDelegate = props.routingStackDelegate,
    applicationMenuWrapperProps = props.applicationMenuWrapperProps,
    contentProps = (0, _objectWithoutProperties2.default)(props, _excluded);

  /**
   * This Content component is the component class originally registered in the routingConfig
   * pre-wrapping. The contentProps are the props that were originally specified in the routingConfig for that component.
   */
  var Content = applicationMenuWrapperProps.contentComponentClass;
  return /*#__PURE__*/_react.default.createElement(_ApplicationMenu.default, {
    layoutConfig: layoutConfig,
    routingStackDelegate: routingStackDelegate,
    nameConfig: applicationMenuWrapperProps.nameConfig,
    utilityConfig: applicationMenuWrapperProps.utilityConfig,
    extensions: applicationMenuWrapperProps.extensions,
    content: /*#__PURE__*/_react.default.createElement(Content, contentProps)
  });
};
ApplicationMenuWrapper.propTypes = propTypes;
var _default = ApplicationMenuWrapper;
exports.default = _default;