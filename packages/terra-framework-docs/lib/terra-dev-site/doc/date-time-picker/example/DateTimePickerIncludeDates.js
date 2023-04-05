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
var DateTimePickerExampleIncludeDates = function DateTimePickerExampleIncludeDates() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    dateTime = _useState2[0],
    setDateTime = _useState2[1];
  var handleDateTimeChange = function handleDateTimeChange(event, dateTimeValue) {
    setDateTime(dateTimeValue);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Selected ISO Date Time:", dateTime), /*#__PURE__*/_react.default.createElement(_terraFormField.default, {
    label: "Enter Date/Time",
    htmlFor: "include-dates"
  }, /*#__PURE__*/_react.default.createElement(_terraDateTimePicker.default, {
    name: "date-time-picker-example",
    dateInputAttributes: {
      id: 'include-dates'
    },
    onChange: handleDateTimeChange,
    includeDates: [(0, _momentTimezone.default)().format(), (0, _momentTimezone.default)().subtract(1, 'days').format(), (0, _momentTimezone.default)().add(1, 'days').format()]
  })));
};
var _default = DateTimePickerExampleIncludeDates;
exports.default = _default;