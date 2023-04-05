"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraDatePicker = _interopRequireDefault(require("terra-date-picker"));
var _DatePickerTestModule = _interopRequireDefault(require("./common/DatePicker.test.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_DatePickerTestModule.default);
var blurCount = 0;
var focusCount = 0;
var DatePickerFocusBlur = function DatePickerFocusBlur() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    blurTriggerCount = _useState2[0],
    setBlurTriggerCount = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    focusTriggerCount = _useState4[0],
    setFocusTriggerCount = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    iSO = _useState6[0],
    setISO = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    inputValue = _useState8[0],
    setInputValue = _useState8[1];
  var _useState9 = (0, _react.useState)('No'),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    isCompleteValue = _useState10[0],
    setIsCompleteValue = _useState10[1];
  var _useState11 = (0, _react.useState)('Yes'),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    isValidValue = _useState12[0],
    setIsValidValue = _useState12[1];
  var handleBlur = function handleBlur(event, options) {
    blurCount += 1;
    setBlurTriggerCount(blurCount);
    setISO(options.iSO);
    setInputValue(options.inputValue);
    setIsCompleteValue(options.isCompleteValue ? 'Yes' : 'No');
    setIsValidValue(options.isValidValue ? 'Yes' : 'No');
  };
  var handleFocus = function handleFocus() {
    focusCount += 1;
    setFocusTriggerCount(focusCount);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("h3", null, "onBlur Trigger Count:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "blur-count"
  }, blurTriggerCount), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "onFocus Trigger Count:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "focus-count"
  }, focusTriggerCount), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "ISO String:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "iso"
  }, iSO), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Input Value:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "input-value"
  }, inputValue), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Is Date Complete?", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "complete-date"
  }, isCompleteValue), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Is Date Valid?", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "valid-date"
  }, isValidValue)), /*#__PURE__*/_react.default.createElement(_terraDatePicker.default, {
    name: "date-input-onblur",
    onBlur: handleBlur,
    onFocus: handleFocus,
    excludeDates: ['2019-04-01', '2019-04-02']
  }));
};
var _default = DatePickerFocusBlur;
exports.default = _default;