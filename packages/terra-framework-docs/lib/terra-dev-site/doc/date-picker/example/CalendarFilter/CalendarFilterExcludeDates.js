"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _CalendarFilter = _interopRequireDefault(require("terra-date-picker/lib/CalendarFilter"));
var CalendarFilterExcludeDates = function CalendarFilterExcludeDates() {
  return /*#__PURE__*/_react.default.createElement(_CalendarFilter.default, {
    id: "default",
    excludeDates: [(0, _momentTimezone.default)().subtract(1, 'days').format(), (0, _momentTimezone.default)().add(1, 'days').format()]
  });
};
var _default = CalendarFilterExcludeDates;
exports.default = _default;