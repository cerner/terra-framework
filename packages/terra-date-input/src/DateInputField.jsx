import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { v4 as uuidv4 } from 'uuid';
import IconError from 'terra-icon/lib/icon/IconError';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import DateInput from './DateInput';
import DateInputUtil from './DateInputUtil';
import styles from './DateInputField.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The legend of the Date Input fieldset. Also used by assistive technologies like screen readers even if isLegendHidden is true.
   */
  legend: PropTypes.string.isRequired,
  /**
   * Name of the date input. The name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
   * Custom input attributes to apply to the day input
   */
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
   * @private
   * Intl object injected from injectIntl
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
  /**
   * Attributes to attach to the legend.
   */
  legendAttributes: PropTypes.object,
  /**
   * Custom select attributes to apply to the month select
   */
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
  yearAttributes: PropTypes.object,
  /**
   * Callback ref to access date input containing DOM element.
   */
  refCallback: PropTypes.func,
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
    intl,
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
    refCallback,
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
  const helpAriaDescriptionId = `terra-date-input-field-description-help-${uniqueid.current}`;
  const errorAriaDescriptionId = `terra-date-input-field-description-error-${uniqueid.current}`;

  let ariaDescriptionIds = helpAriaDescriptionId;

  if (error && isInvalid) {
    ariaDescriptionIds = `${errorAriaDescriptionId} ${helpAriaDescriptionId}`;
  }

  const customMonthAriaDescribedById = monthAttributes && monthAttributes['aria-describedby'];
  const customDayAriaDescribedById = dayAttributes && dayAttributes['aria-describedby'];
  const customYearAriaDescribedById = yearAttributes && yearAttributes['aria-describedby'];

  const monthAriaDescriptionIds = customMonthAriaDescribedById ? `${ariaDescriptionIds} ${customMonthAriaDescribedById}` : ariaDescriptionIds;
  const dayAriaDescriptionIds = customDayAriaDescribedById ? `${ariaDescriptionIds} ${customDayAriaDescribedById}` : ariaDescriptionIds;
  const yearAriaDescriptionIds = customYearAriaDescribedById ? `${ariaDescriptionIds} ${customYearAriaDescribedById}` : ariaDescriptionIds;

  const legendGroup = (
    <legend className={cx(['legend-group', { 'legend-group-hidden': isLegendHidden }])}>
      <div {...legendAttributes} className={legendClassNames}>
        {/* The icon used here is undocumented and not supported other than in a specific theme not typically used. */}
        {isInvalid && <span className={cx('error-icon')}><IconError /></span>}

        {/* This bit controls showing the little star prefix, *, to show that the input is required. */}
        {required && (isInvalid || !hideRequired) && (
          <React.Fragment>
            <div aria-hidden="true" className={cx('required')}>*</div>
            <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.date.input.required' })} />
          </React.Fragment>
        )}

        {/* The text of the legend, besides any decorations. */}
        {legend}

        {/* We only include the following span so that elements do not pop around in the layout when isInvalid changes. */}
        {required && !isInvalid && hideRequired && (<span className={cx('required-hidden')}>*</span>)}

        {/* This bit controls whether the (Optional) suffix displays after the legend text */}
        {showOptional && !required && <span className={cx('optional')}>{intl.formatMessage({ id: 'Terra.date.input.optional' })}</span>}
        {!isInvalid && <span className={cx('error-icon-hidden')} />}
      </div>
    </legend>
  );

  const format = DateInputUtil.getDateFormat({ displayFormat, intl });

  return (
    <fieldset {...customProps} className={dateInputFieldClasses}>
      {legendGroup}
      {/* Screen reader users should hear the help text before reading the input field. Think of it like instructions. */}
      {help && <VisuallyHiddenText text={help} />}
      <DateInput
        /** The DateInput needs a label to use for the first control (date or month, depending on the locale).
         *
         * The first Input in the group has a combination label, 'Date of Birth Month', so that it's easy to pick out
         * that field out of a list of many inputs in the same view when the screen reader is in picker mode. Picker
         * mode lets the user can jump to elements in a page. Screen readers tend to present a flat list of inputs
         * without context of which the Date Input those inputs belong to, like this:
         *  ==SCREEN READER'S LIST OF FORM INPUTS TO PICK==
         *  1. Date of Birth Month
         *  2. Date
         *  3. Year
         *  4. Anniversary Month <-- easy to spot the start of this Date Input.
         *  5. Date
        */
        a11yLabel={legend}
        dayAttributes={{ ...dayAttributes, ...{ 'aria-describedby': dayAriaDescriptionIds } }}
        disabled={disabled}
        displayFormat={displayFormat}
        isA11yControlled // This field is controlling the a11y features of the input.
        isIncomplete={isIncomplete}
        isInvalid={isInvalid}
        monthAttributes={{ ...monthAttributes, ...{ 'aria-describedby': monthAriaDescriptionIds } }}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        required={required}
        useExternalFormatMask
        value={value}
        yearAttributes={{ ...yearAttributes, ...{ 'aria-describedby': yearAriaDescriptionIds } }}
        refCallback={refCallback}
        error={error}
        aria-describedby={errorAriaDescriptionId}
      />
      {isInvalid && error && <div id={errorAriaDescriptionId} className={cx('error-text')}>{error}</div>}
      {/* It makes no sense for screen readers to hear the format or the help text in this position. */}
      {/* Instead, each subfield component reads its own format and the help text is read before the first control. */}
      <div aria-hidden className={cx('help-text')}>
        {help ? `(${format}) ${help}` : `(${format})`}
      </div>
    </fieldset>
  );
};

DateInputField.propTypes = propTypes;
DateInputField.defaultProps = defaultProps;

export default injectIntl(DateInputField);
