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
var _reactIntl = require("react-intl");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _terraDatePicker = _interopRequireDefault(require("terra-date-picker"));
var _terraTimeInput = _interopRequireDefault(require("terra-time-input"));
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _DateUtil = _interopRequireDefault(require("terra-date-picker/lib/DateUtil"));
var _DateTimePickerModule = _interopRequireDefault(require("./DateTimePicker.module.scss"));
var _DateTimeUtils = _interopRequireDefault(require("./DateTimeUtils"));
var _TimeClarification = _interopRequireDefault(require("./_TimeClarification"));
var _excluded = ["dateInputAttributes", "disabled", "excludeDates", "filterDate", "includeDates", "initialTimeZone", "isIncomplete", "isInvalid", "isInvalidMeridiem", "onBlur", "onChange", "onChangeRaw", "onClickOutside", "onFocus", "onRequestClose", "onSelect", "maxDate", "minDate", "name", "required", "showSeconds", "timeInputAttributes", "value", "timeVariant"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_DateTimePickerModule.default);
var propTypes = {
  /**
   * Custom input attributes to apply to the date input. Use the name prop to set the name for the date input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  dateInputAttributes: _propTypes.default.object,
  /**
   * Whether the date and time inputs should be disabled.
   */
  disabled: _propTypes.default.bool,
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker. The values must be in the `YYYY-MM-DDThh:mm:ss` format.
   */
  excludeDates: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled.
   * A return value of true will be enabled and false will be disabled.
   */
  filterDate: _propTypes.default.func,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. The values must be in the `YYYY-MM-DDThh:mm:ss` format.
   * All Other dates will be disabled.
   */
  includeDates: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Timezone value to indicate in which timezone the date-time component is rendered.
   * The value provided should be a valid [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) string, else will default to browser/local timezone.
   * Note: This value is considered only for the initial render. Changes to an already set time zone will reset to the first set time zone.
   */
  initialTimeZone: _propTypes.default.string,
  /**
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: _propTypes.default.shape({
    locale: _propTypes.default.string
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
   * An ISO 8601 string representation of the maximum date that can be selected in the date picker. The value must be in the `YYYY-MM-DD` format. Must be on or before `12/31/2100`.
   * The time portion in this value is ignored because this is strictly used in the date picker.
   */
  maxDate: _propTypes.default.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected in the date picker. The value must be in the `YYYY-MM-DD` format. Must be on or after `01/01/1900`.
   * The time portion in this value is ignored because this is strictly used in the date picker.
   */
  minDate: _propTypes.default.string,
  /**
   * Name of the date input. The name should be unique.
   */
  name: _propTypes.default.string.isRequired,
  /**
   * A callback function triggered when the entire date time picker component loses focus.
   * This event does not get triggered when the focus is moved from the date input to the time input because the focus is still within the main date time picker component.
   * The first parameter is the event. The second parameter is the metadata to describe the current state of the input value at the time when the onBlur callback is triggered.
   */
  onBlur: _propTypes.default.func,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed input value. The third parameter is the metadata to describe the current state of the input value at the time when the onChange callback is triggered.
   */
  onChange: _propTypes.default.func,
  /**
   * A callback function to execute when a change is made in the date or time input.
   * The first parameter is the event. The second parameter is the changed input value. The third parameter is the metadata to describe the current state of the input value at the time when the onChangeRaw callback is triggered
   */
  onChangeRaw: _propTypes.default.func,
  /**
   * **Deprecated**, A callback function to execute when clicking outside of the picker to dismiss it. Resolves to `onRequestClose`.
   */
  onClickOutside: _propTypes.default.func,
  /**
   * A callback function triggered when the date input, hour input, or minute input receives focus.
   */
  onFocus: _propTypes.default.func,
  /**
   * A callback function to execute when picker is dismissed. onRequestClose(event)
   */
  onRequestClose: _propTypes.default.func,
  /**
   * A callback function to execute when a selection is made in the date picker.
   * The first parameter is the event. The second parameter is the selected input value in ISO format.
   */
  onSelect: _propTypes.default.func,
  /**
   * Whether or not the date is required.
   */
  required: _propTypes.default.bool,
  /**
   * Whether an input field for seconds should be shown or not. If true then the second field must have a valid
   * number for the overall input to be considered valid.
   */
  showSeconds: _propTypes.default.bool,
  /**
   * Custom input attributes to apply to the time input. Use the name prop to set the name for the time input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  timeInputAttributes: _propTypes.default.object,
  /**
   * An ISO 8601 string representation of the initial value to show in the date and time inputs. The value must be in the `YYYY-MM-DDThh:mm:ss` format.
   */
  value: _propTypes.default.string,
  /**
   * Type of time input to initialize. Must be `24-hour` or `12-hour`.
   * The `de`, `es-ES`, `es`, `fr-FR`, `fr`, `nl-BE`, `nl`, `pt-BR`, `pt`, `sv-SE` and `sv` locales do not use the 12-hour time notation.
   * If the `variant` prop if set to `12-hour` for one of these supported locales, the variant will be ignored and defaults to `24-hour`.
   */
  timeVariant: _propTypes.default.oneOf([_DateTimeUtils.default.FORMAT_12_HOUR, _DateTimeUtils.default.FORMAT_24_HOUR])
};
var defaultProps = {
  dateInputAttributes: undefined,
  disabled: false,
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  isIncomplete: false,
  isInvalid: false,
  isInvalidMeridiem: false,
  maxDate: '2100-12-31',
  minDate: '1900-01-01',
  onBlur: undefined,
  onChange: undefined,
  onChangeRaw: undefined,
  onClickOutside: undefined,
  onFocus: undefined,
  onSelect: undefined,
  required: false,
  showSeconds: false,
  timeInputAttributes: undefined,
  value: undefined,
  timeVariant: _DateTimeUtils.default.FORMAT_24_HOUR,
  initialTimeZone: _DateTimeUtils.default.getLocalTimeZone()
};
var DateTimePicker = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DateTimePicker, _React$Component);
  var _super = _createSuper(DateTimePicker);
  function DateTimePicker(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DateTimePicker);
    _this = _super.call(this, props);
    _this.initialTimeZone = _DateTimeUtils.default.checkIfTimeZoneIsValid(props.initialTimeZone);
    _this.state = {
      dateTime: _DateTimeUtils.default.createSafeDate(props.value, _this.initialTimeZone),
      isAmbiguousTime: false,
      isTimeClarificationOpen: false,
      dateFormat: _DateUtil.default.getFormatByLocale(props.intl.locale)
    };

    // The dateValue and timeValue variables represent the actual value in the date input and time input respectively.
    // They are used to keep track of the currently entered value to determine whether or not the entry is valid.
    // Unlike dateValue and timeValue, this.state.dateTime is the internal moment object representing both the date and time as one entity
    // It is used for date/time manipulation and used to calculate the missing/ambiguous hour.
    // The dateValue and timeValue are tracked outside of the react state to limit the number of renderings that occur.
    _this.dateValue = _DateUtil.default.formatMomentDate(_this.state.dateTime, _this.state.dateFormat) || '';
    _this.timeValue = _DateTimeUtils.default.hasTime(_this.props.value, _this.initialTimeZone) ? _DateTimeUtils.default.getTime(_this.props.value, _this.props.showSeconds, _this.initialTimeZone) : '';
    _this.isDefaultDateTimeAcceptable = true;
    _this.wasOffsetButtonClicked = false;
    _this.handleDateChange = _this.handleDateChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleDateChangeRaw = _this.handleDateChangeRaw.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleTimeChange = _this.handleTimeChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnSelect = _this.handleOnSelect.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnDateBlur = _this.handleOnDateBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnTimeBlur = _this.handleOnTimeBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleDaylightSavingButtonClick = _this.handleDaylightSavingButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleStandardTimeButtonClick = _this.handleStandardTimeButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnDateInputFocus = _this.handleOnDateInputFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnTimeInputFocus = _this.handleOnTimeInputFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnCalendarButtonClick = _this.handleOnCalendarButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOffsetButtonClick = _this.handleOffsetButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnRequestClose = _this.handleOnRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.dateTimePickerContainer = /*#__PURE__*/_react.default.createRef();
    _this.containerHasFocus = false;
    _this.prevDateTime = _DateTimeUtils.default.createSafeDate(props.value, _this.initialTimeZone);
    return _this;
  }
  (0, _createClass2.default)(DateTimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isDefaultDateAcceptable = this.validateDefaultDate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // If the entered time (this.timeValue) is the missing hour during daylight savings,
      // it needs to be updated to the time in this.state.dateTime to reflect the change and force a render.
      if (this.state.dateTime && _DateTimeUtils.default.isValidTime(this.timeValue, this.props.showSeconds)) {
        var displayedTime = _DateTimeUtils.default.getTime(this.state.dateTime.format(), this.props.showSeconds, this.initialTimeZone);
        if (this.timeValue !== displayedTime) {
          this.timeValue = displayedTime;
          this.forceUpdate();
        }
      }
    }
  }, {
    key: "handleOnSelect",
    value: function handleOnSelect(event, selectedDate) {
      this.dateValue = _DateUtil.default.formatISODate(selectedDate, this.state.dateFormat);
      var previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
      var updatedDateTime = _DateTimeUtils.default.syncDateTime(previousDateTime, selectedDate, this.timeValue, this.props.showSeconds);
      if (!previousDateTime || previousDateTime.format() !== updatedDateTime.format()) {
        this.checkAmbiguousTime(updatedDateTime);
      }
      if (this.props.onSelect) {
        this.props.onSelect(event, updatedDateTime.format());
      }
    }
  }, {
    key: "handleOnDateBlur",
    value: function handleOnDateBlur(event) {
      var _this2 = this;
      // Modern browsers support event.relatedTarget but event.relatedTarget returns null in IE 10 / IE 11.
      // IE 11 sets document.activeElement to the next focused element before the blur event is called.
      var activeTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;

      // Handle blur only if focus has moved out of the entire date time picker component.
      if (!this.dateTimePickerContainer.current.contains(activeTarget)) {
        var isDateTimeValid = _DateTimeUtils.default.isValidDateTime(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds);
        var enteredDateTime = isDateTimeValid ? this.state.dateTime : null;
        this.checkAmbiguousTime(enteredDateTime, function () {
          // If the entered time is ambiguous then do not handle blur just yet. It should be handled _after_
          // the ambiguity is resolved (i.e., after dismissing the Time Clarification dialog).
          event.persist();
          if (!(_this2.state.isAmbiguousTime && _this2.state.isTimeClarificationOpen)) {
            _this2.handleBlur(event, _this2.state.dateTime);
          }
        });
      }
    }
  }, {
    key: "handleOnTimeBlur",
    value: function handleOnTimeBlur(event) {
      var _this3 = this;
      // Modern browsers support event.relatedTarget but event.relatedTarget returns null in IE 10 / IE 11.
      // IE 11 sets document.activeElement to the next focused element before the blur event is called.
      var activeTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;

      // Handle blur only if focus has moved out of the entire date time picker component.
      if (!this.dateTimePickerContainer.current.contains(activeTarget)) {
        var isDateTimeValid = _DateTimeUtils.default.isValidDateTime(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds);
        var updatedDateTime;
        if (isDateTimeValid) {
          updatedDateTime = _DateTimeUtils.default.updateTime(this.state.dateTime, this.timeValue, this.props.showSeconds);
        }
        this.checkAmbiguousTime(updatedDateTime, function () {
          event.persist();
          // If the entered time is ambiguous then do not handle blur just yet. It should be handled _after_
          // the ambiguity is resolved (i.e., after dismissing the Time Clarification dialog).
          if (!(_this3.state.isAmbiguousTime && _this3.state.isTimeClarificationOpen)) {
            _this3.handleBlur(event, _this3.state.dateTime);
          }
        });
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event, momentDateTime) {
      if (this.props.onBlur) {
        var metadata = this.getMetadata(momentDateTime);
        this.props.onBlur(event, metadata);
      }
      this.containerHasFocus = false;
    }
  }, {
    key: "handleDateChange",
    value: function handleDateChange(event, date) {
      var updatedDateTime;
      var formattedDate = _DateUtil.default.formatISODate(date, 'YYYY-MM-DD');
      var isDateValid = _DateUtil.default.isValidDate(formattedDate, 'YYYY-MM-DD');
      var isTimeValid = _DateTimeUtils.default.isValidTime(this.timeValue, this.props.showSeconds);
      if (isDateValid) {
        this.dateValue = _DateUtil.default.formatISODate(date, this.state.dateFormat);
      }
      if (isDateValid) {
        var previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : _DateTimeUtils.default.createSafeDate(formattedDate, this.initialTimeZone);
        updatedDateTime = _DateTimeUtils.default.syncDateTime(previousDateTime, date, this.timeValue, this.props.showSeconds);

        // Conditions to subtract an hour when date is moved past the start of DST when navigating using keyboard shortcut keys.
        if (previousDateTime.isDST() && previousDateTime.hours() === 3) {
          var isHourSubtracted = false;
          if (!updatedDateTime.isDST()) {
            updatedDateTime.subtract(1, 'hours');
            isHourSubtracted = true;
          }
          if (!previousDateTime.subtract(1, 'days').isDST() && updatedDateTime.isDST()) {
            updatedDateTime.subtract(1, 'hours');
            isHourSubtracted = true;
          }

          // Condition to add back an hour if initial time was 3AM and date is moved past start of DST.
          // eslint-disable-next-line no-underscore-dangle
          if (previousDateTime && previousDateTime._a[3] === 3 && isHourSubtracted) {
            updatedDateTime.add(1, 'hours');
            isHourSubtracted = false;
          }
        }

        // Conditions to subtract an hour when date is moved past the start of DST when using keyboard to input (Numeric Keys and Delete).
        // eslint-disable-next-line no-underscore-dangle
        if (this.prevDateTime && this.prevDateTime._a[3] === 2 && this.prevDateTime.hours() === 3) {
          updatedDateTime.subtract(1, 'hours');
        }
        if (isTimeValid) {
          // Update the timeValue in case the updatedDateTime falls in the missing hour and needs to bump the hour up.
          this.timeValue = _DateTimeUtils.default.getTime(updatedDateTime.format(), this.props.showSeconds, this.initialTimeZone);
        }
      }

      // onChange should only be triggered when both the date and time values are valid or both values are empty/cleared.
      if (isDateValid && isTimeValid || this.dateValue === '' && this.timeValue === '') {
        this.handleChange(event, updatedDateTime);
      } else {
        this.setState({
          dateTime: updatedDateTime
        });
      }
    }
  }, {
    key: "handleDateChangeRaw",
    value: function handleDateChangeRaw(event, value) {
      this.dateValue = value;
      var validDate = _DateUtil.default.isValidDate(this.dateValue, this.state.dateFormat) && this.isDateTimeAcceptable(_DateTimeUtils.default.convertDateTimeStringToMomentObject(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds, this.initialTimeZone));
      if (!validDate) {
        this.prevDateTime = this.state.dateTime ? this.state.dateTime : this.prevDateTime;
        this.setState({
          dateTime: null
        });
      }
      this.handleChangeRaw(event, value);
    }
  }, {
    key: "handleTimeChange",
    value: function handleTimeChange(event, time) {
      this.timeValue = time;
      var validDate = _DateUtil.default.isValidDate(this.dateValue, this.state.dateFormat) && this.isDateTimeAcceptable(_DateTimeUtils.default.convertDateTimeStringToMomentObject(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds, this.initialTimeZone));
      var validTime = _DateTimeUtils.default.isValidTime(this.timeValue, this.props.showSeconds);
      var previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
      var dateChanged = false;
      if (event.type === 'keydown') {
        // Keyboard shortcut is pressed, split the time value into hour and minute inputs
        var timeArray = this.timeValue.split(':');
        if (event.key === 'n' || event.key === 'N') {
          // `N` sets Time to now, so Date should be set to today
          previousDateTime = _DateUtil.default.createSafeDate(_DateUtil.default.getCurrentDate(), this.initialTimeZone);
          dateChanged = true;
        } else if (event.key === '-' || event.key === '_') {
          // `-` subtracts 1 minute`from time, so check date to see if it needs changed
          if (!validDate) {
            // Date is not valid, set date to today making it valid
            previousDateTime = _DateUtil.default.createSafeDate(_DateUtil.default.getCurrentDate(), this.initialTimeZone);
            dateChanged = true;
          }
          if (timeArray[0] === '23' && timeArray[1] === '59') {
            // Time is 23:59 which means previous datetime should be on the wrong day, lower it by 1
            previousDateTime = previousDateTime.subtract(1, 'd');
            dateChanged = true;
          }
          var changedDateTime = _DateTimeUtils.default.updateTime(previousDateTime, this.timeValue, this.props.showSeconds);
          var checkHour = previousDateTime.clone().subtract(1, 'minute').hours();
          if (changedDateTime.isDST() && checkHour !== changedDateTime.hours()) {
            // Datetime falls under DST and hour is wrong using moment logic, so rewrite it using moment logic
            timeArray[0] = "0".concat(checkHour).slice(-2);
            this.timeValue = timeArray.join(':');
          }

          // Check if date is at or below minium
          if (previousDateTime.isBefore(_DateUtil.default.MIN_DATE.concat(' ', '00:00:00'))) {
            timeArray[0] = '00';
            timeArray[1] = '00';
            if (this.props.showSeconds) {
              timeArray[2] = '00';
            }
            this.timeValue = timeArray.join(':');
            previousDateTime = _DateTimeUtils.default.updateTime(_DateUtil.default.createSafeDate(_DateUtil.default.MIN_DATE, this.initialTimeZone), this.timeValue, this.props.showSeconds);
          }
        } else if (event.key === '=' || event.key === '+') {
          // `+` add 1 minute to time, so check date to see if it needs changed
          if (!validDate) {
            // Date is not valid, set date to today making it valid
            previousDateTime = _DateUtil.default.createSafeDate(_DateUtil.default.getCurrentDate(), this.initialTimeZone);
            dateChanged = true;
          }
          if (timeArray[0] === '00' && timeArray[1] === '00') {
            // Time is 00:00 which means previous datetime should be on the wrong day, increase it by 1
            previousDateTime = previousDateTime.add(1, 'd');
            dateChanged = true;
          }

          // Check if date is at or below minium
          if (previousDateTime.isAfter(_DateUtil.default.MAX_DATE.concat(' ', '23:59:59'))) {
            timeArray[0] = '23';
            timeArray[1] = '59';
            if (this.props.showSeconds) {
              timeArray[2] = '59';
            }
            this.timeValue = timeArray.join(':');
            previousDateTime = _DateTimeUtils.default.updateTime(_DateUtil.default.createSafeDate(_DateUtil.default.MAX_DATE, this.initialTimeZone), this.timeValue, this.props.showSeconds);
          }
        } else if (this.props.timeVariant === _DateTimeUtils.default.FORMAT_12_HOUR && (event.key === 'a' || event.key === 'A' || event.key === 'p' || event.key === 'P')) {
          // `A` and `P`, changes the meridiem, so check date to see if it needs changed
          if (!validDate) {
            // Date is not valid, set date to today making it valid
            previousDateTime = _DateUtil.default.createSafeDate(_DateUtil.default.getCurrentDate(), this.initialTimeZone);
            dateChanged = true;
          }
        }
      }
      if (dateChanged) {
        this.dateValue = _DateUtil.default.formatISODate(previousDateTime.format('YYYY-MM-DD'), this.state.dateFormat);
        validDate = _DateUtil.default.isValidDate(this.dateValue, this.state.dateFormat) && this.isDateTimeAcceptable(_DateTimeUtils.default.convertDateTimeStringToMomentObject(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds, this.initialTimeZone));
      }

      // If both date and time are valid, check if the time is the missing hour and invoke onChange.
      // If the date is valid but time is invalid, the time in the dateTime state needs to be cleared and render.
      if (validDate && validTime) {
        var updatedDateTime = _DateTimeUtils.default.updateTime(previousDateTime, this.timeValue, this.props.showSeconds);
        if (event.keyCode === KeyCode.KEY_DOWN && previousDateTime && updatedDateTime && previousDateTime.format() === updatedDateTime.format()) {
          updatedDateTime.subtract(1, 'hours');
        }
        var displayedTimeValue = this.timeValue;

        // If updatedDateTime is valid, update timeValue (value in the time input) to reflect updatedDateTime since
        // it could have subtracted an hour from above to account for the missing hour.
        if (updatedDateTime) {
          displayedTimeValue = _DateTimeUtils.default.getTime(updatedDateTime.format(), this.props.showSeconds, this.initialTimeZone);
        }
        this.handleChangeRaw(event, displayedTimeValue);
        this.handleChange(event, updatedDateTime);
      } else if (this.dateValue === '' && this.timeValue === '') {
        this.handleChangeRaw(event, this.timeValue);
        this.handleChange(event, null);
      } else {
        if (!validDate && validTime) {
          var _updatedDateTime = _DateTimeUtils.default.updateTime(previousDateTime, this.timeValue, this.props.showSeconds);
          this.setState({
            dateTime: _updatedDateTime
          });
        }
        this.handleChangeRaw(event, this.timeValue);
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event, newDateTime) {
      this.setState({
        dateTime: newDateTime
      });

      // If the new time is ambiguous and the old time is not, do not fire onChange.
      // This allows a user to use TimeClarification before onChange is fired.
      if (this.props.onChange && (this.state.isAmbiguousTime || !_DateTimeUtils.default.checkAmbiguousTime(newDateTime))) {
        var metadata = this.getMetadata(newDateTime);
        this.props.onChange(event, newDateTime !== null && newDateTime !== void 0 && newDateTime.isValid() ? newDateTime.format() : '', metadata);
      }
    }
  }, {
    key: "handleChangeRaw",
    value: function handleChangeRaw(event, value) {
      if (this.props.onChangeRaw) {
        var metadata = this.getMetadata(value);
        this.props.onChangeRaw(event, value, metadata);
      }
    }
  }, {
    key: "handleOnDateInputFocus",
    value: function handleOnDateInputFocus(event) {
      this.handleOnInputFocus(event);
    }
  }, {
    key: "handleOnTimeInputFocus",
    value: function handleOnTimeInputFocus(event) {
      this.handleOnInputFocus(event);
    }
  }, {
    key: "handleOnInputFocus",
    value: function handleOnInputFocus(event) {
      this.handleFocus(event);
      if (!this.isDefaultDateAcceptable) {
        this.dateValue = '';
        this.timeValue = '';
        this.handleChange(event, null);
        this.isDefaultDateAcceptable = true;
      }
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      // Handle focus only if focus is gained from outside of the entire date time picker component.
      // For IE 10/11 we cannot rely on event.relatedTarget since it is always null. Need to also check if containerHasFocus is false to
      // determine if the date-time picker component did not have focus but will now gain focus.
      if (this.props.onFocus && !this.containerHasFocus && !this.dateTimePickerContainer.current.contains(event.relatedTarget)) {
        this.props.onFocus(event);
        this.containerHasFocus = true;
      }
    }
  }, {
    key: "handleOnCalendarButtonClick",
    value: function handleOnCalendarButtonClick(event) {
      if (!this.isDefaultDateAcceptable && !this.validateDefaultDate()) {
        this.dateValue = '';
        this.timeValue = '';
        this.handleChange(event, null);
      } else {
        this.isDefaultDateAcceptable = true;
      }
    }
  }, {
    key: "handleDaylightSavingButtonClick",
    value: function handleDaylightSavingButtonClick(event) {
      this.setState({
        isTimeClarificationOpen: false
      });
      var newDateTime = this.state.dateTime.clone();
      if (!newDateTime.isDST()) {
        newDateTime.subtract(1, 'hour');
        this.setState({
          dateTime: newDateTime
        });
        if (this.props.onChange) {
          var metadata = this.getMetadata(newDateTime);
          this.props.onChange(event, newDateTime !== null && newDateTime !== void 0 && newDateTime.isValid() ? newDateTime.format() : '', metadata);
        }
      } else if (this.props.onChange && !this.wasOffsetButtonClicked) {
        // This fires onChange if the TimeClarification dialog was launched without using the OffsetButton.
        // If the user clicks the OffsetButton, onChange should have already been fired and does not need to be fired
        // again (unless they change the DateTime).
        var _metadata = this.getMetadata(newDateTime);
        this.props.onChange(event, newDateTime !== null && newDateTime !== void 0 && newDateTime.isValid() ? newDateTime.format() : '', _metadata);
      }

      // When the Time Clarification dialog was launched _without_ using the Offset button, 'blur' event
      // needs to be handled appropriately upon dismissal of the dialog (i.e. after DST resolution).
      if (!this.wasOffsetButtonClicked) {
        this.handleBlur(event, newDateTime);
      }
      this.wasOffsetButtonClicked = false;
    }
  }, {
    key: "handleStandardTimeButtonClick",
    value: function handleStandardTimeButtonClick(event) {
      this.setState({
        isTimeClarificationOpen: false
      });
      var newDateTime = this.state.dateTime.clone();
      if (newDateTime.isDST()) {
        newDateTime.add(1, 'hour');
        this.setState({
          dateTime: newDateTime
        });
        if (this.props.onChange) {
          var metadata = this.getMetadata(newDateTime);
          this.props.onChange(event, newDateTime !== null && newDateTime !== void 0 && newDateTime.isValid() ? newDateTime.format() : '', metadata);
        }
      } else if (this.props.onChange && !this.wasOffsetButtonClicked) {
        // This fires onChange if the TimeClarification dialog was launched without using the OffsetButton.
        // If the user clicks the OffsetButton, onChange should have already been fired and does not need to be fired
        // again (unless they change the DateTime).
        var _metadata2 = this.getMetadata(newDateTime);
        this.props.onChange(event, newDateTime !== null && newDateTime !== void 0 && newDateTime.isValid() ? newDateTime.format() : '', _metadata2);
      }

      // When the Time Clarification dialog was launched _without_ using the Offset button, 'blur' event
      // needs to be handled appropriately upon dismissal of the dialog (i.e. after DST resolution).
      if (!this.wasOffsetButtonClicked) {
        this.handleBlur(event, newDateTime);
      }
      this.wasOffsetButtonClicked = false;
    }
  }, {
    key: "handleOffsetButtonClick",
    value: function handleOffsetButtonClick() {
      this.wasOffsetButtonClicked = true;
      this.setState(function (prevState) {
        return {
          isTimeClarificationOpen: !prevState.isTimeClarificationOpen
        };
      });
    }
  }, {
    key: "handleOnRequestClose",
    value: function handleOnRequestClose() {
      this.setState({
        isTimeClarificationOpen: false
      });
    }
  }, {
    key: "getMetadata",
    value: function getMetadata(momentDateTime) {
      var tempDateTime = momentDateTime && _DateTimeUtils.default.isMomentObject(momentDateTime) ? momentDateTime.clone() : null;
      if (_DateUtil.default.isValidDate(this.dateValue, this.state.dateFormat)) {
        var enteredDateTime = _DateTimeUtils.default.convertDateTimeStringToMomentObject(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds, this.initialTimeZone);

        // this.state.dateTime does not get updated if the entered date is outside the minDate/maxDate range or an excluded date.
        // In this case, we need to use the date that was entered instead of the this.state.dateTime.
        if (enteredDateTime && !enteredDateTime.isSame(tempDateTime, 'day')) {
          tempDateTime = enteredDateTime;
        }
      }
      var iSOString = '';
      var isCompleteDateTime = _DateTimeUtils.default.isValidDateTime(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds);
      if (isCompleteDateTime && tempDateTime) {
        iSOString = tempDateTime.format();
      }
      var timeValue = this.timeValue || '';
      if (iSOString) {
        timeValue = _DateTimeUtils.default.getTime(iSOString, this.props.showSeconds, this.initialTimeZone);
      }
      var isValid = false;
      var inputValue = "".concat(this.dateValue ? this.dateValue : '', " ").concat(timeValue).trim();
      if (inputValue === '' || isCompleteDateTime && tempDateTime && this.isDateTimeAcceptable(tempDateTime)) {
        isValid = true;
      }
      var isAmbiguous = false;
      if (isCompleteDateTime && tempDateTime) {
        isAmbiguous = _DateTimeUtils.default.checkAmbiguousTime(tempDateTime);
      }
      var metadata = {
        iSO: iSOString,
        inputValue: inputValue,
        dateValue: this.dateValue || '',
        timeValue: timeValue,
        isAmbiguousHour: isAmbiguous,
        isCompleteValue: isCompleteDateTime,
        isValidValue: isValid
      };
      return metadata;
    }
  }, {
    key: "checkAmbiguousTime",
    value: function checkAmbiguousTime(dateTime, onCheckCallback) {
      // To prevent multiple time clarification dialogs from rendering, ensure that it is not open before checking for the ambiguous hour.
      // One situation is when using the right arrow key to move focus from the hour input to the minute input, it will invoke onBlur and check for ambiguous hour.
      // If the hour is ambiguous, the dialog would display and steal focus from the minute input, which again will invoke onBlur and check for ambiguous hour.
      if (this.state.isTimeClarificationOpen) {
        return;
      }
      var isDateTimeAmbiguous = false;
      var isOldTimeAmbiguous = this.state.isAmbiguousTime;
      if (dateTime && dateTime.isValid()) {
        var tempDateTime = dateTime.clone();
        isDateTimeAmbiguous = _DateTimeUtils.default.checkAmbiguousTime(tempDateTime);
      }
      this.setState({
        isAmbiguousTime: isDateTimeAmbiguous,
        isTimeClarificationOpen: isDateTimeAmbiguous && !isOldTimeAmbiguous
      }, onCheckCallback);
    }
  }, {
    key: "isDateTimeAcceptable",
    value: function isDateTimeAcceptable(newDateTime) {
      var isAcceptable = true;
      if (_DateUtil.default.isDateOutOfRange(newDateTime, _DateTimeUtils.default.createSafeDate(_DateUtil.default.getMinDate(this.props.minDate), this.initialTimeZone), _DateTimeUtils.default.createSafeDate(_DateUtil.default.getMaxDate(this.props.maxDate), this.initialTimeZone))) {
        isAcceptable = false;
      }
      if (_DateUtil.default.isDateExcluded(newDateTime, this.props.excludeDates)) {
        isAcceptable = false;
      }
      return isAcceptable;
    }
  }, {
    key: "validateDefaultDate",
    value: function validateDefaultDate() {
      return this.isDateTimeAcceptable(this.state.dateTime);
    }
  }, {
    key: "renderTimeClarification",
    value: function renderTimeClarification() {
      return /*#__PURE__*/_react.default.createElement(_TimeClarification.default, {
        ambiguousDateTime: this.state.dateTime.format(),
        disabled: this.props.disabled,
        isOpen: this.state.isTimeClarificationOpen,
        isOffsetButtonHidden: !this.state.isAmbiguousTime,
        onDaylightSavingButtonClick: this.handleDaylightSavingButtonClick,
        onStandardTimeButtonClick: this.handleStandardTimeButtonClick,
        onOffsetButtonClick: this.handleOffsetButtonClick,
        onRequestClose: this.handleOnRequestClose,
        onBlur: this.handleOnTimeBlur,
        onFocus: this.handleFocus,
        initialTimeZone: this.initialTimeZone
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props = this.props,
        dateInputAttributes = _this$props.dateInputAttributes,
        disabled = _this$props.disabled,
        excludeDates = _this$props.excludeDates,
        filterDate = _this$props.filterDate,
        includeDates = _this$props.includeDates,
        initialTimeZone = _this$props.initialTimeZone,
        isIncomplete = _this$props.isIncomplete,
        isInvalid = _this$props.isInvalid,
        isInvalidMeridiem = _this$props.isInvalidMeridiem,
        onBlur = _this$props.onBlur,
        onChange = _this$props.onChange,
        onChangeRaw = _this$props.onChangeRaw,
        onClickOutside = _this$props.onClickOutside,
        onFocus = _this$props.onFocus,
        onRequestClose = _this$props.onRequestClose,
        onSelect = _this$props.onSelect,
        maxDate = _this$props.maxDate,
        minDate = _this$props.minDate,
        name = _this$props.name,
        required = _this$props.required,
        showSeconds = _this$props.showSeconds,
        timeInputAttributes = _this$props.timeInputAttributes,
        value = _this$props.value,
        timeVariant = _this$props.timeVariant,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var dateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
      var dateValue = _DateUtil.default.formatMomentDate(dateTime, 'YYYY-MM-DD');
      var theme = this.context;
      var atMaxDate = this.state.dateTime ? dateTime.isAfter(_DateTimeUtils.default.createSafeDate(_DateUtil.default.MAX_DATE.concat(' ', '23:58:59'), this.initialTimeZone)) : false;
      var atMinDate = this.state.dateTime ? dateTime.isBefore(_DateTimeUtils.default.createSafeDate(_DateUtil.default.MIN_DATE.concat(' ', '00:01:00'), this.initialTimeZone)) : false;
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
        className: cx('date-time-picker', theme.className),
        ref: this.dateTimePickerContainer
      }), /*#__PURE__*/_react.default.createElement("input", {
        // Create a hidden input for storing the name and value attributes to use when submitting the form.
        // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
        "data-terra-date-time-input-hidden": true,
        type: "hidden",
        name: name,
        value: dateTime !== null && dateTime !== void 0 && dateTime.isValid() ? dateTime.format() : ''
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('date-facade')
      }, /*#__PURE__*/_react.default.createElement(_terraDatePicker.default, {
        onCalendarButtonClick: this.handleOnCalendarButtonClick,
        onChange: this.handleDateChange,
        onChangeRaw: this.handleDateChangeRaw,
        onSelect: this.handleOnSelect,
        onClickOutside: onClickOutside,
        onRequestClose: onRequestClose,
        onBlur: this.handleOnDateBlur,
        onFocus: this.handleOnDateInputFocus,
        excludeDates: excludeDates,
        filterDate: filterDate,
        includeDates: includeDates,
        inputAttributes: dateInputAttributes,
        maxDate: _DateUtil.default.getMaxDate(maxDate),
        minDate: _DateUtil.default.getMinDate(minDate),
        selectedDate: dateValue,
        value: dateValue,
        name: "input",
        disabled: disabled,
        disableButtonFocusOnClose: true,
        isIncomplete: isIncomplete,
        isInvalid: isInvalid,
        required: required,
        initialTimeZone: this.initialTimeZone,
        isDefaultDateAcceptable: true
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('time-facade')
      }, /*#__PURE__*/_react.default.createElement(_terraTimeInput.default, {
        onBlur: this.handleOnTimeBlur,
        onChange: this.handleTimeChange,
        onFocus: this.handleOnTimeInputFocus,
        inputAttributes: timeInputAttributes,
        name: "input",
        value: this.timeValue,
        disabled: disabled,
        variant: timeVariant,
        refCallback: function refCallback(inputRef) {
          _this4.hourInput = inputRef;
        },
        showSeconds: showSeconds,
        isIncomplete: isIncomplete,
        isInvalid: isInvalid,
        isInvalidMeridiem: isInvalidMeridiem,
        required: required,
        atMaxDate: atMaxDate,
        atMinDate: atMinDate
      }), this.state.isAmbiguousTime ? this.renderTimeClarification() : null));
    }
  }]);
  return DateTimePicker;
}(_react.default.Component);
DateTimePicker.propTypes = propTypes;
DateTimePicker.defaultProps = defaultProps;
DateTimePicker.contextType = _terraThemeContext.default;
var _default = (0, _reactIntl.injectIntl)(DateTimePicker);
exports.default = _default;