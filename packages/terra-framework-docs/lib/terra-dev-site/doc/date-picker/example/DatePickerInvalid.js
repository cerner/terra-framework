"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _terraFormField = _interopRequireDefault(require("terra-form-field"));
var _terraDatePicker = _interopRequireDefault(require("terra-date-picker"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _DatePickerExampleCommonModule = _interopRequireDefault(require("./DatePickerExampleCommon.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_DatePickerExampleCommonModule.default);
var DatePickerExampleInvalid = function DatePickerExampleInvalid() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    date = _useState2[0],
    setDate = _useState2[1];
  var handleDateChange = function handleDateChange(event, dateValue) {
    setDate(dateValue);
  };
  var handleDateChangeRaw = function handleDateChangeRaw(event, dateValue, metadata) {
    if (!metadata.isValidValue) {
      setDate(null);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Selected ISO Date:", /*#__PURE__*/_react.default.createElement("span", {
    className: cx('date-wrapper')
  }, date)), /*#__PURE__*/_react.default.createElement(_terraFormField.default, {
    label: "Enter Date",
    htmlFor: "default-invalid"
  }, /*#__PURE__*/_react.default.createElement(_terraDatePicker.default, {
    name: "date-input",
    id: "default-invalid",
    onChange: handleDateChange,
    onChangeRaw: handleDateChangeRaw,
    isInvalid: true
  })));
};
var _default = DatePickerExampleInvalid;
exports.default = _default;