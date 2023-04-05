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
var DateTimePickerDSTBlur = function DateTimePickerDSTBlur() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    blurTriggerCount = _useState2[0],
    setBlurTriggerCount = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    iSO = _useState4[0],
    setISO = _useState4[1];
  var _useState5 = (0, _react.useState)('No'),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    isAmbiguousHour = _useState6[0],
    setIsAmbiguousHour = _useState6[1];
  var handleBlur = function handleBlur(event, options) {
    blurCount += 1;
    setBlurTriggerCount(blurCount);
    setISO(options.iSO);
    setIsAmbiguousHour(options.isAmbiguousHour ? 'Yes' : 'No');
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "onBlur Trigger Count:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "blur-count"
  }, blurTriggerCount), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Selected ISO Date Time:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "iso"
  }, iSO), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Is Ambiguous?", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "ambiguous-date"
  }, isAmbiguousHour), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement(_terraDateTimePicker.default, {
    name: "date-time-picker-onblur-dst",
    value: "2017-11-05T01:30:00",
    onBlur: handleBlur,
    initialTimeZone: "America/Chicago"
  }));
};
var _default = DateTimePickerDSTBlur;
exports.default = _default;