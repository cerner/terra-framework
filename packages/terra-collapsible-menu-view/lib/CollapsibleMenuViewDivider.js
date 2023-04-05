"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraMenu = _interopRequireDefault(require("terra-menu"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _CollapsibleMenuViewModule = _interopRequireDefault(require("./CollapsibleMenuView.module.scss"));
var cx = _bind.default.bind(_CollapsibleMenuViewModule.default);
var contextTypes = {
  isCollapsibleMenuItem: _propTypes.default.bool
};
var CollapsibleMenuViewDivider = function CollapsibleMenuViewDivider(props, _ref) {
  var isCollapsibleMenuItem = _ref.isCollapsibleMenuItem;
  var theme = _react.default.useContext(_terraThemeContext.default);
  if (isCollapsibleMenuItem) {
    return /*#__PURE__*/_react.default.createElement(_terraMenu.default.Divider, null);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx(['divider', 'face-up-item', theme.className])
  });
};
CollapsibleMenuViewDivider.contextTypes = contextTypes;
var _default = CollapsibleMenuViewDivider;
exports.default = _default;