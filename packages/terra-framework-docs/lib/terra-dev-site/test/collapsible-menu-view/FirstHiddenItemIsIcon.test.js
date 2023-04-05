"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _IconSend = _interopRequireDefault(require("terra-icon/lib/icon/IconSend"));
var _terraCollapsibleMenuView = _interopRequireDefault(require("terra-collapsible-menu-view"));
var CollapsibleMenuViewDemo = function CollapsibleMenuViewDemo() {
  return /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default, null, /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
    text: "Button A",
    className: "ButtonA",
    key: "buttonA"
  }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
    text: "Button B",
    className: "ButtonB",
    key: "buttonB"
  }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Divider, {
    key: "Divider4"
  }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
    text: "Button 1",
    className: "Button1",
    key: "button1"
  }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
    text: "Button 2",
    className: "Button2",
    key: "button2"
  }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
    icon: /*#__PURE__*/_react.default.createElement(_IconSend.default, null),
    text: "Button3",
    className: "IconOnly",
    key: "button3",
    isIconOnly: true
  }));
};
var _default = CollapsibleMenuViewDemo;
exports.default = _default;