"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraDateInput = _interopRequireDefault(require("terra-date-input"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _DateInputTestModule = _interopRequireDefault(require("./common/DateInput.test.module.scss"));
var cx = _bind.default.bind(_DateInputTestModule.default);
var Example = function Example() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraDateInput.default, {
    id: "dateInput",
    name: "date-input",
    value: "1999-03-10",
    required: true,
    isIncomplete: true
  }));
};
var _default = Example;
exports.default = _default;