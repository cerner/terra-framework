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
var _NavigationLayoutDocCommonModule = _interopRequireDefault(require("./NavigationLayoutDocCommon.module.scss"));
var cx = _bind.default.bind(_NavigationLayoutDocCommonModule.default);
var MenuExample = function MenuExample(_ref) {
  var layoutConfig = _ref.layoutConfig;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper1')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper2')
  }, layoutConfig.toggleMenu && /*#__PURE__*/_react.default.createElement("button", {
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
  }, "Unpin"), /*#__PURE__*/_react.default.createElement("h2", null, "Menu"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/page1"
  }, "Page 1"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/page2"
  }, "Page 2"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/page3"
  }, "Page 3")));
};
MenuExample.propTypes = {
  layoutConfig: _propTypes.default.shape({
    toggleMenu: _propTypes.default.func,
    togglePin: _propTypes.default.func,
    menuIsPinned: _propTypes.default.bool
  })
};
var _default = (0, _reactRouterDom.withRouter)(MenuExample);
exports.default = _default;