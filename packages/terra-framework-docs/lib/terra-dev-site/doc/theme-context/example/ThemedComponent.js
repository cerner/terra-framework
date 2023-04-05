"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _ThemedComponentModule = _interopRequireDefault(require("./ThemedComponent.module.scss"));
var cx = _bind.default.bind(_ThemedComponentModule.default);
var Themed = function Themed() {
  var theme = _react.default.useContext(_terraThemeContext.default);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('themed', theme.className)
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Theme Name: ".concat(theme.name)), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('themed-block')
  }));
};
var _default = Themed;
exports.default = _default;