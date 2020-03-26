import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Input from 'terra-form-input';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import DateUtil from './DateUtil';
import styles from './DatePicker.module.scss';

const cx = classNames.bind(styles);

const Icon = <IconCalendar />;

const propTypes = {
  /**
   * Callback ref to pass into the calendar button dom element.
   */
  buttonRefCallback: PropTypes.func,
  /**
   * Custom input attributes to apply to the date input.
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttributes: PropTypes.object,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
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
   * A callback function triggered when the calendar button receives focus.
   */
  onButtonFocus: PropTypes.func,
  /**
   * The onInputKeyDown callback function from react-datepicker to handle keyboard navigation.
   */
  onKeyDown: PropTypes.func,
  /**
   * The placeholder text to display in the date input.
   */
  placeholder: PropTypes.string,
  /**
   * Whether or not the date is required.
   */
  required: PropTypes.bool,
  /**
   * @private Internal prop for showing date picker.
   */
  shouldShowPicker: PropTypes.bool,
  /**
   * The selected or entered date value to display in the date input.
   */
  value: PropTypes.string,
};

const defaultProps = {
  buttonRefCallback: undefined,
  inputAttributes: undefined,
  isIncomplete: false,
  isInvalid: false,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onClick: undefined,
  onFocus: undefined,
  onButtonFocus: undefined,
  onKeyDown: undefined,
  required: false,
  placeholder: undefined,
  value: undefined,
};

const dateReducer = (state, inputValue) => ({
  ...state,
  ...inputValue,
});

const dateState = { day: '', month: '', year: '' };

