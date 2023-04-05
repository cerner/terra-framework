"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _CalendarFilter = _interopRequireDefault(require("terra-date-picker/lib/CalendarFilter"));
var CalendarFilterFilterDates = function CalendarFilterFilterDates() {
  // Callback for filterDate. Returns true if day is not weekend (saturday / sunday)
  var isWeekday = function isWeekday(dateValue) {
    var momentDate = (0, _momentTimezone.default)(dateValue);
    if (momentDate && momentDate.isValid()) {
      var day = momentDate.day();
      return day !== 0 && day !== 6;
    }
    return true;
  };
  return /*#__PURE__*/_react.default.createElement(_CalendarFilter.default, {
    id: "filter-dates",
    filterDate: isWeekday
  });
};
var _default = CalendarFilterFilterDates;
exports.default = _default;