"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DateTimePickerTimezoneExampleTemplate = _interopRequireDefault(require("./common/DateTimePickerTimezoneExampleTemplate"));
var DateTimePickerExample = function DateTimePickerExample() {
  return /*#__PURE__*/_react.default.createElement(_DateTimePickerTimezoneExampleTemplate.default, {
    value: "2017-11-05T01:30:00",
    initialTimeZone: "America/Chicago"
  });
};
var _default = DateTimePickerExample;
exports.default = _default;