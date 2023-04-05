"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _CalendarFilter = _interopRequireDefault(require("terra-date-picker/lib/CalendarFilter"));
var CalendarFilterMinMax = function CalendarFilterMinMax() {
  return /*#__PURE__*/_react.default.createElement(_CalendarFilter.default, {
    minDate: "2020-04-01",
    maxDate: "2020-04-10",
    selectedDate: "2020-04-11"
  });
};
var _default = CalendarFilterMinMax;
exports.default = _default;