import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Input from 'terra-form-input';
import { injectIntl } from 'react-intl';
import uuidv4 from 'uuid/v4';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import DateUtil from './DateUtil';
import { getLocalizedDateForScreenReader } from './react-datepicker/date_utils';
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
  inputAttributes: PropTypes.object,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: PropTypes.shape({}).isRequired,
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
   * Whether or not the date is required.
   */
  required: PropTypes.bool,
  /**
   * @private Internal prop for showing date picker.
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
  * String that labels the current element. 'aria-label' must be present,
  * for accessibility.
  */
  ariaLabel: PropTypes.string,
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
  useExternalFormatMask: false,
  value: undefined,
  ariaLabel: undefined,
};

class DatePickerInput extends React.Component {
  constructor(props) {
    super(props);

    this.uuid = uuidv4();

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
      required,
      useExternalFormatMask,
      value,
      ariaLabel,
      ...customProps
    } = this.props;

    this.onCalendarButtonClick = customProps.onCalendarButtonClick;
    this.shouldShowPicker = customProps.shouldShowPicker;

    delete customProps.onCalendarButtonClick;
    delete customProps.shouldShowPicker;

    const additionalInputProps = { ...customProps, ...inputAttributes };

    const dateValue = DateUtil.convertToISO8601(value, DateUtil.getFormatByLocale(intl.locale));
    const inputClasses = cx([
      'input',
      { 'is-invalid': isInvalid },
      { 'is-incomplete': isIncomplete && required && !isInvalid },
    ]);
    const buttonClasses = cx([
      'button',
      { 'is-invalid': isInvalid },
    ]);
    const buttonText = intl.formatMessage({ id: 'Terra.datePicker.openCalendar' });
    const theme = this.context;

    const label = this.props.ariaLabel ? this.props.ariaLabel : intl.formatMessage({ id: 'Terra.datePicker.date' });
    const formatDescriptionId = `terra-date-picker-description-format-${this.uuid}`;

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

    const format = intl.formatMessage({ id: 'Terra.datePicker.dateFormat' });

    return (
      <div className={cx(theme.className)}>
        <div className={cx('custom-input')}>
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
            className={inputClasses}
            type="text"
            name={'terra-date-'.concat(name)}
            value={value}
            onChange={this.handleOnChange}
            onFocus={onFocus}
            onBlur={onBlur}
            aria-required={required}
            ariaLabel={value ? `${label}, ${getLocalizedDateForScreenReader(DateUtil.createSafeDate(dateValue), { intl: this.props.intl, locale: this.props.intl.locale })}` : label}
            aria-describedby={ariaDescriptionIds}
          />
          <Button
            data-terra-open-calendar-button
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
        { (useExternalFormatMask === false) && (
        <div id={formatDescriptionId} className={cx('format-text')} aria-label={`${intl.formatMessage({ id: 'Terra.datePicker.dateFormatLabel' })} ${format}`}>
          {`(${format})`}
        </div>
        )}
      </div>
    );
  }
}

DatePickerInput.propTypes = propTypes;
DatePickerInput.defaultProps = defaultProps;
DatePickerInput.contextType = ThemeContext;

export default injectIntl(DatePickerInput);
