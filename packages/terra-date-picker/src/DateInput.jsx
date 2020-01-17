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

let dateDay;
let dateMonth;
let dateYear;
let dateDelimiter;

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

// eslint-disable-next-line react/prefer-stateless-function
class DatePickerInput extends React.Component {
  constructor(props) {
    super(props);

    const tempDate = DateUtil.strictFormatISODate(props.value, props.placeholder);

    this.state = {};

    if (tempDate) {
      this.state = {
        day: this.props.value.substr(3, 2),
        month: this.props.value.substr(0, 2),
        year: this.props.value.substr(6, 4),
        isFocused: false,
      };
    }

    this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
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
    const tempDate = DateUtil.strictFormatISODate(props.value, props.placeholder);

    if (tempDate && props.value !== state.prevDate) {
      return {
        day: props.value.substr(3, 2),
        month: props.value.substr(0, 2),
        year: props.value.substr(6, 4),
        prevDate: props.value,
      };
    }
    return null;
  }

  moveFocusOnChange(inputValue, type, dateVariant) {
    // Move focus based on input selected and date variant.
    if (inputValue.length === 2) {
      if (dateVariant === 'MM/DD/YYYY') {
        if (type === DateUtil.inputType.MONTH) {
          this.dayInput.focus();
        } else {
          this.yearInput.focus();
        }
      } else if (dateVariant === 'DD/MM/YYYY') {
        if (type === DateUtil.inputType.MONTH) {
          this.yearInput.focus();
        } else {
          this.monthInput.focus();
        }
      }
    } else if (dateVariant === 'YYYY/MM/DD') {
      if (inputValue.length === 4) {
        this.monthInput.focus();
      } else if (type === DateUtil.inputType.MONTH) {
        this.dayInput.focus();
      }
    }
  }

  handleOnButtonClick(event) {
    const attributes = { ...this.props.inputAttributes };

    if (!attributes.readOnly && this.onCalendarButtonClick && this.props.onClick) {
      this.onCalendarButtonClick(event, this.props.onClick);
    }
  }

  handleOnChange(event) {
    if (!DateUtil.validDateInput(event.target.value)) {
      return;
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  handleOnKeyDown(event) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  handleDayChange(event) {
    const inputValue = event.target.value.replace(/\D/gm, '');
    this.handleDateChange(event, DateUtil.inputType.DAY, inputValue);
  }

  handleMonthChange(event) {
    const inputValue = event.target.value.replace(/\D/gm, '');
    this.handleDateChange(event, DateUtil.inputType.MONTH, inputValue);
  }

  handleYearChange(event) {
    const inputValue = event.target.value.replace(/\D/gm, '');
    this.handleDateChange(event, DateUtil.inputType.YEAR, inputValue);
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
    if (type === DateUtil.inputType.DAY) {
      this.setState({
        day: value,
      }, this.moveFocusOnChange(value, type, this.variant));
    } else if (type === DateUtil.inputType.MONTH) {
      this.setState({
        month: value,
      }, this.moveFocusOnChange(value, type, this.variant));
    } else if (type === DateUtil.inputType.YEAR) {
      this.setState({
        year: value,
      }, this.moveFocusOnChange(value, type, this.variant));
    }

    const day = type === DateUtil.inputType.DAY ? value : this.state.day;
    const month = type === DateUtil.inputType.MONTH ? value : this.state.month;
    const year = type === DateUtil.inputType.YEAR ? value : this.state.year;
    const dateFormat = DateUtil.getFormatByLocale(this.props.intl.locale);

    if (day === '' && month === '' && year === '') {
      this.props.onChange(event, '');
    } else if (month && day && year) {
      const tempDate = year.concat('-', month).concat('-', day);
      const formattedDate = DateUtil.strictFormatISODate(tempDate, dateFormat);
      event.target.value = formattedDate; // eslint-disable-line no-param-reassign
      this.props.onChange(event, formattedDate);
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

    this.variant = undefined;

    delete customProps.onCalendarButtonClick;
    delete customProps.shouldShowPicker;

    const additionalInputProps = { ...customProps, ...inputAttributes };
    const dateValue = DateUtil.convertToISO8601(value, DateUtil.getFormatByLocale(intl.locale));

    if (placeholder) {
      if (placeholder === 'MM/DD/YYYY') {
        dateMonth = placeholder.substr(0, 2);
        dateDay = placeholder.substr(3, 5);
        dateYear = placeholder.substr(6, 10);
        this.variant = placeholder;
      } else if (placeholder === 'YYYY-MM-DD') {
        dateMonth = placeholder.substr(5, 7);
        dateDay = placeholder.substr(8, 10);
        dateYear = placeholder.substr(0, 4);
        dateDelimiter = '-';
        this.variant = 'YYYY/MM/DD';
      } else {
        dateMonth = placeholder.substr(3, 5);
        dateDay = placeholder.substr(0, 2);
        dateYear = placeholder.substr(6, 10);
        this.variant = 'DD/MM/YYYY';
      }
    }

    if (!dateDelimiter) {
      dateDelimiter = '/';
    }

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
    let dateInputFormat;

    const dateMonthInput = (
      <Input
        {...additionalInputProps}
        refCallback={(inputRef) => { this.monthInput = inputRef; }}
        className={cx('date-input-month')}
        type="text"
        name={'terra-date-month-'.concat(name)}
        value={this.state.month}
        onChange={this.handleMonthChange}
        placeholder={dateMonth || 'MM'}
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
        placeholder={dateDay || 'DD'}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        maxLength="2"
        size="2"
        pattern="\d*"
        aria-label={intl.formatMessage({ id: 'Terra.datePicker.today' })}
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
        placeholder={dateYear || 'YYYY'}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        maxLength="4"
        size="4"
        pattern="\d*"
        aria-label={intl.formatMessage({ id: 'Terra.datePicker.yearLabel' })}
      />
    );

    const dateSpacer = <span className={cx('date-spacer')}>{dateDelimiter}</span>;

    if (this.variant === 'MM/DD/YYYY') {
      dateInputFormat = (
        <>
          {dateMonthInput}
          {dateSpacer}
          {dateDayInput}
          {dateSpacer}
          {dateYearInput}
        </>
      );
    } else if (this.variant === 'DD/MM/YYYY') {
      dateInputFormat = (
        <>
          {dateDayInput}
          {dateSpacer}
          {dateMonthInput}
          {dateSpacer}
          {dateYearInput}
        </>
      );
    } else {
      dateInputFormat = (
        <>
          {dateYearInput}
          {dateSpacer}
          {dateMonthInput}
          {dateSpacer}
          {dateDayInput}
        </>
      );
    }

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
