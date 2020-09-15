import React, {
  useCallback,
  useReducer,
  useState,
  useEffect,
  useRef,
} from 'react';
import {
  KEY_LEFT,
  KEY_RIGHT,
  KEY_DELETE,
  KEY_BACK_SPACE,
} from 'keycode-js';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import uuidv4 from 'uuid/v4';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Input from 'terra-form-input';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import DateUtil from './DateUtil';
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
   * The id to append to the date input wrapper.
   */
  id: PropTypes.string,
  /**
   * Custom input attributes to apply to the date input.
   */
  inputAttributes: PropTypes.object,
  /**
   * @private
   * Callback ref to pass into the last input dom element from Date Input components based on the date format order.
   */
  inputRefCallback: PropTypes.func,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   */
  intl: intlShape.isRequired,
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
};

const defaultProps = {
  ariaLabel: undefined,
  buttonRefCallback: undefined,
  id: undefined,
  inputAttributes: undefined,
  inputRefCallback: undefined,
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
};

const dateReducer = (state, inputValue) => ({
  ...state,
  ...inputValue,
});

const DatePickerInput = (props) => {
  const {
    ariaLabel,
    buttonRefCallback,
    id,
    inputAttributes,
    inputRefCallback,
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
    ...customProps
  } = props;

  const [date, dateDispatch] = useReducer(dateReducer, { day: '', month: '', year: '' });
  const [isFocused, setFocused] = useState(false);
  const [dayInitialFocused, setDayInitialFocused] = useState(false);
  const [monthInitialFocused, setMonthInitialFocused] = useState(false);
  const [yearInitialFocused, setYearInitialFocused] = useState(false);
  const dayInputRef = useRef();
  const monthInputRef = useRef();
  const yearInputRef = useRef();
  const uuidRef = useRef(uuidv4());
  const theme = React.useContext(ThemeContext);

  const { onCalendarButtonClick, shouldShowPicker } = customProps;
  delete customProps.onCalendarButtonClick;
  delete customProps.shouldShowPicker;

  const additionalInputProps = { ...customProps, ...inputAttributes };
  const momentDateFormat = DateUtil.getFormatByLocale(intl.locale);
  const dateValue = DateUtil.convertToISO8601(value, momentDateFormat);
  const dateFormatOrder = intl.formatMessage({ id: 'Terra.datePicker.dateFormatOrder' });

  const setDayRef = useCallback(node => {
    dayInputRef.current = node;
    if (inputRefCallback && dateFormatOrder === 'YMD') {
      inputRefCallback(node);
    }
  }, [dateFormatOrder, inputRefCallback]);

  const setMonthRef = useCallback(node => {
    monthInputRef.current = node;
  }, []);

  const setYearRef = useCallback(node => {
    yearInputRef.current = node;
    if (inputRefCallback && (dateFormatOrder === 'MDY' || dateFormatOrder === 'DMY')) {
      inputRefCallback(node);
    }
  }, [dateFormatOrder, inputRefCallback]);

  useEffect(() => {
    if (shouldShowPicker && onClick) {
      onClick();
    }
  }, [shouldShowPicker, onClick]);

  // Sets the date state based on the passed in value prop, or if it changes via a calendar click.
  useEffect(() => {
    if (DateUtil.isValidDate(value, momentDateFormat)) {
      const parseDate = DateUtil.getDateInputValues('YMD', dateValue, '-');
      dateDispatch(parseDate);
    } else if (dateValue === '') {
      dateDispatch({ day: '', month: '', year: '' });
    }
  }, [momentDateFormat, dateValue, value]);

  /**
   * Moves focus to the correct input depending on date ordering. Focus changing is
   * disabled if a complete date has been entered in order to make single input
   * corrections easier, and is re-enabled if the whole date is erased.
   * @param {string} inputValue - The value from the current input.
   * @param {number} type - The input type, based on DateUtil.inputType.
   * @param {string} dateOrder - Date variant based on the currently supported date
   *                      orders: 'MDY', 'DMY', or 'YMD'.
   */
  const moveFocusOnChange = (inputValue, type, dateOrder) => {
    if (dateOrder === 'MDY') {
      if (inputValue.length === 2) {
        if (type === DateUtil.inputType.MONTH) {
          dayInputRef.current.focus();
        } else {
          yearInputRef.current.focus();
        }
      }
    } else if (dateOrder === 'DMY') {
      if (inputValue.length === 2) {
        if (type === DateUtil.inputType.DAY) {
          monthInputRef.current.focus();
        } else {
          yearInputRef.current.focus();
        }
      }
    } else if (dateOrder === 'YMD') {
      if (inputValue.length === 4) {
        monthInputRef.current.focus();
      } else if (inputValue.length === 2 && type === DateUtil.inputType.MONTH) {
        dayInputRef.current.focus();
      }
    }
  };

  /**
   * Sets state for the day, month, and year.
   * @param {string} inputValue - The input value to set in state.
   * @param {number} type - The inputType (day, month, or year).
   */
  const setDate = (inputValue, type) => {
    if (type === DateUtil.inputType.DAY) {
      dateDispatch({ day: inputValue });
    } else if (type === DateUtil.inputType.MONTH) {
      dateDispatch({ month: inputValue });
    } else {
      dateDispatch({ year: inputValue });
    }

    moveFocusOnChange(inputValue, type, dateFormatOrder);
  };

  const handleDateChange = (event, inputValue, type) => {
    /**
     * Sets the day, month and year based on input values, formats them
     * based on the date format variant, and passes the formatted date to onChange.
     */
    const day = type === DateUtil.inputType.DAY ? inputValue : date.day;
    const month = type === DateUtil.inputType.MONTH ? inputValue : date.month;
    const year = type === DateUtil.inputType.YEAR ? inputValue : date.year;

    if (type === DateUtil.inputType.DAY) {
      setDayInitialFocused(false);
    } else if (type === DateUtil.inputType.MONTH) {
      setMonthInitialFocused(false);
    } else {
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
      } else {
        let dateString;
        if (dateFormatOrder === 'MDY') {
          dateString = month + day + year;
        } else if (dateFormatOrder === 'DMY') {
          dateString = day + month + year;
        } else {
          dateString = year + month + day;
        }
        onChange(event, dateString);
      }
    }

    setDate(inputValue, type);
  };

  const handleDayChange = (event) => {
    let inputValue = event.target.value;
    if (!DateUtil.validDateInput(inputValue)) {
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
      return;
    }

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have to
    // check the length of inputValue to make sure that it is less then 4.
    if (inputValue === date.year || inputValue.length > 4) {
      return;
    }

    // Ignore the entry if the year value is not between 1900 and 2100
    if (inputValue.length === 4 && (Number(inputValue) < 1900 || Number(inputValue) > 2100)) {
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
    if (dateFormatOrder === 'MDY') {
      if ((event.keyCode === KEY_LEFT || event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && dayInputRef.current.selectionEnd === 0) {
        setInputFocus(event, monthInputRef.current, date.month.length, date.month.length);
      } else if (event.keyCode === KEY_RIGHT && dayInputRef.current.selectionEnd === date.day.length) {
        setInputFocus(event, yearInputRef.current, 0, 0);
      }
    } else if (dateFormatOrder === 'DMY') {
      if (event.keyCode === KEY_RIGHT && dayInputRef.current.selectionEnd === date.day.length) {
        setInputFocus(event, monthInputRef.current, 0, 0);
      }
    } else if (dateFormatOrder === 'YMD') {
      if ((event.keyCode === KEY_LEFT || event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && dayInputRef.current.selectionEnd === 0) {
        setInputFocus(event, monthInputRef.current, date.month.length, date.month.length);
      }
    }
  };

  const handleMonthInputKeydown = (event) => {
    if (dateFormatOrder === 'MDY') {
      if (event.keyCode === KEY_RIGHT && monthInputRef.current.selectionEnd === date.month.length) {
        setInputFocus(event, dayInputRef.current, 0, 0);
      }
    } else if (dateFormatOrder === 'DMY') {
      if ((event.keyCode === KEY_LEFT || event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && monthInputRef.current.selectionEnd === 0) {
        setInputFocus(event, dayInputRef.current, date.day.length, date.day.length);
      } else if (event.keyCode === KEY_RIGHT && monthInputRef.current.selectionEnd === date.month.length) {
        setInputFocus(event, yearInputRef.current, 0, 0);
      }
    } else if (dateFormatOrder === 'YMD') {
      if ((event.keyCode === KEY_LEFT || event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && monthInputRef.current.selectionEnd === 0) {
        setInputFocus(event, yearInputRef.current, date.year.length, date.year.length);
      } else if (event.keyCode === KEY_RIGHT && monthInputRef.current.selectionEnd === date.month.length) {
        setInputFocus(event, dayInputRef.current, 0, 0);
      }
    }
  };

  const handleYearInputKeydown = (event) => {
    if (dateFormatOrder === 'MDY') {
      if ((event.keyCode === KEY_LEFT || event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && yearInputRef.current.selectionEnd === 0) {
        setInputFocus(event, dayInputRef.current, date.day.length, date.day.length);
      }
    } else if (dateFormatOrder === 'DMY') {
      if ((event.keyCode === KEY_LEFT || event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && yearInputRef.current.selectionEnd === 0) {
        setInputFocus(event, monthInputRef.current, date.month.length, date.month.length);
      }
    } else if (dateFormatOrder === 'YMD') {
      if (event.keyCode === KEY_RIGHT && yearInputRef.current.selectionEnd === date.year.length) {
        setInputFocus(event, monthInputRef.current, 0, 0);
      }
    }
  };

  const handleOnInputFocus = (event, type) => {
    if (onFocus) {
      onFocus(event);
    }

    setFocused(true);

    if (type === DateUtil.inputType.DAY) {
      setDayInitialFocused(true);
      dayInputRef.current.setSelectionRange(0, dayInputRef.current.value.length);
    } else if (type === DateUtil.inputType.MONTH) {
      setMonthInitialFocused(true);
      monthInputRef.current.setSelectionRange(0, monthInputRef.current.value.length);
    } else {
      setYearInitialFocused(true);
      yearInputRef.current.setSelectionRange(0, yearInputRef.current.value.length);
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

      // Prepend a 0 to the value when losing focus and the value is single digit.
      if (inputValue.length === 1) {
        inputValue = inputValue === '0' ? '' : '0'.concat(inputValue);

        handleDateChange(event, inputValue, type);
      }
    }
  };

  const handleOnButtonClick = (event) => {
    const attributes = { ...inputAttributes };
    if (!attributes.readOnly && onCalendarButtonClick && onClick) {
      onCalendarButtonClick(event, onClick);
    }
  };

  const handleOnButtonKeyDown = (event) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const dayInputClasses = cx([
    'date-input-day',
    { 'initial-focus': dayInitialFocused },
  ]);

  const dateDayInput = (
    <Input
      {...additionalInputProps}
      refCallback={setDayRef}
      className={dayInputClasses}
      type="text"
      name={`terra-date-day-${name}`}
      value={date.day}
      onChange={handleDayChange}
      onFocus={(e) => handleOnInputFocus(e, DateUtil.inputType.DAY)}
      onBlur={(e) => handleOnInputBlur(e, DateUtil.inputType.DAY)}
      onKeyDown={handleDayInputKeydown}
      maxLength="2"
      size="2"
      pattern="\d*"
      aria-label={intl.formatMessage({ id: 'Terra.datePicker.dayLabel' })}
    />
  );

  const monthInputClasses = cx([
    'date-input-month',
    { 'initial-focus': monthInitialFocused },
  ]);

  const dateMonthInput = (
    <Input
      {...additionalInputProps}
      refCallback={setMonthRef}
      className={monthInputClasses}
      type="text"
      name={`terra-date-month-${name}`}
      value={date.month}
      onChange={handleMonthChange}
      onFocus={(e) => handleOnInputFocus(e, DateUtil.inputType.MONTH)}
      onBlur={(e) => handleOnInputBlur(e, DateUtil.inputType.MONTH)}
      onKeyDown={handleMonthInputKeydown}
      maxLength="2"
      size="2"
      pattern="\d*"
      aria-label={intl.formatMessage({ id: 'Terra.datePicker.monthLabel' })}
    />
  );

  const yearInputClasses = cx([
    'date-input-year',
    { 'initial-focus': yearInitialFocused },
  ]);

  const dateYearInput = (
    <Input
      {...additionalInputProps}
      refCallback={setYearRef}
      className={yearInputClasses}
      type="text"
      name={`terra-date-year-${name}`}
      value={date.year}
      onChange={handleYearChange}
      onFocus={(e) => handleOnInputFocus(e, DateUtil.inputType.YEAR)}
      onBlur={(e) => handleOnInputBlur(e, DateUtil.inputType.YEAR)}
      onKeyDown={handleYearInputKeydown}
      maxLength="4"
      size="4"
      pattern="\d*"
      aria-label={intl.formatMessage({ id: 'Terra.datePicker.yearLabel' })}
    />
  );

  const dateSpacer = <span className={cx('date-spacer')}>{intl.formatMessage({ id: 'Terra.datePicker.separator' })}</span>;

  const dateInputFormat = DateUtil.getInputLayout(
    dateFormatOrder,
    dateSpacer,
    dateDayInput,
    dateMonthInput,
    dateYearInput,
  );

  const dateInputClasses = cx([
    'date-input',
    { 'is-focused': isFocused },
    { 'is-invalid': isInvalid },
    { 'is-incomplete': isIncomplete && required && !isInvalid },
  ]);

  const label = ariaLabel || intl.formatMessage({ id: 'Terra.datePicker.date' });
  const formatDescriptionId = !useExternalFormatMask ? `terra-date-picker-description-format-${uuidRef.current}` : '';

  const buttonClasses = cx([
    'button',
    { 'is-invalid': isInvalid },
  ]);

  const format = intl.formatMessage({ id: 'Terra.datePicker.dateFormat' });

  return (
    <div className={cx(theme.className)}>
      <div className={cx('date-input-container')}>
        <div
          className={dateInputClasses}
          id={id}
          disabled={additionalInputProps.disabled}
          aria-describedby={formatDescriptionId}
        >
          <input
            // Create a hidden input for storing the name and value attributes to use when submitting the form.
            // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
            data-terra-date-input-hidden
            type="hidden"
            name={name}
            value={dateValue}
          />
          <VisuallyHiddenText text={value ? `${label}, ${getLocalizedDateForScreenReader(DateUtil.createSafeDate(dateValue), { intl, locale: intl.locale })}` : label} />
          {dateInputFormat}
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
        />
      </div>
      {!useExternalFormatMask && (
        <div id={formatDescriptionId} className={cx('format-text')} aria-label={`${intl.formatMessage({ id: 'Terra.datePicker.dateFormatLabel' })} ${format}`}>
          {`(${format})`}
        </div>
      )}
    </div>
  );
};

DatePickerInput.propTypes = propTypes;
DatePickerInput.defaultProps = defaultProps;

export default injectIntl(DatePickerInput);
