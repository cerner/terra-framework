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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _CalendarFilter = _interopRequireDefault(require("terra-date-picker/lib/CalendarFilter"));
var _DatePickerTestModule = _interopRequireDefault(require("../common/DatePicker.test.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_DatePickerTestModule.default);
var CalendarFilterControlled = function CalendarFilterControlled() {
  var _useState = (0, _react.useState)('2020-04-04'),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    date = _useState2[0],
    setDate = _useState2[1];
  var handleOnDateChange = function handleOnDateChange(event, selectedDate) {
    setDate(selectedDate);
  };
  var handleSelectedDateUpdate = function handleSelectedDateUpdate(event) {
    setDate(event.currentTarget.textContent);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("h3", null, " Default Selected date : 2020-04-04 "), /*#__PURE__*/_react.default.createElement(_CalendarFilter.default, {
    value: date,
    onChange: handleOnDateChange
  }), '  ', /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "button1",
    text: "",
    "aria-label": "empty" // Fixes accessiblity voilation 'Element has no title attribute or the title attribute is empty'.
    ,
    onClick: handleSelectedDateUpdate
  }), '  ', /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "button2",
    text: "01/01/2019",
    onClick: handleSelectedDateUpdate
  }), '  ', /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "button3",
    text: "2019-02-02",
    onClick: handleSelectedDateUpdate
  }), '  ', /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "button4",
    text: "2019-03-03T10:30",
    onClick: handleSelectedDateUpdate
  }), '  ', /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "button5",
    text: "0101123",
    onClick: handleSelectedDateUpdate
  }));
};
var _default = CalendarFilterControlled;
exports.default = _default;