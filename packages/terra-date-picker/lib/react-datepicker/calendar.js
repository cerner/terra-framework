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
var _reactIntl = require("react-intl");
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _year_dropdown = _interopRequireDefault(require("./year_dropdown"));
var _month_dropdown = _interopRequireDefault(require("./month_dropdown"));
var _month = _interopRequireDefault(require("./month"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _react_datepickerModule = _interopRequireDefault(require("./stylesheets/react_datepicker.module.scss"));
var _date_utils = require("./date_utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_react_datepickerModule.default);
var DROPDOWN_FOCUS_CLASSNAMES = ['react-datepicker-year-select', 'react-datepicker-month-select'];
var isDropdownSelect = function isDropdownSelect() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var classNamesList = (element.className || '').split(/\s+/);
  return DROPDOWN_FOCUS_CLASSNAMES.some(function (testClassname) {
    return classNamesList.indexOf(testClassname) >= 0;
  });
};
var Calendar = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Calendar, _React$Component);
  var _super = _createSuper(Calendar);
  function Calendar(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Calendar);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOnClick", function (event) {
      var calendarControls = [_this.todayBtnRef.current, _this.closeBtnRef.current, _this.previousMonthBtnRef.current, _this.nextMonthBtnRef.current, _this.monthDropdownRef, _this.yearDropdownRef];
      var isEventTargetMatchingCalendarControl = function isEventTargetMatchingCalendarControl(target) {
        return calendarControls.indexOf(target) >= 0;
      };
      var isEventTargetContainedWithinCalendarControl = function isEventTargetContainedWithinCalendarControl(target) {
        var containsEventTarget = _this.previousMonthBtnRef.current && _this.previousMonthBtnRef.current.contains(target) || _this.nextMonthBtnRef.current && _this.nextMonthBtnRef.current.contains(target) || _this.monthDropdownRef && _this.monthDropdownRef.contains(target) || _this.yearDropdownRef && _this.yearDropdownRef.contains(target);
        return containsEventTarget;
      };
      if (isEventTargetMatchingCalendarControl(event.target) || isEventTargetContainedWithinCalendarControl(event.target)) {
        return;
      }

      // If the user is not clicking on a calendar control, shift focus to the calendar
      if (_this.monthRef) {
        _this.monthRef.focus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClickOutside", function (event) {
      _this.props.onClickOutside(event);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDropdownFocus", function (event) {
      if (isDropdownSelect(event.target)) {
        _this.props.onDropdownFocus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCloseButtonClick", function (event) {
      if (_this.props.onRequestClose) {
        _this.props.onRequestClose(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handlePreviousMonthBtnKeyDown", function (event) {
      if (event.shiftKey && event.keyCode === KeyCode.KEY_TAB) {
        _this.setState({
          calendarIsKeyboardFocused: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleNextMonthBtnKeyDown", function (event) {
      if (event.keyCode === KeyCode.KEY_RETURN) {
        _this.setState({
          calendarIsKeyboardFocused: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleTodayBtnKeyDown", function (event) {
      if (event.keyCode === KeyCode.KEY_TAB) {
        _this.setState({
          calendarIsKeyboardFocused: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMonthBlur", function () {
      _this.setState({
        calendarIsKeyboardFocused: false
      });
      if (_this.props.onMonthBlur) {
        _this.props.onMonthBlur();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMonthFocus", function () {
      if (_this.props.inline) {
        _this.setState({
          calendarIsKeyboardFocused: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setMonthRef", function (node) {
      _this.monthRef = node;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setMonthDropdownRef", function (node) {
      _this.monthDropdownRef = node;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setYearDropdownRef", function (node) {
      _this.yearDropdownRef = node;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getDateInView", function () {
      var _this$props = _this.props,
        preSelection = _this$props.preSelection,
        selected = _this$props.selected,
        openToDate = _this$props.openToDate,
        initialTimeZone = _this$props.initialTimeZone;
      var minDate = (0, _date_utils.getEffectiveMinDate)(_this.props);
      var maxDate = (0, _date_utils.getEffectiveMaxDate)(_this.props);
      var current = (0, _date_utils.now)(initialTimeZone);
      var initialDate = openToDate || selected || preSelection;
      if (initialDate) {
        return initialDate;
      } else {
        if (minDate && (0, _date_utils.isBefore)(current, minDate)) {
          return minDate;
        } else if (maxDate && (0, _date_utils.isAfter)(current, maxDate)) {
          return maxDate;
        }
      }
      return current;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "localizeDate", function (date) {
      return (0, _date_utils.localizeDate)(date, _this.props.locale);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "increaseMonth", function (event) {
      _this.nextMonthBtnRef.current.focus(); // To apply focus style in firefox
      _this.setState({
        isMonthChanged: true,
        date: (0, _date_utils.getStartOfMonth)((0, _date_utils.addMonths)((0, _date_utils.cloneDate)(_this.state.date), 1))
      }, function () {
        return _this.handleMonthChange(_this.state.date);
      });
      _this.props.setPreSelection((0, _date_utils.getStartOfMonth)((0, _date_utils.addMonths)((0, _date_utils.cloneDate)(_this.state.date), 1)));
      // To check if button is pressed using mouse or keyboard
      if (event.target.type === undefined) {
        _this.setState({
          calendarIsKeyboardFocused: false
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "decreaseMonth", function (event) {
      _this.previousMonthBtnRef.current.focus(); // To apply focus style in firefox
      _this.setState({
        isMonthChanged: true,
        date: (0, _date_utils.getStartOfMonth)((0, _date_utils.subtractMonths)((0, _date_utils.cloneDate)(_this.state.date), 1))
      }, function () {
        return _this.handleMonthChange(_this.state.date);
      });
      _this.props.setPreSelection((0, _date_utils.getStartOfMonth)((0, _date_utils.subtractMonths)((0, _date_utils.cloneDate)(_this.state.date), 1)));
      // To check if button is pressed using mouse or keyboard
      if (event.target.type === undefined) {
        _this.setState({
          calendarIsKeyboardFocused: false
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDayClick", function (day, event) {
      return _this.props.onSelect(day, event);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDayMouseEnter", function (day) {
      return _this.setState({
        selectingDate: day
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDayMouseDown", function () {
      if (_this.props.onDayMouseDown) {
        _this.props.onDayMouseDown();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMonthMouseLeave", function () {
      return _this.setState({
        selectingDate: null
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMonthChange", function (date) {
      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(date);
      }
      if (_this.props.adjustDateOnChange) {
        if (_this.props.onSelect) {
          _this.props.onSelect(date);
        }
        if (_this.props.setOpen) {
          _this.props.setOpen(true);
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "changeYear", function (year) {
      _this.setState({
        isMonthChanged: true,
        date: (0, _date_utils.getStartOfMonth)((0, _date_utils.setYear)((0, _date_utils.cloneDate)(_this.state.date), year))
      });
      _this.props.setPreSelection((0, _date_utils.getStartOfMonth)((0, _date_utils.setYear)((0, _date_utils.cloneDate)(_this.state.date), year)));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "changeMonth", function (month) {
      _this.setState({
        isMonthChanged: true,
        date: (0, _date_utils.getStartOfMonth)((0, _date_utils.setMonth)((0, _date_utils.cloneDate)(_this.state.date), month))
      }, function () {
        return _this.handleMonthChange(_this.state.date);
      });
      _this.props.setPreSelection((0, _date_utils.getStartOfMonth)((0, _date_utils.setMonth)((0, _date_utils.cloneDate)(_this.state.date), month)));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "header", function () {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;
      var startOfWeek = (0, _date_utils.getStartOfWeek)((0, _date_utils.cloneDate)(date));
      var dayNames = [];
      if (_this.props.showWeekNumbers) {
        dayNames.push( /*#__PURE__*/_react.default.createElement("div", {
          key: "W",
          className: cx('react-datepicker-day-name')
        }, _this.props.weekLabel || '#'));
      }
      return dayNames.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
        var day = (0, _date_utils.addDays)((0, _date_utils.cloneDate)(startOfWeek), offset);
        var localeData = (0, _date_utils.getLocaleData)(day);
        var weekDayName = _this.props.useWeekdaysShort ? (0, _date_utils.getWeekdayShortInLocale)(localeData, day) : (0, _date_utils.getWeekdayMinInLocale)(localeData, day);
        return /*#__PURE__*/_react.default.createElement("div", {
          key: offset,
          className: cx('react-datepicker-day-name')
        }, weekDayName);
      }));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderPreviousMonthButton", function () {
      if (!_this.props.forceShowMonthNavigation && (0, _date_utils.allDaysDisabledBefore)(_this.state.date, 'month', _this.props)) {
        return /*#__PURE__*/_react.default.createElement("div", null);
      }
      return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Terra.datePicker.previousMonth"
      }, function (text) {
        return /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          className: cx('react-datepicker-navigation--previous'),
          "aria-label": text,
          onClick: _this.decreaseMonth,
          onKeyDown: _this.handlePreviousMonthBtnKeyDown,
          ref: _this.previousMonthBtnRef
        }, /*#__PURE__*/_react.default.createElement("span", {
          "data-navigation-previous": true,
          className: cx('prev-month-icon')
        }));
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderNextMonthButton", function () {
      if (!_this.props.forceShowMonthNavigation && (0, _date_utils.allDaysDisabledAfter)(_this.state.date, 'month', _this.props)) {
        return /*#__PURE__*/_react.default.createElement("div", null);
      }
      return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Terra.datePicker.nextMonth"
      }, function (text) {
        return /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          className: cx('react-datepicker-navigation--next'),
          "aria-label": text,
          onClick: _this.increaseMonth,
          onKeyDown: _this.handleNextMonthBtnKeyDown,
          ref: _this.nextMonthBtnRef
        }, /*#__PURE__*/_react.default.createElement("span", {
          "data-navigation-next": true,
          className: cx('next-month-icon')
        }));
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderCurrentMonth", function () {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;
      var classes = ['react-datepicker-current-month'];
      if (_this.props.showYearDropdown) {
        classes.push('react-datepicker-current-month--hasYearDropdown');
      }
      if (_this.props.showMonthDropdown) {
        classes.push('react-datepicker-current-month--hasMonthDropdown');
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx(classes)
      }, (0, _date_utils.formatDate)(date, _this.props.dateFormat));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderYearDropdown", function () {
      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!_this.props.showYearDropdown || overrideHide) {
        return;
      }
      return /*#__PURE__*/_react.default.createElement(_year_dropdown.default, {
        adjustDateOnChange: _this.props.adjustDateOnChange,
        date: _this.state.date,
        onSelect: _this.props.onSelect,
        setOpen: _this.props.setOpen,
        dropdownMode: _this.props.dropdownMode,
        onChange: _this.changeYear,
        minDate: _this.props.minDate,
        maxDate: _this.props.maxDate,
        refCallback: _this.setYearDropdownRef,
        year: (0, _date_utils.getYear)(_this.state.date),
        scrollableYearDropdown: _this.props.scrollableYearDropdown,
        yearDropdownItemNumber: _this.props.yearDropdownItemNumber,
        onClick: _this.handleDropdownClick,
        onKeyDown: _this.handleDropdownClick
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderMonthDropdown", function () {
      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!_this.props.showMonthDropdown) {
        return;
      }
      return /*#__PURE__*/_react.default.createElement(_month_dropdown.default, {
        dropdownMode: _this.props.dropdownMode,
        locale: _this.props.locale,
        dateFormat: _this.props.dateFormat,
        onChange: _this.changeMonth,
        month: (0, _date_utils.getMonth)(_this.state.date),
        refCallback: _this.setMonthDropdownRef,
        onClick: _this.handleDropdownClick,
        onKeyDown: _this.handleDropdownClick
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderTodayButton", function () {
      if (!_this.props.todayButton) {
        return;
      }
      var today = (0, _date_utils.getStartOfDate)((0, _date_utils.now)(_this.props.initialTimeZone));
      return /*#__PURE__*/_react.default.createElement("button", {
        className: cx('react-datepicker-today-button'),
        onClick: function onClick(e) {
          return _this.props.onSelect(today, e);
        },
        onKeyDown: _this.handleTodayBtnKeyDown,
        ref: _this.todayBtnRef,
        disabled: (0, _date_utils.isDayDisabled)(today, _this.props)
      }, _this.props.todayButton);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderCloseButton", function () {
      return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Terra.datePicker.closeCalendar"
      }, function (text) {
        return /*#__PURE__*/_react.default.createElement("button", {
          className: cx('react-datepicker-close-button'),
          type: "button",
          onClick: _this.handleCloseButtonClick,
          ref: _this.closeBtnRef
        }, text);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderMonths", function () {
      var keyboardFocus = false;
      if (_this.props.isCalendarOpenedViaKeyboard || _this.props.isCalendarKeyboardFocused) {
        keyboardFocus = true;
      }
      if (_this.state.isMonthChanged) {
        keyboardFocus = _this.state.calendarIsKeyboardFocused;
      }
      if (!keyboardFocus && _this.state.calendarIsKeyboardFocused) {
        keyboardFocus = true;
      }
      var monthList = [];
      for (var i = 0; i < _this.props.monthsShown; ++i) {
        var monthDate = (0, _date_utils.addMonths)((0, _date_utils.cloneDate)(_this.state.date), i);
        var monthKey = "month-".concat(i);
        monthList.push( /*#__PURE__*/_react.default.createElement("div", {
          key: monthKey,
          onClick: _this.handleOnClick,
          className: cx('react-datepicker-month-container')
        }, /*#__PURE__*/_react.default.createElement(_month.default, {
          day: monthDate,
          isCalendarKeyboardFocused: keyboardFocus,
          dayClassName: _this.props.dayClassName,
          onMonthFocus: _this.handleMonthFocus,
          onMonthBlur: _this.handleMonthBlur,
          onDayClick: _this.handleDayClick,
          onDayMouseEnter: _this.handleDayMouseEnter,
          onDayMouseDown: _this.handleDayMouseDown,
          onMouseLeave: _this.handleMonthMouseLeave,
          onWeekSelect: _this.props.onWeekSelect,
          formatWeekNumber: _this.props.formatWeekNumber,
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          excludeDates: _this.props.excludeDates,
          highlightDates: _this.props.highlightDates,
          selectingDate: _this.state.selectingDate,
          includeDates: _this.props.includeDates,
          inline: _this.props.inline,
          fixedHeight: _this.props.fixedHeight,
          filterDate: _this.props.filterDate,
          preSelection: _this.props.preSelection,
          refCallback: _this.setMonthRef,
          selected: _this.props.selected,
          selectsStart: _this.props.selectsStart,
          selectsEnd: _this.props.selectsEnd,
          showWeekNumbers: _this.props.showWeekNumbers,
          startDate: _this.props.startDate,
          endDate: _this.props.endDate,
          peekNextMonth: _this.props.peekNextMonth,
          handleCalendarKeyDown: _this.props.handleCalendarKeyDown,
          locale: _this.props.locale,
          intl: _this.props.intl,
          initialTimeZone: _this.props.initialTimeZone
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: cx('react-datepicker-header')
        }, _this.renderCurrentMonth(monthDate), /*#__PURE__*/_react.default.createElement("div", {
          className: cx('react-datepicker-header-controls')
        }, _this.renderPreviousMonthButton(), /*#__PURE__*/_react.default.createElement("div", {
          className: cx(['react-datepicker-header-dropdown', "react-datepicker-header-dropdown--".concat(_this.props.dropdownMode)]),
          onFocus: _this.handleDropdownFocus
        }, _this.renderMonthDropdown(i !== 0), _this.renderYearDropdown(i !== 0)), _this.renderNextMonthButton()), /*#__PURE__*/_react.default.createElement("div", {
          className: cx('react-datepicker-day-names'),
          "aria-hidden": "true"
        }, _this.header(monthDate)))));
      }
      return monthList;
    });
    _this.state = {
      isMonthChanged: false,
      date: _this.localizeDate(_this.getDateInView()),
      selectingDate: null,
      calendarIsKeyboardFocused: _this.props.isCalendarKeyboardFocused
    };
    _this.todayBtnRef = /*#__PURE__*/_react.default.createRef();
    _this.closeBtnRef = /*#__PURE__*/_react.default.createRef();
    _this.previousMonthBtnRef = /*#__PURE__*/_react.default.createRef();
    _this.nextMonthBtnRef = /*#__PURE__*/_react.default.createRef();
    _this.monthRef;
    _this.monthDropdownRef;
    _this.yearDropdownRef;
    _this.handleDropdownClick = _this.handleDropdownClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(Calendar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.preSelection && !(0, _date_utils.isSameDay)(this.props.preSelection, prevProps.preSelection)) {
        this.setState({
          date: this.localizeDate(this.props.preSelection)
        });
      } else if (this.props.openToDate && !(0, _date_utils.isSameDay)(this.props.openToDate, prevProps.openToDate)) {
        this.setState({
          date: this.localizeDate(this.props.openToDate)
        });
      }
    }
  }, {
    key: "handleDropdownClick",
    value: function handleDropdownClick(event) {
      if (event.keyCode === KeyCode.KEY_UP || event.keyCode === KeyCode.KEY_DOWN) {
        this.setState({
          calendarIsKeyboardFocused: true
        });
      } else {
        this.setState({
          calendarIsKeyboardFocused: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var supportsOnTouchStart = ('ontouchstart' in window);

      /**
       * Ensures focus moves into datepicker popup correctly when it is opened on touch devices
       * by making focusable element (today button) first in the DOM order
       */
      if (supportsOnTouchStart) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: cx(['react-datepicker', 'supports-on-touch-start', this.props.className]),
          "data-terra-date-picker-calendar": true
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: cx('react-datepicker-footer')
        }, this.renderTodayButton(), this.renderCloseButton()), this.renderMonths(), this.props.children);
      }

      /**
       * Ensures users can start interacting with the calendar via up/down/left/right arrow keys
       * when it first opens by making the month component render first in the DOM order
       */
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx(['react-datepicker', this.props.className]),
        "data-terra-date-picker-calendar": true
      }, this.renderMonths(), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('react-datepicker-footer')
      }, this.renderTodayButton()), this.props.children);
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        onDropdownFocus: function onDropdownFocus() {},
        monthsShown: 1,
        forceShowMonthNavigation: false,
        isCalendarKeyboardFocused: false
      };
    }
  }]);
  return Calendar;
}(_react.default.Component);
exports.default = Calendar;
(0, _defineProperty2.default)(Calendar, "propTypes", {
  /**
   * Prop to change date when a valid date is selected.
   */
  adjustDateOnChange: _propTypes.default.bool,
  /**
   * Class name to style the date picker.
   */
  className: _propTypes.default.string,
  /**
   * Components to render within date picker.
   */
  children: _propTypes.default.node,
  /**
   * Format of the date selected.
   */
  dateFormat: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]).isRequired,
  /**
   * Prop to style individual days on calendar.
   */
  dayClassName: _propTypes.default.func,
  /**
   * Whether the year and month dropdowns should be in the scroll or select mode.
   */
  dropdownMode: _propTypes.default.oneOf(['scroll', 'select']).isRequired,
  /**
   * Maximum Date for a given range.
   */
  endDate: _propTypes.default.object,
  /**
   * Array to exclude certain dates.
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
   * A callback function to be executed to format week number .
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
   * Prop to show multiple months on date picker.
   */
  monthsShown: _propTypes.default.number,
  /**
   * A callback function that is executed when user clicks outside the datepicker.
   */
  onClickOutside: _propTypes.default.func,
  /**
   * A callback function that is executed when month is selected.
   */
  onMonthChange: _propTypes.default.func,
  /**
   * A callback function to execute when month component loses focus.
   * requires no parameter.
   */
  onMonthBlur: _propTypes.default.func,
  /**
   * Prop to show month navigation.
   */
  forceShowMonthNavigation: _propTypes.default.bool,
  /**
   * A callback function that is executed when date picker is clicked for dropdown.
   */
  onDropdownFocus: _propTypes.default.func,
  /**
   * A callback function to execute on mouse down on day.
   * requires no parameter.
   */
  onDayMouseDown: _propTypes.default.func,
  /**
   * A callback function that is executed when a valid date is selected.
   */
  onSelect: _propTypes.default.func.isRequired,
  /**
   * A callback function that is executed when a Week number is selected.
   */
  onWeekSelect: _propTypes.default.func,
  /**
   * Prop to open calendar on the given date.
   */
  openToDate: _propTypes.default.object,
  /**
   * Prop to show dates of next month also.
   */
  peekNextMonth: _propTypes.default.bool,
  /**
   * Prop to show a scrollable dropdown to choose year on the date picker.
   */
  scrollableYearDropdown: _propTypes.default.bool,
  /**
   * Prop to store previous selection.
   */
  preSelection: _propTypes.default.object,
  /**
   * A callback function used to set preSelection date when the calendar month or year is updated
   */
  setPreSelection: _propTypes.default.func,
  /**
   * Selected Date Value.
   */
  selected: _propTypes.default.object,
  /**
   * Mark date picker to select end of range .
   */
  selectsEnd: _propTypes.default.bool,
  /**
   * Mark date picker to select start of range .
   */
  selectsStart: _propTypes.default.bool,
  /**
   * Prop to show a dropdown to select month in date picker .
   */
  showMonthDropdown: _propTypes.default.bool,
  /**
   * Prop to show week numbers .
   */
  showWeekNumbers: _propTypes.default.bool,
  /**
   * Prop to show a dropdown to select year in date picker .
   */
  showYearDropdown: _propTypes.default.bool,
  /**
   * Minimum date for a given range .
   */
  startDate: _propTypes.default.object,
  /**
   * Name of button to select current date .
   */
  todayButton: _propTypes.default.string,
  /**
   * Prop to show short names of weekdays .
   */
  useWeekdaysShort: _propTypes.default.bool,
  /**
   * Label value for weeks on date picker.
   */
  weekLabel: _propTypes.default.string,
  /**
   * Year Values to show on dropdown +/- the given value.
    */
  yearDropdownItemNumber: _propTypes.default.number,
  /**
   * A callback function to execute when a date picker is open.
   */
  setOpen: _propTypes.default.func,
  /**
   * Whether or not calendar is navigated by keyboard
   */
  isCalendarKeyboardFocused: _propTypes.default.bool,
  /**
   * Whether or not calendar is opened by keyboard
   */
  isCalendarOpenedViaKeyboard: _propTypes.default.bool
});