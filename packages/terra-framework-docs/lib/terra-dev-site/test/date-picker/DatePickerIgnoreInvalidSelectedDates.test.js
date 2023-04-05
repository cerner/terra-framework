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
var DatePickerInvalidSelectedDates = function DatePickerInvalidSelectedDates() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("span", null, "selectedDate = null"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_terraDatePicker.default, {
    name: "null-selectedDate",
    selectedDate: null
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, "selectedDate = undefined"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_terraDatePicker.default, {
    name: "undefined-selectedDate",
    selectedDate: undefined
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, "selectedDate = "), "\"\"", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_terraDatePicker.default, {
    name: "empty-selectedDate",
    selectedDate: ""
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, "selectedDate = "), "\"abc\"", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_terraDatePicker.default, {
    name: "character-selectedDate",
    selectedDate: "abc"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, "selectedDate = "), "\"!@#$\"", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_terraDatePicker.default, {
    name: "special-character-selectedDate",
    selectedDate: "!@#$"
  }));
};
var _default = DatePickerInvalidSelectedDates;
exports.default = _default;