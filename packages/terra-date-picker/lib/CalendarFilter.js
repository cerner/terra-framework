"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _DatePicker = _interopRequireDefault(require("./DatePicker"));
var _CalendarFilterModule = _interopRequireDefault(require("./CalendarFilter.module.scss"));
var _excluded = ["excludeDates", "filterDate", "includeDates", "maxDate", "minDate", "onChange", "selectedDate", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_CalendarFilterModule.default);
var propTypes = {
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker. The values must be in the `YYYY-MM-DD` format.
   */
  excludeDates: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled.
   * A return value of true will be enabled and false will be disabled.
   */
  filterDate: _propTypes.default.func,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled. The values must be in the `YYYY-MM-DD` format.
   */
  includeDates: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * An ISO 8601 string representation of the maximum date that can be selected. The value must be in the YYYY-MM-DD format. Must be on or before 12/31/2100
   */
  maxDate: _propTypes.default.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected. The value must be in the `YYYY-MM-DD` format. Must be oon or after 01/01/1900
   */
  minDate: _propTypes.default.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed date value. The third parameter is the selected date value formatted based on the locale at the time when the onChange callback is triggered.
   */
  onChange: _propTypes.default.func,
  /**
   * An ISO 8601 string representation of the default value to show in the calendar-filter.
   * The value must be in the `YYYY-MM-DD` format and value should be valid date which is not part of exluded date values OR out of range date values.
   * defaults to current date if not provided.
   */
  selectedDate: _propTypes.default.string,
  /**
   * The date value. This prop should only be used for a controlled calendar-filter.
   * When this prop is set a handler is needed for `onSelect` props to manage the date value.
   * If both `selectedDate` and this prop are set, then `selectedDate` will have no effect.
   * The value must be in the `YYYY-MM-DD` format or the all-numeric date format based on the locale.
   */
  value: _propTypes.default.string
};
var defaultProps = {
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  maxDate: '2100-12-31',
  minDate: '1900-01-01',
  onChange: undefined,
  selectedDate: undefined
};
var CalendarFilter = function CalendarFilter(_ref) {
  var excludeDates = _ref.excludeDates,
    filterDate = _ref.filterDate,
    includeDates = _ref.includeDates,
    maxDate = _ref.maxDate,
    minDate = _ref.minDate,
    onChange = _ref.onChange,
    selectedDate = _ref.selectedDate,
    value = _ref.value,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var theme = (0, _react.useContext)(_terraThemeContext.default);
  var handleOnChange = function handleOnChange(event, date, metaData) {
    if (onChange) {
      var formattedDateValue = metaData.inputValue;
      onChange(event, date, formattedDateValue);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_DatePicker.default, (0, _extends2.default)({}, customProps, {
    name: "terra-calendar-filter",
    isInline: true,
    selectedDate: selectedDate,
    value: value,
    onChange: handleOnChange,
    excludeDates: excludeDates,
    filterDate: filterDate,
    includeDates: includeDates,
    maxDate: maxDate,
    minDate: minDate,
    calendarClassName: cx('calendar-filter', theme.className)
  }));
};
CalendarFilter.propTypes = propTypes;
CalendarFilter.defaultProps = defaultProps;
var _default = CalendarFilter;
exports.default = _default;