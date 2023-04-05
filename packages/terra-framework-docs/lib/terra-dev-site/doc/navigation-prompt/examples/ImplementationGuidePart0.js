"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Form = function Form(_ref) {
  var title = _ref.title,
    ariaLabel = _ref.ariaLabel;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, title), /*#__PURE__*/_react.default.createElement("input", {
    "aria-label": ariaLabel,
    type: "text",
    onChange: function onChange(event) {
      setInputValue(event.target.value);
    },
    value: inputValue
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      setInputValue('');
    }
  }, "Submit"));
};
Form.propTypes = {
  title: _propTypes.default.string,
  ariaLabel: _propTypes.default.string
};
var FormSwitcher = function FormSwitcher() {
  var _useState3 = (0, _react.useState)('Form 1'),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    activeForm = _useState4[0],
    setActiveForm = _useState4[1];
  function onSwitchForm(formKey) {
    setActiveForm(formKey);
  }
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "Form Switcher"), /*#__PURE__*/_react.default.createElement("p", null, "The NavigationPrompt is not implemented, so no prompting occurs."), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    disabled: activeForm === 'Form 1',
    onClick: onSwitchForm.bind(null, 'Form 1')
  }, "Switch to Form 1"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    disabled: activeForm === 'Form 2',
    onClick: onSwitchForm.bind(null, 'Form 2')
  }, "Switch to Form 2"), /*#__PURE__*/_react.default.createElement(Form, {
    title: activeForm,
    key: activeForm,
    ariaLabel: activeForm
  }));
};
var _default = FormSwitcher;
exports.default = _default;