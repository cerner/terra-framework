/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import { injectIntl } from 'react-intl';
import IconError from 'terra-icon/lib/icon/IconError';
import DateTimePicker from './DateTimePicker';

const propTypes = {
  /**
   * The DateTimePicker identifier. Links the htmlFor of the field to the select identifier.
   */
  dateTimePickerId: PropTypes.string.isRequired,
  /**
   * Whether the date input should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Error message for when the input is invalid. This will only be displayed if isInvalid is true.
   */
  error: PropTypes.node,
  /**
   * Error Icon to display when the input is invalid.
   */
  errorIcon: PropTypes.element,
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker.
   */
  excludeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled.
   * A return value of true will be enabled and false will be disabled.
   */
  filterDate: PropTypes.func,
  /**
   * Help element to display with the input.
   */
  help: PropTypes.node,
  /**
   * Whether or not to hide the required indicator on the label.
   */
  hideRequired: PropTypes.bool,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * Custom input attributes to apply to the date input. Use the name prop to set the name for the date input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  dateInputAttributes: PropTypes.object,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: PropTypes.shape({ formatMessage: PropTypes.func, locale: PropTypes.string }).isRequired,
  /**
  * Whether the field displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
  */
  isIncomplete: PropTypes.bool,
  /**
   * Whether or not the field is an inline field.
   */
  isInline: PropTypes.bool,
  /**
  * Whether the field displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalid: PropTypes.bool,
  /**
  * Whether the selected meridiem displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalidMeridiem: PropTypes.bool,
  /**
   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.
   */
  isLabelHidden: PropTypes.bool,
  /**
   * The label of the form control children.
   */
  label: PropTypes.node.isRequired,
  /**
   * Attributes to attach to the label.
   */
  labelAttrs: PropTypes.object,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected. The value must be in the `YYYY-MM-DD` format. Must be on or before `12/31/2100`.
   */
  maxDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected. The value must be in the `YYYY-MM-DD` format. Must be on or after `01/01/1900`
   */
  minDate: PropTypes.string,
  /**
   * Name of the date input. The name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
   * A callback function triggered when the date picker component loses focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.
   * The first parameter is the event. The second parameter is the metadata to describe the current state of the input value at the time when the onBlur callback is triggered.
   */
  onBlur: PropTypes.func,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChange callback is triggered.
   */
  onChange: PropTypes.func,
  /**
   * A callback function to execute when a change is made in the date input.
   * The first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChangeRaw callback is triggered.
   */
  onChangeRaw: PropTypes.func,
  /**
   * **Deprecated**, A callback function to execute when clicking outside of the picker to dismiss it. Resolves to `onRequestClose`.
   */
  onClickOutside: PropTypes.func,
  /**
   * A callback function triggered when the date picker component receives focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to execute when picker is dismissed. onRequestClose(event)
   */
  onRequestClose: PropTypes.func,
  /**
   * A callback function to execute when a date is selected from within the picker.
   */
  onSelect: PropTypes.func,
  /**
   * Whether or not the date field is required.
   */
  required: PropTypes.bool,
  /**
   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed
   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_
   */
  maxWidth: PropTypes.string,
  /**
   * An ISO 8601 string representation of the initial value to show in the date input.
   * This prop name is derived from react-dateTimepicker but is analogous to value in a form input field.
   */
  selectedDate: PropTypes.string,
  /**
   * Whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
  /**
   * Custom input attributes to apply to the time input. Use the name prop to set the name for the time input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  timeInputAttributes: PropTypes.object,
  /**
   * The date value. This prop should only be used for a controlled date picker field.
   * When this prop is set a handler is needed for both the `onChange` and `onChangeRaw` props to manage the date value.
   * If both `selectedDate` and this prop are set, then `selectedDate` will have no effect.
   * The value must be in the `YYYY-MM-DD` format or the all-numeric date format based on the locale.
   */
  value: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  error: null,
  errorIcon: <IconError />,
  excludeDates: undefined,
  filterDate: undefined,
  help: null,
  hideRequired: false,
  includeDates: undefined,
  dateInputAttributes: undefined,
  isIncomplete: false,
  isInline: false,
  isInvalid: false,
  isLabelHidden: false,
  labelAttrs: {},
  maxDate: undefined,
  maxWidth: undefined,
  minDate: undefined,
  onBlur: undefined,
  onChange: undefined,
  onChangeRaw: undefined,
  onClickOutside: undefined,
  onFocus: undefined,
  onSelect: undefined,
  required: false,
  selectedDate: undefined,
  showOptional: false,
};

const DateTimePickerField = (props) => {
  const {
    dateTimePickerId,
    disabled,
    dateInputAttributes,
    error,
    errorIcon,
    excludeDates,
    filterDate,
    help,
    hideRequired,
    isIncomplete,
    isInvalid,
    isInvalidMeridiem,
    isInline,
    isLabelHidden,
    includeDates,
    intl,
    label,
    labelAttrs,
    maxDate,
    minDate,
    maxWidth,
    name,
    onBlur,
    onChange,
    onChangeRaw,
    onClickOutside,
    onFocus,
    onRequestClose,
    onSelect,
    required,
    selectedDate,
    showOptional,
    timeInputAttributes,
    value,
    ...customProps
  } = props;

  const format = intl.formatMessage({ id: 'Terra.datePicker.dateFormat' });

  const helpLabel = help ? (
    <div aria-label={`${intl.formatMessage({ id: 'Terra.datePicker.dateFormatLabel' })} ${format}, ${help}`}>
      &nbsp;
      {help}
    </div>
  ) : (
    <></>
  );

  return (
    <Field
      {...customProps}
      label={label}
      labelAttrs={labelAttrs}
      error={error}
      help={helpLabel}
      hideRequired={hideRequired}
      required={required}
      showOptional={showOptional}
      isInvalid={isInvalid}
      isInline={isInline}
      isLabelHidden={isLabelHidden}
      htmlFor={dateTimePickerId}
      maxWidth={maxWidth}
    >
      <DateTimePicker
        disabled={disabled}
        id={dateTimePickerId}
        dateInputAttributes={dateInputAttributes}
        excludeDates={excludeDates}
        filterDate={filterDate}
        useExternalFormatMask
        includeDates={includeDates}
        isInvalid={isInvalid}
        isInvalidMeridiem={isInvalidMeridiem}
        isIncomplete={isIncomplete}
        maxDate={maxDate}
        minDate={minDate}
        ariaLabel={label}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onChangeRaw={onChangeRaw}
        onRequestClose={onRequestClose}
        onClickOutside={onClickOutside}
        onFocus={onFocus}
        onSelect={onSelect}
        required={required}
        selectedDate={selectedDate}
        timeInputAttributes={timeInputAttributes}
        value={value}
      />
    </Field>
  );
};

DateTimePickerField.propTypes = propTypes;
DateTimePickerField.defaultProps = defaultProps;

export default injectIntl(DateTimePickerField);
