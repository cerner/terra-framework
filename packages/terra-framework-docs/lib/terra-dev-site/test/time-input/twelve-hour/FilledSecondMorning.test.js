"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _terraTimeInput = _interopRequireDefault(require("terra-time-input"));
var _TimeUtil = _interopRequireDefault(require("terra-time-input/lib/TimeUtil"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TimeInputDefault = function TimeInputDefault() {
  var _useState = (0, _react.useState)('09:22:22'),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    input = _useState2[0],
    setInput = _useState2[1];
  var handleOnChange = function handleOnChange(event, changedInput) {
    setInput(changedInput);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    id: "time-input-value"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Time Input:", input)), /*#__PURE__*/_react.default.createElement(_terraTimeInput.default, {
    id: "timeInput",
    name: "time-input",
    onChange: handleOnChange,
    value: "09:22:22",
    variant: _TimeUtil.default.FORMAT_12_HOUR,
    showSeconds: true
  }));
};
var _default = TimeInputDefault;
exports.default = _default;