"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DateTimePicker = _interopRequireDefault(require("terra-date-time-picker/lib/DateTimePicker"));
var _DateTimeUtils = _interopRequireDefault(require("terra-date-time-picker/lib/DateTimeUtils"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var propTypes = {
  /**
   * The current entered date time. Use for the selected date message.
   */
  value: _propTypes.default.string,
  /**
   * Timezone for the provided date time.
   */
  initialTimeZone: _propTypes.default.string
};
var defaultProps = {
  value: ''
};
var DatePickerExample = function DatePickerExample(props) {
  var dateTimeDisplay = props.value;
  var safeDateTime = _DateTimeUtils.default.createSafeDate(dateTimeDisplay, props.initialTimeZone);
  if (safeDateTime && safeDateTime.isValid()) {
    dateTimeDisplay = safeDateTime.format();
  }
  var _useState = (0, _react.useState)(dateTimeDisplay),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    dateTime = _useState2[0],
    setDateTime = _useState2[1];
  var handleDateTimeChange = function handleDateTimeChange(event, dateTimeValue) {
    setDateTime(dateTimeValue);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Selected ISO Date Time:", /*#__PURE__*/_react.default.createElement("span", {
    "data-date-time-value": true
  }, dateTime)), /*#__PURE__*/_react.default.createElement(_DateTimePicker.default, (0, _extends2.default)({
    name: "date-time-picker-example",
    onChange: handleDateTimeChange,
    initialTimeZone: props.initialTimeZone
  }, props)));
};
DatePickerExample.propTypes = propTypes;
DatePickerExample.defaultProps = defaultProps;
var _default = DatePickerExample;
exports.default = _default;