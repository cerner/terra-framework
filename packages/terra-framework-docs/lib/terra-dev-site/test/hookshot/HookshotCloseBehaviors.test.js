"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _HookshotTestTemplate = _interopRequireDefault(require("./common/HookshotTestTemplate"));
var NoCloseBehavior = function NoCloseBehavior() {
  return /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
    id: "NoCloseBehavior",
    type: "primary",
    hookshotContentProps: {
      closeOnEsc: false,
      closeOnOutsideClick: false,
      closeOnResize: false
    }
  });
};
var EscBehavior = function EscBehavior() {
  return /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
    id: "EscBehavior",
    type: "primary",
    hookshotContentProps: {
      closeOnEsc: true,
      closeOnOutsideClick: false,
      closeOnResize: false
    }
  });
};
var OutsideClickBehavior = function OutsideClickBehavior() {
  return /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
    id: "OutsideClickBehavior",
    type: "primary",
    hookshotContentProps: {
      closeOnEsc: false,
      closeOnOutsideClick: true,
      closeOnResize: false
    }
  });
};
var OutsideClickBehaviorWithSvgs = function OutsideClickBehaviorWithSvgs() {
  return /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
    id: "OutsideClickBehaviorWithSvgs",
    type: "primary",
    includeSvgs: true,
    hookshotContentProps: {
      closeOnEsc: false,
      closeOnOutsideClick: true,
      closeOnResize: false
    }
  });
};
var ResizeBehavior = function ResizeBehavior() {
  return /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
    id: "ResizeBehavior",
    type: "primary",
    hookshotContentProps: {
      closeOnEsc: false,
      closeOnOutsideClick: false,
      closeOnResize: true
    }
  });
};
var AllBehavior = function AllBehavior() {
  return /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
    id: "AllBehavior",
    type: "primary",
    hookshotContentProps: {
      closeOnEsc: true,
      closeOnOutsideClick: true,
      closeOnResize: true
    }
  });
};
var HookshotExample = function HookshotExample() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "All Close Behavior"), /*#__PURE__*/_react.default.createElement(AllBehavior, null), /*#__PURE__*/_react.default.createElement("p", null, "Close on ESC Behavior"), /*#__PURE__*/_react.default.createElement(EscBehavior, null), /*#__PURE__*/_react.default.createElement("p", null, "Close on Outside Click Behavior"), /*#__PURE__*/_react.default.createElement(OutsideClickBehavior, null), /*#__PURE__*/_react.default.createElement("p", null, "Close on Outside Click Behavior With SVGs"), /*#__PURE__*/_react.default.createElement(OutsideClickBehaviorWithSvgs, null), /*#__PURE__*/_react.default.createElement("p", null, "Close on Resize Behavior"), /*#__PURE__*/_react.default.createElement(ResizeBehavior, null), /*#__PURE__*/_react.default.createElement("p", null, "No Close Behavior - Once opened, content stays on the screen when scrolling occurs."), /*#__PURE__*/_react.default.createElement(NoCloseBehavior, null), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "scroll-bounds"
  }, "Scroll Button"));
};
var _default = HookshotExample;
exports.default = _default;