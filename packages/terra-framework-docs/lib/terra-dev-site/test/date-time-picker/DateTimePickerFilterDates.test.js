"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _DateTimePickerExampleTemplate = _interopRequireDefault(require("./common/DateTimePickerExampleTemplate"));
var isWeekdayOrToday = function isWeekdayOrToday(date) {
  var momentDate = (0, _momentTimezone.default)(date);

  // Ensure if today is a weekend that the Today button doesn't get disabled and causes the screenshot to mismatch.
  if (momentDate.isSame((0, _momentTimezone.default)(), 'day')) {
    return true;
  }
  if (momentDate && momentDate.isValid()) {
    var day = momentDate.day();
    return day !== 0 && day !== 6;
  }
  return true;
};
var DateTimePickerFilterDates = function DateTimePickerFilterDates() {
  return /*#__PURE__*/_react.default.createElement(_DateTimePickerExampleTemplate.default, {
    filterDate: isWeekdayOrToday,
    value: "2017-08-15"
  });
};
var _default = DateTimePickerFilterDates;
exports.default = _default;