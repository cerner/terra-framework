"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _keycodeJs = require("keycode-js");
var _reactIntl = require("react-intl");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _v = _interopRequireDefault(require("uuid/v4"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _IconCalendar = _interopRequireDefault(require("terra-icon/lib/icon/IconCalendar"));
var _terraFormInput = _interopRequireDefault(require("terra-form-input"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var _DateUtil = _interopRequireDefault(require("./DateUtil"));
var _DateInputLayout = _interopRequireDefault(require("./_DateInputLayout"));
var _date_utils = require("./react-datepicker/date_utils");
var _DatePickerModule = _interopRequireDefault(require("./DatePicker.module.scss"));
var _excluded = ["ariaLabel", "buttonRefCallback", "firstInputRefCallback", "id", "initialTimeZone", "inputAttributes", "intl", "isIncomplete", "isInvalid", "name", "onBlur", "onButtonFocus", "onChange", "onClick", "onFocus", "onKeyDown", "required", "useExternalFormatMask", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var cx = _bind.default.bind(_DatePickerModule.default);
var propTypes = {
  /**
   * String that labels the current element. 'aria-label' must be present for accessibility.
   */
  ariaLabel: _propTypes.default.string,
  /**
   * Callback ref to pass into the calendar button dom element.
   */
  buttonRefCallback: _propTypes.default.func,
  /**
   * Callback ref to pass into the first input dom element from Date Input components based on the date format order.
   */
  firstInputRefCallback: _propTypes.default.func,
  /**
   * The id to append to the date input wrapper.
   */
  id: _propTypes.default.string,
  /**
   * @private
   * Timezone value to indicate in which timezone the date component is rendered.
   * The value provided should be a valid [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) string, else will default to browser/local timezone.
   */
  initialTimeZone: _propTypes.default.string,
  /**
   * Custom input attributes to apply to the date input.
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
  * Whether the input displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalid: _propTypes.default.bool,
  /**
   * Name of the date input.
   */
  name: _propTypes.default.string,
  /**
   * A callback function triggered when the input or calendar button loses focus.
   */
  onBlur: _propTypes.default.func,
  /**
   * A callback function triggered when the calendar button receives focus.
   */
  onButtonFocus: _propTypes.default.func,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: _propTypes.default.func,
  /**
   * The onInputClick callback function from react-datepicker to show the picker when clicked.
   */
  onClick: _propTypes.default.func,
  /**
   * A callback function triggered when the date input receives focus.
   */
  onFocus: _propTypes.default.func,
  /**
   * The onInputKeyDown callback function from react-datepicker to handle keyboard navigation.
   */
  onKeyDown: _propTypes.default.func,
  /**
   * Whether or not the date is required.
   */
  required: _propTypes.default.bool,
  /**
   * @private
   * Internal prop for showing date picker.
   */
  shouldShowPicker: _propTypes.default.bool,
  /**
   * @private
   * NOTICE: Internal prop to be used only by Terra framework. This component provides a built-in format mask that is
   * required to be displayed to users for proper accessibility and must not be removed. 'DatePickerField' is permitted to set
   * this prop because it provides the same format mask in its 'help' prop.
  */
  useExternalFormatMask: _propTypes.default.bool,
  /**
   * The selected or entered date value to display in the date input.
   */
  value: _propTypes.default.string
};
var defaultProps = {
  ariaLabel: undefined,
  buttonRefCallback: undefined,
  id: undefined,
  inputAttributes: undefined,
  isIncomplete: false,
  isInvalid: false,
  name: undefined,
  onBlur: undefined,
  onButtonFocus: undefined,
  onChange: undefined,
  onClick: undefined,
  onFocus: undefined,
  onKeyDown: undefined,
  required: false,
  useExternalFormatMask: false,
  value: undefined
};
var DatePickerInput = function DatePickerInput(props) {
  var ariaLabel = props.ariaLabel,
    buttonRefCallback = props.buttonRefCallback,
    firstInputRefCallback = props.firstInputRefCallback,
    id = props.id,
    initialTimeZone = props.initialTimeZone,
    inputAttributes = props.inputAttributes,
    intl = props.intl,
    isIncomplete = props.isIncomplete,
    isInvalid = props.isInvalid,
    name = props.name,
    onBlur = props.onBlur,
    onButtonFocus = props.onButtonFocus,
    onChange = props.onChange,
    onClick = props.onClick,
    onFocus = props.onFocus,
    onKeyDown = props.onKeyDown,
    required = props.required,
    useExternalFormatMask = props.useExternalFormatMask,
    value = props.value,
    customProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isFocused = _useState2[0],
    setFocused = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    dayInitialFocused = _useState4[0],
    setDayInitialFocused = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    monthInitialFocused = _useState6[0],
    setMonthInitialFocused = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    yearInitialFocused = _useState8[0],
    setYearInitialFocused = _useState8[1];
  var editOnkeyDown = (0, _react.useRef)(false);
  var theme = _react.default.useContext(_terraThemeContext.default);
  // variables to store ref's for day, month and year input
  var dayInputRef;
  var monthInputRef;
  var yearInputRef;
  var onCalendarButtonClick = customProps.onCalendarButtonClick,
    shouldShowPicker = customProps.shouldShowPicker;
  delete customProps.onCalendarButtonClick;
  delete customProps.shouldShowPicker;
  var idFromInputAttributes;
  var monthInputId;
  var dayInputId;
  var yearInputId;
  if (inputAttributes && inputAttributes.id) {
    // Get the inputAttributes.id and set it on the outer div and delete inputAttributes.id to prevent from setting the same id on all three inputs.
    // Create new ids to set on each input using the inputAttributes.id.
    idFromInputAttributes = inputAttributes.id;
    monthInputId = idFromInputAttributes.concat('-terra-date-picker-month');
    dayInputId = idFromInputAttributes.concat('-terra-date-picker-day');
    yearInputId = idFromInputAttributes.concat('-terra-date-picker-year');
    delete inputAttributes.id;
  }
  var additionalInputProps = _objectSpread(_objectSpread({}, customProps), inputAttributes);
  var momentDateFormat = (0, _react.useMemo)(function () {
    return _DateUtil.default.getFormatByLocale(intl.locale);
  }, [intl.locale]);
  var dateValue = (0, _react.useMemo)(function () {
    return _DateUtil.default.convertToISO8601(value, momentDateFormat);
  }, [momentDateFormat, value]);
  var dateFormatOrder = _DateUtil.default.getDateFormatOrder(momentDateFormat);
  var separator = _DateUtil.default.getDateSeparator(intl.locale);
  var previousDateValueRef = (0, _react.useRef)();
  var date = (0, _react.useMemo)(function () {
    return {
      day: '',
      month: '',
      year: ''
    };
  }, []);
  // Sets the date state based on the passed in value prop, or if it changes via a calendar click.
  if (_DateUtil.default.isValidDate(value, momentDateFormat)) {
    date = _DateUtil.default.getDateInputValues(_DateUtil.default.dateOrder.YMD, dateValue, '-');
    previousDateValueRef.current = date;
    editOnkeyDown.current = false;
  } else {
    date = _DateUtil.default.validdateDateValues(value, dateFormatOrder, editOnkeyDown, previousDateValueRef);
  }

  // Triggers the onClick callback to launch the dropdown picker for the scenario when the default date is invalid and
  // the calendar button is clicked which should clear the value and launch the dropdown picker
  (0, _react.useEffect)(function () {
    if (shouldShowPicker && onClick) {
      onClick();
    }
  }, [shouldShowPicker, onClick]);

  /**
   * Moves focus to the correct input depending on date ordering. Focus changing is
   * disabled if a complete date has been entered in order to make single input
   * corrections easier, and is re-enabled if the whole date is erased.
   * @param {string} inputValue - The value from the current input.
   * @param {number} type - The input type, based on DateUtil.inputType.
   */
  var moveFocusOnChange = function moveFocusOnChange(inputValue, type) {
    if (dateFormatOrder === _DateUtil.default.dateOrder.MDY) {
      if (inputValue.length === 2) {
        if (type === _DateUtil.default.inputType.MONTH) {
          dayInputRef.focus();
        } else {
          yearInputRef.focus();
        }
      }
    } else if (dateFormatOrder === _DateUtil.default.dateOrder.DMY) {
      if (inputValue.length === 2) {
        if (type === _DateUtil.default.inputType.DAY) {
          monthInputRef.focus();
        } else {
          yearInputRef.focus();
        }
      }
    } else if (dateFormatOrder === _DateUtil.default.dateOrder.YMD) {
      if (inputValue.length === 4) {
        monthInputRef.focus();
      } else if (inputValue.length === 2 && type === _DateUtil.default.inputType.MONTH) {
        dayInputRef.focus();
      }
    }
  };

  /**
   * Sets date value for the day, month, and year.
   * @param {object} event - Event object
   * @param {string} inputValue - The input value to set in state.
   * @param {number} type - The inputType (day, month, or year).
   */
  var setDate = function setDate(event, inputValue, type) {
    if (type === _DateUtil.default.inputType.DAY) {
      date.day = inputValue;
    } else if (type === _DateUtil.default.inputType.MONTH) {
      date.month = inputValue;
    } else {
      date.year = inputValue;
    }
    if (event.type !== 'keydown') {
      moveFocusOnChange(inputValue, type);
    }
  };

  /**
   * Sets the day, month and year based on input values, formats them
   * based on the date format variant, and passes the formatted date to onChange.
   */
  var handleDateChange = function handleDateChange(event, inputValue, type) {
    var _date = date,
      day = _date.day,
      month = _date.month,
      year = _date.year;
    if (type === _DateUtil.default.inputType.DAY) {
      day = inputValue;
      setDayInitialFocused(false);
    } else if (type === _DateUtil.default.inputType.MONTH) {
      month = inputValue;
      setMonthInitialFocused(false);
    } else {
      year = inputValue;
      setYearInitialFocused(false);
    }
    var inputDate;
    var formattedDate;
    if (day.length === 2 && month.length === 2 && year.length === 4) {
      inputDate = _DateUtil.default.convertToISO8601("".concat(year, "-").concat(month, "-").concat(day), _DateUtil.default.ISO_EXTENDED_DATE_FORMAT);
      formattedDate = _DateUtil.default.strictFormatISODate(inputDate, momentDateFormat);
    }
    if (onChange) {
      if (_DateUtil.default.isValidDate(formattedDate, momentDateFormat)) {
        onChange(event, formattedDate);
      } else if (day === '' && month === '' && year === '') {
        onChange(event, '');
      } else {
        var dateString;
        if (dateFormatOrder === _DateUtil.default.dateOrder.MDY) {
          dateString = month + separator + day + separator + year;
        } else if (dateFormatOrder === _DateUtil.default.dateOrder.DMY) {
          dateString = day + separator + month + separator + year;
        } else {
          dateString = year + separator + month + separator + day;
        }
        onChange(event, dateString);
      }
    }
    setDate(event, inputValue, type);
  };
  var handleDayChange = function handleDayChange(event) {
    var inputValue = event.target.value;
    if (!_DateUtil.default.validDateInput(inputValue)) {
      return;
    }

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have to
    // check the length of inputValue to make sure that it is less then 2.
    if (inputValue === date.day || inputValue.length > 2 || Number(inputValue) > 31 || inputValue === '00') {
      return;
    }

    // If the change made was not a deletion of a digit, then prepend '0'
    // when the input value is a single digit value between 4 and 9
    if (inputValue.length >= date.day.length) {
      var digitsToPrependZero = ['4', '5', '6', '7', '8', '9'];
      if (digitsToPrependZero.indexOf(inputValue) > -1) {
        inputValue = "0".concat(inputValue);
      }
    }
    handleDateChange(event, inputValue, _DateUtil.default.inputType.DAY);
  };
  var handleMonthChange = function handleMonthChange(event) {
    var inputValue = event.target.value;
    if (!_DateUtil.default.validDateInput(inputValue)) {
      return;
    }

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have to
    // check the length of inputValue to make sure that it is less then 2.
    if (inputValue === date.month || inputValue.length > 2 || Number(inputValue) > 12 || inputValue === '00') {
      return;
    }

    // If the change made was not a deletion of a digit, then prepend '0'
    // when the input value is a single digit value between 2 and 9
    if (inputValue.length >= date.month.length) {
      var digitsToPrependZero = ['2', '3', '4', '5', '6', '7', '8', '9'];
      if (digitsToPrependZero.indexOf(inputValue) > -1) {
        inputValue = "0".concat(inputValue);
      }
    }
    handleDateChange(event, inputValue, _DateUtil.default.inputType.MONTH);
  };
  var handleYearChange = function handleYearChange(event) {
    var inputValue = event.target.value;
    if (!_DateUtil.default.validDateInput(inputValue)) {
      return;
    }

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have to
    // check the length of inputValue to make sure that it is less then 4.
    if (inputValue === date.year || inputValue.length > 4) {
      return;
    }

    // Ignore the 3rd entry if the first two digits are not 19, 20 or 21
    if (inputValue.length === 3 && (Number(inputValue) < 190 || Number(inputValue) > 210)) {
      return;
    }

    // Ignore the 4th entry if the year value is not between MIN_YEAR and MAX_YEAR
    if (inputValue.length === 4 && (Number(inputValue) < Number(_DateUtil.default.MIN_YEAR) || Number(inputValue) > Number(_DateUtil.default.MAX_YEAR))) {
      return;
    }
    handleDateChange(event, inputValue, _DateUtil.default.inputType.YEAR);
  };
  var setInputFocus = function setInputFocus(event, inputRef, selectionStart, selectionEnd) {
    inputRef.focus();
    inputRef.setSelectionRange(selectionStart, selectionEnd);
    event.preventDefault();
  };
  var handleDayInputKeydown = function handleDayInputKeydown(event) {
    if (inputAttributes !== null && inputAttributes !== void 0 && inputAttributes.readOnly) {
      return;
    }
    if (event.keyCode === _keycodeJs.KEY_UP) {
      var incrementedDay = _DateUtil.default.incrementDay(date.day, date.month, date.year);
      if (incrementedDay !== date.day) {
        handleDateChange(event, incrementedDay, _DateUtil.default.inputType.DAY);
      }
    } else if (event.keyCode === _keycodeJs.KEY_DOWN) {
      var decrementedDay = _DateUtil.default.decrementDay(date.day, date.month, date.year);
      if (decrementedDay !== date.day) {
        handleDateChange(event, decrementedDay, _DateUtil.default.inputType.DAY);
      }
    }
    if (dateFormatOrder === _DateUtil.default.dateOrder.MDY) {
      if ((event.keyCode === _keycodeJs.KEY_LEFT || event.keyCode === _keycodeJs.KEY_DELETE || event.keyCode === _keycodeJs.KEY_BACK_SPACE) && dayInputRef.selectionEnd === 0) {
        setInputFocus(event, monthInputRef, date.month.length, date.month.length);
      } else if (event.keyCode === _keycodeJs.KEY_RIGHT && dayInputRef.selectionEnd === date.day.length) {
        setInputFocus(event, yearInputRef, 0, 0);
      }
    } else if (dateFormatOrder === _DateUtil.default.dateOrder.DMY) {
      if (event.keyCode === _keycodeJs.KEY_RIGHT && dayInputRef.selectionEnd === date.day.length) {
        setInputFocus(event, monthInputRef, 0, 0);
      }
    } else if (dateFormatOrder === _DateUtil.default.dateOrder.YMD) {
      if ((event.keyCode === _keycodeJs.KEY_LEFT || event.keyCode === _keycodeJs.KEY_DELETE || event.keyCode === _keycodeJs.KEY_BACK_SPACE) && dayInputRef.selectionEnd === 0) {
        setInputFocus(event, monthInputRef, date.month.length, date.month.length);
      }
    }
  };
  var handleMonthInputKeydown = function handleMonthInputKeydown(event) {
    if (inputAttributes !== null && inputAttributes !== void 0 && inputAttributes.readOnly) {
      return;
    }
    if (event.keyCode === _keycodeJs.KEY_UP) {
      var incrementedMonth = _DateUtil.default.incrementMonth(date.month);
      if (incrementedMonth !== date.month) {
        handleDateChange(event, incrementedMonth, _DateUtil.default.inputType.MONTH);
      }
    } else if (event.keyCode === _keycodeJs.KEY_DOWN) {
      var decrementedMonth = _DateUtil.default.decrementMonth(date.month);
      if (decrementedMonth !== date.month) {
        handleDateChange(event, decrementedMonth, _DateUtil.default.inputType.MONTH);
      }
    }
    if (dateFormatOrder === _DateUtil.default.dateOrder.MDY) {
      if (event.keyCode === _keycodeJs.KEY_RIGHT && monthInputRef.selectionEnd === date.month.length) {
        setInputFocus(event, dayInputRef, 0, 0);
      }
    } else if (dateFormatOrder === _DateUtil.default.dateOrder.DMY) {
      if ((event.keyCode === _keycodeJs.KEY_LEFT || event.keyCode === _keycodeJs.KEY_DELETE || event.keyCode === _keycodeJs.KEY_BACK_SPACE) && monthInputRef.selectionEnd === 0) {
        setInputFocus(event, dayInputRef, date.day.length, date.day.length);
      } else if (event.keyCode === _keycodeJs.KEY_RIGHT && monthInputRef.selectionEnd === date.month.length) {
        setInputFocus(event, yearInputRef, 0, 0);
      }
    } else if (dateFormatOrder === _DateUtil.default.dateOrder.YMD) {
      if ((event.keyCode === _keycodeJs.KEY_LEFT || event.keyCode === _keycodeJs.KEY_DELETE || event.keyCode === _keycodeJs.KEY_BACK_SPACE) && monthInputRef.selectionEnd === 0) {
        setInputFocus(event, yearInputRef, date.year.length, date.year.length);
      } else if (event.keyCode === _keycodeJs.KEY_RIGHT && monthInputRef.selectionEnd === date.month.length) {
        setInputFocus(event, dayInputRef, 0, 0);
      }
    }
  };
  var handleYearInputKeydown = function handleYearInputKeydown(event) {
    if (inputAttributes !== null && inputAttributes !== void 0 && inputAttributes.readOnly) {
      return;
    }
    if (event.keyCode === _keycodeJs.KEY_UP) {
      var incrementedYear = _DateUtil.default.incrementYear(date.year);
      if (incrementedYear !== date.year) {
        handleDateChange(event, incrementedYear, _DateUtil.default.inputType.YEAR);
      }
    } else if (event.keyCode === _keycodeJs.KEY_DOWN) {
      var decrementedYear = _DateUtil.default.decrementYear(date.year);
      if (decrementedYear !== date.year) {
        handleDateChange(event, decrementedYear, _DateUtil.default.inputType.YEAR);
      }
    }
    if (dateFormatOrder === _DateUtil.default.dateOrder.MDY) {
      if ((event.keyCode === _keycodeJs.KEY_LEFT || event.keyCode === _keycodeJs.KEY_DELETE || event.keyCode === _keycodeJs.KEY_BACK_SPACE) && yearInputRef.selectionEnd === 0) {
        setInputFocus(event, dayInputRef, date.day.length, date.day.length);
      }
    } else if (dateFormatOrder === _DateUtil.default.dateOrder.DMY) {
      if ((event.keyCode === _keycodeJs.KEY_LEFT || event.keyCode === _keycodeJs.KEY_DELETE || event.keyCode === _keycodeJs.KEY_BACK_SPACE) && yearInputRef.selectionEnd === 0) {
        setInputFocus(event, monthInputRef, date.month.length, date.month.length);
      }
    } else if (dateFormatOrder === _DateUtil.default.dateOrder.YMD) {
      if (event.keyCode === _keycodeJs.KEY_RIGHT && yearInputRef.selectionEnd === date.year.length) {
        setInputFocus(event, monthInputRef, 0, 0);
      }
    }
  };
  var handleInputKeydown = function handleInputKeydown(event, inputType) {
    editOnkeyDown.current = true;
    var _date2 = date,
      day = _date2.day,
      month = _date2.month,
      year = _date2.year;
    var inputDate;
    var formattedDate;
    if (day.length === 2 && month.length === 2 && year.length === 4) {
      inputDate = _DateUtil.default.convertToISO8601("".concat(year, "-").concat(month, "-").concat(day), _DateUtil.default.ISO_EXTENDED_DATE_FORMAT);
      formattedDate = _DateUtil.default.strictFormatISODate(inputDate, momentDateFormat);
    }
    var validDate = _DateUtil.default.isValidDate(formattedDate, momentDateFormat);

    // set date to today
    if (event.key === 't' || event.key === 'T') {
      inputDate = _DateUtil.default.getCurrentDate();
      formattedDate = _DateUtil.default.strictFormatISODate(inputDate, momentDateFormat);
      if (onChange) {
        onChange(event, formattedDate);
      }
      var nextDayValues = _DateUtil.default.getDateInputValues(_DateUtil.default.dateOrder.YMD, inputDate, '-');
      date = {
        day: nextDayValues.day,
        month: nextDayValues.month,
        year: nextDayValues.year
      };
      return;
    }
    // decrement current valid date by 1 day, if not valid set date to yesterday instead
    if (event.key === '-' || event.key === '_') {
      if (validDate) {
        inputDate = _DateUtil.default.decrementDateByDay(inputDate, _DateUtil.default.ISO_EXTENDED_DATE_FORMAT);
      } else {
        inputDate = _DateUtil.default.decrementDateByDay(_DateUtil.default.getCurrentDate(), _DateUtil.default.ISO_EXTENDED_DATE_FORMAT);
      }
      formattedDate = _DateUtil.default.strictFormatISODate(inputDate, momentDateFormat);
      if (onChange) {
        onChange(event, formattedDate);
      }
      var _nextDayValues = _DateUtil.default.getDateInputValues(_DateUtil.default.dateOrder.YMD, inputDate, '-');
      date = {
        day: _nextDayValues.day,
        month: _nextDayValues.month,
        year: _nextDayValues.year
      };
      return;
    }
    // increment current valid date by 1 day, if not valid date set date to tomorrow instead
    if (event.key === '=' || event.key === '+') {
      if (validDate) {
        inputDate = _DateUtil.default.incrementDateByDay(inputDate, _DateUtil.default.ISO_EXTENDED_DATE_FORMAT);
      } else {
        inputDate = _DateUtil.default.incrementDateByDay(_DateUtil.default.getCurrentDate(), _DateUtil.default.ISO_EXTENDED_DATE_FORMAT);
      }
      formattedDate = _DateUtil.default.strictFormatISODate(inputDate, momentDateFormat);
      if (onChange) {
        onChange(event, formattedDate);
      }
      var _nextDayValues2 = _DateUtil.default.getDateInputValues(_DateUtil.default.dateOrder.YMD, inputDate, '-');
      date = {
        day: _nextDayValues2.day,
        month: _nextDayValues2.month,
        year: _nextDayValues2.year
      };
      return;
    }
    if (inputType === _DateUtil.default.inputType.YEAR) {
      handleYearInputKeydown(event);
    } else if (inputType === _DateUtil.default.inputType.MONTH) {
      handleMonthInputKeydown(event);
    } else if (inputType === _DateUtil.default.inputType.DAY) {
      handleDayInputKeydown(event);
    }
  };
  var handleOnInputFocus = function handleOnInputFocus(event, type) {
    if (onFocus) {
      onFocus(event);
    }
    setFocused(true);
    if (type === _DateUtil.default.inputType.DAY) {
      setDayInitialFocused(true);
      dayInputRef.setSelectionRange(0, dayInputRef.value.length);
    } else if (type === _DateUtil.default.inputType.MONTH) {
      setMonthInitialFocused(true);
      monthInputRef.setSelectionRange(0, monthInputRef.value.length);
    } else {
      setYearInitialFocused(true);
      yearInputRef.setSelectionRange(0, yearInputRef.value.length);
    }
  };
  var handleOnInputBlur = function handleOnInputBlur(event, type) {
    if (onBlur) {
      onBlur(event);
    }
    setFocused(false);
    if (type === _DateUtil.default.inputType.DAY) {
      setDayInitialFocused(false);
    } else if (type === _DateUtil.default.inputType.MONTH) {
      setMonthInitialFocused(false);
    } else {
      setYearInitialFocused(false);
    }
    if (type === _DateUtil.default.inputType.DAY || type === _DateUtil.default.inputType.MONTH) {
      var inputValue = event.target.value;

      // Prepend a 0 to the value when losing focus and the value is single digit except 0.
      // Append a 1 to the value when the single digit is 0
      if (inputValue.length === 1) {
        inputValue = inputValue === '0' ? '01' : '0'.concat(inputValue);
        handleDateChange(event, inputValue, type);
      }
    } else if (type === _DateUtil.default.inputType.YEAR) {
      var _inputValue = event.target.value;
      if (_inputValue.length === 1) {
        // Prepend a 200 to the value when losing focus and the value is single digit.
        _inputValue = '200'.concat(_inputValue);
        handleDateChange(event, _inputValue, type);
      } else if (_inputValue.length === 2) {
        // Prepend a 20 to the value when losing focus and the value is two digits.
        _inputValue = '20'.concat(_inputValue);
        handleDateChange(event, _inputValue, type);
      } else if (_inputValue.length === 3 && (Number(_inputValue) >= 190 || Number(_inputValue) <= 210)) {
        // Append a 0 to the value when losing focus and the value is three digits between 190 to 210.
        _inputValue = _inputValue.concat('0');
        handleDateChange(event, _inputValue, type);
      }
    }
  };
  var handleOnButtonClick = function handleOnButtonClick(event) {
    var readOnly = inputAttributes === null || inputAttributes === void 0 ? void 0 : inputAttributes.readOnly;
    if (!readOnly && onCalendarButtonClick && onClick) {
      onCalendarButtonClick(event, onClick);
    }
  };
  var handleOnButtonKeyDown = function handleOnButtonKeyDown(event) {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  var formatDescriptionId = "terra-date-picker-description-format-".concat((0, _v.default)());
  var ariaDescriptionIds;
  if (useExternalFormatMask === false) {
    if (inputAttributes && inputAttributes['aria-describedby']) {
      ariaDescriptionIds = "".concat(formatDescriptionId, " ").concat(inputAttributes['aria-describedby']);
    } else {
      ariaDescriptionIds = formatDescriptionId;
    }
  } else if (inputAttributes && inputAttributes['aria-describedby']) {
    ariaDescriptionIds = inputAttributes['aria-describedby'];
  }
  var dayInputClasses = cx(['date-input-day', {
    'initial-focus': dayInitialFocused
  }]);
  var dateDayInput = /*#__PURE__*/_react.default.createElement(_terraFormInput.default, (0, _extends2.default)({}, additionalInputProps, {
    // Both 'ref' and 'refCallback' are required here because:
    // 'refCallback' returns the DOM element of the HTML input element
    // 'ref' when used on a class component returns the mounted instance of the component
    refCallback: function refCallback(node) {
      dayInputRef = node;
    },
    ref: dateFormatOrder === _DateUtil.default.dateOrder.DMY ? firstInputRefCallback : undefined,
    className: dayInputClasses,
    type: "text",
    name: "terra-date-day-".concat(name),
    value: date.day,
    onChange: handleDayChange,
    onFocus: function onFocus(e) {
      return handleOnInputFocus(e, _DateUtil.default.inputType.DAY);
    },
    onBlur: function onBlur(e) {
      return handleOnInputBlur(e, _DateUtil.default.inputType.DAY);
    },
    onKeyDown: function onKeyDown(e) {
      return handleInputKeydown(e, _DateUtil.default.inputType.DAY);
    },
    maxLength: "2",
    size: "2",
    pattern: "\\d*",
    "aria-required": required,
    "aria-label": intl.formatMessage({
      id: 'Terra.datePicker.dayLabel'
    }),
    "aria-describedby": ariaDescriptionIds,
    id: dayInputId
  }));
  var monthInputClasses = cx(['date-input-month', {
    'initial-focus': monthInitialFocused
  }]);
  var dateMonthInput = /*#__PURE__*/_react.default.createElement(_terraFormInput.default, (0, _extends2.default)({}, additionalInputProps, {
    // Both 'ref' and 'refCallback' are required here because:
    // 'refCallback' returns the DOM element of the HTML input element
    // 'ref' when used on a class component returns the mounted instance of the component
    refCallback: function refCallback(node) {
      monthInputRef = node;
    },
    ref: dateFormatOrder === _DateUtil.default.dateOrder.MDY ? firstInputRefCallback : undefined,
    className: monthInputClasses,
    type: "text",
    name: "terra-date-month-".concat(name),
    value: date.month,
    onChange: handleMonthChange,
    onFocus: function onFocus(e) {
      return handleOnInputFocus(e, _DateUtil.default.inputType.MONTH);
    },
    onBlur: function onBlur(e) {
      return handleOnInputBlur(e, _DateUtil.default.inputType.MONTH);
    },
    onKeyDown: function onKeyDown(e) {
      return handleInputKeydown(e, _DateUtil.default.inputType.MONTH);
    },
    maxLength: "2",
    size: "2",
    pattern: "\\d*",
    "aria-required": required,
    "aria-label": intl.formatMessage({
      id: 'Terra.datePicker.monthLabel'
    }),
    "aria-describedby": ariaDescriptionIds,
    id: monthInputId
  }));
  var yearInputClasses = cx(['date-input-year', {
    'initial-focus': yearInitialFocused
  }]);
  var dateYearInput = /*#__PURE__*/_react.default.createElement(_terraFormInput.default, (0, _extends2.default)({}, additionalInputProps, {
    // Both 'ref' and 'refCallback' are required here because:
    // 'refCallback' returns the DOM element of the HTML input element
    // 'ref' when used on a class component returns the mounted instance of the component
    refCallback: function refCallback(node) {
      yearInputRef = node;
    },
    ref: dateFormatOrder === _DateUtil.default.dateOrder.YMD ? firstInputRefCallback : undefined,
    className: yearInputClasses,
    type: "text",
    name: "terra-date-year-".concat(name),
    value: date.year,
    onChange: handleYearChange,
    onFocus: function onFocus(e) {
      return handleOnInputFocus(e, _DateUtil.default.inputType.YEAR);
    },
    onBlur: function onBlur(e) {
      return handleOnInputBlur(e, _DateUtil.default.inputType.YEAR);
    },
    onKeyDown: function onKeyDown(e) {
      return handleInputKeydown(e, _DateUtil.default.inputType.YEAR);
    },
    maxLength: "4",
    size: "4",
    pattern: "\\d*",
    "aria-required": required,
    "aria-label": intl.formatMessage({
      id: 'Terra.datePicker.yearLabel'
    }),
    "aria-describedby": ariaDescriptionIds,
    id: yearInputId
  }));
  var dateSpacer = /*#__PURE__*/_react.default.createElement("span", {
    className: cx('date-spacer')
  }, separator);
  var dateInputClasses = cx(['date-input', {
    'is-focused': isFocused
  }, {
    'is-invalid': isInvalid
  }, {
    'is-incomplete': isIncomplete && required && !isInvalid
  }]);
  var label = ariaLabel || intl.formatMessage({
    id: 'Terra.datePicker.date'
  });
  var format = intl.formatMessage({
    id: 'Terra.datePicker.dateFormat'
  });
  var buttonClasses = cx(['button', {
    'is-invalid': isInvalid
  }]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx(theme.className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('date-input-container')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: dateInputClasses,
    id: id || idFromInputAttributes,
    disabled: additionalInputProps.disabled
  }, /*#__PURE__*/_react.default.createElement("input", {
    // Create a hidden input for storing the name and value attributes to use when submitting the form.
    // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
    "data-terra-date-input-hidden": true,
    type: "hidden",
    name: name,
    value: dateValue
  }), /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
    text: value ? "".concat(label, ", ").concat((0, _date_utils.getLocalizedDateForScreenReader)(_DateUtil.default.createSafeDate(dateValue, initialTimeZone), {
      intl: intl,
      locale: intl.locale
    })) : label
  }), /*#__PURE__*/_react.default.createElement(_DateInputLayout.default, {
    dateFormatOrder: dateFormatOrder,
    separator: dateSpacer,
    day: dateDayInput,
    month: dateMonthInput,
    year: dateYearInput
  })), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    "data-terra-open-calendar-button": true,
    className: buttonClasses,
    text: intl.formatMessage({
      id: 'Terra.datePicker.openCalendar'
    }),
    onClick: handleOnButtonClick,
    onKeyDown: handleOnButtonKeyDown,
    icon: /*#__PURE__*/_react.default.createElement(_IconCalendar.default, null),
    isIconOnly: true,
    isCompact: true,
    isDisabled: additionalInputProps.disabled,
    onBlur: onBlur,
    onFocus: onButtonFocus,
    refCallback: buttonRefCallback
  })), !useExternalFormatMask && /*#__PURE__*/_react.default.createElement("div", {
    id: formatDescriptionId,
    className: cx('format-text'),
    "aria-label": "".concat(intl.formatMessage({
      id: 'Terra.datePicker.dateFormatLabel'
    }), " ").concat(format)
  }, "(".concat(format, ")")));
};
DatePickerInput.propTypes = propTypes;
DatePickerInput.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(DatePickerInput);
exports.default = _default;