"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DateTimeUtils = _interopRequireDefault(require("terra-date-time-picker/lib/DateTimeUtils"));
var _DateTimePickerExampleTemplate = _interopRequireDefault(require("./common/DateTimePickerExampleTemplate"));
var DateTimePickerSecondsTwelveHour = function DateTimePickerSecondsTwelveHour() {
  return /*#__PURE__*/_react.default.createElement(_DateTimePickerExampleTemplate.default, {
    value: "2017-08-08T10:30:00",
    showSeconds: true,
    timeVariant: _DateTimeUtils.default.FORMAT_12_HOUR
  });
};
var _default = DateTimePickerSecondsTwelveHour;
exports.default = _default;