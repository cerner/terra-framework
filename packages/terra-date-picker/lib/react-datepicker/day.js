"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _reactIntl = require("react-intl");
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var _date_utils = require("./date_utils");
var _react_datepickerModule = _interopRequireDefault(require("./stylesheets/react_datepicker.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_react_datepickerModule.default);
var Day = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Day, _React$Component);
  var _super = _createSuper(Day);
  function Day() {
    var _this;
    (0, _classCallCheck2.default)(this, Day);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function (event) {
      if (!_this.isDisabled() && _this.props.onClick) {
        _this.props.onClick(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMouseEnter", function (event) {
      // day should not be get focus border on mouse enter when calendar is inline.
      if (!_this.isDisabled() && _this.props.onMouseEnter && !_this.props.inline) {
        _this.props.onMouseEnter(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMouseDown", function () {
      if (_this.props.onDayMouseDown) {
        _this.props.onDayMouseDown();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isSameDay", function (other) {
      return (0, _date_utils.isSameDay)(_this.props.day, other);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isKeyboardSelected", function () {
      return !_this.props.inline && !_this.isSameDay(_this.props.selected) && _this.isSameDay(_this.props.preSelection);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isDisabled", function () {
      return (0, _date_utils.isDayDisabled)(_this.props.day, _this.props);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getHighLightedClass", function (defaultClassName) {
      var _this$props = _this.props,
        day = _this$props.day,
        highlightDates = _this$props.highlightDates;
      if (!highlightDates) {
        return false;
      }

      // Looking for className in the Map of {'day string, 'className'}
      var dayStr = day.format('MM.DD.YYYY');
      return highlightDates.get(dayStr);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isInRange", function () {
      var _this$props2 = _this.props,
        day = _this$props2.day,
        startDate = _this$props2.startDate,
        endDate = _this$props2.endDate;
      if (!startDate || !endDate) {
        return false;
      }
      return (0, _date_utils.isDayInRange)(day, startDate, endDate);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isInSelectingRange", function () {
      var _this$props3 = _this.props,
        day = _this$props3.day,
        selectsStart = _this$props3.selectsStart,
        selectsEnd = _this$props3.selectsEnd,
        selectingDate = _this$props3.selectingDate,
        startDate = _this$props3.startDate,
        endDate = _this$props3.endDate;
      if (!(selectsStart || selectsEnd) || !selectingDate || _this.isDisabled()) {
        return false;
      }
      if (selectsStart && endDate && selectingDate.isSameOrBefore(endDate)) {
        return (0, _date_utils.isDayInRange)(day, selectingDate, endDate);
      }
      if (selectsEnd && startDate && selectingDate.isSameOrAfter(startDate)) {
        return (0, _date_utils.isDayInRange)(day, startDate, selectingDate);
      }
      return false;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isSelectingRangeStart", function () {
      if (!_this.isInSelectingRange()) {
        return false;
      }
      var _this$props4 = _this.props,
        day = _this$props4.day,
        selectingDate = _this$props4.selectingDate,
        startDate = _this$props4.startDate,
        selectsStart = _this$props4.selectsStart;
      if (selectsStart) {
        return (0, _date_utils.isSameDay)(day, selectingDate);
      } else {
        return (0, _date_utils.isSameDay)(day, startDate);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isSelectingRangeEnd", function () {
      if (!_this.isInSelectingRange()) {
        return false;
      }
      var _this$props5 = _this.props,
        day = _this$props5.day,
        selectingDate = _this$props5.selectingDate,
        endDate = _this$props5.endDate,
        selectsEnd = _this$props5.selectsEnd;
      if (selectsEnd) {
        return (0, _date_utils.isSameDay)(day, selectingDate);
      } else {
        return (0, _date_utils.isSameDay)(day, endDate);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isRangeStart", function () {
      var _this$props6 = _this.props,
        day = _this$props6.day,
        startDate = _this$props6.startDate,
        endDate = _this$props6.endDate;
      if (!startDate || !endDate) {
        return false;
      }
      return (0, _date_utils.isSameDay)(startDate, day);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isRangeEnd", function () {
      var _this$props7 = _this.props,
        day = _this$props7.day,
        startDate = _this$props7.startDate,
        endDate = _this$props7.endDate;
      if (!startDate || !endDate) {
        return false;
      }
      return (0, _date_utils.isSameDay)(endDate, day);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isWeekend", function () {
      var weekday = (0, _date_utils.getDay)(_this.props.day);
      return weekday === 0 || weekday === 6;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isOutsideMonth", function () {
      return _this.props.month !== undefined && _this.props.month !== (0, _date_utils.getMonth)(_this.props.day);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isBorderApplied", function () {
      if (_this.isSameDay(_this.props.preSelection) && !(0, _date_utils.isDayDisabled)(_this.props.selected, _this.props) && document.activeElement && (document.activeElement.hasAttribute('data-terra-open-calendar-button') || document.activeElement.tagName === 'DIV' || document.activeElement === document.querySelector('[class*="previous"]')) && _this.props.isCalendarKeyboardFocused) {
        return true;
      }
      return false;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getClassNames", function (date) {
      var dayClassName = _this.props.dayClassName ? _this.props.dayClassName(date) : undefined;
      return ['react-datepicker-day', dayClassName, 'react-datepicker-day--' + (0, _date_utils.getDayOfWeekCode)(_this.props.day), {
        'react-datepicker-day--disabled': _this.isDisabled(),
        'react-datepicker-day--selected': _this.isSameDay(_this.props.selected) && !(0, _date_utils.isDayDisabled)(_this.props.selected, _this.props),
        'react-datepicker-day--selected-border': _this.isBorderApplied(),
        'react-datepicker-day--range-start': _this.isRangeStart(),
        'react-datepicker-day--range-end': _this.isRangeEnd(),
        'react-datepicker-day--in-range': _this.isInRange(),
        'react-datepicker-day--in-selecting-range': _this.isInSelectingRange(),
        'react-datepicker-day--selecting-range-start': _this.isSelectingRangeStart(),
        'react-datepicker-day--selecting-range-end': _this.isSelectingRangeEnd(),
        'react-datepicker-day--today': _this.isSameDay((0, _date_utils.now)(_this.props.initialTimeZone)),
        'react-datepicker-day--weekend': _this.isWeekend(),
        'react-datepicker-day--outside-month': _this.isOutsideMonth(),
        'is-calendar-focused--keyboard-focus': _this.props.isCalendarKeyboardFocused && _this.isKeyboardSelected() && document.activeElement.tagName === 'DIV'
      }, _this.getHighLightedClass('react-datepicker-day--highlighted')];
    });
    return _this;
  }
  (0, _createClass2.default)(Day, [{
    key: "render",
    value: function render() {
      var day = this.props.day;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx(this.getClassNames(day)),
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseDown: this.handleMouseDown,
        "aria-disabled": this.isDisabled()
      }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
        text: (0, _date_utils.getLocalizedDateForScreenReader)(day, this.props)
      }), /*#__PURE__*/_react.default.createElement("span", {
        "aria-hidden": "true"
      }, (0, _date_utils.getDate)(day))));
    }
  }]);
  return Day;
}(_react.default.Component);
(0, _defineProperty2.default)(Day, "propTypes", {
  /**
   * Day Value Entered.
   */
  day: _propTypes.default.object.isRequired,
  /**
   * A callback function for custom day class names.
   */
  dayClassName: _propTypes.default.func,
  /**
   * Maximum Date value for a date range.
   */
  endDate: _propTypes.default.object,
  /**
   * Highlight range of dates with custom classes.
   */
  highlightDates: _propTypes.default.instanceOf(WeakMap),
  /**
   * Timezone value to indicate in which timezone the date-time component is rendered.
   * The value provided should be a valid [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) string, else will default to browser/local timezone.
   */
  initialTimeZone: _propTypes.default.string,
  /**
   * Prop to render Inline version of date picker component.
   */
  inline: _propTypes.default.bool,
  /**
   * @private
   * Internationalization object with translation APIs. Provided by `injectIntl`.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }),
  /**
   * Month value for the date entered.
   */
  month: _propTypes.default.number,
  /**
   * A callback function to execute when a valid date is selected.
   */
  onClick: _propTypes.default.func,
  /**
   * A callback function to execute when mouse is clicked to select date.
   */
  onMouseEnter: _propTypes.default.func,
  /**
   * A callback function to execute on mouse down on day.
   * requires no parameter.
   */
  onDayMouseDown: _propTypes.default.func,
  /**
   * Previous Date Value selected .
   */
  preSelection: _propTypes.default.object,
  /**
   * Selected Date Value.
   */
  selected: _propTypes.default.object,
  /**
   * Date selected to check if in range.
   */
  selectingDate: _propTypes.default.object,
  /**
   * Prop to select end date on a date picker.
   */
  selectsEnd: _propTypes.default.bool,
  /**
   * Prop to select start date on a date picker.
   */
  selectsStart: _propTypes.default.bool,
  /**
   * Minimum date for a given range .
   */
  startDate: _propTypes.default.object,
  /**
   * Whether or not calendar is opened via keyboard
   */
  isCalendarKeyboardFocused: _propTypes.default.bool
});
var _default = (0, _reactIntl.injectIntl)(Day);
exports.default = _default;