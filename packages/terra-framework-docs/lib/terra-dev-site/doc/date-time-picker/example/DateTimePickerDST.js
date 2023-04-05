"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _terraFormField = _interopRequireDefault(require("terra-form-field"));
var _terraDateTimePicker = _interopRequireDefault(require("terra-date-time-picker"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DateTimePickerExampleDST = function DateTimePickerExampleDST() {
  var initialValue = (0, _momentTimezone.default)().tz('America/Chicago').format();
  var _useState = (0, _react.useState)(initialValue),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    dateTime = _useState2[0],
    setDateTime = _useState2[1];
  var handleDateTimeChange = function handleDateTimeChange(event, dateTimeValue) {
    setDateTime(dateTimeValue);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "In the United States, the missing hour occurs when DST begins at these recent past and near future dates between 2:00 and 3:00.", /*#__PURE__*/_react.default.createElement("br", null), ' ', "- March 13th, 2016", /*#__PURE__*/_react.default.createElement("br", null), ' ', "- March 12th, 2017", /*#__PURE__*/_react.default.createElement("br", null), ' ', "- March 11th, 2018", /*#__PURE__*/_react.default.createElement("br", null), ' ', "- March 10th, 2019", /*#__PURE__*/_react.default.createElement("br", null), ' ', "- March 08th, 2020"), /*#__PURE__*/_react.default.createElement("p", null, "In the United States, the ambiguous hour occurs when DST ends at these recent past and near future dates between 1:00 and 2:00:", /*#__PURE__*/_react.default.createElement("br", null), ' ', "- November 6th, 2016", /*#__PURE__*/_react.default.createElement("br", null), ' ', "- November 5th, 2017", /*#__PURE__*/_react.default.createElement("br", null), ' ', "- November 4th, 2018", /*#__PURE__*/_react.default.createElement("br", null), ' ', "- November 3rd, 2019", /*#__PURE__*/_react.default.createElement("br", null), ' ', "- November 1st, 2020"), /*#__PURE__*/_react.default.createElement("p", null, "For the United States, click", ' ', /*#__PURE__*/_react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Daylight_saving_time_in_the_United_States"
  }, "here"), ' ', "to see more recent past and near future starting and ending dates of daylight saving time.", /*#__PURE__*/_react.default.createElement("br", null), "For other time zones, click", ' ', /*#__PURE__*/_react.default.createElement("a", {
    href: "http://www.timezoneconverter.com/cgi-bin/zoneinfo"
  }, "here"), ' ', "to see the starting and ending dates of daylight saving time for the current year.")), /*#__PURE__*/_react.default.createElement("p", null, "Selected ISO Date Time:", dateTime), /*#__PURE__*/_react.default.createElement(_terraFormField.default, {
    label: "Enter Date/Time",
    htmlFor: "dst-picker"
  }, /*#__PURE__*/_react.default.createElement(_terraDateTimePicker.default, {
    name: "date-time-picker-example",
    dateInputAttributes: {
      id: 'dst-picker'
    },
    onChange: handleDateTimeChange,
    value: initialValue,
    initialTimeZone: "America/Chicago"
  })));
};
var _default = DateTimePickerExampleDST;
exports.default = _default;