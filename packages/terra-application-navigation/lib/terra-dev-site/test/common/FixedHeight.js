"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _FixedHeightModule = _interopRequireDefault(require("./FixedHeight.module.scss"));
/* eslint-disable */

var cx = _bind.default.bind(_FixedHeightModule.default);
var FixedHeight = function FixedHeight(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('outer')
  }, children);
};
var _default = FixedHeight;
exports.default = _default;