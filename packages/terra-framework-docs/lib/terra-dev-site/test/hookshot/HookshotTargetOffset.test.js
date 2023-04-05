"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _HookshotTestTemplate = _interopRequireDefault(require("./common/HookshotTestTemplate"));
var TargetOffset = function TargetOffset() {
  return /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
    id: "TargetOffset",
    contentAttachment: "bottom start",
    targetAttachment: "top start",
    type: "primary",
    targetOffset: {
      vertical: -10,
      horizontal: -20
    },
    isOpen: true
  });
};
var HookshotExample = function HookshotExample() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(TargetOffset, null), /*#__PURE__*/_react.default.createElement("p", null, "Target Offset Applied. (Offset value is \"top-offset left-offset\")"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Content Attachement: bottom start"), /*#__PURE__*/_react.default.createElement("li", null, "Target Attachement: top start"), /*#__PURE__*/_react.default.createElement("li", null, "Target Offset: -10px -20px")), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "ltr-TargetOffset",
    onClick: function onClick() {
      document.getElementsByTagName('html')[0].dir = 'ltr';
    }
  }, "LTR"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "rtl-TargetOffset",
    onClick: function onClick() {
      document.getElementsByTagName('html')[0].dir = 'rtl';
    }
  }, "RTL"));
};
var _default = HookshotExample;
exports.default = _default;