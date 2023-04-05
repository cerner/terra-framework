"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraDatePicker = _interopRequireDefault(require("terra-date-picker"));
var _DatePickerTestModule = _interopRequireDefault(require("./common/DatePicker.test.module.scss"));
var cx = _bind.default.bind(_DatePickerTestModule.default);
var DatePickerDefaultDateExcluded = function DatePickerDefaultDateExcluded() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Extraneous Clickable Text"), /*#__PURE__*/_react.default.createElement(_terraDatePicker.default, {
    name: "date-input",
    excludeDates: ['2017-04-03', '2017-04-04', '2017-04-05', '2017-04-06', '2017-04-07'],
    selectedDate: "2017-04-05"
  }));
};
var _default = DatePickerDefaultDateExcluded;
exports.default = _default;