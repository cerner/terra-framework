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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _day = _interopRequireDefault(require("./day"));
var _week_number = _interopRequireDefault(require("./week_number"));
var utils = _interopRequireWildcard(require("./date_utils"));
var _react_datepickerModule = _interopRequireDefault(require("./stylesheets/react_datepicker.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_react_datepickerModule.default);
var Week = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Week, _React$Component);
  var _super = _createSuper(Week);
  function Week() {
    var _this;
    (0, _classCallCheck2.default)(this, Week);
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleWeekClick", function (day, weekNumber, event) {
      if (typeof _this.props.onWeekSelect === 'function') {
        _this.props.onWeekSelect(day, weekNumber, event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "formatWeekNumber", function (startOfWeek) {
      if (_this.props.formatWeekNumber) {
        return _this.props.formatWeekNumber(startOfWeek);
      }
      return utils.getWeek(startOfWeek);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderDays", function () {
      var startOfWeek = utils.getStartOfWeek(utils.cloneDate(_this.props.day));
      var days = [];
      var weekNumber = _this.formatWeekNumber(startOfWeek);
      if (_this.props.showWeekNumber) {
        var onClickAction = _this.props.onWeekSelect ? _this.handleWeekClick.bind((0, _assertThisInitialized2.default)(_this), startOfWeek, weekNumber) : undefined;
        days.push( /*#__PURE__*/_react.default.createElement(_week_number.default, {
          key: "W",
          weekNumber: weekNumber,
          onClick: onClickAction
        }));
      }
      return days.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
        var day = utils.addDays(utils.cloneDate(startOfWeek), offset);
        return /*#__PURE__*/_react.default.createElement(_day.default, {
          isCalendarKeyboardFocused: _this.props.isCalendarKeyboardFocused,
          key: offset,
          day: day,
          month: _this.props.month,
          onClick: _this.handleDayClick.bind((0, _assertThisInitialized2.default)(_this), day),
          onMouseEnter: _this.handleDayMouseEnter.bind((0, _assertThisInitialized2.default)(_this), day),
          onDayMouseDown: _this.handleDayMouseDown,
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
          startDate: _this.props.startDate,
          endDate: _this.props.endDate,
          dayClassName: _this.props.dayClassName
        });
      }));
    });
    return _this;
  }
  (0, _createClass2.default)(Week, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('react-datepicker-week')
      }, this.renderDays());
    }
  }]);
  return Week;
}(_react.default.Component);
exports.default = Week;
(0, _defineProperty2.default)(Week, "propTypes", {
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
   * Array to store values of date that are disabled to pick .
   */
  excludeDates: _propTypes.default.array,
  /**
   * A callback function to be executed to determine if a given date should be filtered.
   */
  filterDate: _propTypes.default.func,
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
   * Maximum value of date that can be selected by user.
   */
  maxDate: _propTypes.default.object,
  /**
   * Minimum value of date that can be selected by user.
   */
  minDate: _propTypes.default.object,
  /**
   * Month value picked by user.
   */
  month: _propTypes.default.number,
  /**
   * A callback function to execute when day is selected.
   */
  onDayClick: _propTypes.default.func,
  /**
   * A callback function to execute when the mouse cursor hovers over the day..
   */
  onDayMouseEnter: _propTypes.default.func,
  /**
   * A callback function to execute on mouse down on day.
   * requires no parameter.
   */
  onDayMouseDown: _propTypes.default.func,
  /**
   * A callback function to execute when a week is selected.
   */
  onWeekSelect: _propTypes.default.func,
  /**
   * Prop to store previous selection value.
   */
  preSelection: _propTypes.default.object,
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
  showWeekNumber: _propTypes.default.bool,
  /**
   * Minimum date for a given range.
   */
  startDate: _propTypes.default.object,
  /**
   * Whether or not calendar is opened via keyboard
   */
  isCalendarKeyboardFocused: _propTypes.default.bool
});