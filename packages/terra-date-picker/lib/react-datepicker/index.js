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
var _calendar = _interopRequireDefault(require("./calendar"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));
var _reactPortal = require("react-portal");
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _reactIntl = require("react-intl");
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var _PopupContainer = _interopRequireDefault(require("./PopupContainer"));
var _DateUtil = _interopRequireDefault(require("../DateUtil"));
var _date_utils = require("./date_utils");
var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));
var _react_datepickerModule = _interopRequireDefault(require("./stylesheets/react_datepicker.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_react_datepickerModule.default);
var outsideClickIgnoreClass = 'react-datepicker-ignore-onclickoutside';
var WrappedCalendar = (0, _reactOnclickoutside.default)(_calendar.default);

/**
 * General datepicker component.
 */
var DatePicker = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DatePicker, _React$Component);
  var _super = _createSuper(DatePicker);
  function DatePicker(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DatePicker);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getPreSelection", function () {
      return _this.props.openToDate ? (0, _date_utils.newDate)(_this.props.openToDate) : _this.props.selectsEnd && _this.props.startDate ? (0, _date_utils.newDate)(_this.props.startDate) : _this.props.selectsStart && _this.props.endDate ? (0, _date_utils.newDate)(_this.props.endDate) : (0, _date_utils.now)(_this.props.initialTimeZone);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "calcInitialState", function () {
      return {
        isCalendarOpenedViaKeyboard: false,
        isCalendarKeyboardFocused: false,
        open: _this.props.startOpen || false,
        preventFocus: false,
        preSelection: _this.props.selected ? (0, _date_utils.newDate)(_this.props.selected) : _this.boundedPreSelection(),
        // transforming highlighted days (perhaps nested array)
        // to flat Map for faster access in day.jsx
        highlightDates: (0, _date_utils.getHightLightDaysMap)(_this.props.highlightDates)
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clearPreventFocusTimeout", function () {
      if (_this.preventFocusTimeout) {
        clearTimeout(_this.preventFocusTimeout);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setFocus", function () {
      if (_this.input.focus) {
        _this.input.focus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setOpen", function (open) {
      if (!open) {
        _this.setState({
          isCalendarOpenedViaKeyboard: false,
          isCalendarKeyboardFocused: false
        });
      }
      _this.setState({
        open: open,
        preSelection: open && _this.state.open ? _this.state.preSelection : _this.calcInitialState().preSelection
      });
      if (_this.props.onRequestClose && !open) {
        _this.props.onRequestClose(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFocus", function (event) {
      if (!_this.state.preventFocus) {
        _this.props.onFocus(event);
        if (!_this.props.preventOpenOnFocus) {
          _this.setOpen(true, event);
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "cancelFocusInput", function () {
      clearTimeout(_this.inputFocusTimeout);
      _this.inputFocusTimeout = null;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "deferFocusInput", function () {
      _this.cancelFocusInput();
      _this.inputFocusTimeout = setTimeout(function () {
        return _this.setFocus();
      }, 1);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDropdownFocus", function () {
      _this.cancelFocusInput();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleBlur", function (event) {
      if (_this.state.open) {
        _this.deferFocusInput();
      } else {
        _this.props.onBlur(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCalendarClickOutside", function (event) {
      if (!_this.props.inline) {
        _this.setOpen(false, event);
      }
      _this.props.onClickOutside(event);
      if (_this.props.withPortal) {
        event.preventDefault();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (event, value) {
      if (_this.props.onChangeRaw) {
        _this.props.onChangeRaw(event, value);
        if (event.isDefaultPrevented()) {
          return;
        }
      }
      _this.setState({
        inputValue: value
      });
      var date = (0, _date_utils.parseDate)(value, _this.props);
      if (date || !value) {
        _this.setSelected(date, event, value, true);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSelect", function (date, event) {
      // Preventing onFocus event to fix issue
      // https://github.com/Hacker0x01/react-datepicker/issues/628
      _this.setState({
        preventFocus: true
      }, function () {
        _this.preventFocusTimeout = setTimeout(function () {
          return _this.setState({
            preventFocus: false
          });
        }, 50);
        return _this.preventFocusTimeout;
      });
      if (_this.props.onChangeRaw && !(0, _date_utils.isSameDay)(_this.props.selected, date) || _this.props.allowSameDay) {
        var value = _DateUtil.default.formatISODate(date, _DateUtil.default.getFormatByLocale(_this.props.intl.locale));
        _this.props.onChangeRaw(event, value);
      }
      _this.setSelected(date, event);
      if (!_this.props.shouldCloseOnSelect) {
        _this.setPreSelection(date);
      } else if (!_this.props.inline) {
        _this.setOpen(false, event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setSelected", function (date, event, value, keepInput) {
      var changedDate = date;
      if (changedDate !== null && (0, _date_utils.isDayDisabled)(changedDate, _this.props)) {
        return;
      }
      var hasChanged = false;
      if (!(0, _date_utils.isSameDay)(_this.props.selected, changedDate) || _this.props.allowSameDay) {
        if (changedDate !== null) {
          _this.setState({
            preSelection: changedDate
          });
        }
        hasChanged = true;
      }
      _this.props.onSelect(changedDate, event);
      if (hasChanged) {
        _this.props.onChange(changedDate, event, value);
      }
      if (!keepInput) {
        _this.setState({
          inputValue: null
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setPreSelection", function (date) {
      var isValidDateSelection = date ? (0, _date_utils.isDayInRange)(date, _this.props.minDate, _this.props.maxDate) : true;
      if (isValidDateSelection) {
        _this.setState({
          preSelection: date
        });
        _this.updateAriaLiveStatus((0, _date_utils.getLocalizedDateForScreenReader)(date, _this.props));
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onInputClick", function () {
      if (!_this.props.disabled) {
        _this.setOpen(true);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onInputKeyDown", function (event) {
      if (event.keyCode === KeyCode.KEY_RETURN || event.keyCode === KeyCode.KEY_SPACE) {
        _this.setState({
          isCalendarOpenedViaKeyboard: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCalendarKeyDown", function (event) {
      var keyboardNavKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'];
      _this.props.onKeyDown(event);
      var eventKey = event.key;
      var copy = (0, _date_utils.newDate)(_this.state.preSelection);
      if (eventKey === 'Enter') {
        event.preventDefault();
        if ((0, _date_utils.isMoment)(_this.state.preSelection) || (0, _date_utils.isDate)(_this.state.preSelection)) {
          _this.handleSelect(copy, event);
          !_this.props.shouldCloseOnSelect && _this.setPreSelection(copy);
        } else {
          _this.setOpen(false, event);
        }
      } else if (eventKey === 'Escape') {
        event.preventDefault();
        _this.setOpen(false, event);
      } else if (!_this.props.disabledKeyboardNavigation && keyboardNavKeys.indexOf(eventKey) !== -1) {
        var newSelection;
        switch (eventKey) {
          case 'ArrowLeft':
            _this.setState({
              isCalendarKeyboardFocused: true
            });
            event.preventDefault();
            newSelection = (0, _date_utils.subtractDays)(copy, 1);
            break;
          case 'ArrowRight':
            _this.setState({
              isCalendarKeyboardFocused: true
            });
            event.preventDefault();
            newSelection = (0, _date_utils.addDays)(copy, 1);
            break;
          case 'ArrowUp':
            _this.setState({
              isCalendarKeyboardFocused: true
            });
            event.preventDefault();
            newSelection = (0, _date_utils.subtractWeeks)(copy, 1);
            break;
          case 'ArrowDown':
            _this.setState({
              isCalendarKeyboardFocused: true
            });
            event.preventDefault();
            newSelection = (0, _date_utils.addWeeks)(copy, 1);
            break;
          case 'PageUp':
            _this.setState({
              isCalendarKeyboardFocused: true
            });
            event.preventDefault();
            newSelection = (0, _date_utils.subtractMonths)(copy, 1);
            break;
          case 'PageDown':
            _this.setState({
              isCalendarKeyboardFocused: true
            });
            event.preventDefault();
            newSelection = (0, _date_utils.addMonths)(copy, 1);
            break;
          case 'Home':
            _this.setState({
              isCalendarKeyboardFocused: true
            });
            event.preventDefault();
            newSelection = (0, _date_utils.subtractYears)(copy, 1);
            break;
          case 'End':
            _this.setState({
              isCalendarKeyboardFocused: true
            });
            event.preventDefault();
            newSelection = (0, _date_utils.addYears)(copy, 1);
            break;
        }
        if (_this.props.adjustDateOnChange) {
          _this.setSelected(newSelection);
        }
        _this.setPreSelection(newSelection);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClearClick", function (event) {
      event.preventDefault();
      _this.props.onChange(null, event);
      _this.setState({
        inputValue: null
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderCalendar", function () {
      if (!_this.props.inline && (!_this.state.open || _this.props.disabled)) {
        return null;
      }
      if (_this.props.withPortal) {
        return /*#__PURE__*/_react.default.createElement(WrappedCalendar, {
          ref: function ref(elem) {
            _this.calendar = elem;
          },
          locale: _this.props.locale,
          adjustDateOnChange: _this.props.adjustDateOnChange,
          setOpen: _this.setOpen,
          dateFormat: _this.props.dateFormatCalendar,
          useWeekdaysShort: _this.props.useWeekdaysShort,
          dropdownMode: _this.props.dropdownMode,
          selected: _this.props.selected,
          preSelection: _this.state.preSelection,
          onSelect: _this.handleSelect,
          onWeekSelect: _this.props.onWeekSelect,
          openToDate: _this.props.openToDate,
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          selectsStart: _this.props.selectsStart,
          selectsEnd: _this.props.selectsEnd,
          startDate: _this.props.startDate,
          endDate: _this.props.endDate,
          excludeDates: _this.props.excludeDates,
          filterDate: _this.props.filterDate,
          onClickOutside: _this.handleCalendarClickOutside,
          formatWeekNumber: _this.props.formatWeekNumber,
          highlightDates: _this.state.highlightDates,
          includeDates: _this.props.includeDates,
          inline: _this.props.inline,
          peekNextMonth: _this.props.peekNextMonth,
          showMonthDropdown: _this.props.showMonthDropdown,
          showWeekNumbers: _this.props.showWeekNumbers,
          showYearDropdown: _this.props.showYearDropdown,
          forceShowMonthNavigation: _this.props.forceShowMonthNavigation,
          scrollableYearDropdown: _this.props.scrollableYearDropdown,
          todayButton: _this.props.todayButton,
          weekLabel: _this.props.weekLabel,
          outsideClickIgnoreClass: outsideClickIgnoreClass,
          fixedHeight: _this.props.fixedHeight,
          monthsShown: _this.props.monthsShown,
          onDropdownFocus: _this.handleDropdownFocus,
          onMonthChange: _this.props.onMonthChange,
          dayClassName: _this.props.dayClassName,
          className: _this.props.calendarClassName,
          yearDropdownItemNumber: _this.props.yearDropdownItemNumber,
          onRequestClose: _this.handleOnRequestClose,
          handleCalendarKeyDown: _this.handleCalendarKeyDown,
          setPreSelection: _this.setPreSelection,
          isCalendarKeyboardFocused: _this.state.isCalendarKeyboardFocused,
          isCalendarOpenedViaKeyboard: _this.state.isCalendarOpenedViaKeyboard,
          initialTimeZone: _this.props.initialTimeZone
        }, _this.props.children, /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
          "aria-atomic": "true",
          "aria-live": "assertive",
          refCallback: function refCallback(ref) {
            _this.visuallyHiddenText = ref;
          }
        }));
      }
      return /*#__PURE__*/_react.default.createElement(_calendar.default, {
        ref: function ref(elem) {
          _this.calendar = elem;
        },
        locale: _this.props.locale,
        adjustDateOnChange: _this.props.adjustDateOnChange,
        setOpen: _this.setOpen,
        dateFormat: _this.props.dateFormatCalendar,
        useWeekdaysShort: _this.props.useWeekdaysShort,
        dropdownMode: _this.props.dropdownMode,
        selected: _this.props.selected,
        preSelection: _this.state.preSelection,
        onSelect: _this.handleSelect,
        onWeekSelect: _this.props.onWeekSelect,
        onDayMouseDown: _this.handleOnDayMouseDown,
        onMonthBlur: _this.handleMonthBlur,
        openToDate: _this.props.openToDate,
        minDate: _this.props.minDate,
        maxDate: _this.props.maxDate,
        selectsStart: _this.props.selectsStart,
        selectsEnd: _this.props.selectsEnd,
        startDate: _this.props.startDate,
        endDate: _this.props.endDate,
        excludeDates: _this.props.excludeDates,
        filterDate: _this.props.filterDate,
        formatWeekNumber: _this.props.formatWeekNumber,
        highlightDates: _this.state.highlightDates,
        includeDates: _this.props.includeDates,
        inline: _this.props.inline,
        peekNextMonth: _this.props.peekNextMonth,
        showMonthDropdown: _this.props.showMonthDropdown,
        showWeekNumbers: _this.props.showWeekNumbers,
        showYearDropdown: _this.props.showYearDropdown,
        forceShowMonthNavigation: _this.props.forceShowMonthNavigation,
        scrollableYearDropdown: _this.props.scrollableYearDropdown,
        todayButton: _this.props.todayButton,
        weekLabel: _this.props.weekLabel,
        fixedHeight: _this.props.fixedHeight,
        monthsShown: _this.props.monthsShown,
        onDropdownFocus: _this.handleDropdownFocus,
        onMonthChange: _this.props.onMonthChange,
        dayClassName: _this.props.dayClassName,
        className: _this.props.calendarClassName,
        yearDropdownItemNumber: _this.props.yearDropdownItemNumber,
        onRequestClose: _this.handleOnRequestClose,
        handleCalendarKeyDown: _this.handleCalendarKeyDown,
        setPreSelection: _this.setPreSelection,
        isCalendarKeyboardFocused: _this.state.isCalendarKeyboardFocused,
        isCalendarOpenedViaKeyboard: _this.state.isCalendarOpenedViaKeyboard,
        initialTimeZone: _this.props.initialTimeZone
      }, _this.props.children, /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
        "aria-atomic": "true",
        "aria-live": "assertive",
        refCallback: function refCallback(ref) {
          _this.visuallyHiddenText = ref;
        }
      }));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderDateInput", function () {
      var _React$cloneElement;
      var classNameList = cx(_this.props.className, (0, _defineProperty2.default)({}, outsideClickIgnoreClass, _this.state.open));
      var customInput = _this.props.customInput || /*#__PURE__*/_react.default.createElement("input", {
        type: "text"
      });
      var customInputRef = _this.props.customInputRef || 'ref';
      var inputValue = typeof _this.props.value === 'string' ? _this.props.value : typeof _this.state.inputValue === 'string' ? _this.state.inputValue : (0, _date_utils.safeDateFormat)(_this.props.selected, _this.props);
      return /*#__PURE__*/_react.default.cloneElement(customInput, (_React$cloneElement = {}, (0, _defineProperty2.default)(_React$cloneElement, customInputRef, function (input) {
        _this.input = input;
      }), (0, _defineProperty2.default)(_React$cloneElement, "value", inputValue), (0, _defineProperty2.default)(_React$cloneElement, "onBlur", _this.handleBlur), (0, _defineProperty2.default)(_React$cloneElement, "onChange", _this.handleChange), (0, _defineProperty2.default)(_React$cloneElement, "onClick", _this.onInputClick), (0, _defineProperty2.default)(_React$cloneElement, "onFocus", _this.handleFocus), (0, _defineProperty2.default)(_React$cloneElement, "onKeyDown", _this.onInputKeyDown), (0, _defineProperty2.default)(_React$cloneElement, "id", _this.props.id), (0, _defineProperty2.default)(_React$cloneElement, "name", _this.props.name), (0, _defineProperty2.default)(_React$cloneElement, "autoFocus", _this.props.autoFocus), (0, _defineProperty2.default)(_React$cloneElement, "disabled", _this.props.disabled), (0, _defineProperty2.default)(_React$cloneElement, "autoComplete", _this.props.autoComplete), (0, _defineProperty2.default)(_React$cloneElement, "className", classNameList), (0, _defineProperty2.default)(_React$cloneElement, "title", _this.props.title), (0, _defineProperty2.default)(_React$cloneElement, "readOnly", _this.props.readOnly), (0, _defineProperty2.default)(_React$cloneElement, "required", _this.props.required), (0, _defineProperty2.default)(_React$cloneElement, "tabIndex", _this.props.tabIndex), _React$cloneElement));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderClearButton", function () {
      if (_this.props.isClearable && _this.props.selected != null) {
        return /*#__PURE__*/_react.default.createElement("a", {
          className: cx('react-datepicker-close-icon'),
          href: "#",
          onClick: _this.onClearClick
        });
      } else {
        return null;
      }
    });
    _this.state = _this.calcInitialState();
    _this.handleKeydown = _this.handleKeydown.bind((0, _assertThisInitialized2.default)(_this));
    _this.datePickerContainer = /*#__PURE__*/_react.default.createRef();
    _this.datePickerPopupContainer = /*#__PURE__*/_react.default.createRef();
    _this.datePickerOverlayContainer = /*#__PURE__*/_react.default.createRef();
    _this.handleCalendarKeyDown = _this.handleCalendarKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnRequestClose = _this.handleOnRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.updateAriaLiveStatus = _this.updateAriaLiveStatus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnDayMouseDown = _this.handleOnDayMouseDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.boundedPreSelection = _this.boundedPreSelection.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMonthBlur = _this.handleMonthBlur.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeydown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var currentMonth = prevProps.selected && (0, _date_utils.getMonth)(prevProps.selected);
      var nextMonth = this.props.selected && (0, _date_utils.getMonth)(this.props.selected);
      if (prevProps.inline && currentMonth !== nextMonth) {
        this.setPreSelection(this.props.selected);
      }
      if (prevProps.highlightDates !== this.props.highlightDates) {
        this.setState({
          'highlightDates': (0, _date_utils.getHightLightDaysMap)(this.props.highlightDates)
        });
      }
      // Shift focus into popup date-picker if it exists
      if (this.datePickerPopupContainer.current) {
        this.datePickerPopupContainer.current.focus();
      }

      // Shift focus into overlay date-picker if it exists
      if (this.datePickerOverlayContainer.current) {
        this.datePickerOverlayContainer.current.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeydown);
      this.clearPreventFocusTimeout();
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(event) {
      if (event.keyCode === KeyCode.KEY_ESCAPE) {
        // If date picker is open in overlay
        if (this.datePickerOverlayContainer.current) {
          if (event.target === this.datePickerOverlayContainer.current || this.datePickerOverlayContainer.current.contains(event.target)) {
            this.setOpen(false, event);
          }
        }
      }
    }
  }, {
    key: "handleOnDayMouseDown",
    value: function handleOnDayMouseDown() {
      if (this.props.inline) {
        // prevents focus border on pre-selected day on mouseDown when calendar is inline.
        this.setState({
          preSelection: null
        });
      }
    }
  }, {
    key: "boundedPreSelection",
    value: function boundedPreSelection() {
      var defaultPreSelection = this.getPreSelection();
      var minDate = (0, _date_utils.getEffectiveMinDate)(this.props);
      var maxDate = (0, _date_utils.getEffectiveMaxDate)(this.props);
      return minDate && (0, _date_utils.isBefore)(defaultPreSelection, minDate) ? minDate : maxDate && (0, _date_utils.isAfter)(defaultPreSelection, maxDate) ? maxDate : defaultPreSelection;
    }
  }, {
    key: "handleMonthBlur",
    value: function handleMonthBlur() {
      if (this.props.inline) {
        // resets previous selected day to selected or current day from previous focused day ( non-selected ) when calendar is inline.
        this.setState({
          preSelection: this.props.selected ? (0, _date_utils.newDate)(this.props.selected) : this.boundedPreSelection()
        });
      }
    }
  }, {
    key: "handleOnRequestClose",
    value: function handleOnRequestClose() {
      this.setState({
        isCalendarKeyboardFocused: false,
        isCalendarOpenedViaKeyboard: false
      });
      this.setOpen(false, event);
    }
  }, {
    key: "updateAriaLiveStatus",
    value: function updateAriaLiveStatus(message) {
      this.visuallyHiddenText.innerText = message;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var calendar = this.renderCalendar();
      if (this.props.inline && !this.props.withPortal) {
        return calendar;
      }
      if (this.props.withPortal) {
        return /*#__PURE__*/_react.default.createElement("div", null, !this.props.inline ? /*#__PURE__*/_react.default.createElement("div", {
          className: cx('react-datepicker-input-container')
        }, this.renderDateInput(), this.renderClearButton()) : null, this.state.open && !this.props.disabled || this.props.inline ? /*#__PURE__*/_react.default.createElement(_reactPortal.Portal, {
          isOpened: true
        }, /*#__PURE__*/_react.default.createElement(_focusTrapReact.default, {
          focusTrapOptions: {
            returnFocusOnDeactivate: false,
            clickOutsideDeactivates: true
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          ref: this.datePickerOverlayContainer,
          className: cx('react-datepicker-portal')
        }, calendar))) : null);
      }
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        ref: this.datePickerContainer,
        className: cx('react-datepicker-input-container')
      }, this.renderDateInput(), this.renderClearButton()), calendar && /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
        attachmentBehavior: "flip",
        contentAttachment: "top center",
        isOpen: this.state.open && !this.props.disabled,
        targetAttachment: "bottom center",
        targetRef: function targetRef() {
          return _this2.datePickerContainer.current;
        },
        onPosition: this.handleOnPosition,
        onRequestClose: this.handleOnRequestClose,
        classNameArrow: cx('react-datepicker-arrow'),
        contentWidth: "auto",
        contentHeight: "auto",
        isArrowDisplayed: true,
        isHeaderDisabled: true,
        isContentFocusDisabled: true,
        popupContentRole: null
      }, /*#__PURE__*/_react.default.createElement(_PopupContainer.default, {
        ref: this.datePickerPopupContainer
      }, calendar)));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        allowSameDay: false,
        dateFormat: 'L',
        dateFormatCalendar: 'MMMM YYYY',
        onChange: function onChange() {},
        disabled: false,
        disabledKeyboardNavigation: false,
        dropdownMode: 'scroll',
        maxDate: (0, _date_utils.newDate)(_DateUtil.default.MAX_DATE),
        minDate: (0, _date_utils.newDate)(_DateUtil.default.MIN_DATE),
        onFocus: function onFocus() {},
        onBlur: function onBlur() {},
        onKeyDown: function onKeyDown() {},
        onSelect: function onSelect() {},
        onClickOutside: function onClickOutside() {},
        onMonthChange: function onMonthChange() {},
        preventOpenOnFocus: false,
        monthsShown: 1,
        withPortal: false,
        shouldCloseOnSelect: true
      };
    }
  }]);
  return DatePicker;
}(_react.default.Component);
(0, _defineProperty2.default)(DatePicker, "propTypes", {
  /**
   * Prop to change date when a valid date is selected.
   */
  adjustDateOnChange: _propTypes.default.bool,
  /**
   * Whether or not to allow same days to be selected.
   */
  allowSameDay: _propTypes.default.bool,
  /**
   * Prop to auto complete date.
   */
  autoComplete: _propTypes.default.string,
  /**
   * Whether or not to auto focus on date picker.
   */
  autoFocus: _propTypes.default.bool,
  /**
   * Classname for styling calendar.
   */
  calendarClassName: _propTypes.default.string,
  /**
   * Components to render within date picker.
   */
  children: _propTypes.default.node,
  /**
   * Classname for styling date picker.
   */
  className: _propTypes.default.string,
  /**
   * Prop for custom input in date picker.
   */
  customInput: _propTypes.default.element,
  /**
   * Prop for custom input reference in date picker.
   */
  customInputRef: _propTypes.default.string,
  /**
   * Format of the date selected.
   */
  dateFormat: _propTypes.default.oneOfType([
  // eslint-disable-line react/no-unused-prop-types
  _propTypes.default.string, _propTypes.default.array]),
  /**
   * Date format displayed on calendar header.
   */
  dateFormatCalendar: _propTypes.default.string,
  /**
   * A callback function for custom day class names.
   */
  dayClassName: _propTypes.default.func,
  /**
   * Prop to disable dates on calendar.
   */
  disabled: _propTypes.default.bool,
  /**
   * Prop to disable keyboard navigation.
   */
  disabledKeyboardNavigation: _propTypes.default.bool,
  /**
   * Whether the year and month dropdowns should be in the scroll or select mode.
   */
  dropdownMode: _propTypes.default.oneOf(['scroll', 'select']).isRequired,
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
   * Value of custom input id.
   */
  id: _propTypes.default.string,
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
   * Prop to render Inline version of datepicker component.
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
   * Prop to determine whether or not the date picker is clearable.
   */
  isClearable: _propTypes.default.bool,
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
   * Value for name of custom input.
   */
  name: _propTypes.default.string,
  /**
   * A callback function to execute when object loses focus.
   */
  onBlur: _propTypes.default.func,
  /**
   * A callback function to execute when date is selected.
   */
  onChange: _propTypes.default.func.isRequired,
  /**
   * A callback function to execute when value is selected from dropdown.
   */
  onSelect: _propTypes.default.func,
  /**
   * A callback function to execute when week is selected.
   */
  onWeekSelect: _propTypes.default.func,
  /**
   * **Deprecated**, A callback function to execute when the mouse cursor leaves the element. Resolves to `onRequestClose`.
   */
  onClickOutside: _propTypes.default.func,
  /**
   * A callback function to execute when date is entered.
   */
  onChangeRaw: _propTypes.default.func,
  /**
   * A callback function to execute when object focused.
   */
  onFocus: _propTypes.default.func,
  /**
   * A callback function to execute when a key is pressed.
   */
  onKeyDown: _propTypes.default.func,
  /**
   * A callback function to execute when month is selected.
   */
  onMonthChange: _propTypes.default.func,
  /**
   * A callback function to execute when picker is dismissed. onRequestClose(event)
   */
  onRequestClose: _propTypes.default.func,
  /**
   * Prop to open calendar on a particular date.
   */
  openToDate: _propTypes.default.object,
  /**
   * A prop to check next month dates.
   */
  peekNextMonth: _propTypes.default.bool,
  /**
   * Prop to prevent date picker from opening on focus.
   */
  preventOpenOnFocus: _propTypes.default.bool,
  /**
   * Prop to make date picker as read only.
   */
  readOnly: _propTypes.default.bool,
  /**
   *Prop to make the date picker as a required field.
   */
  required: _propTypes.default.bool,
  /**
   * Prop to allow scrollable year dropdown.
   */
  scrollableYearDropdown: _propTypes.default.bool,
  /**
   * Selected Date Value.
   */
  selected: _propTypes.default.object,
  /**
   * Prop to select end date on a date picker.
   */
  selectsEnd: _propTypes.default.bool,
  /**
   * Prop to select start date on a date picker.
   */
  selectsStart: _propTypes.default.bool,
  /**
   * Prop to show month drop down in calendar.
   */
  showMonthDropdown: _propTypes.default.bool,
  /**
   * Prop to show week numbers .
   */
  showWeekNumbers: _propTypes.default.bool,
  /**
   * Prop to show a dropdown to select year in date picker calendar .
   */
  showYearDropdown: _propTypes.default.bool,
  /**
   * Prop to show a month navigation in date picker .
   */
  forceShowMonthNavigation: _propTypes.default.bool,
  /**
   * Minimum date for a given range .
   */
  startDate: _propTypes.default.object,
  /**
   * Prop to open calendar dropdown .
   */
  startOpen: _propTypes.default.bool,
  /**
   * Prop to specify tabbing order of elements .
   */
  tabIndex: _propTypes.default.number,
  /**
   * Prop to specify title attribute for date picker .
   */
  title: _propTypes.default.string,
  /**
   * Name of button to select current date .
   */
  todayButton: _propTypes.default.string,
  /**
   * Prop to show short names for weekdays on calendar .
   */
  useWeekdaysShort: _propTypes.default.bool,
  /**
   * Value of the date picked by user .
   */
  value: _propTypes.default.string,
  /**
   * Label value for weeks on date picker.
   */
  weekLabel: _propTypes.default.string,
  /**
   * Prop to show a separate portal version for date picker.
   */
  withPortal: _propTypes.default.bool,
  /**
   * Year Values to show on dropdown +/- the given value.
   */
  yearDropdownItemNumber: _propTypes.default.number,
  /**
   * Prop to close calendar dropdown after date is selected.
   */
  shouldCloseOnSelect: _propTypes.default.bool
});
var _default = (0, _reactIntl.injectIntl)(DatePicker);
exports.default = _default;