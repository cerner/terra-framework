import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import uuidv4 from 'uuid/v4';
import IconError from 'terra-icon/lib/icon/IconError';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import DateInput from './DateInput';
import styles from './DateInputField.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The legend of the Date Input fieldset
   */
  legend: PropTypes.string.isRequired,
  /**
   * Name of the date input. The name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
   * Custom input attributes to apply to the day input
   */
  // eslint-disable-next-line react/forbid-prop-types
  dayAttributes: PropTypes.object,
  /**
   * Whether the date input should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Can be used to set the display format. One of `month-day-year` or `day-month-year`.
   * Overrides default locale display format.
   */
  displayFormat: PropTypes.string,
  /**
   * Error message for when the field is invalid. This will only be displayed if isInvalid is true.
   */
  error: PropTypes.node,
  /**
   * Help element to display with the field.
   */
  help: PropTypes.node,
  /**
   * Whether or not to hide the required indicator on the label.
   */
  hideRequired: PropTypes.bool,
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
   * Whether or not the legend is visible. Use this props to hide a legend while still creating it on the DOM for accessibility.
   */
  isLegendHidden: PropTypes.bool,
  /**
   * Attributes to attach to the legend.
   */
  // eslint-disable-next-line react/forbid-prop-types
  legendAttributes: PropTypes.object,
  /**
   * Custom select attributes to apply to the month select
   */
  // eslint-disable-next-line react/forbid-prop-types
  monthAttributes: PropTypes.object,
  /**
   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed
   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_
   */
  maxWidth: PropTypes.string,
  /**
   * A callback function triggered when the date input component loses focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date input component.
   */
  onBlur: PropTypes.func,
  /**
   * A callback function to execute when a date is entered.
   * The first parameter is the event. The second parameter is the changed date value.
   */
  onChange: PropTypes.func,
  /**
   * A callback function triggered when the date input component receives focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date input component.
   */
  onFocus: PropTypes.func,
  /**
   * Whether or not the date input field is required.
   */
  required: PropTypes.bool,
  /**
   * Whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
  /**
   * An date string representation of the date value used for the component. This should be in ISO 8601 format: YYYY-MM-DD.
   */
  value: PropTypes.string,
  /**
   * Custom input attributes to apply to the year input
   */
  // eslint-disable-next-line react/forbid-prop-types
  yearAttributes: PropTypes.object,
};

const defaultProps = {
  dayAttributes: {},
  disabled: false,
  displayFormat: undefined,
  error: null,
  help: null,
  hideRequired: false,
  isIncomplete: false,
  isInline: false,
  isInvalid: false,
  isLegendHidden: false,
  legendAttributes: {},
  monthAttributes: {},
  maxWidth: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  required: false,
  showOptional: false,
  value: '',
  yearAttributes: {},
};

const DateInputField = (props) => {
  const {
    dayAttributes,
    disabled,
    displayFormat,
    error,
    help,
    hideRequired,
    isIncomplete,
    isInline,
    isInvalid,
    isLegendHidden,
    legend,
    legendAttributes,
    monthAttributes,
    maxWidth,
    name,
    onBlur,
    onChange,
    onFocus,
    required,
    showOptional,
    value,
    yearAttributes,
    ...customProps
  } = props;

  const uniqueid = useRef(uuidv4());
  const theme = React.useContext(ThemeContext);

  const dateInputFieldClasses = classNames(cx(
    'date-input-field',
    { 'is-inline': isInline },
    theme.className,
  ),
  customProps.className);

  const legendClassNames = classNames(cx(
    'legend',
    theme.className,
  ),
  legendAttributes.className);

  /**
   * aria-describedby ids
   * Used to map legend, help text, and error messages with input/select elements
   */
  const helpAriaDescriptionId = help ? `terra-date-input-field-description-help-${uniqueid.current}` : '';
  const errorAriaDescriptionId = isInvalid && error ? `terra-date-input-field-description-error-${uniqueid.current}` : '';
  const ariaDescriptionIds = `${errorAriaDescriptionId} ${helpAriaDescriptionId}`;

  const customMonthAriaDescribedById = monthAttributes['aria-describedby'] ? monthAttributes['aria-describedby'] : '';
  const monthAriaDesciptionIds = `${ariaDescriptionIds} ${customMonthAriaDescribedById}`;

  const customDayAriaDescribedById = dayAttributes['aria-describedby'] ? dayAttributes['aria-describedby'] : '';
  const dayAriaDesciptionIds = `${ariaDescriptionIds} ${customDayAriaDescribedById}`;

  const customYearAriaDescribedById = yearAttributes['aria-describedby'] ? yearAttributes['aria-describedby'] : '';
  const yearAriaDesciptionIds = `${ariaDescriptionIds} ${customYearAriaDescribedById}`;

  const legendGroup = (
    <legend className={cx(['legend-group', { 'legend-group-hidden': isLegendHidden }])}>
      <div {...legendAttributes} className={legendClassNames}>
        {isInvalid && <span className={cx('error-icon')}><IconError /></span>}
        {required && (isInvalid || !hideRequired) && (
          <React.Fragment>
            <div aria-hidden="true" className={cx('required')}>*</div>
            <FormattedMessage id="Terra.date.input.required">
              {requiredText => (
                <VisuallyHiddenText text={requiredText} />
              )}
            </FormattedMessage>
          </React.Fragment>
        )}
        {legend}
        {required && !isInvalid && hideRequired && <span className={cx('required-hidden')}>*</span>}
        {showOptional && !required
          && (
            <FormattedMessage id="Terra.date.input.optional">
              {optionalText => (
                <span className={cx('optional')}>{optionalText}</span>
              )}
            </FormattedMessage>
          )}
        {!isInvalid && <span className={cx('error-icon-hidden')} />}
      </div>
    </legend>
  );

  return (
    <fieldset {...customProps} className={dateInputFieldClasses}>
      {legendGroup}
      <DateInput
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        displayFormat={displayFormat}
        disabled={disabled}
        isInvalid={isInvalid}
        isIncomplete={isIncomplete}
        required={required}
        monthAttributes={{ ...monthAttributes, ...{ 'aria-describedby': monthAriaDesciptionIds } }}
        dayAttributes={{ ...dayAttributes, ...{ 'aria-describedby': dayAriaDesciptionIds } }}
        yearAttributes={{ ...yearAttributes, ...{ 'aria-describedby': yearAriaDesciptionIds } }}
      />
      {isInvalid && error && <div id={errorAriaDescriptionId} className={cx('error-text')}>{error}</div>}
      {help && <div id={helpAriaDescriptionId} className={cx('help-text')}>{help}</div>}
    </fieldset>
  );
};

DateInputField.propTypes = propTypes;
DateInputField.defaultProps = defaultProps;

export default DateInputField;
