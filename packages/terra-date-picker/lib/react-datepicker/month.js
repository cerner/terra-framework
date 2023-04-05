"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
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
var _reactIntl = require("react-intl");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _week = _interopRequireDefault(require("./week"));
var utils = _interopRequireWildcard(require("./date_utils"));
var _react_datepickerModule = _interopRequireDefault(require("./stylesheets/react_datepicker.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_react_datepickerModule.default);
var FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;
var Month = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Month, _React$Component);
  var _super = _createSuper(Month);
  function Month() {
    var _this;
    (0, _classCallCheck2.default)(this, Month);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDayClick", function (day, event) {
      if (_this.props.onDayClick) {
        _this.props.onDayClick(day, event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDayMouseEnter", function (day) {
      if (_this.props.onDayMouseEnter) {
        _this.props.onDayMouseEnter(day);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDayMouseDown", function () {
      if (_this.props.onDayMouseDown) {
        _this.props.onDayMouseDown();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMouseLeave", function () {
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMonthBlur", function () {
      if (_this.props.onMonthBlur) {
        _this.props.onMonthBlur();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMonthFocus", function () {
      if (_this.props.onMonthFocus) {
        _this.props.onMonthFocus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isWeekInMonth", function (startOfWeek) {
      var day = _this.props.day;
      var endOfWeek = utils.addDays(utils.cloneDate(startOfWeek), 6);
      return utils.isSameMonth(startOfWeek, day) || utils.isSameMonth(endOfWeek, day);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderWeeks", function () {
      var weeks = [];
      var isFixedHeight = _this.props.fixedHeight;
      var currentWeekStart = utils.getStartOfWeek(utils.getStartOfMonth(utils.cloneDate(_this.props.day)));
      var i = 0;
      var breakAfterNextPush = false;
      while (true) {
        weeks.push( /*#__PURE__*/_react.default.createElement(_week.default, {
          isCalendarKeyboardFocused: _this.props.isCalendarKeyboardFocused,
          key: i,
          day: currentWeekStart,
          month: utils.getMonth(_this.props.day),
          onDayClick: _this.handleDayClick,
          onDayMouseEnter: _this.handleDayMouseEnter,
          onDayMouseDown: _this.handleDayMouseDown,
          onWeekSelect: _this.props.onWeekSelect,
          formatWeekNumber: _this.props.formatWeekNumber,
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          excludeDates: _this.props.excludeDates,
          includeDates: _this.props.includeDates,
          initialTimeZone: _this.props.initialTimeZone,
          inline: _this.props.inline,
          highlightDates: _this.props.highlightDates,
          selectingDate: _this.props.selectingDate,
          filterDate: _this.props.filterDate,
          preSelection: _this.props.preSelection,
          selected: _this.props.selected,
          selectsStart: _this.props.selectsStart,
          selectsEnd: _this.props.selectsEnd,
          showWeekNumber: _this.props.showWeekNumbers,
          startDate: _this.props.startDate,
          endDate: _this.props.endDate,
          dayClassName: _this.props.dayClassName
        }));
        if (breakAfterNextPush) break;
        i++;
        currentWeekStart = utils.addWeeks(utils.cloneDate(currentWeekStart), 1);

        // If one of these conditions is true, we will either break on this week
        // or break on the next week
        var isFixedAndFinalWeek = isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
        var isNonFixedAndOutOfMonth = !isFixedHeight && !_this.isWeekInMonth(currentWeekStart);
        if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
          if (_this.props.peekNextMonth) {
            breakAfterNextPush = true;
          } else {
            break;
          }
        }
      }
      return weeks;
    });
    return _this;
  }
  (0, _createClass2.default)(Month, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var getClassNames = cx({
        'react-datepicker-month': true,
        'react-datepicker-body': true,
        'react-datepicker-month--selecting-range': this.props.selectingDate && (this.props.selectsStart || this.props.selectsEnd)
      });
      return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Terra.datePicker.calendarInstructions"
      }, function (text) {
        return /*#__PURE__*/_react.default.createElement("div", {
          tabIndex: "0",
          className: getClassNames,
          onMouseLeave: _this2.handleMouseLeave,
          role: "application",
          onBlur: _this2.handleMonthBlur,
          onFocus: _this2.handleMonthFocus,
          "aria-label": "".concat(utils.getLocalizedDateForScreenReader(_this2.props.preSelection, {
            intl: _this2.props.intl,
            locale: _this2.props.locale
          }), ". ").concat(text),
          onKeyDown: _this2.props.handleCalendarKeyDown,
          ref: _this2.props.refCallback
        }, _this2.renderWeeks());
      });
    }
  }]);
  return Month;
}(_react.default.Component);
exports.default = Month;
(0, _defineProperty2.default)(Month, "propTypes", {
  /**
   * day Value Entered.
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
   * Array to store values of date that are disabled to pick .
   */
  excludeDates: _propTypes.default.array,
  /**
   * A callback function to be executed to determine if a given date should be filtered.
   */
  filterDate: _propTypes.default.func,
  /**
   * Specifies whether the height of calendar dom fixed or variable.
   */
  fixedHeight: _propTypes.default.bool,
  /**
   * A callback function to format week number .
   */
  formatWeekNumber: _propTypes.default.func,
  /**
   * Highlight range of dates with custom classes.
   */
  highlightDates: _propTypes.default.instanceOf(WeakMap),
  /**
   * Show dates only in the given array.
   */
  includeDates: _propTypes.default.array,
  /**
   * Timezone value to indicate in which timezone the date-time component is rendered.
   * The value provided should be a valid [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) string, else will default to browser/local timezone.
   */
  initialTimeZone: _propTypes.default.string,
  /**
   * Prop to show inline version of date picker component.
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
   * @private
   * Name of locale data for different international formatting.
   */
  locale: _propTypes.default.string,
  /**
   * Maximum value of date that can be selected by user.
   */
  maxDate: _propTypes.default.object,
  /**
   * Minimum value of date that can be selected by user.
   */
  minDate: _propTypes.default.object,
  /**
   * A callback function to execute when a day is selected.
   */
  onDayClick: _propTypes.default.func,
  /**
   * A callback function to execute when the mouse cursor hovers over the day..
   */
  onDayMouseEnter: _propTypes.default.func,
  /**
   * A callback function to execute when the mouse cursor leaves the element.
   */
  onMouseLeave: _propTypes.default.func,
  /**
   * A callback function to execute when a week is selected.
   */
  onWeekSelect: _propTypes.default.func,
  /**
   * A callback function to execute when month component receives focus.
   * requires no parameter.
   */
  onMonthFocus: _propTypes.default.func,
  /**
   * A callback function to execute when month component loses focus.
   * requires no parameter.
   */
  onMonthBlur: _propTypes.default.func,
  /**
   * A callback function to execute on mouse down on day.
   * requires no parameter.
   */
  onDayMouseDown: _propTypes.default.func,
  /**
   * A prop to check next month dates.
   */
  peekNextMonth: _propTypes.default.bool,
  /**
   * Prop to store previous selection value.
   */
  preSelection: _propTypes.default.object,
  /**
   * Callback ref to pass into the dom element.
   */
  refCallback: _propTypes.default.func,
  /**
   * Prop to store current selection value.
   */
  selected: _propTypes.default.object,
  /**
   * Prop to store value while selecting date.
   */
  selectingDate: _propTypes.default.object,
  /**
   * Mark date picker to select end of range .
   */
  selectsEnd: _propTypes.default.bool,
  /**
   * Mark date picker to select start of range .
   */
  selectsStart: _propTypes.default.bool,
  /**
   * Prop to show week numbers .
   */
  showWeekNumbers: _propTypes.default.bool,
  /**
   * Minimum date for a given range .
   */
  startDate: _propTypes.default.object,
  /**
   * Whether or not calendar is opened via keyboard
   */
  isCalendarKeyboardFocused: _propTypes.default.bool
});