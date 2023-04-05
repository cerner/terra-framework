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
var DatePickerStartDate = function DatePickerStartDate() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraDatePicker.default, {
    name: "date-input",
    selectedDate: "2017-04-01"
  }));
};
var _default = DatePickerStartDate;
exports.default = _default;