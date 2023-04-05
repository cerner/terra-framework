"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _CalendarFilter = _interopRequireDefault(require("terra-date-picker/lib/CalendarFilter"));
var CalendarFilterMinMax = function CalendarFilterMinMax() {
  return /*#__PURE__*/_react.default.createElement(_CalendarFilter.default, {
    id: "default",
    minDate: (0, _momentTimezone.default)().format(),
    maxDate: (0, _momentTimezone.default)().add(6, 'days').format()
  });
};
var _default = CalendarFilterMinMax;
exports.default = _default;