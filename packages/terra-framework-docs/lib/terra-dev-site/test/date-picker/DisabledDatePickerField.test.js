"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _DatePickerField = _interopRequireDefault(require("terra-date-picker/lib/DatePickerField"));
var _DatePickerTestModule = _interopRequireDefault(require("./common/DatePicker.test.module.scss"));
var cx = _bind.default.bind(_DatePickerTestModule.default);
var DisabledDatePickerField = function DisabledDatePickerField() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_DatePickerField.default, {
    label: "Enter Date",
    name: "date-input",
    selectedDate: "2017-04-01",
    datePickerId: "disabled-date-picker",
    disabled: true
  }));
};
var _default = DisabledDatePickerField;
exports.default = _default;