import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Input from 'terra-form-input';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';

import DateUtil from './DateUtil';
import styles from './DatePicker.module.scss';
import { _ } from 'core-js';

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

    this.state = {
      day: this.props.value.slice(8, 10),
      month: this.props.value.slice(5, 7),
      year: this.props.value.slice(0, 4),
    };

    this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.shouldShowPicker && !prevProps.shouldShowPicker && this.props.onClick) {
      this.props.onClick();
    }
  }

  static getDerivedStateFromProps(props, state) {
    const tempDate = DateUtil.createSafeDate(props.value);
    if (tempDate && props.value !== state.prevDate) {
      return {
        day: props.value.slice(8, 10),
        month: props.value.slice(5, 7),
        year: props.value.slice(0, 4),
        prevDate: props.value,
      };
    }
    return null;
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
    const moveFocusOnChange = () => {
      // Move focus to second if second is shown and minute input has a valid and complete entry
      if (inputValue.length === 2) {
        this.yearInput.focus();
      }
    };
    this.handleDateChange(event, DateUtil.inputType.DAY, inputValue, moveFocusOnChange);
  }

  handleMonthChange(event) {
    const inputValue = event.target.value.replace(/\D/gm, '');
    const moveFocusOnChange = () => {
      // Move focus to second if second is shown and minute input has a valid and complete entry
      if (inputValue.length === 2) {
        this.dayInput.focus();
      }
    };
    this.handleDateChange(event, DateUtil.inputType.MONTH, inputValue, moveFocusOnChange);
  }

  handleYearChange(event) {
    const inputValue = event.target.value.replace(/\D/gm, '');
    this.handleDateChange(event, DateUtil.inputType.YEAR, inputValue);
  }

  handleDateChange(event, type, value, moveFocusOnChange) {
    if (type === DateUtil.inputType.DAY) {
      this.setState({
        day: value,
      }, moveFocusOnChange);
    } else if (type === DateUtil.inputType.MONTH) {
      this.setState({
        month: value,
      }, moveFocusOnChange);
    } else if (type === DateUtil.inputType.YEAR) {
      this.setState({
        year: value,
      });
    }

    const day = type === DateUtil.inputType.DAY ? value : this.state.day;
    const month = type === DateUtil.inputType.MONTH ? value : this.state.month;
    const year = type === DateUtil.inputType.YEAR ? value : this.state.year;

    if (day === '' && month === '' && year === '') {
      this.props.onChange(event, '');
    } else if (year.length === 4) {
      const tempDate = year.concat('-', month).concat('-', day);
      this.props.onChange(event, tempDate);
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
            aria-label={intl.formatMessage({ id: 'Terra.datePicker.monthLabel' })}
            tabIndex={0}
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
            aria-label={intl.formatMessage({ id: 'Terra.datePicker.today' })}
            tabIndex={0}
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
            size="4"
            pattern="\d*"
            aria-label={intl.formatMessage({ id: 'Terra.datePicker.yearLabel' })}
            tabIndex={0}
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
