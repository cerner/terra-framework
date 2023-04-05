"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _v = _interopRequireDefault(require("uuid/v4"));
var _reactIntl = require("react-intl");
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _AccessibleValue = _interopRequireDefault(require("terra-time-input/lib/_AccessibleValue"));
var _AccessibleInput = _interopRequireDefault(require("terra-time-input/lib/_AccessibleInput"));
var _DateInputUtil = _interopRequireDefault(require("./DateInputUtil"));
var _DateInputModule = _interopRequireDefault(require("./DateInput.module.scss"));
var _excluded = ["a11yLabel", "disabled", "displayFormat", "dayAttributes", "monthAttributes", "yearAttributes", "intl", "isA11yControlled", "isInvalid", "isIncomplete", "onBlur", "onChange", "onFocus", "refCallback", "required", "name", "useExternalFormatMask", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_DateInputModule.default);
var propTypes = {
  /**
   * An identifier used by assistive technologies like screen readers to briefly describe this time input to users.
   * The label is not rendered visually.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)  **BEST PRACTICE FOR ACCESSIBILITY**: you _SHOULD_ set this to match whatever visible label you give in your UI.
   * Currently this is optional for passivity reasons, but it will become mandatory in a future major version.
   */
  a11yLabel: _propTypes.default.string,
  /**
   * Name of the date input. This name should be unique.
   */
  name: _propTypes.default.string.isRequired,
  /**
   * Custom input attributes to apply to the day input
   */
  dayAttributes: _propTypes.default.object,
  /**
   * Whether the date input should be disabled.
   */
  disabled: _propTypes.default.bool,
  /**
   * Can be used to set the display format. One of `month-day-year` or `day-month-year`.
   * Overrides default locale display format.
   */
  displayFormat: _propTypes.default.oneOf(['month-day-year', 'day-month-year']),
  /**
   * @private
   * Intl object injected from injectIntl
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func,
    locale: _propTypes.default.string
  }),
  /**
   * @private
   * Set to True if a higher order component like a field is providing the needed a11y features.
   */
  isA11yControlled: _propTypes.default.bool,
  /**
  * Whether the input displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
  */
  isIncomplete: _propTypes.default.bool,
  /**
  * Whether the input displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalid: _propTypes.default.bool,
  /**
   * Custom input attributes to apply to the month select
   */
  monthAttributes: _propTypes.default.object,
  /**
   * A callback function to execute when the entire date input component loses focus.
   * This event does not get triggered when the focus is moved from one input to another within the date input component because the focus is still within the main date input component.
   */
  onBlur: _propTypes.default.func,
  /**
   * A callback function to execute when a date is entered.
   * The first parameter is the event. The second parameter is the changed date value.
   */
  onChange: _propTypes.default.func,
  /**
   * A callback function triggered when the day, month, or year input receives focus.
   */
  onFocus: _propTypes.default.func,
  /**
   * Callback ref to access date input containing DOM element.
   */
  refCallback: _propTypes.default.func,
  /**
   * Whether is the date input is required
   */
  required: _propTypes.default.bool,
  /**
   * @private
   * NOTICE: Internal prop to be used only by Terra framework. This component provides a built-in format mask that is required
   * to be displayed to users for proper accessibility and must not be removed. 'DateInputField' is permitted to set this prop
   * because it provides the same format mask in its 'help' prop.
   */
  useExternalFormatMask: _propTypes.default.bool,
  /**
   * An date string representation of the date value used for the component. This should be in ISO 8601 format: YYYY-MM-DD.
   */
  value: _propTypes.default.string,
  /**
   * Custom input attributes to apply to the year input
   */
  yearAttributes: _propTypes.default.object
};
var defaultProps = {
  disabled: false,
  monthAttributes: {},
  dayAttributes: {},
  yearAttributes: {},
  onBlur: null,
  onChange: null,
  onFocus: undefined,
  refCallback: undefined,
  value: undefined,
  useExternalFormatMask: false,
  isA11yControlled: false
};
var DateInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DateInput, _React$Component);
  var _super = _createSuper(DateInput);
  function DateInput(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DateInput);
    _this = _super.call(this, props);
    /**
     * Checks Paste event in the day and year input, and processes it based on the value of the keycode
     * Prevents non-numeric characters from being entered in Safari browser.
     * @param {Object} event Event object generated from the event delegation.
     */
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handlePaste", function (event) {
      var input = (event.clipboardData || window.clipboardData).getData('text');
      if (!_DateInputUtil.default.validNumericInput(input)) event.preventDefault();
    });
    /**
     * Takes a key press from the day and year input, and processes it based on the value of the keycode
     * Prevents non-numeric characters from being entered in Safari browser.
     * @param {Object} event Event object generated from the event delegation.
     */
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyPress", function (event) {
      var input = event.key;
      if (!_DateInputUtil.default.validNumericInput(input) && !event.metaKey) event.preventDefault();
    });
    var value = _this.props.value;
    if (value && !_DateInputUtil.default.acceptedDateValue(value)) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn("An invalid date value, ".concat(value, ", has been passed to the terra-date-input. ") + 'This value has been ignored and will not be rendered. ' + 'Date values must be in YYYY-MM-DD format.');
      }
      value = undefined;
    }
    _this.uuid = (0, _v.default)();
    _this.dateInputContainer = /*#__PURE__*/_react.default.createRef();
    _this.monthRef = /*#__PURE__*/_react.default.createRef();
    _this.handleMonthChange = _this.handleMonthChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleDayChange = _this.handleDayChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleYearChange = _this.handleYearChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleInputKeyDown = _this.handleInputKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMonthKeyDown = _this.handleMonthKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleDayKeyDown = _this.handleDayKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleYearKeyDown = _this.handleYearKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMonthFocus = _this.handleMonthFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleDayFocus = _this.handleDayFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleYearFocus = _this.handleYearFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.focusMonth = _this.focusMonth.bind((0, _assertThisInitialized2.default)(_this));
    _this.focusDay = _this.focusDay.bind((0, _assertThisInitialized2.default)(_this));
    _this.focusYear = _this.focusYear.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMonthBlur = _this.handleMonthBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleDayBlur = _this.handleDayBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleYearBlur = _this.handleYearBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.formattedRender = _this.formattedRender.bind((0, _assertThisInitialized2.default)(_this));
    _this.monthRender = _this.monthRender.bind((0, _assertThisInitialized2.default)(_this));
    _this.dayRender = _this.dayRender.bind((0, _assertThisInitialized2.default)(_this));
    _this.yearRender = _this.yearRender.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMonthClick = _this.handleMonthClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handlePaste = _this.handlePaste.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      month: _DateInputUtil.default.splitMonth(value),
      day: _DateInputUtil.default.splitDay(value),
      year: _DateInputUtil.default.splitYear(value),
      isFocused: false,
      monthIsFocused: false,
      dayIsFocused: false,
      yearIsFocused: false,
      isPlaceholderColored: true
    };
    return _this;
  }
  (0, _createClass2.default)(DateInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.value === prevProps.value) {
        return;
      }

      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        month: _DateInputUtil.default.splitMonth(this.props.value),
        day: _DateInputUtil.default.splitDay(this.props.value),
        year: _DateInputUtil.default.splitYear(this.props.value)
      });
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      if (this.props.onFocus && !this.dateInputContainer.current.contains(event.relatedTarget)) {
        this.props.onFocus(event);
      }
      this.setState({
        isFocused: true
      });
    }
  }, {
    key: "handleMonthFocus",
    value: function handleMonthFocus(event) {
      this.handleFocus(event);
      this.setState({
        monthIsFocused: true
      });
    }
  }, {
    key: "handleDayFocus",
    value: function handleDayFocus(event) {
      this.handleFocus(event);
      this.setState({
        dayIsFocused: true
      });
    }
  }, {
    key: "handleYearFocus",
    value: function handleYearFocus(event) {
      this.handleFocus(event);
      this.setState({
        yearIsFocused: true
      });
    }
  }, {
    key: "handleMonthBlur",
    value: function handleMonthBlur(event) {
      this.handleBlur(event, _DateInputUtil.default.inputType.MONTH);
      if (this.state.month === '') {
        this.setState({
          isPlaceholderColored: true
        });
      }
      this.setState({
        monthIsFocused: false
      });
    }
  }, {
    key: "handleDayBlur",
    value: function handleDayBlur(event) {
      this.handleBlur(event, _DateInputUtil.default.inputType.DAY);
      this.setState({
        dayIsFocused: false
      });
    }
  }, {
    key: "handleYearBlur",
    value: function handleYearBlur(event) {
      this.handleBlur(event, _DateInputUtil.default.inputType.YEAR);
      this.setState({
        yearIsFocused: false
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event, type) {
      this.setState({
        isFocused: false
      });
      if (type === _DateInputUtil.default.inputType.DAY) {
        var stateValue = event.target.value;

        // Prepend a 0 to the value when losing focus and the value is single digit.
        if (stateValue.length === 1) {
          stateValue = '0'.concat(stateValue);
          this.handleValueChange(event, type, stateValue);
        }
      }
      if (this.props.onBlur) {
        // Modern browsers support event.relatedTarget but event.relatedTarget returns null in IE 10 / IE 11.
        // IE 11 sets document.activeElement to the next focused element before the blur event is called.
        var activeTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;

        // Handle blur only if focus has moved out of the entire date input component.
        if (!this.dateInputContainer.current.contains(activeTarget)) {
          this.props.onBlur(event);
        }
      }
    }

    /**
     * Takes a key input and processes it based on if it is a hot key otherwise passes it to the appropriate input type key down handler.
     * @param {Object} event Event object generated from the event delegation.
     * @param {DateInputUtil.inputType} inputType Type definition of the input that received the keydown event.
     */
  }, {
    key: "handleInputKeyDown",
    value: function handleInputKeyDown(event, inputType) {
      if (event.key === 't' || event.key === 'T') {
        this.setHotKeyDate(event, 0);
        return;
      }
      if (event.key === '-' || event.key === '_') {
        this.setHotKeyDate(event, -1);
        return;
      }
      if (event.key === '=' || event.key === '+') {
        this.setHotKeyDate(event, 1);
        return;
      }
      if (inputType === _DateInputUtil.default.inputType.DAY) {
        this.handleDayKeyDown(event);
      } else {
        this.handleYearKeyDown(event);
      }
    }

    /**
     * Takes a key input from the month select, and processes it based on the value of the keycode.
     * @param {Object} event Event object generated from the event delegation.
     */
  }, {
    key: "handleMonthKeyDown",
    value: function handleMonthKeyDown(event) {
      if (event.keyCode === KeyCode.KEY_BACK_SPACE || event.keyCode === KeyCode.KEY_DELETE) {
        this.handleValueChange(event, _DateInputUtil.default.inputType.MONTH, '');
        if (this.computedDisplayFormat() === 'day-month-year' && event.target.value === '') {
          this.focusDay(event);
        }
      }
      if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_UP || event.keyCode === KeyCode.KEY_DOWN) {
        this.setState({
          isPlaceholderColored: false
        });
      }
    }
  }, {
    key: "handleDayKeyDown",
    value:
    /**
     * Takes a key input from the day input, and processes it based on the value of the keycode.
     * @param {Object} event Event object generated from the event delegation.
     */
    function handleDayKeyDown(event) {
      var stateValue = this.state.day || '';
      var previousStateValue = stateValue;
      if (event.keyCode === KeyCode.KEY_UP) {
        event.preventDefault();
        stateValue = _DateInputUtil.default.incrementDay(stateValue);
      }
      if (event.keyCode === KeyCode.KEY_DOWN) {
        event.preventDefault();
        stateValue = _DateInputUtil.default.decrementDay(stateValue);
      }
      if (previousStateValue !== stateValue) {
        this.handleValueChange(event, _DateInputUtil.default.inputType.DAY, stateValue);
      }
      if (event.keyCode === KeyCode.KEY_BACK_SPACE || event.keyCode === KeyCode.KEY_DELETE) {
        if (this.computedDisplayFormat() === 'month-day-year' && event.target.value === '') {
          this.focusMonth(event);
        }
      }
    }

    /**
     * Takes a key input from the year input, and processes it based on the value of the keycode.
     * @param {Object} event Event object generated from the event delegation.
     */
  }, {
    key: "handleYearKeyDown",
    value: function handleYearKeyDown(event) {
      var stateValue = this.state.year || '';
      var previousStateValue = stateValue;
      var displayFormat = this.computedDisplayFormat();
      if (event.keyCode === KeyCode.KEY_UP) {
        event.preventDefault();
        stateValue = _DateInputUtil.default.incrementYear(stateValue);
      }
      if (event.keyCode === KeyCode.KEY_DOWN) {
        event.preventDefault();
        stateValue = _DateInputUtil.default.decrementYear(stateValue);
      }
      if (previousStateValue !== stateValue) {
        this.handleValueChange(event, _DateInputUtil.default.inputType.YEAR, stateValue);
      }
      if (event.keyCode === KeyCode.KEY_BACK_SPACE || event.keyCode === KeyCode.KEY_DELETE) {
        if (displayFormat === 'month-day-year' && event.target.value === '') {
          this.focusDay(event);
        }
        if (displayFormat === 'day-month-year' && event.target.value === '') {
          this.focusMonth(event);
        }
      }
    }
  }, {
    key: "handleMonthChange",
    value: function handleMonthChange(event) {
      if (!_DateInputUtil.default.validNumericInput(event.target.value)) {
        return;
      }
      var inputValue = event.target.value;
      var stateValue = this.state.month;
      var maxValue = 12;

      // Ignore the entry if the value did not change or it is invalid.
      if (inputValue === stateValue || Number(inputValue) > maxValue) {
        return;
      }
      this.handleValueChange(event, _DateInputUtil.default.inputType.MONTH, inputValue);
    }
  }, {
    key: "handleDayChange",
    value: function handleDayChange(event) {
      if (!_DateInputUtil.default.validNumericInput(event.target.value)) {
        return;
      }
      var inputValue = event.target.value;
      var stateValue = this.state.day;
      var maxValue = 31;

      // Ignore the entry if the value did not change or it is invalid.
      // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have
      // to check the length of inputValue to make sure that it is less then 2.
      if (inputValue === stateValue || inputValue.length > 2 || Number(inputValue) > maxValue || inputValue.length === 2 && !(inputValue > 0)) {
        return;
      }
      this.handleValueChange(event, _DateInputUtil.default.inputType.DAY, inputValue);
    }
  }, {
    key: "handleYearChange",
    value: function handleYearChange(event) {
      if (!_DateInputUtil.default.validNumericInput(event.target.value)) {
        return;
      }
      var inputValue = event.target.value;

      // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have
      // to check the length of inputValue to make sure that it is less then 4.
      if (inputValue.length > 5 || Number(inputValue) > _DateInputUtil.default.MaxYearValue || inputValue.length === 4 && Number(inputValue) < _DateInputUtil.default.MinYearValue) {
        return;
      }
      this.handleValueChange(event, _DateInputUtil.default.inputType.YEAR, inputValue);
    }

    /**
     * On Click handler for month select
     */
  }, {
    key: "handleMonthClick",
    value: function handleMonthClick() {
      this.setState({
        isPlaceholderColored: false
      });
    }
  }, {
    key: "handleValueChange",
    value: function handleValueChange(event, type, value) {
      if (type === _DateInputUtil.default.inputType.MONTH) {
        this.setState({
          month: value
        });
      } else if (type === _DateInputUtil.default.inputType.DAY) {
        this.setState({
          day: value
        });
      } else if (type === _DateInputUtil.default.inputType.YEAR) {
        this.setState({
          year: value
        });
      }
      if (this.props.onChange) {
        var month = type === _DateInputUtil.default.inputType.MONTH ? value : this.state.month;
        var day = type === _DateInputUtil.default.inputType.DAY ? value : this.state.day;
        var year = type === _DateInputUtil.default.inputType.YEAR ? value : this.state.year;
        if (month === '' && day === '' && year === '') {
          this.handleOnChange(event, '');
        } else {
          var dateString = "".concat(year, "-").concat(month, "-").concat(day);
          this.handleOnChange(event, dateString);
        }
      }
    }

    /**
     * Calls onChange callback prop if it exists
     * @param {Object} event Event object generated from the event delegation.
     * @param {String} dateString Returns the dateString from the component
     */
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event, dateString) {
      if (this.props.onChange) {
        this.props.onChange(event, dateString);
      }
    }

    /**
     * Sets state to new value dependent on existing date
     * @param {Object} event Event object generated from the event delegation.
     * @param {Number} addDays Adds days to current date or today's date, if 0 sets state to today.
     */
  }, {
    key: "setHotKeyDate",
    value: function setHotKeyDate(event, addDays) {
      var _this$state = this.state,
        year = _this$state.year,
        month = _this$state.month,
        day = _this$state.day;
      year = Number(year);
      month = Number(month) - 1;
      day = Number(day);
      var dateFromInput = new Date(year, month, day);
      var validYear = year < _DateInputUtil.default.MaxYearValue && year > _DateInputUtil.default.MinYearValue && dateFromInput.getFullYear() === year;
      var validMonth = dateFromInput.getMonth() === month;
      var validDay = dateFromInput.getDate() === day;
      var dateObj;
      if (addDays === 0 || !validYear || !validDay || !validMonth) {
        dateObj = new Date();
      } else {
        dateObj = dateFromInput;
      }
      dateObj.setDate(dateObj.getDate() + addDays);
      var hotkeyDate = dateObj.toISOString();
      var iSODate = hotkeyDate.split('T')[0];
      var dateParts = iSODate.split('-');
      this.setState({
        year: dateParts[0],
        month: dateParts[1],
        day: dateParts[2]
      });
      if (this.props.onChange) {
        this.handleOnChange(event, iSODate);
      }
    }

    // Returns the display format, considering the locale and the prop.
  }, {
    key: "computedDisplayFormat",
    value: function computedDisplayFormat() {
      return _DateInputUtil.default.computedDisplayFormat(this.props.displayFormat, this.props.intl.locale);
    }

    /**
     * Shifts programmatic focus to day input
     * @param {Object} event Event object generated from the event delegation.
     */
  }, {
    key: "focusDay",
    value: function focusDay(event) {
      this.dayRef.focus();
      event.preventDefault();
    }

    /**
     * Shifts programmatic focus to year input
     * @param {Object} event Event object generated from the event delegation.
     */
  }, {
    key: "focusYear",
    value: function focusYear(event) {
      this.yearRef.focus();
      event.preventDefault();
    }

    /**
     * Shifts programmatic focus to month select
     * @param {Object} event Event object generated from the event delegation.
     */
  }, {
    key: "focusMonth",
    value: function focusMonth(event) {
      this.monthRef.current.focus();
      event.preventDefault();
    }

    /**
     * Renders the month select.
     *
     * If the display format begins with the month, then a special label will be set for accessibility.
     * The special label makes it easy for users to see which control on the page is the start of this particular
     * DateInput - even if there are other DateInputs in the same view.
     */
  }, {
    key: "monthRender",
    value: function monthRender() {
      var _this$props = this.props,
        intl = _this$props.intl,
        a11yLabel = _this$props.a11yLabel;
      var label;
      if (this.computedDisplayFormat() === 'month-day-year') {
        if (a11yLabel) {
          label = intl.formatMessage({
            id: 'Terra.date.input.monthSelectLabelWithName'
          }, {
            a11yLabel: a11yLabel
          });
        } else {
          label = intl.formatMessage({
            id: 'Terra.date.input.monthSelectLabelWithDefaultName'
          });
        }
      } else {
        label = intl.formatMessage({
          id: 'Terra.date.input.monthSelectLabel'
        }, {
          a11yLabel: a11yLabel
        });
      }
      var DateInputMonthWrapperClassNames = cx(['month-select-wrapper', {
        focused: this.state.monthIsFocused
      }, {
        disabled: this.props.disabled
      }, {
        error: this.props.isInvalid
      }, {
        incomplete: this.props.isIncomplete && this.props.required && !this.props.isInvalid
      }]);
      var DateInputMonthClassNames = cx(['month-select', {
        'is-placeholder': this.state.month === '' && this.state.isPlaceholderColored
      }, {
        focused: this.state.monthIsFocused
      }, {
        disabled: this.props.disabled
      }, {
        error: this.props.isInvalid
      }, {
        incomplete: this.props.isIncomplete && this.props.required && !this.props.isInvalid
      }]);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: DateInputMonthWrapperClassNames
      }, /*#__PURE__*/_react.default.createElement("select", (0, _extends2.default)({}, this.props.monthAttributes, {
        "aria-label": label,
        ref: this.monthRef,
        className: DateInputMonthClassNames,
        value: this.state.month,
        name: 'terra-date-month-'.concat(this.props.name),
        onChange: this.handleMonthChange,
        onKeyDown: this.handleMonthKeyDown,
        onClick: this.handleMonthClick,
        onFocus: this.handleMonthFocus,
        onBlur: this.handleMonthBlur,
        disabled: this.props.disabled,
        "aria-disabled": this.props.disabled,
        "aria-invalid": this.props.isInvalid,
        "aria-required": this.props.required
      }), /*#__PURE__*/_react.default.createElement("option", {
        value: ""
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.monthPlaceholder'
      })), /*#__PURE__*/_react.default.createElement("option", {
        key: this.props.intl.formatMessage({
          id: 'Terra.date.input.january'
        }),
        value: "01"
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.january'
      })), /*#__PURE__*/_react.default.createElement("option", {
        key: this.props.intl.formatMessage({
          id: 'Terra.date.input.february'
        }),
        value: "02"
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.february'
      })), /*#__PURE__*/_react.default.createElement("option", {
        key: this.props.intl.formatMessage({
          id: 'Terra.date.input.march'
        }),
        value: "03"
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.march'
      })), /*#__PURE__*/_react.default.createElement("option", {
        key: this.props.intl.formatMessage({
          id: 'Terra.date.input.april'
        }),
        value: "04"
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.april'
      })), /*#__PURE__*/_react.default.createElement("option", {
        key: this.props.intl.formatMessage({
          id: 'Terra.date.input.may'
        }),
        value: "05"
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.may'
      })), /*#__PURE__*/_react.default.createElement("option", {
        key: this.props.intl.formatMessage({
          id: 'Terra.date.input.june'
        }),
        value: "06"
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.june'
      })), /*#__PURE__*/_react.default.createElement("option", {
        key: this.props.intl.formatMessage({
          id: 'Terra.date.input.july'
        }),
        value: "07"
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.july'
      })), /*#__PURE__*/_react.default.createElement("option", {
        key: this.props.intl.formatMessage({
          id: 'Terra.date.input.august'
        }),
        value: "08"
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.august'
      })), /*#__PURE__*/_react.default.createElement("option", {
        key: this.props.intl.formatMessage({
          id: 'Terra.date.input.september'
        }),
        value: "09"
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.september'
      })), /*#__PURE__*/_react.default.createElement("option", {
        key: this.props.intl.formatMessage({
          id: 'Terra.date.input.october'
        }),
        value: "10"
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.october'
      })), /*#__PURE__*/_react.default.createElement("option", {
        key: this.props.intl.formatMessage({
          id: 'Terra.date.input.november'
        }),
        value: "11"
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.november'
      })), /*#__PURE__*/_react.default.createElement("option", {
        key: this.props.intl.formatMessage({
          id: 'Terra.date.input.december'
        }),
        value: "12"
      }, this.props.intl.formatMessage({
        id: 'Terra.date.input.december'
      }))));
    }

    /**
     * Renders the day input.
     *
     * If the display format begins with the day, then a special label will be set for accessibility.
     * The special label makes it easy for users to see which control on the page is the start of this particular
     * DateInput - even if there are other DateInputs in the same view.
     */
  }, {
    key: "dayRender",
    value: function dayRender() {
      var _this2 = this;
      /**
       * JAWS + Chrome is super buggy when it comes to up/down arrow keys cycling values on the input and only seems to work
       * when input[type=number]. This works great, except in Firefox where <input value="03" type="number" />
       * displays in the browsers as "3".
       * To work around this issue, the day input uses type="number" for all browsers, but if we're in a Mozilla browser,
       * we switch over to using type="text" and pattern="\d*" which allows displaying value="03" in the browser as "03"
       */
      var _this$props2 = this.props,
        intl = _this$props2.intl,
        a11yLabel = _this$props2.a11yLabel;
      var label;
      if (this.computedDisplayFormat() === 'day-month-year') {
        if (a11yLabel) {
          label = intl.formatMessage({
            id: 'Terra.date.input.dayInputLabelWithName'
          }, {
            a11yLabel: a11yLabel
          });
        } else {
          label = intl.formatMessage({
            id: 'Terra.date.input.dayInputLabelWithDefaultName'
          });
        }
      } else {
        label = intl.formatMessage({
          id: 'Terra.date.input.dayInputLabel'
        });
      }
      var numberAttributes = window.matchMedia('(min--moz-device-pixel-ratio:0)').matches ? {
        type: 'text',
        pattern: '\\d*'
      } : {
        type: 'number'
      };
      return /*#__PURE__*/_react.default.createElement(_AccessibleInput.default, (0, _extends2.default)({}, this.props.dayAttributes, numberAttributes, {
        refCallback: function refCallback(inputRef) {
          _this2.dayRef = inputRef;
        },
        label: label,
        description: intl.formatMessage({
          id: 'Terra.date.input.dayDescription'
        }),
        className: cx('date-input-day', {
          'is-focused': this.state.dayIsFocused
        }),
        value: this.state.day,
        name: 'terra-date-day-'.concat(this.props.name),
        maxLength: "2",
        onKeyPress: this.handleKeyPress,
        onChange: this.handleDayChange,
        onKeyDown: function onKeyDown(e) {
          return _this2.handleInputKeyDown(e, _DateInputUtil.default.inputType.DAY);
        },
        onFocus: this.handleDayFocus,
        onBlur: this.handleDayBlur,
        onPaste: this.handlePaste,
        size: "2",
        autoComplete: "off",
        disabled: this.props.disabled,
        isInvalid: this.props.isInvalid,
        showIsInvalid: true,
        isIncomplete: this.props.isIncomplete,
        required: this.props.required
      }));
    }

    /**
     * Renders year select
     */
  }, {
    key: "yearRender",
    value: function yearRender() {
      var _this3 = this;
      /**
       * JAWS + Chrome is super buggy when it comes to up/down arrow keys cycling values on the input and only seems to work
       * when input[type=number]. This works great, except in Firefox where <input value="03" type="number" /> displays the
       * value in the browsers as "3" instead of "03". https://bugzilla.mozilla.org/show_bug.cgi?id=1005603
       * To work around this issue, the year input uses type="number" for all browsers, but if we're in a Mozilla browser,
       * we switch over to using type="text" and pattern="\d*" which allows displaying value="03" in the browser as "03"
       */
      var numberAttributes = window.matchMedia('(min--moz-device-pixel-ratio:0)').matches ? {
        type: 'text',
        pattern: '\\d*'
      } : {
        type: 'number'
      };
      return /*#__PURE__*/_react.default.createElement(_AccessibleInput.default, (0, _extends2.default)({}, this.props.yearAttributes, numberAttributes, {
        refCallback: function refCallback(inputRef) {
          _this3.yearRef = inputRef;
        },
        label: this.props.intl.formatMessage({
          id: 'Terra.date.input.yearLabel'
        }),
        description: this.props.intl.formatMessage({
          id: 'Terra.date.input.yearDescription'
        }),
        className: cx('date-input-year', {
          'is-focused': this.state.yearIsFocused
        }),
        value: this.state.year,
        name: 'terra-date-year-'.concat(this.props.name),
        maxLength: "4",
        onChange: this.handleYearChange,
        onKeyPress: this.handleKeyPress,
        onKeyDown: function onKeyDown(e) {
          return _this3.handleInputKeyDown(e, _DateInputUtil.default.inputType.YEAR);
        },
        onFocus: this.handleYearFocus,
        onBlur: this.handleYearBlur,
        onPaste: this.handlePaste,
        size: "4",
        autoComplete: "off",
        disabled: this.props.disabled,
        isInvalid: this.props.isInvalid,
        showIsInvalid: true,
        isIncomplete: this.props.isIncomplete,
        required: this.props.required
      }));
    }

    /**
     * Renders inputs in month-day-year or day-month-year depending on displayFormat or locale
     * Defaults to day-month-year
     */
  }, {
    key: "formattedRender",
    value: function formattedRender() {
      var monthDayYearFormat = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.monthRender(), this.dayRender(), this.yearRender());
      var dayMonthYearFormat = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.dayRender(), this.monthRender(), this.yearRender());
      if (this.computedDisplayFormat() === 'month-day-year') {
        return monthDayYearFormat;
      }
      return dayMonthYearFormat;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props3 = this.props,
        a11yLabel = _this$props3.a11yLabel,
        disabled = _this$props3.disabled,
        displayFormat = _this$props3.displayFormat,
        dayAttributes = _this$props3.dayAttributes,
        monthAttributes = _this$props3.monthAttributes,
        yearAttributes = _this$props3.yearAttributes,
        intl = _this$props3.intl,
        isA11yControlled = _this$props3.isA11yControlled,
        isInvalid = _this$props3.isInvalid,
        isIncomplete = _this$props3.isIncomplete,
        onBlur = _this$props3.onBlur,
        onChange = _this$props3.onChange,
        onFocus = _this$props3.onFocus,
        refCallback = _this$props3.refCallback,
        required = _this$props3.required,
        name = _this$props3.name,
        useExternalFormatMask = _this$props3.useExternalFormatMask,
        value = _this$props3.value,
        customProps = (0, _objectWithoutProperties2.default)(_this$props3, _excluded);
      var _this$state2 = this.state,
        month = _this$state2.month,
        day = _this$state2.day,
        year = _this$state2.year;
      var theme = this.context;
      var dateInputClassNames = (0, _classnames.default)(cx({
        disabled: disabled
      }, 'date-input', {
        'is-focused': this.state.isFocused
      }, theme.className), customProps.className);

      // Using the state of month, day, and year to create a formatted date value
      var dateValue = '';
      var completeDateValue;
      if (month.length > 0 || day.length > 0 || year.length > 0) {
        dateValue = "".concat(year, "-").concat(month, "-").concat(day);
      }
      if (dateValue.length === 'xx-xx-xxxx'.length) {
        completeDateValue = dateValue;
      }
      var format = _DateInputUtil.default.getDateFormat(this.props);
      var label = a11yLabel || this.props.intl.formatMessage({
        id: 'Terra.date.input.labelDefault'
      });
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
        className: dateInputClassNames,
        ref: function ref(element) {
          _this4.dateInputContainer.current = element;
          if (refCallback) {
            refCallback(element);
          }
        },
        role: isA11yControlled ? null : 'group',
        "aria-label": isA11yControlled ? undefined : label
      }), /*#__PURE__*/_react.default.createElement(_AccessibleValue.default, {
        value: completeDateValue,
        readThis: "".concat(label, " ").concat(completeDateValue)
      }), /*#__PURE__*/_react.default.createElement("input", {
        // Create a hidden input for storing the name and value attributes to use when submitting the form.
        // The data stored in the value attribute will be the visible date in the date input but formatted in YYYY-MM-DD format.
        type: "hidden",
        name: name,
        value: dateValue
      }), this.formattedRender(), useExternalFormatMask === false && /*#__PURE__*/_react.default.createElement("div", {
        "aria-hidden": true,
        className: cx('format-text')
      }, format));
    }
  }]);
  return DateInput;
}(_react.default.Component);
DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;
DateInput.contextType = _terraThemeContext.default;
var _default = (0, _reactIntl.injectIntl)(DateInput);
exports.default = _default;