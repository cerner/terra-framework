import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {
  KEY_UP,
  KEY_DOWN,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_DELETE,
  KEY_BACK_SPACE,
} from 'keycode-js';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import moment from 'moment-timezone';
import { v4 as uuidv4 } from 'uuid';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Input from 'terra-form-input';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import DateUtil from './DateUtil';
import DateInputLayout from './_DateInputLayout';
import { getLocalizedDateForScreenReader } from './react-datepicker/date_utils';
import styles from './DatePicker.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String that labels the current element. 'aria-label' must be present for accessibility.
   */
  ariaLabel: PropTypes.string,
  /**
   * Callback ref to pass into the calendar button dom element.
   */
  buttonRefCallback: PropTypes.func,
  /**
   * Callback ref to pass into the first input dom element from Date Input components based on the date format order.
   */
  firstInputRefCallback: PropTypes.func,
  /**
   * The id to append to the date input wrapper.
   */
  id: PropTypes.string,
  /**
   * @private
   * Timezone value to indicate in which timezone the date component is rendered.
   * The value provided should be a valid [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) string, else will default to browser/local timezone.
   */
  initialTimeZone: PropTypes.string,
  /**
   * Custom input attributes to apply to the date input.
   */
  inputAttributes: PropTypes.object,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: PropTypes.shape({ formatMessage: PropTypes.func, locale: PropTypes.string }).isRequired,
  /**
   * Whether the input displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
   */
  isIncomplete: PropTypes.bool,
  /**
  * Whether the input displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalid: PropTypes.bool,
  /**
   * Name of the date input.
   */
  name: PropTypes.string,
  /**
   * A callback function triggered when the input or calendar button loses focus.
   */
  onBlur: PropTypes.func,
  /**
   * A callback function triggered when the calendar button receives focus.
   */
  onButtonFocus: PropTypes.func,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: PropTypes.func,
  /**
   * The onInputClick callback function from react-datepicker to show the picker when clicked.
   */
  onClick: PropTypes.func,
  /**
   * A callback function triggered when the date input receives focus.
   */
  onFocus: PropTypes.func,
  /**
   * The onInputKeyDown callback function from react-datepicker to handle keyboard navigation.
   */
  onKeyDown: PropTypes.func,
  /**
   * Whether or not the date is required.
   */
  required: PropTypes.bool,
  /**
   * @private
   * Internal prop for showing date picker.
   */
  shouldShowPicker: PropTypes.bool,
  /**
   * @private
   * NOTICE: Internal prop to be used only by Terra framework. This component provides a built-in format mask that is
   * required to be displayed to users for proper accessibility and must not be removed. 'DatePickerField' is permitted to set
   * this prop because it provides the same format mask in its 'help' prop.
  */
  useExternalFormatMask: PropTypes.bool,
  /**
   * The selected or entered date value to display in the date input.
   */
  value: PropTypes.string,
  /**
   * @private
   * An array of {@link moment} date objects of the dates to disable in the picker.
   */
  excludeDates: PropTypes.arrayOf(PropTypes.objectOf(moment)),
  /**
   * @private
   * An array of {@link moment} date objects of the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: PropTypes.arrayOf(PropTypes.objectOf(moment)),
  /**
   * @private
   * An ISO 8601 string representation of the maximum date that can be selected. The value must be in the `YYYY-MM-DD` format. Must be on or before `12/31/2100`.
   */
  maxDate: PropTypes.string,
  /**
   * @private
   * An ISO 8601 string representation of the minimum date that can be selected. The value must be in the `YYYY-MM-DD` format. Must be on or after `01/01/1900`
   */
  minDate: PropTypes.string,
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled.
   * A return value of true will be enabled and false will be disabled.
   */
  filterDate: PropTypes.func,
};

const defaultProps = {
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
  value: undefined,
  excludeDates: undefined,
  includeDates: undefined,
  maxDate: '2100-12-31',
  minDate: '1900-01-01',
  filterDate: undefined,
};

