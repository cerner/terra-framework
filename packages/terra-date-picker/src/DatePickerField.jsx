import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import DatePicker from './DatePicker';

const propTypes = {
  /**
   * The DatePicker identifier. Links the htmlFor of the field to the select identifier.
   */
  datePickerId: PropTypes.string.isRequired,
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
   * Whether or not the field is an inline field.
   */
  isInline: PropTypes.bool,
  /**
   * Whether or not the field is invalid.
   */
  isInvalid: PropTypes.bool,
  /**
   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.
   */
  isLabelHidden: PropTypes.bool,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * Custom input attributes to apply to the date input. Use the name prop to set the name for the input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttributes: PropTypes.object,
  /**
   * The label of the form control children.
   */
  label: PropTypes.node.isRequired,
  /**
   * Attributes to attach to the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: PropTypes.object,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected.
   */
  maxDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected.
   */
  minDate: PropTypes.string,
  /**
   * Name of the date input. The name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
   * A callback function triggered when the date picker component loses focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.
   */
  onBlur: PropTypes.func,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed date value.
   */
  onChange: PropTypes.func,
  /**
   * A callback function to execute when a change is made in the date input.
   * The first parameter is the event. The second parameter is the changed date value.
   */
  onChangeRaw: PropTypes.func,
  /**
   * A callback function to execute when clicking outside of the picker to dismiss it.
   */
  onClickOutside: PropTypes.func,
  /**
   * A callback function triggered when the date picker component receives focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.
   */
  onFocus: PropTypes.func,
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
   * This prop name is derived from react-datepicker but is analogous to value in a form input field.
   */
  selectedDate: PropTypes.string,
  /**
   * Whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
};

const defaultProps = {
  disabled: false,
  error: null,
  errorIcon: Field.defaultProps.errorIcon,
  excludeDates: undefined,
  filterDate: undefined,
  help: null,
  hideRequired: false,
  includeDates: undefined,
  inputAttributes: undefined,
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

const DatePickerField = (props) => {
  const {
    datePickerId,
    disabled,
    inputAttributes,
    error,
    errorIcon,
    excludeDates,
    filterDate,
    help,
    hideRequired,
    isInvalid,
    isInline,
    isLabelHidden,
    includeDates,
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
    onSelect,
    required,
    selectedDate,
    showOptional,
    ...customProps
  } = props;

  let ariaDescriptionIds;

  if (help && error && isInvalid) {
    ariaDescriptionIds = `${datePickerId}-error ${datePickerId}-help`;
  } else {
    if (help) {
      ariaDescriptionIds = `${datePickerId}-help`;
    }

    if (error && isInvalid) {
      ariaDescriptionIds = `${datePickerId}-error`;
    }
  }

  let mergedInputAttrs = inputAttributes;
  if (ariaDescriptionIds) {
    mergedInputAttrs = Object.assign({ 'aria-describedby': ariaDescriptionIds }, inputAttributes);
  }

  return (
    <Field
      {...customProps}
      label={label}
      labelAttrs={labelAttrs}
      error={error}
      help={help}
      hideRequired={hideRequired}
      required={required}
      showOptional={showOptional}
      isInvalid={isInvalid}
      isInline={isInline}
      isLabelHidden={isLabelHidden}
      htmlFor={datePickerId}
      maxWidth={maxWidth}
    >
      <DatePicker
        disabled={disabled}
        id={datePickerId}
        inputAttribute={mergedInputAttrs}
        excludeDates={excludeDates}
        filterDate={filterDate}
        includeDates={includeDates}
        maxDate={maxDate}
        minDate={minDate}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onChangeRaw={onChangeRaw}
        onClickOutside={onClickOutside}
        onFocus={onFocus}
        onSelect={onSelect}
        required={required}
        selectedDate={selectedDate}
      />
    </Field>
  );
};

DatePickerField.propTypes = propTypes;
DatePickerField.defaultProps = defaultProps;

export default DatePickerField;
