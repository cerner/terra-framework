"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _terraDateTimePicker = _interopRequireDefault(require("terra-date-time-picker"));
var _DateTimeUtils = _interopRequireDefault(require("terra-date-time-picker/lib/DateTimeUtils"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DateTimePickerEvents = function DateTimePickerEvents() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    blurCount = _useState2[0],
    setBlurCount = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    focusCount = _useState4[0],
    setFocusCount = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    onRequestCloseCount = _useState6[0],
    setonRequestCloseCount = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    changeValue = _useState8[0],
    setChangeValue = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    changeRawValue = _useState10[0],
    setChangeRawValue = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    selectValue = _useState12[0],
    setSelectValue = _useState12[1];
  var handleBlur = function handleBlur() {
    setBlurCount(blurCount + 1);
  };
  var handleFocus = function handleFocus() {
    setFocusCount(focusCount + 1);
  };
  var handleChange = function handleChange(event, value) {
    setChangeValue(value);
  };
  var handleChangeRaw = function handleChangeRaw(event, value) {
    setChangeRawValue(value);
  };
  var handleSelect = function handleSelect(event, value) {
    setSelectValue(value);
  };
  var handleOnRequestClose = function handleOnRequestClose() {
    setonRequestCloseCount(onRequestCloseCount + 1);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "onFocus Trigger Count:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "onFocus-count"
  }, focusCount), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "onBlur Trigger Count:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "onBlur-count"
  }, blurCount), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "onRequestClose Trigger Count:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "onRequestClose-count"
  }, onRequestCloseCount), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "onChangeRaw Triggered:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "onChangeRaw"
  }, changeRawValue), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "onChange Triggered:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "onChange"
  }, changeValue), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "onSelect Triggered:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "onSelect"
  }, selectValue)), /*#__PURE__*/_react.default.createElement(_terraDateTimePicker.default, {
    name: "date-time-picker-events",
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
    onChangeRaw: handleChangeRaw,
    onSelect: handleSelect,
    onRequestClose: handleOnRequestClose,
    timeVariant: _DateTimeUtils.default.FORMAT_12_HOUR,
    showSeconds: true
  }));
};
var _default = DateTimePickerEvents;
exports.default = _default;