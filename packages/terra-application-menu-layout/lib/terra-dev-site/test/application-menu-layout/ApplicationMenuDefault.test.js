"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ApplicationMenuLayout = _interopRequireDefault(require("../../../ApplicationMenuLayout"));
var _ApplicationMenuDefaultTestModule = _interopRequireDefault(require("./ApplicationMenuDefault.test.module.scss"));
var cx = _bind.default.bind(_ApplicationMenuDefaultTestModule.default);
var ApplicationMenuDefault = function ApplicationMenuDefault() {
  return /*#__PURE__*/_react.default.createElement(_ApplicationMenuLayout.default, {
    id: "test-menu",
    extensions: /*#__PURE__*/_react.default.createElement("div", {
      id: "test-extensions"
    }, "Extensions"),
    content: /*#__PURE__*/_react.default.createElement("div", {
      className: cx('test-content'),
      id: "test-content"
    }, "Content"),
    header: /*#__PURE__*/_react.default.createElement("div", {
      id: "test-header"
    }, "Header"),
    footer: /*#__PURE__*/_react.default.createElement("div", {
      id: "test-footer"
    }, "Footer")
  });
};
var _default = ApplicationMenuDefault;
exports.default = _default;