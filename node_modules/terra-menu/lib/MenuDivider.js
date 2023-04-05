"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _MenuModule = _interopRequireDefault(require("./Menu.module.scss"));
var cx = _bind.default.bind(_MenuModule.default);
var MenuDivider = function MenuDivider() {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: cx('divider'),
    role: "separator"
  });
};
var _default = MenuDivider;
exports.default = _default;