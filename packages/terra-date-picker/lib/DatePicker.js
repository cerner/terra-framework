"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _terraBreakpoints = require("terra-breakpoints");
var _terraResponsiveElement = _interopRequireDefault(require("terra-responsive-element"));
var _reactIntl = require("react-intl");
var _reactDatepicker = _interopRequireDefault(require("./react-datepicker"));
var _DateInput = _interopRequireDefault(require("./DateInput"));
var _DateUtil = _interopRequireDefault(require("./DateUtil"));
var _DatePickerModule = _interopRequireDefault(require("./DatePicker.module.scss"));
var _excluded = ["ariaLabel", "disableButtonFocusOnClose", "excludeDates", "filterDate", "includeDates", "inputAttributes", "initialTimeZone", "intl", "isIncomplete", "isInline", "isInvalid", "maxDate", "minDate", "name", "onBlur", "onChange", "onChangeRaw", "onClickOutside", "onFocus", "onRequestClose", "onSelect", "required", "selectedDate", "useExternalFormatMask", "value"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_DatePickerModule.default);
var propTypes = {
  /**
   * String that labels the current element. 'aria-label' must be present for accessibility.
   */
  ariaLabel: _propTypes.default.string,
  /**
   * @private
   * Whether or not to disable focus on the calendar button when the calendar picker dismisses.
   */
  disableButtonFocusOnClose: _propTypes.default.bool,
  /**
   * Whether the date input should be disabled.
   */
  disabled: _propTypes.default.bool,
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
   * @private
   * bool to bypass isDefaultDateAcceptable logic
   */
  isDefaultDateAcceptable: _propTypes.default.bool,
  /**
   * @private
   * Timezone value to indicate in which timezone the date-time component is rendered.
   * The value provided should be a valid [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) string, else will default to browser/local timezone.
   */
  initialTimeZone: _propTypes.default.string,
  /**
   * Custom input attributes to apply to the date input. Use the name prop to set the name for the input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  inputAttributes: _propTypes.default.object,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func,
    locale: _propTypes.default.string
  }).isRequired,
  /**
   * Whether the input displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
   */
  isIncomplete: _propTypes.default.bool,
  /**
   * @private
   * Prop to show inline version of date picker component.
   */
  isInline: _propTypes.default.bool,
  /**
   * Whether the input displays as Invalid. Use when value does not meet validation pattern.
   */
  isInvalid: _propTypes.default.bool,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected. The value must be in the `YYYY-MM-DD` format. Must be on or before `12/31/2100`.
   */
  maxDate: _propTypes.default.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected. The value must be in the `YYYY-MM-DD` format. Must be on or after `01/01/1900`
   */
  minDate: _propTypes.default.string,
  /**
   * Name of the date input. The name should be unique.
   */
  name: _propTypes.default.string.isRequired,
  /**
   * A callback function triggered when the date picker component loses focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.
   * The first parameter is the event. The second parameter is the metadata to describe the current state of the input value at the time when the onBlur callback is triggered.
   */
  onBlur: _propTypes.default.func,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChange callback is triggered.
   */
  onChange: _propTypes.default.func,
  /**
   * A callback function to execute when a change is made in the date input.
   * The first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChangeRaw callback is triggered.
   */
  onChangeRaw: _propTypes.default.func,
  /**
   * **Deprecated**, A callback function to execute when clicking outside of the picker to dismiss it. Resolves to `onRequestClose`.
   */
  onClickOutside: _propTypes.default.func,
  /**
   * A callback function triggered when the date picker component receives focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.
   */
  onFocus: _propTypes.default.func,
  /**
   * A callback function to execute when picker is dismissed. onRequestClose(event)
   */
  onRequestClose: _propTypes.default.func,
  /**
   * A callback function to execute when a date is selected from within the picker.
   */
  onSelect: _propTypes.default.func,
  /**
   * Whether or not the date is required.
   */
  required: _propTypes.default.bool,
  /**
   * An ISO 8601 string representation of the default value to show in the date input. The value must be in the `YYYY-MM-DD` format.
   * This is analogous to default value in a form input field.
   */
  selectedDate: _propTypes.default.string,
  /**
   * @private
   * NOTICE: Internal prop to be used only by Terra framework. This component provides a built-in format mask that is
   * required to be displayed to users for proper accessibility and must not be removed. 'DatePickerField' is permitted to set
   * this prop because it provides the same format mask in its 'help' prop.
  */
  useExternalFormatMask: _propTypes.default.bool,
  /**
   * The date value. This prop should only be used for a controlled date picker.
   * When this prop is set a handler is needed for both the `onChange` and `onChangeRaw` props to manage the date value.
   * If both `selectedDate` and this prop are set, then `selectedDate` will have no effect.
   * The value must be in the `YYYY-MM-DD` format or the all-numeric date format based on the locale.
   */
  value: _propTypes.default.string
};
var defaultProps = {
  disableButtonFocusOnClose: false,
  disabled: false,
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  initialTimeZone: undefined,
  inputAttributes: undefined,
  isIncomplete: false,
  isInline: false,
  isInvalid: false,
  maxDate: '2100-12-31',
  minDate: '1900-01-01',
  onBlur: undefined,
  onChange: undefined,
  onChangeRaw: undefined,
  onClickOutside: undefined,
  onFocus: undefined,
  onSelect: undefined,
  useExternalFormatMask: false,
  required: false,
  selectedDate: undefined
};
var DatePicker = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DatePicker, _React$Component);
  var _super = _createSuper(DatePicker);
  function DatePicker(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DatePicker);
    _this = _super.call(this, props);
    var activeBreakpointOnMount = (0, _terraBreakpoints.activeBreakpointForSize)(window.innerWidth);
    _this.state = {
      selectedDate: _DateUtil.default.defaultValue(props),
      showPortalPicker: !_this.props.isInline && (activeBreakpointOnMount === 'tiny' || activeBreakpointOnMount === 'small'),
      prevPropsSelectedDate: props.value || props.selectedDate
    };
    _this.datePickerContainer = /*#__PURE__*/_react.default.createRef();
    _this.isDefaultDateAcceptable = props.isDefaultDateAcceptable;
    _this.containerHasFocus = false;
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleBreakpointChange = _this.handleBreakpointChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChangeRaw = _this.handleChangeRaw.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFilterDate = _this.handleFilterDate.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnSelect = _this.handleOnSelect.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnClickOutside = _this.handleOnClickOutside.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnInputFocus = _this.handleOnInputFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnCalendarButtonClick = _this.handleOnCalendarButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.dateValue = _DateUtil.default.formatMomentDate(this.state.selectedDate, _DateUtil.default.getFormatByLocale(this.props.intl.locale)) || '';
      this.isDefaultDateAcceptable = this.props.isDefaultDateAcceptable ? this.props.isDefaultDateAcceptable : this.validateDefaultDate();
    }
  }, {
    key: "handleBreakpointChange",
    value: function handleBreakpointChange(activeBreakpoint) {
      var showPortalPicker = !this.props.isInline && (activeBreakpoint === 'tiny' || activeBreakpoint === 'small');
      if (this.state.showPortalPicker !== showPortalPicker) {
        this.setState({
          showPortalPicker: showPortalPicker
        });
      }
    }
  }, {
    key: "handleFilterDate",
    value: function handleFilterDate(date) {
      if (this.props.filterDate) {
        return this.props.filterDate(date !== null && date !== void 0 && date.isValid() ? date.format(_DateUtil.default.ISO_EXTENDED_DATE_FORMAT) : '');
      }
      return true;
    }
  }, {
    key: "handleOnSelect",
    value: function handleOnSelect(selectedDate, event) {
      var _this2 = this;
      // onSelect should only be invoked when selecting a date from the picker.
      // react-datepicker has an issue where onSelect is invoked both when selecting a date from the picker
      // as well as manually entering a valid date or clearing the date,
      // Until a fix is made, we need to return if the event type is 'change' or 'keydown' indicating that onSelect was
      // invoked from a manual change. See https://github.com/Hacker0x01/react-datepicker/issues/990
      if (event.type === 'change' || event.type === 'keydown' || !selectedDate || !selectedDate.isValid()) {
        return;
      }
      this.dateValue = _DateUtil.default.formatISODate(selectedDate, _DateUtil.default.getFormatByLocale(this.props.intl.locale));
      this.isDefaultDateAcceptable = true;
      if (this.props.onSelect) {
        this.props.onSelect(event, selectedDate.format(_DateUtil.default.ISO_EXTENDED_DATE_FORMAT));
      }
      if (!this.props.disableButtonFocusOnClose) {
        // Allows time for focus-trap to release focus on the picker before returning focus to the calendar button.
        setTimeout(function () {
          /*
           * Make sure the reference to calendarButton still exists before calling focus because it is possible that it is now
           * nullified after the 100 ms timeout due to a force remount of this component with a new `key` prop value.
           * Reference https://github.com/cerner/terra-framework/issues/1086
           */
          if (_this2.calendarButton) {
            _this2.calendarButton.focus();
          }
        }, 100);
      }
    }
  }, {
    key: "handleOnClickOutside",
    value: function handleOnClickOutside(event) {
      if (this.props.onClickOutside) {
        this.props.onClickOutside(event);
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      // Modern browsers support event.relatedTarget but event.relatedTarget returns null in IE 10 / IE 11.
      // IE 11 sets document.activeElement to the next focused element before the blur event is called.
      var activeTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;

      // Handle blur only if focus has moved out of the entire date picker component.
      if (!this.datePickerContainer.current.contains(activeTarget)) {
        if (this.props.onBlur) {
          var metadata = this.getMetadata();
          this.props.onBlur(event, metadata);
        }
        this.containerHasFocus = false;
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(date, event, value) {
      if (event.type === 'change') {
        this.dateValue = value;
      }
      this.setState({
        selectedDate: date
      });
      if (this.props.onChange) {
        var metadata = this.getMetadata();
        this.props.onChange(event, date !== null && date !== void 0 && date.isValid() ? date.format(_DateUtil.default.ISO_EXTENDED_DATE_FORMAT) : '', metadata);
      }
    }
  }, {
    key: "handleChangeRaw",
    value: function handleChangeRaw(event, value) {
      this.dateValue = value;
      if (!this.getMetadata().isValidValue) {
        this.setState({
          selectedDate: null
        });
      }
      if (this.props.onChangeRaw) {
        var metadata = this.getMetadata();
        this.props.onChangeRaw(event, value, metadata);
      }
    }
  }, {
    key: "handleOnInputFocus",
    value: function handleOnInputFocus(event) {
      this.handleFocus(event);
      if (!this.isDefaultDateAcceptable) {
        this.dateValue = '';
        this.handleChange(null, event);
        this.isDefaultDateAcceptable = true;
      }
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      // Handle focus only if focus is gained from outside of the entire date picker component.
      // For IE 10/11 we cannot rely on event.relatedTarget since it is always null. Need to also check if containerHasFocus is false to
      // determine if the date-picker component did not have focus but will now gain focus.
      if (this.props.onFocus && !this.containerHasFocus && !this.datePickerContainer.current.contains(event.relatedTarget)) {
        this.props.onFocus(event);
        this.containerHasFocus = true;
      }
    }
  }, {
    key: "handleOnCalendarButtonClick",
    value: function handleOnCalendarButtonClick(event, onClick) {
      if (this.onCalendarButtonClick) {
        this.onCalendarButtonClick(event);
      }
      if (!this.isDefaultDateAcceptable && !this.validateDefaultDate()) {
        this.dateValue = '';
        this.handleChange(null, event);
      } else if (onClick) {
        // This onClick function is the onInputClick function coming from https://github.com/Hacker0x01/react-datepicker/blob/master/src/index.jsx#L326.
        // It does not take any parameter so there is not a need to pass in the event.
        onClick();
        this.isDefaultDateAcceptable = true;
      }
    }
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      var format = _DateUtil.default.getFormatByLocale(this.props.intl.locale);
      var isCompleteDate = _DateUtil.default.isValidDate(this.dateValue, format);
      var iSOString = isCompleteDate ? _DateUtil.default.convertToISO8601(this.dateValue, format) : '';
      var isValidDate = false;
      if (this.dateValue === '' || isCompleteDate && this.isDateWithinRange(_DateUtil.default.createSafeDate(iSOString, this.props.initialTimeZone))) {
        isValidDate = true;
      }
      var metadata = {
        iSO: iSOString,
        inputValue: this.dateValue,
        isCompleteValue: isCompleteDate,
        isValidValue: isValidDate
      };
      return metadata;
    }
  }, {
    key: "validateDefaultDate",
    value: function validateDefaultDate() {
      return this.isDateWithinRange(this.state.selectedDate);
    }
  }, {
    key: "isDateWithinRange",
    value: function isDateWithinRange(date) {
      var isAcceptable = true;
      if (_DateUtil.default.isDateOutOfRange(date, _DateUtil.default.createSafeDate(_DateUtil.default.getMinDate(this.props.minDate), this.props.initialTimeZone), _DateUtil.default.createSafeDate(_DateUtil.default.getMaxDate(this.props.maxDate), this.props.initialTimeZone))) {
        isAcceptable = false;
      }
      if (_DateUtil.default.isDateExcluded(date, this.props.excludeDates)) {
        isAcceptable = false;
      }
      return isAcceptable;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        ariaLabel = _this$props.ariaLabel,
        disableButtonFocusOnClose = _this$props.disableButtonFocusOnClose,
        excludeDates = _this$props.excludeDates,
        filterDate = _this$props.filterDate,
        includeDates = _this$props.includeDates,
        inputAttributes = _this$props.inputAttributes,
        initialTimeZone = _this$props.initialTimeZone,
        intl = _this$props.intl,
        isIncomplete = _this$props.isIncomplete,
        isInline = _this$props.isInline,
        isInvalid = _this$props.isInvalid,
        maxDate = _this$props.maxDate,
        minDate = _this$props.minDate,
        name = _this$props.name,
        onBlur = _this$props.onBlur,
        onChange = _this$props.onChange,
        onChangeRaw = _this$props.onChangeRaw,
        onClickOutside = _this$props.onClickOutside,
        onFocus = _this$props.onFocus,
        onRequestClose = _this$props.onRequestClose,
        onSelect = _this$props.onSelect,
        required = _this$props.required,
        selectedDate = _this$props.selectedDate,
        useExternalFormatMask = _this$props.useExternalFormatMask,
        value = _this$props.value,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      this.onCalendarButtonClick = customProps.onCalendarButtonClick;
      delete customProps.onCalendarButtonClick;
      var dateFormat = _DateUtil.default.getFormatByLocale(intl.locale);
      var formattedValue = _DateUtil.default.strictFormatISODate(value, dateFormat);
      if (!formattedValue) {
        formattedValue = value;
      }
      var selectedDateInPicker;

      // If using this as a controlled component.
      if (value !== undefined) {
        // If value is empty, let selectedDateInPicker be undefined as in clearing the value.
        if (value !== '') {
          selectedDateInPicker = _DateUtil.default.createSafeDate(_DateUtil.default.convertToISO8601(value, dateFormat), initialTimeZone);

          // If value is not a valid date, keep the previous selected date in the picker.
          if (selectedDateInPicker === undefined) {
            selectedDateInPicker = this.state.selectedDate;
          }
        }
      } else {
        selectedDateInPicker = this.state.selectedDate;
      }
      if (this.isDefaultDateAcceptable && !this.isDateWithinRange(selectedDateInPicker)) {
        selectedDateInPicker = undefined;
      }
      var theme = this.context;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('date-picker', theme.className),
        ref: this.datePickerContainer
      }, /*#__PURE__*/_react.default.createElement(_terraResponsiveElement.default, {
        onChange: this.handleBreakpointChange,
        responsiveTo: "window"
      }, /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, (0, _extends2.default)({}, customProps, {
        withPortal: this.state.showPortalPicker,
        inline: isInline,
        selected: selectedDateInPicker,
        value: formattedValue,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onChangeRaw: this.handleChangeRaw,
        onClickOutside: this.handleOnClickOutside,
        onRequestClose: onRequestClose,
        onFocus: this.handleOnInputFocus,
        onSelect: this.handleOnSelect,
        required: required,
        customInput: /*#__PURE__*/_react.default.createElement(_DateInput.default, {
          onCalendarButtonClick: this.handleOnCalendarButtonClick,
          inputAttributes: inputAttributes,
          required: required,
          isIncomplete: isIncomplete,
          isInvalid: isInvalid,
          shouldShowPicker: !this.isDefaultDateAcceptable && this.state.selectedDate === null,
          onButtonFocus: this.handleFocus,
          buttonRefCallback: function buttonRefCallback(buttonRef) {
            _this3.calendarButton = buttonRef;
          },
          ariaLabel: ariaLabel,
          useExternalFormatMask: useExternalFormatMask,
          initialTimeZone: initialTimeZone
        }),
        customInputRef: "firstInputRefCallback",
        excludeDates: _DateUtil.default.filterInvalidDates(excludeDates),
        filterDate: this.handleFilterDate,
        includeDates: _DateUtil.default.filterInvalidDates(includeDates),
        maxDate: _DateUtil.default.createSafeDate(_DateUtil.default.getMaxDate(maxDate), initialTimeZone),
        minDate: _DateUtil.default.createSafeDate(_DateUtil.default.getMinDate(minDate), initialTimeZone),
        todayButton: intl.formatMessage({
          id: 'Terra.datePicker.today'
        }),
        dateFormatCalendar: " ",
        dateFormat: dateFormat,
        fixedHeight: true,
        locale: intl.locale,
        dropdownMode: "select",
        showMonthDropdown: true,
        showYearDropdown: true,
        preventOpenOnFocus: true,
        name: name,
        allowSameDay: true,
        initialTimeZone: initialTimeZone
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var initialTimeZone = nextProps.initialTimeZone,
        selectedDate = nextProps.selectedDate,
        value = nextProps.value;
      var nextDateValue = selectedDate;

      // Use the value for a controlled component if one is provided.
      if (value !== undefined && value !== null) {
        nextDateValue = value;
      }
      if (nextDateValue !== prevState.prevPropsSelectedDate) {
        var nextSelectedDate = _DateUtil.default.createSafeDate(nextDateValue, initialTimeZone);
        return {
          selectedDate: nextSelectedDate,
          prevPropsSelectedDate: nextDateValue
        };
      }
      return null;
    }
  }]);
  return DatePicker;
}(_react.default.Component);
DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;
DatePicker.contextType = _terraThemeContext.default;
var _default = (0, _reactIntl.injectIntl)(DatePicker);
exports.default = _default;