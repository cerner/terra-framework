"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _CalendarFilter = _interopRequireDefault(require("terra-date-picker/lib/CalendarFilter"));
var CalendarFilterDefault = function CalendarFilterDefault() {
  return /*#__PURE__*/_react.default.createElement(_CalendarFilter.default, {
    selectedDate: "2020-04-04"
  });
};
var _default = CalendarFilterDefault;
exports.default = _default;