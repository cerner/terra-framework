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

// eslint-disable-next-line react/prefer-stateless-function
class DatePickerInput extends React.Component {
  constructor(props) {
    super(props);

    const { value } = this.props;

    this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);

    this.state = {
      day: value.slice(3, 5),
      month: value.slice(0, 2),
      year: value.slice(6, 10),
    };
  }

  componentDidUpdate(prevProps) {
    if (this.shouldShowPicker && !prevProps.shouldShowPicker && this.props.onClick) {
      this.props.onClick();
    }
  }

  handleOnButtonClick(event) {
    const attributes = { ...this.props.inputAttributes };

    if (!attributes.readOnly && this.onCalendarButtonClick && this.props.onClick) {
      this.onCalendarButtonClick(event, this.props.onClick);
    }
  }

  handleDateChange(event, type, dateValue, moveFocusOnChange) {
    if (type === DateUtil.inputType.MONTH) {
      this.setState({
        month: dateValue,
      }, moveFocusOnChange);
    } else if (type === DateUtil.inputType.DAY) {
      this.setState({
        day: dateValue,
      }, moveFocusOnChange);
    } else {
      this.setState({
        year: dateValue,
      }, moveFocusOnChange);
    }

    // Input values of length 1 indicate incomplete time, which means we cannot get a
    // reliable time so onChange isn't triggered.
    if (this.props.onChange && type === DateUtil.inputType.YEAR && !(dateValue.length < 4)) {
      const month = type === DateUtil.inputType.MONTH ? dateValue : this.state.month;
      const day = type === DateUtil.inputType.DAY ? dateValue : this.state.day;
      const year = type === DateUtil.inputType.YEAR ? dateValue : this.state.year;

      this.props.onChange(event, '12/14/1932');
    }
  }

  handleMonthChange(event) {
    const inputValue = event.target.value;
    if (inputValue.length === 2) {
      this.dayInput.focus();
    }
    this.setState({ month: inputValue });
  }

  handleDayChange(event) {
    const inputValue = event.target.value;
    if (inputValue.length === 2) {
      this.yearInput.focus();
    }
    this.setState({ day: inputValue });
  }

  handleYearChange(event) {
    const inputValue = event.target.value;
    this.setState({ year: inputValue });
  }

  handleOnKeyDown(event) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
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

    delete customProps.onCalendarButtonClick;
    delete customProps.shouldShowPicker;

    const additionalInputProps = { ...customProps, ...inputAttributes };
    const dateValue = DateUtil.convertToISO8601(value, DateUtil.getFormatByLocale(intl.locale));

    const dateInputClasses = cx([
      'date-input',
      { 'is-invalid': isInvalid },
      { 'is-incomplete': isIncomplete && required && !isInvalid },
    ]);
    const buttonClasses = cx([
      'button',
      { 'is-invalid': isInvalid },
    ]);
    const buttonText = intl.formatMessage({ id: 'Terra.datePicker.openCalendar' });
    console.log(dateValue);
    return (
      <div
        {...customProps}
        className={cx('date-input-container')}
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
          <Input
            {...additionalInputProps}
            refCallback={(inputRef) => { this.monthInput = inputRef; }}
            className={cx('date-input-month')}
            type="text"
            name={'terra-date-month'.concat(name)}
            value={this.state.month}
            onChange={this.handleMonthChange}
            placeholder="MM"
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength="2"
            size="2"
            pattern="\d*"
            aria-label={intl.formatMessage({ id: 'Terra.datePicker.date' })}
          />
          <span className={cx('date-spacer')}>/</span>
          <Input
            {...additionalInputProps}
            refCallback={(inputRef) => { this.dayInput = inputRef; }}
            className={cx('date-input-day')}
            type="text"
            name={'terra-date-day'.concat(name)}
            value={this.state.day}
            onChange={this.handleDayChange}
            placeholder="DD"
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength="2"
            size="2"
            pattern="\d*"
            aria-label={intl.formatMessage({ id: 'Terra.datePicker.date' })}
          />
          <span className={cx('date-spacer')}>/</span>
          <Input
            {...additionalInputProps}
            refCallback={(inputRef) => { this.yearInput = inputRef; }}
            className={cx('date-input-year')}
            type="text"
            name={'terra-date-year'.concat(name)}
            value={this.state.year}
            onChange={this.handleYearChange}
            placeholder="YYYY"
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength="4"
            size="2"
            pattern="\d*"
            aria-label={intl.formatMessage({ id: 'Terra.datePicker.date' })}
          />
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
