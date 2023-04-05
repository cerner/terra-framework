"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
require("./PlaceholderList.module.scss");
var _excluded = ["children", "isSelected", "onSelect"];
/* eslint-disable */
var PlaceholderListItem = function PlaceholderListItem(_ref) {
  var children = _ref.children,
    isSelected = _ref.isSelected,
    onSelect = _ref.onSelect,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var keyDown = function keyDown(event) {
    if (event.nativeEvent.keyCode === 13 || event.nativeEvent.keyCode === 32) {
      event.preventDefault();
      onSelect(event);
    }
  };
  var classNames = isSelected ? 'placeholder-list-item is-selected' : 'placeholder-list-item ';
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, customProps, {
    "aria-selected": isSelected,
    tabIndex: "0",
    className: classNames,
    onClick: onSelect,
    onKeyDown: keyDown,
    role: "option"
  }), children);
};
var _default = PlaceholderListItem;
exports.default = _default;