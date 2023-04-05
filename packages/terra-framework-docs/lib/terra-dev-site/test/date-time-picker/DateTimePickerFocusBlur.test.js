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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var blurCount = 0;
var focusCount = 0;
var DateTimePickerFocusBlur = function DateTimePickerFocusBlur() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    dateTime = _useState2[0],
    setDateTime = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    blurTriggerCount = _useState4[0],
    setBlurTriggerCount = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    focusTriggerCount = _useState6[0],
    setFocusTriggerCount = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    iSO = _useState8[0],
    setISO = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    inputValue = _useState10[0],
    setInputValue = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    dateValue = _useState12[0],
    setDateValue = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
    timeValue = _useState14[0],
    setTimeValue = _useState14[1];
  var _useState15 = (0, _react.useState)('No'),
    _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
    isAmbiguousHour = _useState16[0],
    setIsAmbiguousHour = _useState16[1];
  var _useState17 = (0, _react.useState)('No'),
    _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
    isCompleteValue = _useState18[0],
    setIsCompleteValue = _useState18[1];
  var _useState19 = (0, _react.useState)('Yes'),
    _useState20 = (0, _slicedToArray2.default)(_useState19, 2),
    isValidValue = _useState20[0],
    setIsValidValue = _useState20[1];
  var handleBlur = function handleBlur(event, options) {
    blurCount += 1;
    setBlurTriggerCount(blurCount);
    setISO(options.iSO);
    setInputValue(options.inputValue);
    setDateValue(options.dateValue);
    setTimeValue(options.timeValue);
    setIsAmbiguousHour(options.isAmbiguousHour ? 'Yes' : 'No');
    setIsCompleteValue(options.isCompleteValue ? 'Yes' : 'No');
    setIsValidValue(options.isValidValue ? 'Yes' : 'No');
  };
  var handleFocus = function handleFocus() {
    focusCount += 1;
    setFocusTriggerCount(focusCount);
  };
  var handleDateChange = function handleDateChange(event, dateTimeValue) {
    setDateTime(dateTimeValue);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "onBlur Trigger Count:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "blur-count"
  }, blurTriggerCount), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "onFocus Trigger Count:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "focus-count"
  }, focusTriggerCount), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Selected Date:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "selected-date"
  }, dateTime), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "ISO String:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "iso"
  }, iSO), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Input Value:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "input-value"
  }, inputValue), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Date Value:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "date-value"
  }, dateValue), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Time Value:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "time-value"
  }, timeValue), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Is Ambiguous?", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "ambiguous-date"
  }, isAmbiguousHour), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Is Date-Time Complete?", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "complete-date"
  }, isCompleteValue), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Is Date-Time Valid?", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "valid-date"
  }, isValidValue)), /*#__PURE__*/_react.default.createElement(_terraDateTimePicker.default, {
    name: "date-time-picker-onblur",
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleDateChange,
    excludeDates: ['2019-04-01', '2019-04-02'],
    initialTimeZone: "America/Chicago"
  }));
};
var _default = DateTimePickerFocusBlur;
exports.default = _default;