const DatePickerInput = (props) => {
  const {
    ariaLabel,
    buttonRefCallback,
    firstInputRefCallback,
    id,
    initialTimeZone,
    inputAttributes,
    intl,
    isIncomplete,
    isInvalid,
    name,
    onBlur,
    onButtonFocus,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    required,
    useExternalFormatMask,
    value,
    excludeDates,
    includeDates,
    maxDate,
    minDate,
    filterDate,
    ...customProps
  } = props;

  const [isFocused, setFocused] = useState(false);
  const [dayInitialFocused, setDayInitialFocused] = useState(false);
  const [monthInitialFocused, setMonthInitialFocused] = useState(false);
  const [yearInitialFocused, setYearInitialFocused] = useState(false);
  const editOnkeyDown = useRef(false);
  const theme = React.useContext(ThemeContext);
  // variables to store ref's for day, month and year input
  let dayInputRef;
  let monthInputRef;
  let yearInputRef;
  let visuallyHiddenComponent = null;
  const { onCalendarButtonClick, shouldShowPicker } = customProps;
  delete customProps.onCalendarButtonClick;
  delete customProps.shouldShowPicker;

  let idFromInputAttributes;
  let monthInputId;
  let dayInputId;
  let yearInputId;
  if (inputAttributes && inputAttributes.id) {
    // Get the inputAttributes.id and set it on the outer div and delete inputAttributes.id to prevent from setting the same id on all three inputs.
    // Create new ids to set on each input using the inputAttributes.id.
    idFromInputAttributes = inputAttributes.id;
    monthInputId = idFromInputAttributes.concat('-terra-date-picker-month');
    dayInputId = idFromInputAttributes.concat('-terra-date-picker-day');
    yearInputId = idFromInputAttributes.concat('-terra-date-picker-year');

    delete inputAttributes.id;
  }

  const additionalInputProps = { ...customProps, ...inputAttributes };
  const momentDateFormat = useMemo(() => DateUtil.getFormatByLocale(intl.locale), [intl.locale]);
  const dateValue = useMemo(() => (DateUtil.convertToISO8601(value, momentDateFormat)), [momentDateFormat, value]);
  const dateFormatOrder = DateUtil.getDateFormatOrder(momentDateFormat);
  const separator = DateUtil.getDateSeparator(intl.locale);
  const previousDateValueRef = useRef();

  let date = useMemo(() => ({ day: '', month: '', year: '' }), []);
  // Sets the date state based on the passed in value prop, or if it changes via a calendar click.
  if (DateUtil.isValidDate(value, momentDateFormat)) {
    date = DateUtil.getDateInputValues(DateUtil.dateOrder.YMD, dateValue, '-');
    previousDateValueRef.current = date;
    editOnkeyDown.current = false;
  } else {
    date = DateUtil.validdateDateValues(value, dateFormatOrder, editOnkeyDown, previousDateValueRef);
  }

  // Triggers the onClick callback to launch the dropdown picker for the scenario when the default date is invalid and
  // the calendar button is clicked which should clear the value and launch the dropdown picker
  useEffect(() => {
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
  const moveFocusOnChange = (inputValue, type) => {
    if (dateFormatOrder === DateUtil.dateOrder.MDY) {
      if (inputValue.length === 2) {
        if (type === DateUtil.inputType.MONTH) {
          dayInputRef.focus();
        } else {
          yearInputRef.focus();
        }
      }
    } else if (dateFormatOrder === DateUtil.dateOrder.DMY) {
      if (inputValue.length === 2) {
        if (type === DateUtil.inputType.DAY) {
          monthInputRef.focus();
        } else {
          yearInputRef.focus();
        }
      }
    } else if (dateFormatOrder === DateUtil.dateOrder.YMD) {
      if (inputValue.length === 4) {
        monthInputRef.focus();
      } else if (inputValue.length === 2 && type === DateUtil.inputType.MONTH) {
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
  const setDate = (event, inputValue, type) => {
    if (type === DateUtil.inputType.DAY) {
      date.day = inputValue;
    } else if (type === DateUtil.inputType.MONTH) {
      date.month = inputValue;
    } else {
      date.year = inputValue;
    }

    if (event.type !== 'keydown') {
      moveFocusOnChange(inputValue, type);
    }
  };

  const handleInvalidInputChange = (inputValue) => {
    if (visuallyHiddenComponent && inputValue !== '+' && inputValue !== '=' && inputValue !== '-'
        && inputValue !== '_' && inputValue !== 't' && inputValue !== 'T') {
      visuallyHiddenComponent.innerText = intl.formatMessage({ id: 'Terra.datePicker.invalidDate' });
    }
  };

  const setVisuallyHiddenComponent = (node) => {
    visuallyHiddenComponent = node;
  };

  /**
   * Sets the day, month and year based on input values, formats them
   * based on the date format variant, and passes the formatted date to onChange.
   */
  const handleDateChange = (event, inputValue, type) => {
    let { day, month, year } = date;

    if (type === DateUtil.inputType.DAY) {
      day = inputValue;
      setDayInitialFocused(false);
    } else if (type === DateUtil.inputType.MONTH) {
      month = inputValue;
      setMonthInitialFocused(false);
    } else {
      year = inputValue;
      setYearInitialFocused(false);
    }

    let inputDate;
    let formattedDate;
    if (day.length === 2 && month.length === 2 && year.length === 4) {
      inputDate = DateUtil.convertToISO8601(`${year}-${month}-${day}`, DateUtil.ISO_EXTENDED_DATE_FORMAT);
      formattedDate = DateUtil.strictFormatISODate(inputDate, momentDateFormat);
    }

    if (onChange) {
      if (DateUtil.isValidDate(formattedDate, momentDateFormat)) {
        onChange(event, formattedDate);
      } else if (day === '' && month === '' && year === '') {
        onChange(event, '');
      } else {
        let dateString;
        if (dateFormatOrder === DateUtil.dateOrder.MDY) {
          dateString = month + separator + day + separator + year;
        } else if (dateFormatOrder === DateUtil.dateOrder.DMY) {
          dateString = day + separator + month + separator + year;
        } else {
          dateString = year + separator + month + separator + day;
        }
        onChange(event, dateString);
      }
    }
    setDate(event, inputValue, type);
  };

  const handleDayChange = (event) => {
    let inputValue = event.target.value;
    if (!DateUtil.validDateInput(inputValue)) {
      handleInvalidInputChange(inputValue);
      return;
    }

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have to
    // check the length of inputValue to make sure that it is less then 2.
    if (inputValue === date.day || inputValue.length > 2 || Number(inputValue) > 31 || inputValue === '00') {
      handleInvalidInputChange(inputValue);
      return;
    }

    // If the change made was not a deletion of a digit, then prepend '0'
    // when the input value is a single digit value between 4 and 9
    if (inputValue.length >= date.day.length) {
      const digitsToPrependZero = ['4', '5', '6', '7', '8', '9'];

      if (digitsToPrependZero.indexOf(inputValue) > -1) {
        inputValue = `0${inputValue}`;
      }
    }

    handleDateChange(event, inputValue, DateUtil.inputType.DAY);
  };

  const handleMonthChange = (event) => {
    let inputValue = event.target.value;
    if (!DateUtil.validDateInput(inputValue)) {
      handleInvalidInputChange(inputValue);
      return;
    }

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have to
    // check the length of inputValue to make sure that it is less then 2.
    if (inputValue === date.month || inputValue.length > 2 || Number(inputValue) > 12 || inputValue === '00') {
      handleInvalidInputChange(inputValue);
      return;
    }

    // If the change made was not a deletion of a digit, then prepend '0'
    // when the input value is a single digit value between 2 and 9
    if (inputValue.length >= date.month.length) {
      const digitsToPrependZero = ['2', '3', '4', '5', '6', '7', '8', '9'];

      if (digitsToPrependZero.indexOf(inputValue) > -1) {
        inputValue = `0${inputValue}`;
      }
    }
    handleDateChange(event, inputValue, DateUtil.inputType.MONTH);
  };

  const handleYearChange = (event) => {
    const inputValue = event.target.value;
    if (!DateUtil.validDateInput(inputValue)) {
      handleInvalidInputChange(inputValue);
      return;
    }

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have to
    // check the length of inputValue to make sure that it is less then 4.
    if (inputValue === date.year || inputValue.length > 4) {
      handleInvalidInputChange(inputValue);
      return;
    }

    // Ignore the 3rd entry if the first two digits are not 19, 20 or 21
    if (inputValue.length === 3 && (Number(inputValue) < 190 || Number(inputValue) > 210)) {
      handleInvalidInputChange(inputValue);
      return;
    }

    // Ignore the 4th entry if the year value is not between MIN_YEAR and MAX_YEAR
    if (inputValue.length === 4 && (Number(inputValue) < Number(DateUtil.MIN_YEAR) || Number(inputValue) > Number(DateUtil.MAX_YEAR))) {
      handleInvalidInputChange(inputValue);
      return;
    }

    handleDateChange(event, inputValue, DateUtil.inputType.YEAR);
  };

  const setInputFocus = (event, inputRef, selectionStart, selectionEnd) => {
    inputRef.focus();
    inputRef.setSelectionRange(selectionStart, selectionEnd);
    event.preventDefault();
  };

  const handleDayInputKeydown = (event) => {
    if (inputAttributes?.readOnly) {
      return;
    }

    if (event.keyCode === KEY_UP) {
      const incrementedDay = DateUtil.incrementDay(date.day, date.month, date.year);
      if (incrementedDay !== date.day) {
        handleDateChange(event, incrementedDay, DateUtil.inputType.DAY);
      }
    } else if (event.keyCode === KEY_DOWN) {
      const decrementedDay = DateUtil.decrementDay(date.day, date.month, date.year);
      if (decrementedDay !== date.day) {
        handleDateChange(event, decrementedDay, DateUtil.inputType.DAY);
      }
    }

    if (dateFormatOrder === DateUtil.dateOrder.MDY) {
      if ((event.keyCode === KEY_LEFT || event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && dayInputRef.selectionEnd === 0) {
        setInputFocus(event, monthInputRef, date.month.length, date.month.length);
      } else if (event.keyCode === KEY_RIGHT && dayInputRef.selectionEnd === date.day.length) {
        setInputFocus(event, yearInputRef, 0, 0);
      }
    } else if (dateFormatOrder === DateUtil.dateOrder.DMY) {
      if (event.keyCode === KEY_RIGHT && dayInputRef.selectionEnd === date.day.length) {
        setInputFocus(event, monthInputRef, 0, 0);
      }
    } else if (dateFormatOrder === DateUtil.dateOrder.YMD) {
      if ((event.keyCode === KEY_LEFT || event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && dayInputRef.selectionEnd === 0) {
        setInputFocus(event, monthInputRef, date.month.length, date.month.length);
      }
    }
  };

  const handleMonthInputKeydown = (event) => {
    if (inputAttributes?.readOnly) {
      return;
    }

    if (event.keyCode === KEY_UP) {
      const incrementedMonth = DateUtil.incrementMonth(date.month);
      if (incrementedMonth !== date.month) {
        handleDateChange(event, incrementedMonth, DateUtil.inputType.MONTH);
      }
    } else if (event.keyCode === KEY_DOWN) {
      const decrementedMonth = DateUtil.decrementMonth(date.month);
      if (decrementedMonth !== date.month) {
        handleDateChange(event, decrementedMonth, DateUtil.inputType.MONTH);
      }
    }

    if (dateFormatOrder === DateUtil.dateOrder.MDY) {
      if (event.keyCode === KEY_RIGHT && monthInputRef.selectionEnd === date.month.length) {
        setInputFocus(event, dayInputRef, 0, 0);
      }
    } else if (dateFormatOrder === DateUtil.dateOrder.DMY) {
      if ((event.keyCode === KEY_LEFT || event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && monthInputRef.selectionEnd === 0) {
        setInputFocus(event, dayInputRef, date.day.length, date.day.length);
      } else if (event.keyCode === KEY_RIGHT && monthInputRef.selectionEnd === date.month.length) {
        setInputFocus(event, yearInputRef, 0, 0);
      }
    } else if (dateFormatOrder === DateUtil.dateOrder.YMD) {
      if ((event.keyCode === KEY_LEFT || event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && monthInputRef.selectionEnd === 0) {
        setInputFocus(event, yearInputRef, date.year.length, date.year.length);
      } else if (event.keyCode === KEY_RIGHT && monthInputRef.selectionEnd === date.month.length) {
        setInputFocus(event, dayInputRef, 0, 0);
      }
    }
  };

  const handleYearInputKeydown = (event) => {
    if (inputAttributes?.readOnly) {
      return;
    }

    if (event.keyCode === KEY_UP) {
      const incrementedYear = DateUtil.incrementYear(date.year);
      if (incrementedYear !== date.year) {
        handleDateChange(event, incrementedYear, DateUtil.inputType.YEAR);
      }
    } else if (event.keyCode === KEY_DOWN) {
      const decrementedYear = DateUtil.decrementYear(date.year);
      if (decrementedYear !== date.year) {
        handleDateChange(event, decrementedYear, DateUtil.inputType.YEAR);
      }
    }

    if (dateFormatOrder === DateUtil.dateOrder.MDY) {
      if ((event.keyCode === KEY_LEFT || event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && yearInputRef.selectionEnd === 0) {
        setInputFocus(event, dayInputRef, date.day.length, date.day.length);
      }
    } else if (dateFormatOrder === DateUtil.dateOrder.DMY) {
      if ((event.keyCode === KEY_LEFT || event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && yearInputRef.selectionEnd === 0) {
        setInputFocus(event, monthInputRef, date.month.length, date.month.length);
      }
    } else if (dateFormatOrder === DateUtil.dateOrder.YMD) {
      if (event.keyCode === KEY_RIGHT && yearInputRef.selectionEnd === date.year.length) {
        setInputFocus(event, monthInputRef, 0, 0);
      }
    }
  };

  const handleInputKeydown = (event, inputType) => {
    editOnkeyDown.current = true;
    const { day, month, year } = date;
    let inputDate;
    let formattedDate;
    if (day.length === 2 && month.length === 2 && year.length === 4) {
      inputDate = DateUtil.convertToISO8601(`${year}-${month}-${day}`, DateUtil.ISO_EXTENDED_DATE_FORMAT);
      formattedDate = DateUtil.strictFormatISODate(inputDate, momentDateFormat);
    }
    const validDate = DateUtil.isValidDate(formattedDate, momentDateFormat);

    // set date to today
    if (event.key === 't' || event.key === 'T') {
      inputDate = DateUtil.getCurrentDate();
      formattedDate = DateUtil.strictFormatISODate(inputDate, momentDateFormat);
      if (onChange) {
        onChange(event, formattedDate);
      }
      const nextDayValues = DateUtil.getDateInputValues(DateUtil.dateOrder.YMD, inputDate, '-');
      date = { day: nextDayValues.day, month: nextDayValues.month, year: nextDayValues.year };
      return;
    }
    // decrement current valid date by 1 day, if not valid set date to yesterday instead
    if (event.key === '-' || event.key === '_') {
      if (validDate) {
        inputDate = DateUtil.decrementDateByDay(inputDate, DateUtil.ISO_EXTENDED_DATE_FORMAT);
      } else {
        inputDate = DateUtil.decrementDateByDay(DateUtil.getCurrentDate(), DateUtil.ISO_EXTENDED_DATE_FORMAT);
      }
      formattedDate = DateUtil.strictFormatISODate(inputDate, momentDateFormat);
      if (onChange) {
        onChange(event, formattedDate);
      }
      const nextDayValues = DateUtil.getDateInputValues(DateUtil.dateOrder.YMD, inputDate, '-');
      date = { day: nextDayValues.day, month: nextDayValues.month, year: nextDayValues.year };
      return;
    }
    // increment current valid date by 1 day, if not valid date set date to tomorrow instead
    if (event.key === '=' || event.key === '+') {
      if (validDate) {
        inputDate = DateUtil.incrementDateByDay(inputDate, DateUtil.ISO_EXTENDED_DATE_FORMAT);
      } else {
        inputDate = DateUtil.incrementDateByDay(DateUtil.getCurrentDate(), DateUtil.ISO_EXTENDED_DATE_FORMAT);
      }
      formattedDate = DateUtil.strictFormatISODate(inputDate, momentDateFormat);
      if (onChange) {
        onChange(event, formattedDate);
      }
      const nextDayValues = DateUtil.getDateInputValues(DateUtil.dateOrder.YMD, inputDate, '-');
      date = { day: nextDayValues.day, month: nextDayValues.month, year: nextDayValues.year };
      return;
    }

    if (inputType === DateUtil.inputType.YEAR) {
      handleYearInputKeydown(event);
    } else if (inputType === DateUtil.inputType.MONTH) {
      handleMonthInputKeydown(event);
    } else if (inputType === DateUtil.inputType.DAY) {
      handleDayInputKeydown(event);
    }
  };

  const handleOnInputFocus = (event, type) => {
    if (onFocus) {
      onFocus(event);
    }

    setFocused(true);

    if (type === DateUtil.inputType.DAY) {
      setDayInitialFocused(true);
      dayInputRef.setSelectionRange(0, dayInputRef.value.length);
    } else if (type === DateUtil.inputType.MONTH) {
      setMonthInitialFocused(true);
      monthInputRef.setSelectionRange(0, monthInputRef.value.length);
    } else {
      setYearInitialFocused(true);
      yearInputRef.setSelectionRange(0, yearInputRef.value.length);
    }
  };

  const handleOnInputBlur = (event, type) => {
    if (onBlur) {
      onBlur(event);
    }

    setFocused(false);

    if (type === DateUtil.inputType.DAY) {
      setDayInitialFocused(false);
    } else if (type === DateUtil.inputType.MONTH) {
      setMonthInitialFocused(false);
    } else {
      setYearInitialFocused(false);
    }

    if (type === DateUtil.inputType.DAY || type === DateUtil.inputType.MONTH) {
      let inputValue = event.target.value;

      // Prepend a 0 to the value when losing focus and the value is single digit except 0.
      // Append a 1 to the value when the single digit is 0
      if (inputValue.length === 1) {
        inputValue = inputValue === '0' ? '01' : '0'.concat(inputValue);

        handleDateChange(event, inputValue, type);
      }
    } else if (type === DateUtil.inputType.YEAR) {
      let inputValue = event.target.value;

      if (inputValue.length === 1) {
        // Prepend a 200 to the value when losing focus and the value is single digit.
        inputValue = '200'.concat(inputValue);

        handleDateChange(event, inputValue, type);
      } else if (inputValue.length === 2) {
        // Prepend a 20 to the value when losing focus and the value is two digits.
        inputValue = '20'.concat(inputValue);

        handleDateChange(event, inputValue, type);
      } else if (inputValue.length === 3 && (Number(inputValue) >= 190 || Number(inputValue) <= 210)) {
        // Append a 0 to the value when losing focus and the value is three digits between 190 to 210.
        inputValue = inputValue.concat('0');

        handleDateChange(event, inputValue, type);
      }
    }
  };

  const handleOnButtonClick = (event) => {
    const readOnly = inputAttributes?.readOnly;
    if (!readOnly && onCalendarButtonClick && onClick) {
      onCalendarButtonClick(event, onClick);
    }
  };

  const handleOnButtonKeyDown = (event) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const formatDescriptionId = `terra-date-picker-description-format-${uuidv4()}`;
  let ariaDescriptionIds;
  if (useExternalFormatMask === false) {
    if (inputAttributes && inputAttributes['aria-describedby']) {
      ariaDescriptionIds = `${formatDescriptionId} ${inputAttributes['aria-describedby']}`;
    } else {
      ariaDescriptionIds = formatDescriptionId;
    }
  } else if (inputAttributes && inputAttributes['aria-describedby']) {
    ariaDescriptionIds = inputAttributes['aria-describedby'];
  }

  const dayInputClasses = cx([
    'date-input-day',
    { 'initial-focus': dayInitialFocused },
  ]);

  const dateDayInput = (
    <Input
      {...additionalInputProps}
      // Both 'ref' and 'refCallback' are required here because:
      // 'refCallback' returns the DOM element of the HTML input element
      // 'ref' when used on a class component returns the mounted instance of the component
      refCallback={(node) => { dayInputRef = node; }}
      ref={dateFormatOrder === DateUtil.dateOrder.DMY ? firstInputRefCallback : undefined}
      className={dayInputClasses}
      type="text"
      name={`terra-date-day-${name}`}
      value={date.day}
      onChange={handleDayChange}
      onFocus={(e) => handleOnInputFocus(e, DateUtil.inputType.DAY)}
      onBlur={(e) => handleOnInputBlur(e, DateUtil.inputType.DAY)}
      onKeyDown={(e) => handleInputKeydown(e, DateUtil.inputType.DAY)}
      maxLength="2"
      size="2"
      pattern="\d*"
      aria-required={required}
      aria-label={`${inputAttributes ? inputAttributes.fieldLabel : ''} ${intl.formatMessage({ id: 'Terra.datePicker.dayLabel' })}`}
      aria-describedby={ariaDescriptionIds}
      id={dayInputId}
    />
  );

  const monthInputClasses = cx([
    'date-input-month',
    { 'initial-focus': monthInitialFocused },
  ]);

  const dateMonthInput = (
    <Input
      {...additionalInputProps}
      // Both 'ref' and 'refCallback' are required here because:
      // 'refCallback' returns the DOM element of the HTML input element
      // 'ref' when used on a class component returns the mounted instance of the component
      refCallback={(node) => { monthInputRef = node; }}
      ref={dateFormatOrder === DateUtil.dateOrder.MDY ? firstInputRefCallback : undefined}
      className={monthInputClasses}
      type="text"
      name={`terra-date-month-${name}`}
      value={date.month}
      onChange={handleMonthChange}
      onFocus={(e) => handleOnInputFocus(e, DateUtil.inputType.MONTH)}
      onBlur={(e) => handleOnInputBlur(e, DateUtil.inputType.MONTH)}
      onKeyDown={(e) => handleInputKeydown(e, DateUtil.inputType.MONTH)}
      maxLength="2"
      size="2"
      pattern="\d*"
      aria-required={required}
      aria-label={`${inputAttributes ? inputAttributes.fieldLabel : ''} ${intl.formatMessage({ id: 'Terra.datePicker.monthLabel' })}`}
      aria-describedby={ariaDescriptionIds}
      id={monthInputId}
    />
  );

  const yearInputClasses = cx([
    'date-input-year',
    { 'initial-focus': yearInitialFocused },
  ]);

  const dateYearInput = (
    <Input
      {...additionalInputProps}
      // Both 'ref' and 'refCallback' are required here because:
      // 'refCallback' returns the DOM element of the HTML input element
      // 'ref' when used on a class component returns the mounted instance of the component
      refCallback={(node) => { yearInputRef = node; }}
      ref={dateFormatOrder === DateUtil.dateOrder.YMD ? firstInputRefCallback : undefined}
      className={yearInputClasses}
      type="text"
      name={`terra-date-year-${name}`}
      value={date.year}
      onChange={handleYearChange}
      onFocus={(e) => handleOnInputFocus(e, DateUtil.inputType.YEAR)}
      onBlur={(e) => handleOnInputBlur(e, DateUtil.inputType.YEAR)}
      onKeyDown={(e) => handleInputKeydown(e, DateUtil.inputType.YEAR)}
      maxLength="4"
      size="4"
      pattern="\d*"
      aria-required={required}
      aria-label={`${inputAttributes ? inputAttributes.fieldLabel : ''} ${intl.formatMessage({ id: 'Terra.datePicker.yearLabel' })}`}
      aria-describedby={ariaDescriptionIds}
      id={yearInputId}
    />
  );

  const dateSpacer = <span className={cx('date-spacer')}>{separator}</span>;

  const dateInputClasses = cx([
    'date-input',
    { 'is-focused': isFocused },
    { 'is-invalid': isInvalid },
    { 'is-incomplete': isIncomplete && required && !isInvalid },
  ]);

  const label = ariaLabel || intl.formatMessage({ id: 'Terra.datePicker.date' });
  const format = intl.formatMessage({ id: 'Terra.datePicker.dateFormat' });

  const buttonClasses = cx([
    'button',
    { 'is-invalid': isInvalid },
  ]);

  // Indicates selected date from calendar popup for SR
  let inputDate;
  if (DateUtil.isValidDate(value, momentDateFormat)) {
    inputDate = `${getLocalizedDateForScreenReader(DateUtil.createSafeDate(dateValue, initialTimeZone), { intl, locale: intl.locale })}`;
  }
  let calendarDate = inputDate ? `${inputDate} ${intl.formatMessage({ id: 'Terra.datePicker.selected' })}` : '';

  // Check if date is excluded or out of range or not included or filtered
  let invalidEntry = '';
  if (DateUtil.isDateExcluded(DateUtil.createSafeDate(dateValue, initialTimeZone), props.excludeDates)
      || DateUtil.isDateOutOfRange(DateUtil.createSafeDate(dateValue, initialTimeZone), DateUtil.createSafeDate(DateUtil.getMinDate(props.minDate), initialTimeZone), DateUtil.createSafeDate(DateUtil.getMaxDate(props.maxDate), initialTimeZone))
      || DateUtil.isDateNotIncluded(DateUtil.createSafeDate(dateValue, initialTimeZone), props.includeDates)
      || (props.filterDate && !props.filterDate(DateUtil.createSafeDate(dateValue, initialTimeZone)))) {
    invalidEntry = `${intl.formatMessage({ id: 'Terra.datePicker.invalidDate' })}.`;
    calendarDate = '';
  }

  return (
    <div className={cx(theme.className)}>
      <div className={cx('date-input-container')}>
        <div
          className={dateInputClasses}
          id={id || idFromInputAttributes}
          disabled={additionalInputProps.disabled}
        >
          <input
            // Create a hidden input for storing the name and value attributes to use when submitting the form.
            // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
            data-terra-date-input-hidden
            type="hidden"
            name={name}
            value={dateValue}
          />
          <VisuallyHiddenText text={value ? `${label}, ${getLocalizedDateForScreenReader(DateUtil.createSafeDate(dateValue, initialTimeZone), { intl, locale: intl.locale })}` : label} />
          <VisuallyHiddenText
            refCallback={setVisuallyHiddenComponent}
            aria-atomic="true"
            aria-relevant="all"
            aria-live="assertive"
          />
          <DateInputLayout
            dateFormatOrder={dateFormatOrder}
            separator={dateSpacer}
            day={dateDayInput}
            month={dateMonthInput}
            year={dateYearInput}
          />
        </div>
        <Button
          data-terra-open-calendar-button
          className={buttonClasses}
          text={intl.formatMessage({ id: 'Terra.datePicker.openCalendar' })}
          onClick={handleOnButtonClick}
          onKeyDown={handleOnButtonKeyDown}
          icon={<IconCalendar />}
          isIconOnly
          isCompact
          isDisabled={additionalInputProps.disabled}
          onBlur={onBlur}
          onFocus={onButtonFocus}
          refCallback={buttonRefCallback}
          aria-label={`${calendarDate} ${intl.formatMessage({ id: 'Terra.datePicker.openCalendar' })}`}
        />
      </div>
      {!useExternalFormatMask && (
        <div id={formatDescriptionId} className={cx('format-text')}>
          <VisuallyHiddenText
            aria-live={DateUtil.isMac() ? 'polite' : 'off'}
            text={`${invalidEntry} 
            ${intl.formatMessage({ id: 'Terra.datePicker.dateFormatLabel' })} 
            ${format}. ${inputDate ? `${inputDate},` : ''} ${intl.formatMessage({ id: 'Terra.datePicker.hotKey' })} `}
          />
          <div aria-hidden="true">
            {`(${format})`}
          </div>
        </div>
      )}
    </div>
  );
};

DatePickerInput.propTypes = propTypes;
DatePickerInput.defaultProps = defaultProps;

export default injectIntl(DatePickerInput);
