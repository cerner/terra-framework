import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import { injectIntl, intlShape } from 'react-intl';
import TimeInput from './TimeInput';

import TimeUtil from './TimeUtil';

const propTypes = {
  /**
   * The timeInput identifier. Links the htmlFor of the field to the select identifier.
   */
  timeInputId: PropTypes.string.isRequired,
  /**
   * Whether the time input should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Error message for when the input is invalid. This will only be displayed if isInvalid is true.
   */
  error: PropTypes.node,
  /**
   * Help element to display with the input.
   */
  help: PropTypes.node,
  /**
   * Whether or not to hide the required indicator on the label.
   */
  hideRequired: PropTypes.bool,
  /**
   * Custom input attributes to apply to the hour input
   */
  hourAttributes: PropTypes.object,
  /**
   * The htmlFor attribute on the field label.
   */
  htmlFor: PropTypes.string,
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
   * Whether or not the field is an inline field.
   */
  isInline: PropTypes.bool,
  /**
  * Whether the input displays as Invalid. Use when value does not meet validation pattern.
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
  label: PropTypes.string.isRequired,
  /**
   * Attributes to attach to the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: PropTypes.object,
  /**
  * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed
  * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_
  */
  maxWidth: PropTypes.string,
  /**
   * Custom input attributes to apply to the minutes input
   */
  minuteAttributes: PropTypes.object,
  /**
   * Name of the time input. The name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
   * A callback function to execute when the entire time input component loses focus.
   * This event does not get triggered when the focus is moved from the hour input to the minute input or meridiem because the focus is still within the main time input component.
   */
  onBlur: PropTypes.func,
  /**
   * A callback function to execute when either the hour or minute has been changed.
   * The first parameter is the event. The second parameter is the changed time value.
   */
  onChange: PropTypes.func,
  /**
   * A callback function triggered when the hour input or minute input receives focus.
   */
  onFocus: PropTypes.func,
  /**
   * Callback ref to pass into the input dom element.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the time is required.
   */
  required: PropTypes.bool,
  /**
   * Custom input attributes to apply to the seconds input
   */
  secondAttributes: PropTypes.object,
  /**
   * Whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
  /**
   * Whether the input for seconds should be displayed or not. If true then the second field must have a valid
   * number for the overall time to be considered valid.
   */
  showSeconds: PropTypes.bool,
  /**
   * An ISO 8601 string representation of the time value in the input.
   */
  value: PropTypes.string,
  /**
   * Type of time input to initialize. Must be `24-hour` or `12-hour`.
   * The `de`, `es-ES`, `es`, `fr-FR`, `fr`, `nl-BE`, `nl`, `pt-BR`, `pt`, `sv-SE` and `sv` locales do not use the 12-hour time notation.
   * If the `variant` prop if set to `12-hour` for one of these supported locales, the variant will be ignored and defaults to `24-hour`.
   */
  variant: PropTypes.oneOf([TimeUtil.FORMAT_12_HOUR, TimeUtil.FORMAT_24_HOUR]),
};

const defaultProps = {
  disabled: false,
  error: null,
  help: null,
  hideRequired: false,
  hourAttributes: {},
  isIncomplete: false,
  isInline: false,
  isInvalid: false,
  isInvalidMeridiem: false,
  isLabelHidden: false,
  labelAttrs: {},
  maxWidth: undefined,
  minuteAttributes: {},
  onBlur: null,
  onChange: null,
  onFocus: undefined,
  refCallback: undefined,
  required: false,
  secondAttributes: {},
  showOptional: false,
  showSeconds: false,
  value: undefined,
  variant: TimeUtil.FORMAT_24_HOUR,
};

const DateInputField = (props) => {
  const {
    timeInputId,
    disabled,
    error,
    help,
    hideRequired,
    hourAttributes,
    htmlFor,
    intl,
    isIncomplete,
    isInline,
    isInvalid,
    isInvalidMeridiem,
    isLabelHidden,
    label,
    labelAttrs,
    maxWidth,
    minuteAttributes,
    name,
    onBlur,
    onChange,
    onFocus,
    refCallback,
    required,
    secondAttributes,
    showOptional,
    showSeconds,
    value,
    variant,
    ...customProps
  } = props;

  let ariaDescriptionIds = `${timeInputId}-help`;

  if (error && isInvalid) {
    ariaDescriptionIds = `${timeInputId}-error ${timeInputId}-help`;
  }

  const customHourAriaDescribedById = hourAttributes && hourAttributes['aria-describedby'];
  const customMinuteAriaDescribedById = minuteAttributes && minuteAttributes['aria-describedby'];
  const customSecondAriaDescribedById = secondAttributes && secondAttributes['aria-describedby'];

  const hourAriaDescriptionIds = customHourAriaDescribedById ? `${ariaDescriptionIds} ${customHourAriaDescribedById}` : ariaDescriptionIds;
  const minuteAriaDescriptionIds = customMinuteAriaDescribedById ? `${ariaDescriptionIds} ${customMinuteAriaDescribedById}` : ariaDescriptionIds;
  const secondAriaDescriptionIds = customSecondAriaDescribedById ? `${ariaDescriptionIds} ${customSecondAriaDescribedById}` : ariaDescriptionIds;

  const format = showSeconds
    ? `(${intl.formatMessage({ id: 'Terra.timeInput.hh' })}:${intl.formatMessage({ id: 'Terra.timeInput.mm' })}:${intl.formatMessage({ id: 'Terra.timeInput.ss' })})`
    : `(${intl.formatMessage({ id: 'Terra.timeInput.hh' })}:${intl.formatMessage({ id: 'Terra.timeInput.mm' })})`;

  const helpLabel = help ? (
    <div aria-label={`${intl.formatMessage({ id: 'Terra.timeInput.timeFormatLabel' })} ${format}, ${help}`}>
      {`${format}`}
      &nbsp;
      {help}
    </div>
  ) : (
    <div aria-label={`${intl.formatMessage({ id: 'Terra.timeInput.timeFormatLabel' })} ${format}`}>
      {`${format}`}
    </div>
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
      htmlFor={timeInputId}
      maxWidth={maxWidth}
    >
      <TimeInput
        disabled={disabled}
        id={timeInputId}
        isInvalid={isInvalid}
        isIncomplete={isIncomplete}
        isInvalidMeridiem={isInvalidMeridiem}
        aria-label={label}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        required={required}
        refCallback={refCallback}
        hourAttributes={{ ...hourAttributes, ...{ 'aria-describedby': hourAriaDescriptionIds } }}
        minuteAttributes={{ ...minuteAttributes, ...{ 'aria-describedby': minuteAriaDescriptionIds } }}
        secondAttributes={{ ...secondAttributes, ...{ 'aria-describedby': secondAriaDescriptionIds } }}
        showSeconds={showSeconds}
        value={value}
        variant={variant}
        useExternalFormatMask
      />
    </Field>

  );
};

DateInputField.propTypes = propTypes;
DateInputField.defaultProps = defaultProps;

export default injectIntl(DateInputField);
