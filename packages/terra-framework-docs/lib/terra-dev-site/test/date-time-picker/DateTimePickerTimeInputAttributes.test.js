"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DateTimeUtils = _interopRequireDefault(require("terra-date-time-picker/lib/DateTimeUtils"));
var _DateTimePickerExampleTemplate = _interopRequireDefault(require("./common/DateTimePickerExampleTemplate"));
var DateTimePickerTimeInputAttributes = function DateTimePickerTimeInputAttributes() {
  return /*#__PURE__*/_react.default.createElement(_DateTimePickerExampleTemplate.default, {
    timeInputAttributes: {
      className: 'time-input-example',
      readOnly: true
    },
    timeVariant: _DateTimeUtils.default.FORMAT_12_HOUR
  });
};
var _default = DateTimePickerTimeInputAttributes;
exports.default = _default;