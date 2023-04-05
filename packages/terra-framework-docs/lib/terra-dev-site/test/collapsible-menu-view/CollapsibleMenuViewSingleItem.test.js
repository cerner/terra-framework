"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraCollapsibleMenuView = _interopRequireDefault(require("terra-collapsible-menu-view"));
var CollapsibleMenuViewSingleItem = function CollapsibleMenuViewSingleItem() {
  return /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default, null, /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
    text: "-----------------------------------------------------------------------------------------------------------------",
    key: "button"
  }));
};
var _default = CollapsibleMenuViewSingleItem;
exports.default = _default;