"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DateTimePickerExampleTemplate = _interopRequireDefault(require("./common/DateTimePickerExampleTemplate"));
var DateTimePickerDefaultDateExcluded = function DateTimePickerDefaultDateExcluded() {
  return /*#__PURE__*/_react.default.createElement(_DateTimePickerExampleTemplate.default, {
    excludeDates: ['2017-04-03T12:00', '2017-04-04T12:00', '2017-04-05T12:00'],
    value: "2017-04-03T12:00"
  });
};
var _default = DateTimePickerDefaultDateExcluded;
exports.default = _default;