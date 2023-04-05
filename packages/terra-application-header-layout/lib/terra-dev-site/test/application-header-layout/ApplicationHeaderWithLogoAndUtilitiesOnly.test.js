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
var ApplicationHeaderWithLogoAndUtilitiesOnly = function ApplicationHeaderWithLogoAndUtilitiesOnly() {
  return /*#__PURE__*/_react.default.createElement(_ApplicationHeaderLayout.default, {
    id: "test-header",
    className: cx('test-header-layout'),
    logo: /*#__PURE__*/_react.default.createElement("div", {
      id: "test-logo"
    }, "Logo\xA0"),
    utilities: /*#__PURE__*/_react.default.createElement("div", {
      id: "test-utilities"
    }, "Utilities\xA0")
  });
};
var _default = ApplicationHeaderWithLogoAndUtilitiesOnly;
exports.default = _default;