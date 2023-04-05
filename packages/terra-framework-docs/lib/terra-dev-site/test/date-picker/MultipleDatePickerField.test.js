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
var _DatePickerField = _interopRequireDefault(require("terra-date-picker/lib/DatePickerField"));
var _DatePickerTestModule = _interopRequireDefault(require("./common/DatePicker.test.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_DatePickerTestModule.default);
var MultipleDatePickerField = function MultipleDatePickerField() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isInvalid = _useState2[0],
    setIsInvalid = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    isIncomplete = _useState4[0],
    setIsIncomplete = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    required = _useState6[0],
    setRequired = _useState6[1];
  var handleInvalidButtonClick = function handleInvalidButtonClick() {
    setIsInvalid(!isInvalid);
  };
  var handleIncompleteButtonClick = function handleIncompleteButtonClick() {
    setIsIncomplete(!isIncomplete);
    setRequired(!required);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "validity-toggle",
    onClick: handleInvalidButtonClick
  }, "Toggle Validity"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "incomplete-toggle",
    onClick: handleIncompleteButtonClick
  }, "Toggle Incomplete"), /*#__PURE__*/_react.default.createElement("div", {
    id: "primary-description"
  }, "Description text provided by user for Primary Date Picker"), /*#__PURE__*/_react.default.createElement(_DatePickerField.default, {
    label: "Primary Date Picker",
    isInvalid: isInvalid,
    isIncomplete: isIncomplete,
    required: required,
    error: "Error message.",
    name: "date-input",
    datePickerId: "primary",
    help: "Help message.",
    inputAttributes: {
      'aria-describedby': 'primary-description',
      id: 'primary-date-picker'
    }
  }), /*#__PURE__*/_react.default.createElement(_DatePickerField.default, {
    label: "Secondary Date Picker",
    isInvalid: isInvalid,
    isIncomplete: isIncomplete,
    required: required,
    error: "Error message.",
    name: "date-input",
    datePickerId: "secondary",
    help: "Help message.",
    inputAttributes: {
      id: 'secondary-date-picker'
    }
  }));
};
var _default = MultipleDatePickerField;
exports.default = _default;