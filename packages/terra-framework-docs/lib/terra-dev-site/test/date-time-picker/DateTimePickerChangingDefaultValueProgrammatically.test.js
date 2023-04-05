"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _DateTimePickerExampleTemplate = _interopRequireDefault(require("./common/DateTimePickerExampleTemplate"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DateTimePickerChangingDefaultValueProgrammatically = function DateTimePickerChangingDefaultValueProgrammatically() {
  var _useState = (0, _react.useState)('2020-01-01T01:10:09'),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    dateTime = _useState2[0],
    setDate = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    message = _useState4[0],
    setStatus = _useState4[1];
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DateTimePickerExampleTemplate.default, {
    value: dateTime,
    selectedDate: dateTime
  }), /*#__PURE__*/_react.default.createElement("p", null, message), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    text: "Click To Set Date and Time to 01/30/2020 - 02:30",
    onClick: function onClick() {
      setDate('2019-01-30T02:30:09');
      setStatus('Button clicked');
    },
    id: "button1"
  }));
};
var _default = DateTimePickerChangingDefaultValueProgrammatically;
exports.default = _default;