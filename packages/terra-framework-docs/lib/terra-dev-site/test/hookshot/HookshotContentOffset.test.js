"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _HookshotTestTemplate = _interopRequireDefault(require("./common/HookshotTestTemplate"));
var ContentOffset = function ContentOffset() {
  return /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
    id: "ContentOffset",
    contentAttachment: "bottom end",
    targetAttachment: "top start",
    type: "primary",
    targetOffset: {
      vertical: 20,
      horizontal: -10
    },
    isOpen: true
  });
};
var HookshotExample = function HookshotExample() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(ContentOffset, null), /*#__PURE__*/_react.default.createElement("p", null, "Content Offset Applied. (Offset value is \"top-offset left-offset\")"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Content Attachement: top end"), /*#__PURE__*/_react.default.createElement("li", null, "Target Attachement: bottom start"), /*#__PURE__*/_react.default.createElement("li", null, "Content Offset : 20px -10px")), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "ltr-ContentOffset",
    onClick: function onClick() {
      document.getElementsByTagName('html')[0].dir = 'ltr';
    }
  }, "LTR"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "rtl-ContentOffset",
    onClick: function onClick() {
      document.getElementsByTagName('html')[0].dir = 'rtl';
    }
  }, "RTL"));
};
var _default = HookshotExample;
exports.default = _default;