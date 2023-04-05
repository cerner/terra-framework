"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _CalendarFilter = _interopRequireDefault(require("terra-date-picker/lib/CalendarFilter"));
var _DatePickerTestModule = _interopRequireDefault(require("../common/DatePicker.test.module.scss"));
var cx = _bind.default.bind(_DatePickerTestModule.default);
var CalendarFilterDefaultDateOutOfRange = function CalendarFilterDefaultDateOutOfRange() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Default date : 2020-04-01 out of range"), /*#__PURE__*/_react.default.createElement(_CalendarFilter.default, {
    minDate: "2020-04-10",
    maxDate: "2020-04-20",
    selectedDate: "2020-04-01"
  }));
};
var _default = CalendarFilterDefaultDateOutOfRange;
exports.default = _default;