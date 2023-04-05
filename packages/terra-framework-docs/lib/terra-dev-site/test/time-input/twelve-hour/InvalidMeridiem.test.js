"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraTimeInput = _interopRequireDefault(require("terra-time-input"));
var _TimeUtil = _interopRequireDefault(require("terra-time-input/lib/TimeUtil"));
var _TimeInputTestModule = _interopRequireDefault(require("../common/TimeInput.test.module.scss"));
var cx = _bind.default.bind(_TimeInputTestModule.default);
var TimeInputDefault = function TimeInputDefault() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraTimeInput.default, {
    id: "timeInput",
    name: "time-input",
    variant: _TimeUtil.default.FORMAT_12_HOUR,
    isInvalidMeridiem: true
  }));
};
var _default = TimeInputDefault;
exports.default = _default;