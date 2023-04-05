"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
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
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _terraButtonGroup = _interopRequireDefault(require("terra-button-group"));
var _reactIntl = require("react-intl");
var _v = _interopRequireDefault(require("uuid/v4"));
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _TimeUtil = _interopRequireDefault(require("./TimeUtil"));
var _TimeInputModule = _interopRequireDefault(require("./TimeInput.module.scss"));
var _AccessibleInput = _interopRequireDefault(require("./_AccessibleInput"));
var _TimeSpacer = _interopRequireDefault(require("./_TimeSpacer"));
var _AccessibleValue = _interopRequireDefault(require("./_AccessibleValue"));
var _excluded = ["a11yLabel", "atMaxDate", "atMinDate", "disabled", "inputAttributes", "minuteAttributes", "hourAttributes", "intl", "isIncomplete", "isInvalid", "isInvalidMeridiem", "onBlur", "onChange", "onFocus", "name", "refCallback", "required", "secondAttributes", "showSeconds", "value", "variant"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_TimeInputModule.default);
var propTypes = {
  /**
   * An identifier used by assistive technologies like screen readers to briefly describe this time input to users.
   * The label is not rendered visually.
   *
   * **BEST PRACTICE FOR ACCESSIBILITY**: you _SHOULD_ set this to match whatever visible label you give in your UI.
   * Currently this is optional for passivity reasons, but it will become mandatory in a future major version.
   */
  a11yLabel: _propTypes.default.string,
  /**
  * @private
  * boolean saying that date associated with time is at max date
  * */
  atMaxDate: _propTypes.default.bool,
  /**
  * @private
  * boolean saying that date associated with time is at min date
  * */
  atMinDate: _propTypes.default.bool,
  /**
   * Whether the time input should be disabled.
   */
  disabled: _propTypes.default.bool,
  /**
   * Custom input attributes that apply to the hour, minute, and second inputs.
   */
  inputAttributes: _propTypes.default.object,
  /**
   * Custom input attributes to apply to the hour input
   */
  hourAttributes: _propTypes.default.object,
  /**
  * @private
  * intl object programmatically imported through injectIntl from react-intl.
  * */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired,
  /**
  * Whether the input displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
  */
  isIncomplete: _propTypes.default.bool,
  /**
  * Whether the input displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalid: _propTypes.default.bool,
  /**
  * Whether the selected meridiem displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalidMeridiem: _propTypes.default.bool,
  /**
   * Custom input attributes to apply to the minutes input
   */
  minuteAttributes: _propTypes.default.object,
  /**
   * Name of the time input. The name should be unique.
   */
  name: _propTypes.default.string.isRequired,
  /**
   * A callback function to execute when the entire time input component loses focus.
   * This event does not get triggered when the focus is moved from the hour input to the minute input or meridiem because the focus is still within the main time input component.
   */
  onBlur: _propTypes.default.func,
  /**
   * A callback function to execute when either the hour or minute has been changed.
   * The first parameter is the event. The second parameter is the changed time value.
   */
  onChange: _propTypes.default.func,
  /**
   * A callback function triggered when the hour input or minute input receives focus.
   */
  onFocus: _propTypes.default.func,
  /**
   * Callback ref to pass into the input dom element.
   */
  refCallback: _propTypes.default.func,
  /**
   * Whether or not the time is required.
   */
  required: _propTypes.default.bool,
  /**
   * Custom input attributes to apply to the seconds input
   */
  secondAttributes: _propTypes.default.object,
  /**
   * Whether the input for seconds should be displayed or not. If true then the second field must have a valid
   * number for the overall time to be considered valid.
   */
  showSeconds: _propTypes.default.bool,
  /**
   * An ISO 8601 string representation of the time value in the input.
   */
  value: _propTypes.default.string,
  /**
   * Type of time input to initialize. Must be `24-hour` or `12-hour`.
   * The `de`, `es-ES`, `es`, `fr-FR`, `fr`, `nl-BE`, `nl`, `pt-BR`, `pt`, `sv-SE` and `sv` locales do not use the 12-hour time notation.
   * If the `variant` prop if set to `12-hour` for one of these supported locales, the variant will be ignored and defaults to `24-hour`.
   */
  variant: _propTypes.default.oneOf([_TimeUtil.default.FORMAT_12_HOUR, _TimeUtil.default.FORMAT_24_HOUR])
};
var defaultProps = {
  atMaxDate: false,
  atMinDate: false,
  disabled: false,
  inputAttributes: {},
  isIncomplete: false,
  isInvalid: false,
  isInvalidMeridiem: false,
  minuteAttributes: {},
  hourAttributes: {},
  onBlur: null,
  onChange: null,
  onFocus: undefined,
  refCallback: undefined,
  required: false,
  secondAttributes: {},
  showSeconds: false,
  value: undefined,
  variant: _TimeUtil.default.FORMAT_24_HOUR
};
var TimeInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TimeInput, _React$Component);
  var _super = _createSuper(TimeInput);
  function TimeInput(props) {
    var _this;
    (0, _classCallCheck2.default)(this, TimeInput);
    _this = _super.call(this, props);
    var value = _this.props.value;
    var showSeconds = _this.props.showSeconds;
    if (value && !_TimeUtil.default.validateTime(value, showSeconds)) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn("An invalid time value, ".concat(value, ", has been passed to the terra-time-picker. ") + 'This value has been ignored and will not be rendered. ' + "Time values must be in ".concat(showSeconds ? 'hh:mm:ss' : 'hh:mm', " format because showSeconds is ").concat(showSeconds, "."));
      }
      value = undefined;
    }
    _this.uuid = (0, _v.default)();
    _this.timeInputContainer = /*#__PURE__*/_react.default.createRef();
    _this.handleHourChange = _this.handleHourChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMinuteChange = _this.handleMinuteChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSecondChange = _this.handleSecondChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleInputKeyDown = _this.handleInputKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleHourInputKeyDown = _this.handleHourInputKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMinuteInputKeyDown = _this.handleMinuteInputKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSecondInputKeyDown = _this.handleSecondInputKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleHourFocus = _this.handleHourFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMinuteFocus = _this.handleMinuteFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSecondFocus = _this.handleSecondFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleHourBlur = _this.handleHourBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMinuteBlur = _this.handleMinuteBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSecondBlur = _this.handleSecondBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMeridiemButtonFocus = _this.handleMeridiemButtonFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMeridiemButtonBlur = _this.handleMeridiemButtonBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMeridiemButtonChange = _this.handleMeridiemButtonChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.getCurrentTime = _this.getCurrentTime.bind((0, _assertThisInitialized2.default)(_this));
    _this.setTime = _this.setTime.bind((0, _assertThisInitialized2.default)(_this));
    var hour = _TimeUtil.default.splitHour(value);
    var meridiem;
    if (_TimeUtil.default.getVariantFromLocale(props) === _TimeUtil.default.FORMAT_12_HOUR) {
      _this.anteMeridiem = _this.props.intl.formatMessage({
        id: 'Terra.timeInput.am'
      });
      _this.postMeridiem = _this.props.intl.formatMessage({
        id: 'Terra.timeInput.pm'
      });
      if (hour) {
        var parsedHour = _TimeUtil.default.parseTwelveHourTime(hour, _this.anteMeridiem, _this.postMeridiem);
        hour = parsedHour.hourString;
        meridiem = parsedHour.meridiem;
      } else {
        meridiem = _this.anteMeridiem;
      }
    }
    if (_this.props.variant === _TimeUtil.default.FORMAT_12_HOUR && _TimeUtil.default.getVariantFromLocale(props) === _TimeUtil.default.FORMAT_24_HOUR) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('This locale only uses 24 hour clock. The ante meridiem and post meridiem will not be displayed');
      }
      _this.anteMeridiem = '';
      _this.postMeridiem = '';
    }
    _this.state = {
      hour: hour,
      minute: _TimeUtil.default.splitMinute(value),
      second: _TimeUtil.default.splitSecond(value),
      isFocused: false,
      meridiem: meridiem,
      hourInitialFocused: false,
      minuteInitialFocused: false,
      secondInitialFocused: false
    };
    return _this;
  }
  (0, _createClass2.default)(TimeInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var variant = _TimeUtil.default.getVariantFromLocale(this.props);
      if (this.props.value === prevProps.value && variant === _TimeUtil.default.getVariantFromLocale(prevProps)) {
        return;
      }
      var hour = _TimeUtil.default.splitHour(this.props.value);
      var meridiem = this.state.meridiem;
      if (variant === _TimeUtil.default.FORMAT_12_HOUR) {
        this.anteMeridiem = this.props.intl.formatMessage({
          id: 'Terra.timeInput.am'
        });
        this.postMeridiem = this.props.intl.formatMessage({
          id: 'Terra.timeInput.pm'
        });
        if (hour) {
          var parsedHour = _TimeUtil.default.parseTwelveHourTime(hour, this.anteMeridiem, this.postMeridiem);
          hour = parsedHour.hourString;
          meridiem = parsedHour.meridiem;
        }
      }

      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        hour: hour,
        minute: _TimeUtil.default.splitMinute(this.props.value),
        second: _TimeUtil.default.splitSecond(this.props.value),
        meridiem: meridiem,
        atMaxDate: this.props.atMaxDate,
        atMinDate: this.props.atMinDate
      });
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      if (this.props.onFocus && !this.timeInputContainer.current.contains(event.relatedTarget)) {
        this.props.onFocus(event);
      }
      this.setState({
        isFocused: true
      });
    }
  }, {
    key: "handleSecondFocus",
    value: function handleSecondFocus(event) {
      this.handleFocus(event);
      this.setState({
        secondInitialFocused: true
      });

      // This check is _needed_ to avoid the contextual menu on mobile devices coming up every time the focus shifts.
      if (!_TimeUtil.default.isConsideredMobileDevice()) {
        this.secondInput.setSelectionRange(0, this.secondInput.value.length);
      }
    }
  }, {
    key: "handleMinuteFocus",
    value: function handleMinuteFocus(event) {
      this.handleFocus(event);
      this.setState({
        minuteInitialFocused: true
      });

      // This check is _needed_ to avoid the contextual menu on mobile device coming up every time the focus shifts.
      if (!_TimeUtil.default.isConsideredMobileDevice()) {
        this.minuteInput.setSelectionRange(0, this.minuteInput.value.length);
      }
    }
  }, {
    key: "handleHourFocus",
    value: function handleHourFocus(event) {
      this.handleFocus(event);
      this.setState({
        hourInitialFocused: true
      });

      // This check is _needed_ to avoid the contextual menu on mobile device coming up every time the focus shifts.
      if (!_TimeUtil.default.isConsideredMobileDevice()) {
        this.hourInput.setSelectionRange(0, this.hourInput.value.length);
      }
    }
  }, {
    key: "handleHourBlur",
    value: function handleHourBlur(event) {
      this.handleBlur(event, _TimeUtil.default.inputType.HOUR);
      this.setState({
        hourInitialFocused: false
      });
    }
  }, {
    key: "handleMinuteBlur",
    value: function handleMinuteBlur(event) {
      this.handleBlur(event, _TimeUtil.default.inputType.MINUTE);
      this.setState({
        minuteInitialFocused: false
      });
    }
  }, {
    key: "handleSecondBlur",
    value: function handleSecondBlur(event) {
      this.handleBlur(event, _TimeUtil.default.inputType.SECOND);
      this.setState({
        secondInitialFocused: false
      });
    }
  }, {
    key: "handleMeridiemButtonBlur",
    value: function handleMeridiemButtonBlur(event) {
      this.handleBlur(event, _TimeUtil.default.inputType.MERIDIEM);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event, type) {
      this.setState({
        isFocused: false
      });
      if (type === _TimeUtil.default.inputType.HOUR || type === _TimeUtil.default.inputType.MINUTE || type === _TimeUtil.default.inputType.SECOND) {
        var stateValue = event.target.value;

        // Prepend a 0 to the value when losing focus and the value is single digit.
        if (stateValue.length === 1) {
          if (_TimeUtil.default.getVariantFromLocale(this.props) === _TimeUtil.default.FORMAT_12_HOUR && type === _TimeUtil.default.inputType.HOUR && stateValue === '0') {
            stateValue = '12';
          } else {
            stateValue = '0'.concat(stateValue);
          }
          this.handleValueChange(event, type, stateValue, this.state.meridiem);
        }
      }
      if (this.props.onBlur) {
        // Modern browsers support event.relatedTarget but event.relatedTarget returns null in IE 10 / IE 11.
        // IE 11 sets document.activeElement to the next focused element before the blur event is called.
        var activeTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;

        // Handle blur only if focus has moved out of the entire time input component.
        if (!this.timeInputContainer.current.contains(activeTarget)) {
          this.props.onBlur(event);
        }
      }
    }
  }, {
    key: "handleHourChange",
    value: function handleHourChange(event) {
      var _this2 = this;
      if (!_TimeUtil.default.validNumericInput(event.target.value)) {
        return;
      }
      var inputValue = event.target.value;
      var stateValue = this.state.hour;
      var variant = _TimeUtil.default.getVariantFromLocale(this.props);
      var maxValue = variant === _TimeUtil.default.FORMAT_12_HOUR ? 12 : 23;

      // Ignore the entry if the value did not change or it is invalid.
      // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have to
      // check the length of inputValue to make sure that it is less then 2.
      if (inputValue === stateValue || inputValue.length > 2 || Number(inputValue) > maxValue) {
        return;
      }

      // If the change made was not a deletion of a digit, then prepend '0' if the input value is a
      // single digit value between 3 and 9 for a 24 hour time, or 2 and 9 for a 12 hour clock
      if (inputValue.length >= stateValue.length) {
        var digitsToPrependZero = ['3', '4', '5', '6', '7', '8', '9'];
        if (variant === _TimeUtil.default.FORMAT_12_HOUR) {
          digitsToPrependZero.push('2');
        }
        if (digitsToPrependZero.indexOf(inputValue) > -1) {
          inputValue = '0'.concat(inputValue);
        }
      }
      if (inputValue === '00' && variant === _TimeUtil.default.FORMAT_12_HOUR) {
        inputValue = '12';
      }

      // Move focus to the minute input if the hour input has a valid and complete entry.
      var moveFocusOnChange = function moveFocusOnChange() {
        if (inputValue.length === 2) {
          _this2.minuteInput.focus();
        }
      };
      this.handleValueChange(event, _TimeUtil.default.inputType.HOUR, inputValue, this.state.meridiem, moveFocusOnChange);
    }
  }, {
    key: "handleMinuteChange",
    value: function handleMinuteChange(event) {
      var _this3 = this;
      if (!_TimeUtil.default.validNumericInput(event.target.value)) {
        return;
      }
      var inputValue = event.target.value;
      var stateValue = this.state.minute;
      var maxValue = 59;

      // Ignore the entry if the value did not change or it is invalid.
      // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have
      // to check the length of inputValue to make sure that it is less then 2.
      if (inputValue === stateValue || inputValue.length > 2 || Number(inputValue) > maxValue) {
        return;
      }

      // If the change made was not a deletion of a digit, then prepend '0'
      // if the input value is a single digit value between 6 and 9.
      if (inputValue.length >= stateValue.length) {
        var digitsToPrependZero = ['6', '7', '8', '9'];
        if (digitsToPrependZero.indexOf(inputValue) > -1) {
          inputValue = '0'.concat(inputValue);
        }
      }
      var moveFocusOnChange = function moveFocusOnChange() {
        // Move focus to second if second is shown and minute input has a valid and complete entry
        if (inputValue.length === 2 && _this3.props.showSeconds) {
          _this3.secondInput.focus();
        }
      };
      this.handleValueChange(event, _TimeUtil.default.inputType.MINUTE, inputValue, this.state.meridiem, moveFocusOnChange);
    }
  }, {
    key: "handleSecondChange",
    value: function handleSecondChange(event) {
      if (!_TimeUtil.default.validNumericInput(event.target.value)) {
        return;
      }
      var inputValue = event.target.value;
      var stateValue = this.state.second;
      var maxValue = 59;

      // Ignore the entry if the value did not change or it is invalid.
      // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have
      // to check the length of inputValue to make sure that it is less then 2.
      if (inputValue === stateValue || inputValue.length > 2 || Number(inputValue) > maxValue) {
        return;
      }

      // If the change made was not a deletion of a digit, then prepend '0'
      // if the input value is a single digit value between 6 and 9.
      if (inputValue.length >= stateValue.length) {
        var digitsToPrependZero = ['6', '7', '8', '9'];
        if (digitsToPrependZero.indexOf(inputValue) > -1) {
          inputValue = '0'.concat(inputValue);
        }
      }
      this.handleValueChange(event, _TimeUtil.default.inputType.SECOND, inputValue, this.state.meridiem);
    }
  }, {
    key: "handleMeridiemButtonFocus",
    value: function handleMeridiemButtonFocus(event) {
      if (this.props.onFocus && !this.timeInputContainer.current.contains(event.relatedTarget)) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: "handleInputKeyDown",
    value: function handleInputKeyDown(event, inputType) {
      var second = this.state.second;
      var _this$state = this.state,
        hour = _this$state.hour,
        minute = _this$state.minute,
        meridiem = _this$state.meridiem;
      var variant = _TimeUtil.default.getVariantFromLocale(this.props);
      if (event.key === 'n' || event.key === 'N') {
        var currentTime = this.getCurrentTime();
        this.setTime(event, currentTime.hour, currentTime.minute, currentTime.second, currentTime.meridiem);
        return;
      }
      if ((event.key === '-' || event.key === '_') && !this.props.atMinDate) {
        var currentTimeValue = this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : '');
        if (_TimeUtil.default.validateTime(currentTimeValue, this.props.showSeconds)) {
          if (minute === '0' || minute === '00') {
            minute = '59';
            if (hour === '0' || hour === '00') {
              hour = '23';
            } else {
              if (variant === _TimeUtil.default.FORMAT_12_HOUR && hour === '12') {
                if (meridiem === this.anteMeridiem) {
                  meridiem = this.postMeridiem;
                } else {
                  meridiem = this.anteMeridiem;
                }
              }
              hour = _TimeUtil.default.decrementHour(hour, variant);
            }
          } else {
            minute = _TimeUtil.default.decrementMinute(minute);
          }
          this.setTime(event, hour, minute, second, meridiem);
        } else {
          var _currentTime = this.getCurrentTime();
          var formatHour = _currentTime.hour;
          var formatMinute = _currentTime.minute;
          var formatMeridiem = _currentTime.meridiem;
          if (formatMinute === '0' || formatMinute === '00') {
            formatMinute = '59';
            if (formatHour === '0' || formatHour === '00') {
              formatHour = '23';
            } else {
              if (variant === _TimeUtil.default.FORMAT_12_HOUR && formatHour === '12') {
                if (formatMeridiem === this.anteMeridiem) {
                  formatMeridiem = this.postMeridiem;
                } else {
                  formatMeridiem = this.anteMeridiem;
                }
              }
              formatHour = _TimeUtil.default.decrementHour(formatHour, variant);
            }
          } else {
            formatMinute = _TimeUtil.default.decrementMinute(formatMinute);
          }
          this.setTime(event, formatHour, formatMinute, _currentTime.second, formatMeridiem);
        }
        return;
      }
      if ((event.key === '=' || event.key === '+') && !this.props.atMaxDate) {
        var _currentTimeValue = this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : '');
        if (_TimeUtil.default.validateTime(_currentTimeValue, this.props.showSeconds)) {
          if (minute === '59') {
            minute = '00';
            if (hour === '23') {
              hour = '00';
            } else {
              if (variant === _TimeUtil.default.FORMAT_12_HOUR && hour === '11') {
                if (meridiem === this.anteMeridiem) {
                  meridiem = this.postMeridiem;
                } else {
                  meridiem = this.anteMeridiem;
                }
              }
              hour = _TimeUtil.default.incrementHour(hour, variant);
            }
          } else {
            minute = _TimeUtil.default.incrementMinute(minute);
          }
          this.setTime(event, hour, minute, second, meridiem);
        } else {
          var _currentTime2 = this.getCurrentTime();
          var _formatHour = _currentTime2.hour;
          var _formatMinute = _currentTime2.minute;
          var _formatMeridiem = _currentTime2.meridiem;
          if (_currentTime2.minute === '59') {
            _formatMinute = '00';
            if (_formatHour === '23') {
              _formatHour = '00';
            } else {
              if (variant === _TimeUtil.default.FORMAT_12_HOUR && _formatHour === '11') {
                if (_formatMeridiem === this.anteMeridiem) {
                  _formatMeridiem = this.postMeridiem;
                } else {
                  _formatMeridiem = this.anteMeridiem;
                }
              }
              _formatHour = _TimeUtil.default.incrementHour(_formatHour, variant);
            }
          } else {
            _formatMinute = _TimeUtil.default.incrementMinute(_formatMinute);
          }
          this.setTime(event, _formatHour, _formatMinute, _currentTime2.second, _formatMeridiem);
        }
        return;
      }
      if ((event.key === 'a' || event.key === 'A') && variant === _TimeUtil.default.FORMAT_12_HOUR) {
        var _currentTimeValue2 = this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : '');
        meridiem = this.anteMeridiem;
        if (_TimeUtil.default.validateTime(_currentTimeValue2, this.props.showSeconds)) {
          this.handleValueChange(event, _TimeUtil.default.inputType.HOUR, hour.toString(), meridiem);
        } else {
          this.setTime(event, '12', '00', '00', meridiem);
        }
        return;
      }
      if ((event.key === 'p' || event.key === 'P') && variant === _TimeUtil.default.FORMAT_12_HOUR) {
        var _currentTimeValue3 = this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : '');
        meridiem = this.postMeridiem;
        if (_TimeUtil.default.validateTime(_currentTimeValue3, this.props.showSeconds)) {
          this.handleValueChange(event, _TimeUtil.default.inputType.HOUR, hour.toString(), meridiem);
        } else {
          this.setTime(event, '12', '00', '00', meridiem);
        }
        return;
      }
      if (inputType === _TimeUtil.default.inputType.HOUR) {
        this.handleHourInputKeyDown(event);
      } else if (inputType === _TimeUtil.default.inputType.MINUTE) {
        this.handleMinuteInputKeyDown(event);
      } else {
        this.handleSecondInputKeyDown(event);
      }
    }

    /**
     * Takes a key input from the hour input, and processes it based on the value of the keycode.
     * If the key is an up or down arrow, it increments/decrements the hour. If the right arrow
     * is pressed, it shifts focus to the minute input.
     * @param {Object} event Event object generated from the event delegation.
     */
  }, {
    key: "handleHourInputKeyDown",
    value: function handleHourInputKeyDown(event) {
      var stateValue = this.state.hour;
      var meridiem = this.state.meridiem;
      var previousStateValue = stateValue;
      var variant = _TimeUtil.default.getVariantFromLocale(this.props);
      if (event.keyCode === KeyCode.KEY_UP) {
        stateValue = _TimeUtil.default.incrementHour(stateValue, variant);

        // Hitting 12 when incrementing up changes the meridiem
        if (variant === _TimeUtil.default.FORMAT_12_HOUR && stateValue === '12') {
          if (meridiem === this.postMeridiem || !previousStateValue) {
            meridiem = this.anteMeridiem;
          } else {
            meridiem = this.postMeridiem;
          }
        }
      }
      if (event.keyCode === KeyCode.KEY_DOWN) {
        stateValue = _TimeUtil.default.decrementHour(stateValue, variant);

        // Hitting 11 when incrementing down changes the meridiem
        if (variant === _TimeUtil.default.FORMAT_12_HOUR && stateValue === '11') {
          meridiem = meridiem === this.postMeridiem ? this.anteMeridiem : this.postMeridiem;
        }
      }
      if (stateValue !== previousStateValue) {
        this.handleValueChange(event, _TimeUtil.default.inputType.HOUR, stateValue, meridiem);
      }
      if (event.keyCode === KeyCode.KEY_RIGHT) {
        this.focusMinuteFromHour(event);
      }
    }

    /**
     * Takes a key input from the minute input, and processes it based on the value of the keycode.
     * If the key is an up or down arrow, it increments/decrements the minute. If the left arrow
     * is pressed, it shifts focus to the hour input. If the right arrow is pressed, it shifts
     * focus to the meridiem input.
     * @param {Object} event Event object generated from the event delegation.
     */
  }, {
    key: "handleMinuteInputKeyDown",
    value: function handleMinuteInputKeyDown(event) {
      var stateValue = this.state.minute;
      var previousStateValue = stateValue;
      if (event.keyCode === KeyCode.KEY_UP) {
        stateValue = _TimeUtil.default.incrementMinute(stateValue);
      }
      if (event.keyCode === KeyCode.KEY_DOWN) {
        stateValue = _TimeUtil.default.decrementMinute(stateValue);
      }
      if (previousStateValue !== stateValue) {
        this.handleValueChange(event, _TimeUtil.default.inputType.MINUTE, stateValue, this.state.meridiem);
      }
      if (event.keyCode === KeyCode.KEY_LEFT || event.keyCode === KeyCode.KEY_DELETE || event.keyCode === KeyCode.KEY_BACK_SPACE) {
        this.focusHour(event);
      }
      if (event.keyCode === KeyCode.KEY_RIGHT && this.props.showSeconds) {
        this.focusSecondFromMinute(event);
      }
    }

    /**
     * Takes a key input from the second input, and processes it based on the value of the keycode.
     * If the key is an up or down arrow, it increments/decrements the second. If the left arrow
     * is pressed, it shifts focus to the minute input. If the right arrow is pressed, it shifts
     * focus to the meridiem input.
     * @param {Object} event Event object generated from the event delegation.
     */
  }, {
    key: "handleSecondInputKeyDown",
    value: function handleSecondInputKeyDown(event) {
      var stateValue = this.state.second;
      var previousStateValue = stateValue;
      if (event.keyCode === KeyCode.KEY_UP) {
        stateValue = _TimeUtil.default.incrementSecond(stateValue);
      }
      if (event.keyCode === KeyCode.KEY_DOWN) {
        stateValue = _TimeUtil.default.decrementSecond(stateValue);
      }
      if (previousStateValue !== stateValue) {
        this.handleValueChange(event, _TimeUtil.default.inputType.SECOND, stateValue, this.state.meridiem);
      }
      if (event.keyCode === KeyCode.KEY_LEFT || event.keyCode === KeyCode.KEY_DELETE || event.keyCode === KeyCode.KEY_BACK_SPACE) {
        this.focusMinuteFromSecond(event);
      }
    }
  }, {
    key: "handleValueChange",
    value: function handleValueChange(event, type, timeValue, meridiem, moveFocusOnChange) {
      if (type === _TimeUtil.default.inputType.HOUR) {
        this.setState({
          hour: timeValue,
          meridiem: meridiem,
          hourInitialFocused: false
        }, moveFocusOnChange);
      } else if (type === _TimeUtil.default.inputType.MINUTE) {
        this.setState({
          minute: timeValue,
          minuteInitialFocused: false
        }, moveFocusOnChange);
      } else {
        this.setState({
          second: timeValue,
          secondInitialFocused: false
        }, moveFocusOnChange);
      }

      // Input values of length 1 indicate incomplete time, which means we cannot get a
      // reliable time so onChange isn't triggered.
      if (this.props.onChange && timeValue.length !== 1) {
        var hour = type === _TimeUtil.default.inputType.HOUR ? timeValue : this.state.hour;
        var minute = type === _TimeUtil.default.inputType.MINUTE ? timeValue : this.state.minute;
        var second = type === _TimeUtil.default.inputType.SECOND ? timeValue : this.state.second;
        if (hour === '' && minute === '' && second === '') {
          this.props.onChange(event, '');
        } else {
          this.props.onChange(event, this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : ''));
        }
      }
    }
  }, {
    key: "handleMeridiemButtonChange",
    value: function handleMeridiemButtonChange(event, selectedKey) {
      this.handleValueChange(event, _TimeUtil.default.inputType.HOUR, this.state.hour.toString(), selectedKey);
    }
  }, {
    key: "a11yLabel",
    get: function get() {
      var _this$props = this.props,
        a11yLabel = _this$props.a11yLabel,
        intl = _this$props.intl;
      /**
       * description: For situations where the consumer has not provided a a11yLabel: This will be read by screen
       * readers as the reader moves into the group of inputs. It is intended to help the user understand "you are about
       * to enter a section of the page where many different inputs all work together for this one concept of time. It is
       * also used as part of many other localized messages.
       */
      return a11yLabel || intl.formatMessage({
        id: 'Terra.timeInput.a11yLabelDefault'
      });
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      var date = new Date();
      // prepend a 0 to single digit values in minute, second, and hours
      var minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
      var second = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
      var hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
      var meridiem = '';
      if (_TimeUtil.default.getVariantFromLocale(this.props) === _TimeUtil.default.FORMAT_12_HOUR) {
        var parsedHour = _TimeUtil.default.parseTwelveHourTime(hour, this.anteMeridiem, this.postMeridiem);
        hour = parsedHour.hourString;
        meridiem = parsedHour.meridiem;
      }
      var currentTime = {
        minute: minute,
        second: second,
        hour: hour,
        meridiem: meridiem
      };
      return currentTime;
    }
  }, {
    key: "setTime",
    value: function setTime(event, hour, minute, second, meridiem) {
      this.setState({
        hour: hour,
        meridiem: meridiem,
        hourInitialFocused: false,
        minute: minute,
        minuteInitialFocused: false,
        second: second,
        secondInitialFocused: false
      });
      if (this.props.onChange) {
        this.props.onChange(event, this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : ''));
      }
    }
  }, {
    key: "focusMinuteFromHour",
    value: function focusMinuteFromHour(event) {
      // If the hour is empty or the cursor is after the value, move focus to the minute input when the right arrow is pressed.
      if (this.state.hour.length === 0 || this.state.hour.length === this.hourInput.selectionEnd) {
        this.minuteInput.focus();
        this.minuteInput.setSelectionRange(0, 0);
        event.preventDefault();
      }
    }
  }, {
    key: "focusHour",
    value: function focusHour(event) {
      // If the cursor is at the left most position in the minute input, is empty or the cursor is before the value,
      // move focus to the hour input

      if (this.minuteInput.selectionEnd === 0) {
        this.hourInput.focus();
        if (this.state.hour) {
          this.hourInput.setSelectionRange(this.state.hour.length, this.state.hour.length);
          event.preventDefault();
        }
      }
    }
  }, {
    key: "focusSecondFromMinute",
    value: function focusSecondFromMinute(event) {
      // If the minute is empty or the cursor is after the value, move focus to the meridiem.
      if ((this.state.minute.length === 0 || this.state.minute.length === this.minuteInput.selectionEnd) && this.secondInput) {
        this.secondInput.focus();
        if (this.state.second) {
          this.secondInput.setSelectionRange(0, 0);
          event.preventDefault();
        }
      }
    }
  }, {
    key: "focusMinuteFromSecond",
    value: function focusMinuteFromSecond(event) {
      // If the cursor is at the left most position in the second input, is empty or the cursor is before the value,
      // move focus to the minute input

      if (this.secondInput.selectionEnd === 0) {
        this.minuteInput.focus();
        if (this.state.minute) {
          this.minuteInput.setSelectionRange(this.state.minute.length, this.state.minute.length);
          event.preventDefault();
        }
      }
    }
  }, {
    key: "formatHour",
    value: function formatHour(hour, meridiem) {
      if (!hour) {
        return hour;
      }
      var tempHour = parseInt(hour, 10);
      if (_TimeUtil.default.getVariantFromLocale(this.props) === _TimeUtil.default.FORMAT_12_HOUR) {
        if (meridiem === this.postMeridiem && tempHour < 12) {
          tempHour += 12;
        } else if (meridiem === this.anteMeridiem && tempHour === 12) {
          tempHour = 0;
        }
      }
      var hourString = tempHour.toString();
      if (hourString.length < 2) {
        hourString = '0'.concat(hourString);
      }
      return hourString;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props2 = this.props,
        a11yLabel = _this$props2.a11yLabel,
        atMaxDate = _this$props2.atMaxDate,
        atMinDate = _this$props2.atMinDate,
        disabled = _this$props2.disabled,
        inputAttributes = _this$props2.inputAttributes,
        minuteAttributes = _this$props2.minuteAttributes,
        hourAttributes = _this$props2.hourAttributes,
        intl = _this$props2.intl,
        isIncomplete = _this$props2.isIncomplete,
        isInvalid = _this$props2.isInvalid,
        isInvalidMeridiem = _this$props2.isInvalidMeridiem,
        onBlur = _this$props2.onBlur,
        onChange = _this$props2.onChange,
        onFocus = _this$props2.onFocus,
        name = _this$props2.name,
        _refCallback = _this$props2.refCallback,
        required = _this$props2.required,
        secondAttributes = _this$props2.secondAttributes,
        showSeconds = _this$props2.showSeconds,
        value = _this$props2.value,
        variant = _this$props2.variant,
        customProps = (0, _objectWithoutProperties2.default)(_this$props2, _excluded);
      var anteMeridiemClassNames = cx(['meridiem-button', {
        'is-invalid': isInvalidMeridiem && this.state.meridiem === this.anteMeridiem
      }]);
      var postMeridiemClassNames = cx(['meridiem-button', {
        'is-invalid': isInvalidMeridiem && this.state.meridiem === this.postMeridiem
      }]);
      var variantFromLocale = _TimeUtil.default.getVariantFromLocale(this.props);

      // Using the state of hour, minute, and second (if shown) create a time in UTC represented in ISO 8601 format.
      var timeValue = '';
      if (this.state.hour.length > 0 || this.state.minute.length > 0 || this.state.second.length > 0 && showSeconds) {
        var hour = parseInt(this.state.hour, 10);
        if (variantFromLocale === _TimeUtil.default.FORMAT_12_HOUR && this.state.meridiem === this.postMeridiem) {
          hour += 12;
        }
        timeValue = 'T'.concat(hour, ':', this.state.minute);
        if (showSeconds) {
          timeValue = timeValue.concat(':', this.state.second);
        }
      }
      var theme = this.context;
      var timeInputClassNames = (0, _classnames.default)(cx({
        disabled: disabled
      }, 'time-input', {
        'is-focused': this.state.isFocused
      }, {
        'is-invalid': isInvalid
      }, {
        'is-incomplete': isIncomplete && required && !isInvalid && !isInvalidMeridiem
      }), customProps.className);
      var hourClassNames = cx(['time-input-hour', {
        'with-second': showSeconds
      }, {
        'initial-focus': this.state.hourInitialFocused
      }]);
      var minuteClassNames = cx(['time-input-minute', {
        'with-second': showSeconds
      }, {
        'initial-focus': this.state.minuteInitialFocused
      }]);
      var secondClassNames = cx(['time-input-second', {
        'initial-focus': this.state.secondInitialFocused
      }]);

      /**
       * Get the mask string to place under the time input fields.
       * @returns {String} a visual hint of the time format, like 'hh:mm'.
       */
      function mask() {
        if (showSeconds) {
          // description: A visual hint that the Time Input expects two-digit hour, minute and second.
          return intl.formatMessage({
            id: 'Terra.timeInput.maskHourMinuteSecond'
          });
        }
        // description: Like Terra.timeInput.maskHourMinuteSecond but no second.,
        return intl.formatMessage({
          id: 'Terra.timeInput.maskHourMinute'
        });
      }
      /**
       * Get the description for the hour field.
       *
       * NOTE: the description does not take the place of validation or error messages.
       * @returns {String} a description of the hour field, intended to be read to screen reader users.
       */
      function hourDescription() {
        if (variantFromLocale === _TimeUtil.default.FORMAT_12_HOUR) {
          /**
           * description: Explains to screen reader users that the hour field needs a two digit hour. This will be read
           * only when a screen reader is enabled. It is never displayed. It will be read when the user has focused on
           * the hour input or when the screen reader is reading the page to the user.
           */
          return intl.formatMessage({
            id: 'Terra.timeInput.hourDescriptionTwelve'
          });
        }
        // description: Like Terra.timeInput.hourDescriptionTwelve but for a 24-hour clock.
        return intl.formatMessage({
          id: 'Terra.timeInput.hourDescriptionTwentyFour'
        });
      }

      // Fan out some component-level props into input-level a11y attributes. See the big comment below for more info.
      inputAttributes.isInvalid = isInvalid;
      inputAttributes.disabled = disabled;
      inputAttributes.required = required;
      var a11yTimeValue = _TimeUtil.default.getA11YTimeValue(this.props, this.state, this.postMeridiem);
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
        ref: this.timeInputContainer,
        className: cx('time-input-container', theme.className)
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: timeInputClassNames,
        role: "group",
        "aria-label": this.a11yLabel
      }, /*#__PURE__*/_react.default.createElement(_AccessibleValue.default, {
        value: a11yTimeValue
        /**
         * description: This will be read to screen reader users only textValue changes to a new time. We want to
         * give the screen reader user feedback that their change to one of the controls has updated this time.
         */,
        readThis: intl.formatMessage({
          id: 'Terra.timeInput.labeledTextValue'
        }, {
          a11yLabel: this.a11yLabel,
          a11yTimeValue: a11yTimeValue
        })
      }), /*#__PURE__*/_react.default.createElement("input", {
        // Create a hidden input for storing the name and value attributes to use when submitting the form.
        // The value will be sort of like, but not strictly, an ISO 8601 value's time component.
        type: "hidden",
        name: name,
        value: timeValue
      }), /*#__PURE__*/_react.default.createElement(_AccessibleInput.default, (0, _extends2.default)({}, inputAttributes, hourAttributes, {
        /**
         * If the entire Time Input isInvalid, then pass isInvalid into each wrapped input, so that the screen
         * reader users will get an indication that something is invalid. It's not perfect because both inputs will
         * be marked invalid even though it's the combination of both that is really the problem. For example,
         * 09:88 is a valid hour and an invalid minute, but both hour and minute will be marked invalid.
         *
         * description: The label that will only be read to screen readers. It is prefixed with the time input's
         * name e.g. 'Time of Birth', so that screen reader users can pick this specific hour field out of a list
         * of many hour fields on the same page. The minute and second screen reader labels won't contain the name
         * because they will always follow their labeled hour field. We didn't want to say the a11yLabel too many
         * times.
         */
        label: intl.formatMessage({
          id: 'Terra.timeInput.hourLabel'
        }, {
          a11yLabel: this.a11yLabel
        }),
        refCallback: function refCallback(inputRef) {
          _this4.hourInput = inputRef;
          if (_refCallback) _refCallback(inputRef);
        },
        className: hourClassNames,
        type: "text",
        value: this.state.hour,
        name: 'terra-time-hour-'.concat(name),
        maxLength: "2",
        onChange: this.handleHourChange,
        onKeyDown: function onKeyDown(e) {
          return _this4.handleInputKeyDown(e, _TimeUtil.default.inputType.HOUR);
        },
        onFocus: this.handleHourFocus,
        onBlur: this.handleHourBlur,
        size: "2",
        pattern: "\\d*",
        description: hourDescription()
      })), /*#__PURE__*/_react.default.createElement(_TimeSpacer.default, {
        className: cx('time-spacer')
      }), /*#__PURE__*/_react.default.createElement(_AccessibleInput.default, (0, _extends2.default)({}, inputAttributes, minuteAttributes, {
        refCallback: function refCallback(inputRef) {
          _this4.minuteInput = inputRef;
        },
        label: intl.formatMessage({
          id: 'Terra.timeInput.minutes'
        }),
        className: minuteClassNames,
        type: "text",
        value: this.state.minute,
        name: 'terra-time-minute-'.concat(name),
        maxLength: "2",
        onChange: this.handleMinuteChange,
        onKeyDown: function onKeyDown(e) {
          return _this4.handleInputKeyDown(e, _TimeUtil.default.inputType.MINUTE);
        },
        onFocus: this.handleMinuteFocus,
        onBlur: this.handleMinuteBlur,
        size: "2",
        pattern: "\\d*"
        // description: Like the hour descriptions, but for the minute input.
        ,
        description: intl.formatMessage({
          id: 'Terra.timeInput.descriptionMinute'
        })
      })), showSeconds && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_TimeSpacer.default, {
        className: cx('time-spacer')
      }), /*#__PURE__*/_react.default.createElement(_AccessibleInput.default, (0, _extends2.default)({}, inputAttributes, secondAttributes, {
        refCallback: function refCallback(inputRef) {
          _this4.secondInput = inputRef;
        },
        label: intl.formatMessage({
          id: 'Terra.timeInput.seconds'
        }),
        className: secondClassNames,
        type: "text",
        value: this.state.second,
        name: 'terra-time-second-'.concat(name),
        maxLength: "2",
        onChange: this.handleSecondChange,
        onKeyDown: function onKeyDown(e) {
          return _this4.handleInputKeyDown(e, _TimeUtil.default.inputType.SECOND);
        },
        onFocus: this.handleSecondFocus,
        onBlur: this.handleSecondBlur,
        size: "2",
        pattern: "\\d*"
        // description: Like the hour descriptions, but for the second input.
        ,
        description: intl.formatMessage({
          id: 'Terra.timeInput.descriptionSecond'
        })
      })))), variantFromLocale === _TimeUtil.default.FORMAT_12_HOUR && /*#__PURE__*/_react.default.createElement(_terraButtonGroup.default, {
        selectedKeys: [this.state.meridiem],
        onChange: this.handleMeridiemButtonChange,
        className: cx('meridiem-button-group')
      }, /*#__PURE__*/_react.default.createElement(_terraButtonGroup.default.Button, {
        key: this.anteMeridiem,
        className: anteMeridiemClassNames,
        text: this.anteMeridiem,
        onBlur: this.handleMeridiemButtonBlur,
        onFocus: this.handleMeridiemButtonFocus,
        isDisabled: disabled
      }), /*#__PURE__*/_react.default.createElement(_terraButtonGroup.default.Button, {
        key: this.postMeridiem,
        className: postMeridiemClassNames,
        text: this.postMeridiem,
        onBlur: this.handleMeridiemButtonBlur,
        onFocus: this.handleMeridiemButtonFocus,
        isDisabled: disabled
      })), /*#__PURE__*/_react.default.createElement("div", {
        "aria-hidden": true,
        className: cx('format-text')
      }, mask()));
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
  }]);
  return TimeInput;
}(_react.default.Component);
TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;
TimeInput.contextType = _terraThemeContext.default;
var _default = (0, _reactIntl.injectIntl)(TimeInput);
exports.default = _default;