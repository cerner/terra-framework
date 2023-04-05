"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ToolbarExampleModule = _interopRequireDefault(require("./ToolbarExample.module.scss"));
var cx = _bind.default.bind(_ToolbarExampleModule.default);
var propTypes = {
  layoutConfig: _propTypes.default.object
};
var content = function content(_ref) {
  var layoutConfig = _ref.layoutConfig;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper1')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper2')
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: cx('content-text')
  }, "Header"), layoutConfig.toggleMenu && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: cx('button'),
    onClick: layoutConfig.toggleMenu
  }, "Toggle Menu")));
};
content.propTypes = propTypes;
var _default = content;
exports.default = _default;