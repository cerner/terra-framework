"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _NavigationLayoutDocCommonModule = _interopRequireDefault(require("./NavigationLayoutDocCommon.module.scss"));
var cx = _bind.default.bind(_NavigationLayoutDocCommonModule.default);
var Page3Content = function Page3Content(_ref) {
  var layoutConfig = _ref.layoutConfig;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper1')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper2')
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Page 3 Content"), layoutConfig.toggleMenu && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: layoutConfig.toggleMenu,
    className: cx('button')
  }, "Toggle Menu")));
};
Page3Content.propTypes = {
  layoutConfig: _propTypes.default.shape({
    toggleMenu: _propTypes.default.func
  })
};
var _default = Page3Content;
exports.default = _default;