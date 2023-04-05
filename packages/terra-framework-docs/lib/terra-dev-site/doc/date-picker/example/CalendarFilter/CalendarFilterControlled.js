"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _CalendarFilter = _interopRequireDefault(require("terra-date-picker/lib/CalendarFilter"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var propTypes = {
  /**
   * The date value used for a controlled component.
   */
  value: _propTypes.default.string
};
var defaultProps = {
  value: undefined
};
var CalendarFilterControlledExample = function CalendarFilterControlledExample(_ref) {
  var value = _ref.value;
  var _useState = (0, _react.useState)(value),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    date = _useState2[0],
    setDate = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    iso = _useState4[0],
    setIso = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    formattedDate = _useState6[0],
    setFormattedDate = _useState6[1];
  var handleOnDateChange = function handleOnDateChange(event, selectedDate, formatteddate) {
    setDate(selectedDate);
    setIso(selectedDate);
    setFormattedDate(formatteddate);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Selected Value:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "selected-date"
  }, date), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "ISO String:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "iso"
  }, iso), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Formatted Value:", ' ', /*#__PURE__*/_react.default.createElement("span", {
    id: "formatted-date"
  }, formattedDate)), /*#__PURE__*/_react.default.createElement(_CalendarFilter.default, {
    onChange: handleOnDateChange,
    value: date
  }));
};
CalendarFilterControlledExample.propTypes = propTypes;
CalendarFilterControlledExample.defaultProps = defaultProps;
var CalendarFilterControlled = function CalendarFilterControlled() {
  return /*#__PURE__*/_react.default.createElement(CalendarFilterControlledExample, {
    value: (0, _momentTimezone.default)().format('YYYY-MM-DD')
  });
};
var _default = CalendarFilterControlled;
exports.default = _default;