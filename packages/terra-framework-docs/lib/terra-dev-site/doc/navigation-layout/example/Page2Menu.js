"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _RoutingStackDelegate = _interopRequireDefault(require("terra-navigation-layout/lib/RoutingStackDelegate"));
var _NavigationLayoutDocCommonModule = _interopRequireDefault(require("./NavigationLayoutDocCommon.module.scss"));
var cx = _bind.default.bind(_NavigationLayoutDocCommonModule.default);
var Page2Menu = function Page2Menu(_ref) {
  var layoutConfig = _ref.layoutConfig,
    routingStackDelegate = _ref.routingStackDelegate;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper1')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper2')
  }, routingStackDelegate && routingStackDelegate.showParent && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: routingStackDelegate.showParent,
    className: cx('button')
  }, "Go Back"), layoutConfig.toggleMenu && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: layoutConfig.toggleMenu,
    className: cx('button')
  }, "Toggle Menu"), layoutConfig.togglePin && !layoutConfig.menuIsPinned && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: layoutConfig.togglePin,
    className: cx('button')
  }, "Pin"), layoutConfig.togglePin && layoutConfig.menuIsPinned && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: layoutConfig.togglePin,
    className: cx('button')
  }, "Unpin"), /*#__PURE__*/_react.default.createElement("h2", null, "Page 2 Menu")));
};
Page2Menu.propTypes = {
  layoutConfig: _propTypes.default.shape({
    toggleMenu: _propTypes.default.func,
    togglePin: _propTypes.default.func,
    menuIsPinned: _propTypes.default.bool
  }),
  routingStackDelegate: _RoutingStackDelegate.default.propType
};
var _default = (0, _reactRouterDom.withRouter)(Page2Menu);
exports.default = _default;