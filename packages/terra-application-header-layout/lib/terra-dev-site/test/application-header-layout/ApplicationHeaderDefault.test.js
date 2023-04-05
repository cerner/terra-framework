"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ApplicationHeaderLayout = _interopRequireDefault(require("../../../ApplicationHeaderLayout"));
var _ApplicationHeaderDefaultTestModule = _interopRequireDefault(require("./ApplicationHeaderDefault.test.module.scss"));
var cx = _bind.default.bind(_ApplicationHeaderDefaultTestModule.default);
var ApplicationHeaderDefault = function ApplicationHeaderDefault() {
  return /*#__PURE__*/_react.default.createElement(_ApplicationHeaderLayout.default, {
    id: "test-header",
    className: cx('test-header-layout'),
    extensions: /*#__PURE__*/_react.default.createElement("div", {
      id: "test-extensions"
    }, "Extensions\xA0"),
    navigation: /*#__PURE__*/_react.default.createElement("div", {
      className: cx('test-navigation'),
      id: "test-navigation"
    }, "Navigation\xA0"),
    logo: /*#__PURE__*/_react.default.createElement("div", {
      id: "test-logo"
    }, "Logo\xA0"),
    toggle: /*#__PURE__*/_react.default.createElement("div", {
      id: "test-toggle",
      className: cx('test-toggle'),
      tabIndex: 0
    }, "Toggle\xA0") // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
    ,
    utilities: /*#__PURE__*/_react.default.createElement("div", {
      id: "test-utilities"
    }, "Utilities\xA0")
  });
};
var _default = ApplicationHeaderDefault;
exports.default = _default;