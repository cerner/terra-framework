"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DateTimePickerExampleTemplate = _interopRequireDefault(require("./common/DateTimePickerExampleTemplate"));
var DateTimePickerDefaultDateOutOfRange = function DateTimePickerDefaultDateOutOfRange() {
  return /*#__PURE__*/_react.default.createElement(_DateTimePickerExampleTemplate.default, {
    minDate: "2017-04-10T12:00",
    maxDate: "2017-04-20T12:00",
    value: "2017-04-01T12:00"
  });
};
var _default = DateTimePickerDefaultDateOutOfRange;
exports.default = _default;