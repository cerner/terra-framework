import React from 'react';
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

class DatePickerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.moveFocusOnChange = this.moveFocusOnChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.shouldShowPicker && !prevProps.shouldShowPicker && this.props.onClick) {
      this.props.onClick();
    }
  }

  static getDerivedStateFromProps(props, state) {
    // Formats the selected date into a consistent value and sets input state.
    if (props.value !== state.prevDate) {
      const format = DateUtil.getDateFormat(props.intl.formatMessage({ id: 'Terra.datePicker.dateFormatOrder' }));
      const tempDate = DateUtil.convertToISO8601(props.value, format);
      return {
        day: tempDate.substring(8, 10),
        month: tempDate.substring(5, 7),
        year: tempDate.substring(0, 4),
        prevDate: props.value,
      };
    }
    return null;
  }

  /**
   * Moves focus to the correct input depending on date ordering.
   * @param {string} inputValue - The value from the current input.
   * @param {int} type - The input type, based on DateUtil.inputType.
   * @param {string} dateVariant - Date variant based on the currently supported date
   *                      orders: 'MM-DD-YYYY', 'DD-MM-YYYY', or 'YYYY-MM-DD'.
   */
  moveFocusOnChange(inputValue, type, dateVariant) {
    if (dateVariant === 'MM-DD-YYYY') {
      if (inputValue.length === 2) {
        if (type === DateUtil.inputType.MONTH) {
          this.dayInput.focus();
        } else {
          this.yearInput.focus();
        }
      }
    } else if (dateVariant === 'DD-MM-YYYY') {
      if (inputValue.length === 2) {
        if (type === DateUtil.inputType.DAY) {
          this.monthInput.focus();
        } else {
          this.yearInput.focus();
        }
      }
    } else if (dateVariant === 'YYYY-MM-DD') {
      if (inputValue.length === 2 && type === DateUtil.inputType.MONTH) {
        this.dayInput.focus();
      } else if (inputValue.length === 4) {
        this.monthInput.focus();
      }
    }
  }

  handleOnButtonClick(event) {
    const attributes = { ...this.props.inputAttributes };

    if (!attributes.readOnly && this.onCalendarButtonClick && this.props.onClick) {
      this.onCalendarButtonClick(event, this.props.onClick);
    }
  }

  handleOnKeyDown(event) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  handleDayChange(event) {
    this.handleDateChange(event, DateUtil.inputType.DAY);
  }

  handleMonthChange(event) {
    this.handleDateChange(event, DateUtil.inputType.MONTH);
  }

  handleYearChange(event) {
    this.handleDateChange(event, DateUtil.inputType.YEAR);
  }

  handleOnFocus(event) {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  handleOnBlur(event) {
    this.setState({ isFocused: false });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  handleDateChange(event, type, value) {
    const inputValue = event.target.value.replace(/\D/gm, '');
    if (type === DateUtil.inputType.DAY) {
      this.setState({
        day: inputValue,
      });
    } else if (type === DateUtil.inputType.MONTH) {
      this.setState({
        month: inputValue,
      });
    } else if (type === DateUtil.inputType.YEAR) {
      this.setState({
        year: inputValue,
      });
    }

    if (!this.state.year) {
      this.moveFocusOnChange(inputValue, type, this.variant);
    }

    /**
     * Sets the day, month and year based on input values, formats them
     * based on the date format variant, and passes the formatted date to onChange.
     */
    const day = type === DateUtil.inputType.DAY ? inputValue : this.state.day;
    const month = type === DateUtil.inputType.MONTH ? inputValue : this.state.month;
    const year = type === DateUtil.inputType.YEAR ? inputValue : this.state.year;
    const dateFormat = DateUtil.getFormatByLocale(this.props.intl.locale);

    let tempDate;
    let formattedDate;

    if (day.length === 2 && month.length === 2 && year.length === 4) {
      tempDate = DateUtil.formatISODate(year.concat('-', month).concat('-', day), 'YYYY-MM-DD');
      formattedDate = DateUtil.strictFormatISODate(tempDate, dateFormat);
    }

    if (DateUtil.isValidDate(formattedDate, dateFormat)) {
      this.props.onChange(event, formattedDate);
    } else if (day === '' && month === '' && year === '') {
      this.props.onChange(event, '');
    }
  }

  render() {
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
    } = this.props;

    this.onCalendarButtonClick = customProps.onCalendarButtonClick;
    this.shouldShowPicker = customProps.shouldShowPicker;

    const localeFormat = intl.formatMessage({ id: 'Terra.datePicker.dateFormatOrder' });
    this.variant = DateUtil.getDateFormat(localeFormat);

    delete customProps.onCalendarButtonClick;
    delete customProps.shouldShowPicker;

    const additionalInputProps = { ...customProps, ...inputAttributes };
    const dateValue = DateUtil.convertToISO8601(value, DateUtil.getFormatByLocale(intl.locale));
    const placeholderValues = DateUtil.getPlaceholderValues(this.variant, placeholder);

    const dateInputContainerClasses = cx([
      'date-input-container',
    ]);

    const dateInputClasses = cx([
      'date-input',
      { 'is-focused': this.state.isFocused },
      { 'is-invalid': isInvalid },
      { 'is-incomplete': isIncomplete && required && !isInvalid },
    ]);
    const buttonClasses = cx([
      'button',
      { 'is-invalid': isInvalid },
    ]);
    const buttonText = intl.formatMessage({ id: 'Terra.datePicker.openCalendar' });

    const dateMonthInput = (
      <Input
        {...additionalInputProps}
        refCallback={(inputRef) => { this.monthInput = inputRef; }}
        className={cx('date-input-month')}
        type="text"
        name={'terra-date-month-'.concat(name)}
        value={this.state.month}
        onChange={this.handleMonthChange}
        placeholder={placeholderValues.month || 'MM'}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        maxLength="2"
        size="2"
        pattern="\d*"
        aria-label={intl.formatMessage({ id: 'Terra.datePicker.monthLabel' })}
      />
    );

    const dateDayInput = (
      <Input
        {...additionalInputProps}
        refCallback={(inputRef) => { this.dayInput = inputRef; }}
        className={cx('date-input-day')}
        type="text"
        name={'terra-date-day-'.concat(name)}
        value={this.state.day}
        onChange={this.handleDayChange}
        placeholder={placeholderValues.day || 'DD'}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        maxLength="2"
        size="2"
        pattern="\d*"
        aria-label={intl.formatMessage({ id: 'Terra.datePicker.dayLabel' })}
      />
    );

    const dateYearInput = (
      <Input
        {...additionalInputProps}
        refCallback={(inputRef) => { this.yearInput = inputRef; }}
        className={cx('date-input-year')}
        type="text"
        name={'terra-date-year-'.concat(name)}
        value={this.state.year}
        onChange={this.handleYearChange}
        placeholder={placeholderValues.year || 'YYYY'}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        maxLength="4"
        size="4"
        pattern="\d*"
        aria-label={intl.formatMessage({ id: 'Terra.datePicker.yearLabel' })}
      />
    );

    const dateSpacer = <span className={cx('date-spacer')}>{placeholderValues.delimiter}</span>;

    const dateInputFormat = DateUtil.getInputLayout(
      this.variant,
      dateSpacer,
      dateMonthInput,
      dateDayInput,
      dateYearInput,
    );

    return (
      <div
        {...customProps}
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
          onClick={this.handleOnButtonClick}
          onKeyDown={this.handleOnKeyDown}
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
}

DatePickerInput.propTypes = propTypes;
DatePickerInput.defaultProps = defaultProps;

export default injectIntl(DatePickerInput);
