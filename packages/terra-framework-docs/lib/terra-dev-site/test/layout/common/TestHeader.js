"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _TestHeaderModule = _interopRequireDefault(require("./TestHeader.module.scss"));
var cx = _bind.default.bind(_TestHeaderModule.default);
var propTypes = {
  layoutConfig: _propTypes.default.object
};
var TestHeader = function TestHeader(_ref) {
  var layoutConfig = _ref.layoutConfig;
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "test-header",
    className: cx('content-wrapper1')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper2')
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: cx('content-text')
  }, "Header"), layoutConfig.toggleMenu && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: cx('test-header-toggle'),
    onClick: layoutConfig.toggleMenu
  }, "Toggle Menu")));
};
TestHeader.propTypes = propTypes;
var _default = TestHeader;
exports.default = _default;