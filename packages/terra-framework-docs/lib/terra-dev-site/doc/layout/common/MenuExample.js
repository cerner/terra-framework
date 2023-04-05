"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _LayoutDocCommonModule = _interopRequireDefault(require("./LayoutDocCommon.module.scss"));
var cx = _bind.default.bind(_LayoutDocCommonModule.default);
var menu = function menu(_ref) {
  var layoutConfig = _ref.layoutConfig;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper1')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper2')
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: cx('content-text')
  }, "Menu"), layoutConfig.toggleMenu && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: cx('button'),
    onClick: layoutConfig.toggleMenu
  }, "Toggle Menu"), layoutConfig.togglePin && !layoutConfig.menuIsPinned && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: cx('button'),
    onClick: layoutConfig.togglePin
  }, "Pin"), layoutConfig.togglePin && layoutConfig.menuIsPinned && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: cx('button'),
    onClick: layoutConfig.togglePin
  }, "Unpin")));
};
menu.propTypes = {
  layoutConfig: _propTypes.default.shape({
    toggleMenu: _propTypes.default.func,
    togglePin: _propTypes.default.func,
    menuIsPinned: _propTypes.default.bool
  })
};
var _default = menu;
exports.default = _default;