"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _DateTimePickerExampleTemplate = _interopRequireDefault(require("./common/DateTimePickerExampleTemplate"));
var DateTimePickerMinMax = function DateTimePickerMinMax() {
  return /*#__PURE__*/_react.default.createElement(_DateTimePickerExampleTemplate.default, {
    minDate: (0, _momentTimezone.default)().format(),
    maxDate: (0, _momentTimezone.default)().add(6, 'days').format(),
    value: "2019-04-19T10:30:00"
  });
};
var _default = DateTimePickerMinMax;
exports.default = _default;