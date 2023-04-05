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
var DateTimePickerOnSelect = function DateTimePickerOnSelect() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    onChangeDate = _useState2[0],
    setOnChangeDate = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    onSelectDate = _useState4[0],
    setOnSelectDate = _useState4[1];
  var handleDateChange = function handleDateChange(event, onChangeDateValue) {
    setOnChangeDate(onChangeDateValue);
  };
  var handleDateSelect = function handleDateSelect(event, onSelectDateValue) {
    setOnSelectDate(onSelectDateValue);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "OnChange Date:", /*#__PURE__*/_react.default.createElement("span", {
    id: "changed-date"
  }, onChangeDate)), /*#__PURE__*/_react.default.createElement("h3", null, "OnSelect Date:", /*#__PURE__*/_react.default.createElement("span", {
    id: "selected-date"
  }, onSelectDate)), /*#__PURE__*/_react.default.createElement(_terraDateTimePicker.default, {
    name: "date-time-picker-onchange",
    onChange: handleDateChange,
    onSelect: handleDateSelect,
    value: "2017-04-01T12:00"
  }));
};
var _default = DateTimePickerOnSelect;
exports.default = _default;