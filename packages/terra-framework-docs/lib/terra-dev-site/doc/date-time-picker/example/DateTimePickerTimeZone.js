"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _DateTimePicker = _interopRequireDefault(require("terra-date-time-picker/lib/DateTimePicker"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _terraFormField = _interopRequireDefault(require("terra-form-field"));
var _DateTimeUtils = _interopRequireDefault(require("terra-date-time-picker/lib/DateTimeUtils"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function DateTimePickerTimeZone() {
  var _useState = (0, _react.useState)('Asia/Kolkata'),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    timeZone = _useState2[0],
    setTimezone = _useState2[1];
  var _useState3 = (0, _react.useState)((0, _momentTimezone.default)().format()),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    dateTime = _useState4[0],
    setDateTime = _useState4[1];
  var handleDateTimeChange = function handleDateTimeChange(event, datetime) {
    var computedDateTime = _DateTimeUtils.default.createSafeDate(datetime, timeZone);
    setDateTime(computedDateTime.format());
    setTimezone(computedDateTime.tz());
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, "Selected ISO Date Time:", dateTime), /*#__PURE__*/_react.default.createElement("p", null, "Initial Timezone:", timeZone), /*#__PURE__*/_react.default.createElement(_terraFormField.default, {
    label: "Enter Date/Time",
    htmlFor: "timeZone"
  }, /*#__PURE__*/_react.default.createElement(_DateTimePicker.default, {
    name: "date-time-picker-example",
    dateInputAttributes: {
      id: 'timezone'
    },
    onChange: handleDateTimeChange,
    initialTimeZone: timeZone,
    value: dateTime
  })));
}
var _default = DateTimePickerTimeZone;
exports.default = _default;