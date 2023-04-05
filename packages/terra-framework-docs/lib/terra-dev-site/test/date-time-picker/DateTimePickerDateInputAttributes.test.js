"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DateTimePickerExampleTemplate = _interopRequireDefault(require("./common/DateTimePickerExampleTemplate"));
var DateTimePickerDateInputAttributes = function DateTimePickerDateInputAttributes() {
  return /*#__PURE__*/_react.default.createElement(_DateTimePickerExampleTemplate.default, {
    dateInputAttributes: {
      id: 'date-input-example',
      disabled: true
    }
  });
};
var _default = DateTimePickerDateInputAttributes;
exports.default = _default;