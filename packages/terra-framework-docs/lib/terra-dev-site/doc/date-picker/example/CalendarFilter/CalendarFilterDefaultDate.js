"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _CalendarFilter = _interopRequireDefault(require("terra-date-picker/lib/CalendarFilter"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _DatePickerExampleCommonModule = _interopRequireDefault(require("../DatePickerExampleCommon.module.scss"));
var cx = _bind.default.bind(_DatePickerExampleCommonModule.default);
var CalendarFilterDefaultDate = function CalendarFilterDefaultDate() {
  var defaultDate = (0, _momentTimezone.default)().add(2, 'days').format('YYYY-MM-DD');
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Default Selected Date:", /*#__PURE__*/_react.default.createElement("span", {
    className: cx('date-wrapper')
  }, defaultDate)), /*#__PURE__*/_react.default.createElement(_CalendarFilter.default, {
    id: "default",
    selectedDate: defaultDate
  }));
};
var _default = CalendarFilterDefaultDate;
exports.default = _default;