function DatePickerInput(props) {
  const [date, dateDispatch] = useReducer(dateReducer, dateState);
  const [isFocused, setFocused] = useState(false);
  const [showPicker, setShowPicker] = useState(null);
  const [dayFocus, setDayFocus] = useState(null);
  const [monthFocus, setMonthFocus] = useState(null);
  const [yearFocus, setYearFocus] = useState(null);

  const setDayRef = useCallback(node => {
    setDayFocus(node);
  }, []);

  const setMonthRef = useCallback(node => {
    setMonthFocus(node);
  }, []);

  const setYearRef = useCallback(node => {
    setYearFocus(node);
  }, []);

  const {
    buttonRefCallback,
    inputAttributes,
    intl,
    isIncomplete,
    isInvalid,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onButtonFocus,
    onKeyDown,
    placeholder,
    required,
    value,
    ...customProps
  } = props;

  const onCalendarButtonClick = customProps.onCalendarButtonClick;
  const shouldShowPicker = customProps.shouldShowPicker;
  delete customProps.onCalendarButtonClick;
  delete customProps.shouldShowPicker;
  const additionalInputProps = { ...customProps, ...inputAttributes };
  let buttonRef;

  useEffect(() => {
    setShowPicker(shouldShowPicker);
    if (showPicker && onClick) {
      onClick();
      setShowPicker(false);
    }
    buttonRef = buttonRefCallback;
  }, [buttonRefCallback, onClick]);

  const localeFormat = intl.formatMessage({ id: 'Terra.datePicker.dateFormatOrder' });
  const variant = DateUtil.getDateFormatVariant(localeFormat);
  const dateValue = DateUtil.convertToISO8601(value, DateUtil.getFormatByLocale(intl.locale));
  const placeholderValues = DateUtil.getPlaceholderValues(variant, placeholder);
  const buttonText = intl.formatMessage({ id: 'Terra.datePicker.openCalendar' });
  const dateFormat = DateUtil.getFormatByLocale(intl.locale);

  const tempDateParse = (dateVal) => {
    if (dateVal) {
      return {
        dayValue: dateVal.substr(8, 10),
        monthValue: dateVal.substr(5, 7),
        yearValue: dateVal.substr(0, 4),
      }
    }
  };

  // Sets the date state based on the passed in value prop, or if it changes via a calendar click.
  useEffect(() => {
    const parseDate = tempDateParse(dateValue);

    dateDispatch({
      day: parseDate.dayValue,
      month: parseDate.monthValue,
      year: parseDate.yearValue,
    });

    let formatISO;
    let formattedDate;

    if (parseDate.yearValue) {
      formatISO = DateUtil.formatISODate(
        parseDate.yearValue.concat('-',
          parseDate.monthValue).concat('-',
          parseDate.dayValue),
        DateUtil.ISO_EXTENDED_DATE_FORMAT,
      );
      formattedDate = DateUtil.strictFormatISODate(formatISO, dateFormat);
      onChange({ target: { value: formattedDate }, isDefaultPrevented: () => {}, type: 'change' });
    }
  }, [dateFormat, onChange, dateValue, value]);

  /**
   * Moves focus to the correct input depending on date ordering. Focus changing is
   * disabled if a complete date has been entered in order to make single input
   * corrections easier, and is re-enabled if the whole date is erased.
   * @param {string} inputValue - The value from the current input.
   * @param {int} type - The input type, based on DateUtil.inputType.
   * @param {string} dateVariant - Date variant based on the currently supported date
   *                      orders: 'MM-DD-YYYY', 'DD-MM-YYYY', or 'YYYY-MM-DD'.
   */
  const moveFocusOnChange = (inputValue, type, dateVariant) => {
    if (dateVariant === 'MM-DD-YYYY') {
      if (inputValue.length === 2) {
        if (type === DateUtil.inputType.MONTH) {
          dayFocus.focus();
        } else {
          yearFocus.focus();
        }
      }
    } else if (dateVariant === 'DD-MM-YYYY') {
      if (inputValue.length === 2) {
        if (type === DateUtil.inputType.DAY) {
          monthFocus.focus();
        } else {
          yearFocus.focus();
        }
      }
    } else if (dateVariant === 'YYYY-MM-DD') {
      if (inputValue.length === 2 && type === DateUtil.inputType.MONTH) {
        dayFocus.focus();
      } else if (inputValue.length === 4) {
        monthFocus.focus();
      }
    }
  };

  /**
   * Sets state for the day, month, and year.
   * @param {string} inputValue - The input value to set in state.
   * @param {int} type - The inputType (day, month, or year).
   */
  const setDate = (inputValue, type) => {
    if (type === DateUtil.inputType.DAY) {
      dateDispatch({ day: inputValue });
    } else if (type === DateUtil.inputType.MONTH) {
      dateDispatch({ month: inputValue });
    } else {
      dateDispatch({ year: inputValue });
    }
    moveFocusOnChange(inputValue, type, variant);
  };

  const handleDateChange = (event, type) => {
    const inputValue = event.target.value.replace(/\D/gm, '');
    setDate(inputValue, type);

    /**
     * Sets the day, month and year based on input values, formats them
     * based on the date format variant, and passes the formatted date to onChange.
     * Variable assignment allows the updated state to be used immediately.
     */
    const day = type === DateUtil.inputType.DAY ? inputValue : date.day;
    const month = type === DateUtil.inputType.MONTH ? inputValue : date.month;
    const year = type === DateUtil.inputType.YEAR ? inputValue : date.year;
    let inputDate;
    let formattedDate;

    if (day.length === 2 && month.length === 2 && year.length === 4) {
      inputDate = DateUtil.formatISODate(`${year}-${month}-${day}`, 'YYYY-MM-DD');
      formattedDate = DateUtil.strictFormatISODate(inputDate, dateFormat);
    }

    /* eslint-disable no-param-reassign */
    if (DateUtil.isValidDate(formattedDate, dateFormat)) {
      event.target.value = formattedDate;
      onChange(event);
    } else if (day === '' && month === '' && year === '') {
      onChange(event);
    } else if (day.length <= 2 || month.length <= 2 || year.length <= 4) {
      // Handles raw input change updates by combining inputs.
      event.preventDefault();
      if (variant === 'MM-DD-YYYY') {
        event.target.value = month + day + year;
      } else if (variant === 'DD-MM-YYYY') {
        event.target.value = day + month + year;
      } else {
        event.target.value = year + month + day;
      }
      onChange(event);
    }
    /* eslint-enable no-param-reassign */
  };

  const handleOnFocus = (event) => {
    setFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleOnBlur = (event) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleOnButtonClick = (event) => {
    const attributes = { ...inputAttributes };
    if (!attributes.readOnly && onCalendarButtonClick && onClick) {
      onCalendarButtonClick(event, onClick);
    }
  };

  const handleOnKeyDown = (event) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const dateInputContainerClasses = cx([
    'date-input-container',
  ]);

  const dateInputClasses = cx([
    'date-input',
    { 'is-focused': isFocused },
    { 'is-invalid': isInvalid },
    { 'is-incomplete': isIncomplete && required && !isInvalid },
  ]);

  const buttonClasses = cx([
    'button',
    { 'is-invalid': isInvalid },
  ]);

  const dateMonthInput = (
    <Input
      {...additionalInputProps}
      refCallback={setMonthRef}
      className={cx('date-input-month')}
      type="text"
      name={`terra-date-month-${name}`}
      value={date.month}
      onChange={(e) => handleDateChange(e, DateUtil.inputType.MONTH)}
      placeholder={placeholderValues.month}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      maxLength="2"
      size="2"
      pattern="\d*"
      aria-label={intl.formatMessage({ id: 'Terra.datePicker.monthLabel' })}
    />
  );

  const dateDayInput = (
    <Input
      {...additionalInputProps}
      refCallback={setDayRef}
      className={cx('date-input-day')}
      type="text"
      name={`terra-date-day-${name}`}
      value={date.day}
      onChange={(e) => handleDateChange(e, DateUtil.inputType.DAY)}
      placeholder={placeholderValues.day}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      maxLength="2"
      size="2"
      pattern="\d*"
      aria-label={intl.formatMessage({ id: 'Terra.datePicker.dayLabel' })}
    />
  );

  const dateYearInput = (
    <Input
      {...additionalInputProps}
      refCallback={setYearRef}
      className={cx('date-input-year')}
      type="text"
      name={`terra-date-year-${name}`}
      value={date.year}
      onChange={(e) => handleDateChange(e, DateUtil.inputType.YEAR)}
      placeholder={placeholderValues.year}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      maxLength="4"
      size="4"
      pattern="\d*"
      aria-label={intl.formatMessage({ id: 'Terra.datePicker.yearLabel' })}
    />
  );

  const dateSpacer = <span className={cx('date-spacer')}>{placeholderValues.delimiter}</span>;

  const dateInputFormat = DateUtil.getInputLayout(
    variant,
    dateSpacer,
    dateMonthInput,
    dateDayInput,
    dateYearInput,
  );

  return (
    <div
      className={dateInputContainerClasses}
    >
      <div className={dateInputClasses}>
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          data-terra-date-input-hidden
          type="hidden"
          name={name}
          value={dateValue}
        />
        {dateInputFormat}
      </div>
      <Button
        className={buttonClasses}
        text={buttonText}
        onClick={handleOnButtonClick}
        onKeyDown={handleOnKeyDown}
        icon={Icon}
        isIconOnly
        isCompact
        isDisabled={additionalInputProps.disabled}
        onBlur={onBlur}
        onFocus={onButtonFocus}
        refCallback={buttonRefCallback}
      />
    </div>
  );
}

DatePickerInput.propTypes = propTypes;
DatePickerInput.defaultProps = defaultProps;

export default injectIntl(DatePickerInput);
