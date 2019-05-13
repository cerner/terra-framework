import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Input from 'terra-form-input';
import DateUtil from './DateUtil';
import styles from './DatePicker.module.scss';

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
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onClick: undefined,
  onFocus: undefined,
  onButtonFocus: undefined,
  onKeyDown: undefined,
  placeholder: undefined,
  value: undefined,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class DatePickerInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.shouldShowPicker && !prevProps.shouldShowPicker && this.props.onClick) {
      this.props.onClick();
    }
  }

  handleOnButtonClick(event) {
    const attributes = Object.assign({}, this.props.inputAttributes);

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

  render() {
    const {
      buttonRefCallback,
      inputAttributes,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onButtonFocus,
      onKeyDown,
      placeholder,
      value,
      ...customProps
    } = this.props;

    this.onCalendarButtonClick = customProps.onCalendarButtonClick;
    this.shouldShowPicker = customProps.shouldShowPicker;

    delete customProps.onCalendarButtonClick;
    delete customProps.shouldShowPicker;

    const additionalInputProps = Object.assign({}, customProps, inputAttributes);

    const dateValue = DateUtil.convertToISO8601(value, DateUtil.getFormatByLocale(this.context.intl.locale));
    const buttonText = this.context.intl.formatMessage({ id: 'Terra.datePicker.openCalendar' });

    return (
      <div className={styles['custom-input']}>
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
          className={styles.input}
          type="text"
          name={'terra-date-'.concat(name)}
          value={value}
          onChange={this.handleOnChange}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <Button
          className={styles.button}
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
DatePickerInput.contextTypes = contextTypes;

export default DatePickerInput;
