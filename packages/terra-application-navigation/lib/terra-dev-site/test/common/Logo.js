"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _LogoModule = _interopRequireDefault(require("./Logo.module.scss"));
/* eslint-disable */

var cx = _bind.default.bind(_LogoModule.default);
var Logo = function Logo() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('logo')
  });
};
var _default = Logo;
exports.default = _default;