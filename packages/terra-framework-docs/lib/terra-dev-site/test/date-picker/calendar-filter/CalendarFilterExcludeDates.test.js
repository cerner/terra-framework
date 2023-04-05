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
var CalendarFilterExcludeDates = function CalendarFilterExcludeDates() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Excluded dates : 2020-04-01, 2020-04-03"), /*#__PURE__*/_react.default.createElement(_CalendarFilter.default, {
    excludeDates: ['2020-04-01', '2020-04-03'],
    selectedDate: "2020-04-02"
  }));
};
var _default = CalendarFilterExcludeDates;
exports.default = _default;