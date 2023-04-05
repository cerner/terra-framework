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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Example = function Example() {
  var _useState = (0, _react.useState)('1999-03-10'),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    isInvalid = _useState4[0],
    setIsInvalid = _useState4[1];
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DateInputField.default, {
    legend: "Legend text",
    name: "date-input",
    value: value,
    onChange: function onChange(event, dateString) {
      return setValue(dateString);
    },
    displayFormat: "month-day-year",
    error: "Error message",
    help: "Help message",
    isInvalid: isInvalid
  }), /*#__PURE__*/_react.default.createElement("p", null, "DateInputField Value: ".concat(value)), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setIsInvalid(function (invalid) {
        return !invalid;
      });
    }
  }, "Toggle isInvalid"));
};
var _default = Example;
exports.default = _default;