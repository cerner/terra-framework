"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraTimeInput = _interopRequireDefault(require("terra-time-input"));
var _TimeUtil = _interopRequireDefault(require("terra-time-input/lib/TimeUtil"));
var TimeInputDefault = function TimeInputDefault() {
  return /*#__PURE__*/_react.default.createElement(_terraTimeInput.default, {
    id: "timeInput",
    name: "time-input",
    value: "21:22",
    variant: _TimeUtil.default.FORMAT_12_HOUR
  });
};
var _default = TimeInputDefault;
exports.default = _default;