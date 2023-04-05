"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DateTimePickerTimezoneExampleTemplate = _interopRequireDefault(require("./common/DateTimePickerTimezoneExampleTemplate"));
var DateTimePickerExample = function DateTimePickerExample() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DateTimePickerTimezoneExampleTemplate.default, {
    value: "2020-10-31T22:30:00",
    initialTimeZone: "America/Adak"
  }), /*#__PURE__*/_react.default.createElement(_DateTimePickerTimezoneExampleTemplate.default, {
    value: "2020-11-02T22:30:00",
    initialTimeZone: "America/Adak"
  }), /*#__PURE__*/_react.default.createElement(_DateTimePickerTimezoneExampleTemplate.default, {
    value: "2020-10-31T22:30:00",
    initialTimeZone: "America/Chicago"
  }), /*#__PURE__*/_react.default.createElement(_DateTimePickerTimezoneExampleTemplate.default, {
    value: "2020-11-02T22:30:00",
    initialTimeZone: "America/Chicago"
  }), /*#__PURE__*/_react.default.createElement(_DateTimePickerTimezoneExampleTemplate.default, {
    value: "2020-10-31T22:30:00",
    initialTimeZone: "Australia/Sydney"
  }), /*#__PURE__*/_react.default.createElement(_DateTimePickerTimezoneExampleTemplate.default, {
    value: "2020-11-02T22:30:00",
    initialTimeZone: "Australia/Sydney"
  }));
};
var _default = DateTimePickerExample;
exports.default = _default;