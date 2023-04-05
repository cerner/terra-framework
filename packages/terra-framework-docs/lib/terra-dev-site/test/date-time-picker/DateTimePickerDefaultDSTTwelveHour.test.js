"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DateTimeUtils = _interopRequireDefault(require("terra-date-time-picker/lib/DateTimeUtils"));
var _DateTimePickerExampleTemplate = _interopRequireDefault(require("./common/DateTimePickerExampleTemplate"));
var DateTimePickerDefault = function DateTimePickerDefault() {
  return /*#__PURE__*/_react.default.createElement(_DateTimePickerExampleTemplate.default, {
    initialTimeZone: "America/Chicago",
    timeVariant: _DateTimeUtils.default.FORMAT_12_HOUR
  });
};
var _default = DateTimePickerDefault;
exports.default = _default;