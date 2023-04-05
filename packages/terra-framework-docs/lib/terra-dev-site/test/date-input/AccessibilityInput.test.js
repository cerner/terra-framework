"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _DateInput = _interopRequireDefault(require("terra-date-input/lib/DateInput"));
var _terraFormCheckbox = _interopRequireDefault(require("terra-form-checkbox"));
var _InputField = _interopRequireDefault(require("terra-form-input/lib/InputField"));
var _CheckboxField = _interopRequireDefault(require("terra-form-checkbox/lib/CheckboxField"));
var _RadioFieldGenerator = _interopRequireDefault(require("./common/_RadioFieldGenerator"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AccessibilityInputTest = function AccessibilityInputTest() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    disabled = _useState4[0],
    setDisabled = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    isInvalid = _useState6[0],
    setIsInvalid = _useState6[1];
  var _useState7 = (0, _react.useState)('optional'),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    mutex = _useState8[0],
    setMutex = _useState8[1];
  var _useState9 = (0, _react.useState)('month-day-year'),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    displayFormat = _useState10[0],
    setDisplayFormat = _useState10[1];
  var _useState11 = (0, _react.useState)('Anniversary'),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    a11yLabel = _useState12[0],
    setA11yLabel = _useState12[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", {
    "aria-hidden": true
  }, "Component Under Test"), /*#__PURE__*/_react.default.createElement(_DateInput.default, {
    a11yLabel: a11yLabel,
    name: "date-of-birth",
    value: value,
    onChange: function onChange(event, dateString) {
      return setValue(dateString);
    },
    isInvalid: isInvalid,
    displayFormat: displayFormat,
    disabled: disabled,
    isIncomplete: mutex.includes('incomplete'),
    required: mutex.includes('required')
  }), /*#__PURE__*/_react.default.createElement("div", {
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Test Settings"), /*#__PURE__*/_react.default.createElement(_CheckboxField.default, {
    legend: "Props"
  }, /*#__PURE__*/_react.default.createElement(_terraFormCheckbox.default, {
    id: "disabled",
    labelText: "disabled",
    onChange: function onChange() {
      return setDisabled(function (val) {
        return !val;
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_terraFormCheckbox.default, {
    id: "isInvalid",
    labelText: "isInvalid",
    onChange: function onChange() {
      return setIsInvalid(function (val) {
        return !val;
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_InputField.default, {
    type: "text",
    label: "A11YLabel:",
    inputId: "a11yLabel",
    value: a11yLabel,
    onChange: function onChange(e) {
      return setA11yLabel(e.currentTarget.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_RadioFieldGenerator.default, {
    fieldLegend: "Mutually Exclusive",
    name: "mutex",
    options: ['optional', 'required', 'required-incomplete'],
    onChange: function onChange(e) {
      return setMutex(e.currentTarget.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_RadioFieldGenerator.default, {
    fieldLegend: "Format",
    name: "format",
    options: ['month-day-year', 'day-month-year'],
    onChange: function onChange(e) {
      return setDisplayFormat(e.currentTarget.value);
    }
  })));
};
var _default = AccessibilityInputTest;
exports.default = _default;