"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _DateInputField = _interopRequireDefault(require("terra-date-input/lib/DateInputField"));
var _terraFormCheckbox = _interopRequireDefault(require("terra-form-checkbox"));
var _InputField = _interopRequireDefault(require("terra-form-input/lib/InputField"));
var _CheckboxField = _interopRequireDefault(require("terra-form-checkbox/lib/CheckboxField"));
var _RadioFieldGenerator = _interopRequireDefault(require("./common/_RadioFieldGenerator"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AccessibilityFieldTest = function AccessibilityFieldTest() {
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
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    isLegendHidden = _useState8[0],
    setIsLegendHidden = _useState8[1];
  var _useState9 = (0, _react.useState)('optional'),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    mutex = _useState10[0],
    setMutex = _useState10[1];
  var _useState11 = (0, _react.useState)('month-day-year'),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    displayFormat = _useState12[0],
    setDisplayFormat = _useState12[1];
  var _useState13 = (0, _react.useState)('Helpful text.'),
    _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
    help = _useState14[0],
    setHelp = _useState14[1];
  var _useState15 = (0, _react.useState)('Something went wrong.'),
    _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
    error = _useState16[0],
    setError = _useState16[1];
  var _useState17 = (0, _react.useState)('Date of birth'),
    _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
    legend = _useState18[0],
    setLegend = _useState18[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, "Component Under Test"), /*#__PURE__*/_react.default.createElement(_DateInputField.default, {
    id: "componentUnderTest",
    legend: legend,
    name: "date-of-birth-field",
    value: value,
    onChange: function onChange(event, dateString) {
      return setValue(dateString);
    },
    error: error,
    help: help,
    isInvalid: isInvalid,
    isLegendHidden: isLegendHidden,
    disabled: disabled,
    displayFormat: displayFormat,
    isIncomplete: mutex.includes('incomplete'),
    required: mutex.includes('required'),
    showOptional: mutex.includes('showOptional'),
    hideRequired: mutex.includes('hideRequired')
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Test Settings"), /*#__PURE__*/_react.default.createElement(_CheckboxField.default, {
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
  }), /*#__PURE__*/_react.default.createElement(_terraFormCheckbox.default, {
    id: "isLegendHidden",
    labelText: "isLegendHidden",
    onChange: function onChange() {
      return setIsLegendHidden(function (val) {
        return !val;
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_InputField.default, {
    type: "text",
    label: "Legend:",
    inputId: "legend",
    value: legend,
    onChange: function onChange(e) {
      return setLegend(e.currentTarget.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_InputField.default, {
    type: "text",
    label: "Error Message:",
    inputId: "error",
    value: error,
    placeholder: "Message to show when invalid",
    onChange: function onChange(e) {
      return setError(e.currentTarget.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_InputField.default, {
    type: "text",
    label: "Help Message:",
    inputId: "help",
    value: help,
    placeholder: "Message to provide more detailed help",
    onChange: function onChange(e) {
      return setHelp(e.currentTarget.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_RadioFieldGenerator.default, {
    fieldLegend: "Mutually Exclusive",
    name: "mutex",
    options: ['optional', 'optional-showOptional', 'required', 'required-hideRequired', 'required-incomplete', 'required-incomplete-hideRequired'],
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
var _default = AccessibilityFieldTest;
exports.default = _default;