"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraMenu = _interopRequireDefault(require("terra-menu"));
var _MenuItemCommonModule = _interopRequireDefault(require("./MenuItemCommon.module.scss"));
var cx = _bind.default.bind(_MenuItemCommonModule.default);
var WrappedTextMenuItem = function WrappedTextMenuItem() {
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: cx('mimic-menu-container'),
    role: "menu"
  }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
    text: "This menu item has a really long text that should wrap.",
    className: "testWrappedItem"
  }));
};
var _default = WrappedTextMenuItem;
exports.default = _default;