"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraTimeInput = _interopRequireDefault(require("terra-time-input"));
var _TimeUtil = _interopRequireDefault(require("terra-time-input/lib/TimeUtil"));
var TimeInputA11y = function TimeInputA11y() {
  var label = 'Time of birth';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_terraTimeInput.default, {
    id: "timeInput",
    name: "time-input",
    a11yLabel: label,
    value: "13:22:59",
    isInvalid: true,
    isIncomplete: true,
    required: true,
    showSeconds: true,
    variant: _TimeUtil.default.FORMAT_12_HOUR
  }), /*#__PURE__*/_react.default.createElement("p", null, "Turn on your screen reader to hear the accessibility features:"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "The label attribute,", "\"".concat(label, "\""), ", is read as the input group's name."), /*#__PURE__*/_react.default.createElement("li", null, "The a11yLabel attribute is read as a prefix to reading the full time value."), /*#__PURE__*/_react.default.createElement("li", null, "The full time value is read after any valid change to the time value."), /*#__PURE__*/_react.default.createElement("li", null, "Each component, e.g. minute, of the time input is described upon focus.")));
};
var _default = TimeInputA11y;
exports.default = _default;