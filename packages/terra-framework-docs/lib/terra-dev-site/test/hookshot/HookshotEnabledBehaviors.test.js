"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _HookshotTestTemplate = _interopRequireDefault(require("./common/HookshotTestTemplate"));
var Enabled = function Enabled() {
  return /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
    id: "Enabled",
    isOpen: true,
    type: "primary",
    isEnabled: true
  });
};
var NotEnabled = function NotEnabled() {
  return /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
    id: "NotEnabled",
    isOpen: true,
    type: "primary",
    isEnabled: false
  });
};
var HookshotExample = function HookshotExample() {
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "EnabledBehaviors-bounds"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Content Positioning is enabled. Content is visible."), /*#__PURE__*/_react.default.createElement(Enabled, null), /*#__PURE__*/_react.default.createElement("p", null, "Content Positioning is not enabled. Content is not visible."), /*#__PURE__*/_react.default.createElement(NotEnabled, null));
};
var _default = HookshotExample;
exports.default = _default;