"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraDatePicker = _interopRequireDefault(require("terra-date-picker"));
var _DatePickerTestModule = _interopRequireDefault(require("./common/DatePicker.test.module.scss"));
var cx = _bind.default.bind(_DatePickerTestModule.default);
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
var DatePickerFilterDates = function DatePickerFilterDates() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraDatePicker.default, {
    name: "date-input",
    filterDate: isWeekdayOrToday
  }));
};
var _default = DatePickerFilterDates;
exports.default = _default;