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
var CalendarFilterIncludeDates = function CalendarFilterIncludeDates() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Included dates : 2020-04-01, 2020-04-02, 2020-04-03"), /*#__PURE__*/_react.default.createElement(_CalendarFilter.default, {
    includeDates: ['2020-04-01', '2020-04-02', '2020-04-03'],
    selectedDate: "2020-04-05"
  }));
};
var _default = CalendarFilterIncludeDates;
exports.default = _default;