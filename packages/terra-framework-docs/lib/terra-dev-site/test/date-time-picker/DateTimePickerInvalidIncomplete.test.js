"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DateTimePickerExampleTemplate = _interopRequireDefault(require("./common/DateTimePickerExampleTemplate"));
var DateTimePickerInvalidIncomplete = function DateTimePickerInvalidIncomplete() {
  return /*#__PURE__*/_react.default.createElement(_DateTimePickerExampleTemplate.default, {
    isIncomplete: true,
    required: true,
    isInvalid: true
  });
};
var _default = DateTimePickerInvalidIncomplete;
exports.default = _default;