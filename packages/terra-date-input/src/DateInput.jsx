import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { v4 as uuidv4 } from 'uuid';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment-timezone';

import AccessibleValue from 'terra-time-input/lib/_AccessibleValue';
import AccessibleInput from 'terra-time-input/lib/_AccessibleInput';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import DateInputUtil from './DateInputUtil';
import styles from './DateInput.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * An identifier used by assistive technologies like screen readers to briefly describe this time input to users.
   * The label is not rendered visually.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)  **BEST PRACTICE FOR ACCESSIBILITY**: you _SHOULD_ set this to match whatever visible label you give in your UI.
   * Currently this is optional for passivity reasons, but it will become mandatory in a future major version.
   */
  a11yLabel: PropTypes.string,
  /**
   * Name of the date input. This name should be unique.
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
  displayFormat: PropTypes.oneOf(['month-day-year', 'day-month-year']),
  /**
   * @private
   * Intl object injected from injectIntl
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func, locale: PropTypes.string }),
  /**
   * @private
   * Set to True if a higher order component like a field is providing the needed a11y features.
   */
  isA11yControlled: PropTypes.bool,
  /**
  * Whether the input displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
  */
  isIncomplete: PropTypes.bool,
  /**
  * Whether the input displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalid: PropTypes.bool,
  /**
   * Custom input attributes to apply to the month select
   */
  monthAttributes: PropTypes.object,
  /**
   * A callback function to execute when the entire date input component loses focus.
   * This event does not get triggered when the focus is moved from one input to another within the date input component because the focus is still within the main date input component.
   */
  onBlur: PropTypes.func,
  /**
   * A callback function to execute when a date is entered.
   * The first parameter is the event. The second parameter is the changed date value.
   */
  onChange: PropTypes.func,
  /**
   * A callback function triggered when the day, month, or year input receives focus.
   */
  onFocus: PropTypes.func,
  /**
   * Callback ref to access date input containing DOM element.
   */
  refCallback: PropTypes.func,
  /**
   * Whether is the date input is required
   */
  required: PropTypes.bool,
  /**
   * @private
   * NOTICE: Internal prop to be used only by Terra framework. This component provides a built-in format mask that is required
   * to be displayed to users for proper accessibility and must not be removed. 'DateInputField' is permitted to set this prop
   * because it provides the same format mask in its 'help' prop.
   */
  useExternalFormatMask: PropTypes.bool,
  /**
   * An date string representation of the date value used for the component. This should be in ISO 8601 format: YYYY-MM-DD.
   */
  value: PropTypes.string,
  /**
   * Custom input attributes to apply to the year input
   */
  yearAttributes: PropTypes.object,
};

const defaultProps = {
  disabled: false,
  monthAttributes: {},
  dayAttributes: {},
  yearAttributes: {},
  onBlur: null,
  onChange: null,
  onFocus: undefined,
  refCallback: undefined,
  value: undefined,
  useExternalFormatMask: false,
  isA11yControlled: false,
};

class DateInput extends React.Component {
  constructor(props) {
    super(props);

    let { value } = this.props;

    if (value && !DateInputUtil.acceptedDateValue(value)) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          `An invalid date value, ${value}, has been passed to the terra-date-input. `
          + 'This value has been ignored and will not be rendered. '
          + 'Date values must be in YYYY-MM-DD format.',
        );
      }

      value = undefined;
    }

    this.uuid = uuidv4();
    this.hotKeyInstructionId = `${this.uuid}-hotkeyinstruction`;

    this.dateInputContainer = React.createRef();
    this.monthRef = React.createRef();

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);

    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);

    this.handleMonthKeyDown = this.handleMonthKeyDown.bind(this);
    this.handleDayKeyDown = this.handleDayKeyDown.bind(this);
    this.handleYearKeyDown = this.handleYearKeyDown.bind(this);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleMonthFocus = this.handleMonthFocus.bind(this);
    this.handleDayFocus = this.handleDayFocus.bind(this);
    this.handleYearFocus = this.handleYearFocus.bind(this);

    this.focusMonth = this.focusMonth.bind(this);
    this.focusDay = this.focusDay.bind(this);
    this.focusYear = this.focusYear.bind(this);

    this.handleMonthBlur = this.handleMonthBlur.bind(this);
    this.handleDayBlur = this.handleDayBlur.bind(this);
    this.handleYearBlur = this.handleYearBlur.bind(this);

    this.formattedRender = this.formattedRender.bind(this);
    this.monthRender = this.monthRender.bind(this);
    this.dayRender = this.dayRender.bind(this);
    this.yearRender = this.yearRender.bind(this);

    this.handleMonthClick = this.handleMonthClick.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      month: DateInputUtil.splitMonth(value),
      day: DateInputUtil.splitDay(value),
      year: DateInputUtil.splitYear(value),
      dateString: '',
      isFocused: false,
      monthIsFocused: false,
      dayIsFocused: false,
      yearIsFocused: false,
      isPlaceholderColored: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value === prevProps.value) {
      return;
    }

    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({
      month: DateInputUtil.splitMonth(this.props.value),
      day: DateInputUtil.splitDay(this.props.value),
      year: DateInputUtil.splitYear(this.props.value),
    });
  }

  handleFocus(event) {
    if (this.props.onFocus && !this.dateInputContainer.current.contains(event.relatedTarget)) {
      this.props.onFocus(event);
    }

    this.setState({ isFocused: true });
  }

  handleMonthFocus(event) {
    this.handleFocus(event);
    this.setState({ monthIsFocused: true });
  }

  handleDayFocus(event) {
    this.handleFocus(event);
    this.setState({ dayIsFocused: true });
  }

  handleYearFocus(event) {
    this.handleFocus(event);
    this.setState({ yearIsFocused: true });
  }

  handleMonthBlur(event) {
    this.handleBlur(event, DateInputUtil.inputType.MONTH);
    if (this.state.month === '') {
      this.setState({ isPlaceholderColored: true });
    }
    this.setState({ monthIsFocused: false });
  }

  handleDayBlur(event) {
    this.handleBlur(event, DateInputUtil.inputType.DAY);
    this.setState({ dayIsFocused: false });
  }

  handleYearBlur(event) {
    this.handleBlur(event, DateInputUtil.inputType.YEAR);
    this.setState({ yearIsFocused: false });
  }

  handleBlur(event, type) {
    this.setState({ isFocused: false });

    if (type === DateInputUtil.inputType.DAY) {
      let stateValue = event.target.value;

      // Prepend a 0 to the value when losing focus and the value is single digit.
      if (stateValue.length === 1) {
        stateValue = '0'.concat(stateValue);

        this.handleValueChange(event, type, stateValue);
      }
    }

    if (this.props.onBlur) {
      // Modern browsers support event.relatedTarget but event.relatedTarget returns null in IE 10 / IE 11.
      // IE 11 sets document.activeElement to the next focused element before the blur event is called.
      const activeTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;

      // Handle blur only if focus has moved out of the entire date input component.
      if (!this.dateInputContainer.current.contains(activeTarget)) {
        this.props.onBlur(event);
      }
    }
  }

  /**
   * Takes a key input and processes it based on if it is a hot key otherwise passes it to the appropriate input type key down handler.
   * @param {Object} event Event object generated from the event delegation.
   * @param {DateInputUtil.inputType} inputType Type definition of the input that received the keydown event.
   */
  handleInputKeyDown(event, inputType) {
    if (event.key === 't' || event.key === 'T') {
      this.setHotKeyDate(event, 0);
      return;
    } if (event.key === '-' || event.key === '_') {
      this.setHotKeyDate(event, -1);
      return;
    } if (event.key === '=' || event.key === '+') {
      this.setHotKeyDate(event, 1);
      return;
    }

    if (inputType === DateInputUtil.inputType.DAY) {
      this.handleDayKeyDown(event);
    } else if ((inputType === DateInputUtil.inputType.YEAR)) {
      this.handleYearKeyDown(event);
    } else if ((inputType === DateInputUtil.inputType.MONTH)) {
      this.handleMonthKeyDown(event);
    }
  }

  /**
   * Takes a key input from the month select, and processes it based on the value of the keycode.
   * @param {Object} event Event object generated from the event delegation.
   */
  handleMonthKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_BACK_SPACE || event.keyCode === KeyCode.KEY_DELETE) {
      this.handleValueChange(event, DateInputUtil.inputType.MONTH, '');

      if (this.computedDisplayFormat() === 'day-month-year' && event.target.value === '') {
        this.focusDay(event);
      }
    }

    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_UP || event.keyCode === KeyCode.KEY_DOWN) {
      this.setState({ isPlaceholderColored: false });
    }
  }

  /**
   * Checks Paste event in the day and year input, and processes it based on the value of the keycode
   * Prevents non-numeric characters from being entered in Safari browser.
   * @param {Object} event Event object generated from the event delegation.
   */
  handlePaste = event => {
    const input = (event.clipboardData || window.clipboardData).getData('text');
    if (!DateInputUtil.validNumericInput(input)) event.preventDefault();
  }

  /**
   * Takes a key press from the day and year input, and processes it based on the value of the keycode
   * Prevents non-numeric characters from being entered in Safari browser.
   * @param {Object} event Event object generated from the event delegation.
   */
  handleKeyPress = event => {
    const input = event.key;
    if (!DateInputUtil.validNumericInput(input) && !event.metaKey) event.preventDefault();
  }

  /**
   * Takes a key input from the day input, and processes it based on the value of the keycode.
   * @param {Object} event Event object generated from the event delegation.
   */
  handleDayKeyDown(event) {
    let stateValue = this.state.day || '';
    const previousStateValue = stateValue;

    if (event.keyCode === KeyCode.KEY_UP) {
      event.preventDefault();
      stateValue = DateInputUtil.incrementDay(stateValue);
    }

    if (event.keyCode === KeyCode.KEY_DOWN) {
      event.preventDefault();
      stateValue = DateInputUtil.decrementDay(stateValue);
    }

    if (previousStateValue !== stateValue) {
      this.handleValueChange(event, DateInputUtil.inputType.DAY, stateValue);
    }

    if (event.keyCode === KeyCode.KEY_BACK_SPACE || event.keyCode === KeyCode.KEY_DELETE) {
      if (this.computedDisplayFormat() === 'month-day-year' && event.target.value === '') {
        this.focusMonth(event);
      }
    }
  }

  /**
   * Takes a key input from the year input, and processes it based on the value of the keycode.
   * @param {Object} event Event object generated from the event delegation.
   */
  handleYearKeyDown(event) {
    let stateValue = this.state.year || '';
    const previousStateValue = stateValue;
    const displayFormat = this.computedDisplayFormat();

    if (event.keyCode === KeyCode.KEY_UP) {
      event.preventDefault();
      stateValue = DateInputUtil.incrementYear(stateValue);
    }

    if (event.keyCode === KeyCode.KEY_DOWN) {
      event.preventDefault();
      stateValue = DateInputUtil.decrementYear(stateValue);
    }

    if (previousStateValue !== stateValue) {
      this.handleValueChange(event, DateInputUtil.inputType.YEAR, stateValue);
    }

    if (event.keyCode === KeyCode.KEY_BACK_SPACE || event.keyCode === KeyCode.KEY_DELETE) {
      if (displayFormat === 'month-day-year' && event.target.value === '') {
        this.focusDay(event);
      }

      if (displayFormat === 'day-month-year' && event.target.value === '') {
        this.focusMonth(event);
      }
    }
  }

  handleMonthChange(event) {
    if (!DateInputUtil.validNumericInput(event.target.value)) {
      return;
    }

    const inputValue = event.target.value;
    const stateValue = this.state.month;
    const maxValue = 12;
    const currentMonth = moment().format('MM');

    if (inputValue === currentMonth) {
      const date = moment().format('YYYY-MM-DD');
      this.setState({ year: moment().year(), month: moment().format('MMMM'), day: moment().date() });
      this.handleOnChange(event, date);
      return;
    }

    // Ignore the entry if the value did not change or it is invalid.
    if (inputValue === stateValue || Number(inputValue) > maxValue) {
      return;
    }

    this.handleValueChange(event, DateInputUtil.inputType.MONTH, inputValue);

    if (inputValue === '') {
      this.setState({ year: '', day: '' });
      this.handleOnChange(event, '');
    }
  }

  handleDayChange(event) {
    if (!DateInputUtil.validNumericInput(event.target.value)) {
      return;
    }

    const inputValue = event.target.value;
    const stateValue = this.state.day;
    const maxValue = 31;

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have
    // to check the length of inputValue to make sure that it is less then 2.
    if (inputValue === stateValue || inputValue.length > 2 || Number(inputValue) > maxValue || (inputValue.length === 2 && !(inputValue > 0))) {
      return;
    }

    this.handleValueChange(event, DateInputUtil.inputType.DAY, inputValue);
  }

  handleYearChange(event) {
    if (!DateInputUtil.validNumericInput(event.target.value)) {
      return;
    }

    const inputValue = event.target.value;

    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have
    // to check the length of inputValue to make sure that it is less then 4.
    if (inputValue.length > 5 || Number(inputValue) > DateInputUtil.MaxYearValue || (inputValue.length === 4 && Number(inputValue) < DateInputUtil.MinYearValue)) {
      return;
    }

    this.handleValueChange(event, DateInputUtil.inputType.YEAR, inputValue);
  }

  /**
   * On Click handler for month select
   */
  handleMonthClick() {
    this.setState({ isPlaceholderColored: false });
  }

  handleValueChange(event, type, value) {
    if (type === DateInputUtil.inputType.MONTH) {
      this.setState({ month: value });
    } else if (type === DateInputUtil.inputType.DAY) {
      this.setState({ day: value });
    } else if (type === DateInputUtil.inputType.YEAR) {
      this.setState({ year: value });
    }

    if (this.props.onChange) {
      const month = type === DateInputUtil.inputType.MONTH ? value : this.state.month;
      const day = type === DateInputUtil.inputType.DAY ? value : this.state.day;
      const year = type === DateInputUtil.inputType.YEAR ? value : this.state.year;

      if (month === '' && day === '' && year === '') {
        this.handleOnChange(event, '');
      } else {
        const dateString = `${year}-${month}-${day}`;
        this.handleOnChange(event, dateString);
      }
    }
  }

  /**
   * Calls onChange callback prop if it exists
   * @param {Object} event Event object generated from the event delegation.
   * @param {String} dateString Returns the dateString from the component
   */
  handleOnChange(event, dateString) {
    if (this.props.onChange) {
      this.props.onChange(event, dateString);
    }
  }

  /**
   * Sets state to new value dependent on existing date
   * @param {Object} event Event object generated from the event delegation.
   * @param {Number} addDays Adds days to current date or today's date, if 0 sets state to today.
   */
  setHotKeyDate(event, addDays) {
    let { year, month, day } = this.state;
    year = Number(year);
    month = Number(month) - 1;
    day = Number(day);
    const dateFromInput = new Date(year, month, day);
    const validYear = (year < DateInputUtil.MaxYearValue && year > DateInputUtil.MinYearValue && dateFromInput.getFullYear() === year);
    const validMonth = (dateFromInput.getMonth() === month);
    const validDay = (dateFromInput.getDate() === day);
    let dateObj;
    if (addDays === 0 || !validYear || !validDay || !validMonth) {
      dateObj = new Date();
    } else {
      dateObj = dateFromInput;
    }
    dateObj.setDate(dateObj.getDate() + addDays);
    const hotkeyDate = moment(dateObj).format('YYYY-MM-DD');
    const dateParts = hotkeyDate.split('-');
    this.setState({
      year: dateParts[0], month: dateParts[1], day: dateParts[2], dateString: hotkeyDate,
    });
    if (this.props.onChange) {
      this.handleOnChange(event, hotkeyDate);
    }
    event.preventDefault();
  }

  // Returns the display format, considering the locale and the prop.
  computedDisplayFormat() {
    return DateInputUtil.computedDisplayFormat(this.props.displayFormat, this.props.intl.locale);
  }

  /**
   * Shifts programmatic focus to day input
   * @param {Object} event Event object generated from the event delegation.
   */
  focusDay(event) {
    this.dayRef.focus();
    event.preventDefault();
  }

  /**
   * Shifts programmatic focus to year input
   * @param {Object} event Event object generated from the event delegation.
   */
  focusYear(event) {
    this.yearRef.focus();
    event.preventDefault();
  }

  /**
   * Shifts programmatic focus to month select
   * @param {Object} event Event object generated from the event delegation.
   */
  focusMonth(event) {
    this.monthRef.current.focus();
    event.preventDefault();
  }

  /**
   * Renders the month select.
   *
   * If the display format begins with the month, then a special label will be set for accessibility.
   * The special label makes it easy for users to see which control on the page is the start of this particular
   * DateInput - even if there are other DateInputs in the same view.
   */
  monthRender() {
    const { intl, a11yLabel } = this.props;
    let label;

    if (this.computedDisplayFormat() === 'month-day-year') {
      if (a11yLabel) {
        label = intl.formatMessage({ id: 'Terra.date.input.monthSelectLabelWithName' }, { a11yLabel });
      } else {
        label = intl.formatMessage({ id: 'Terra.date.input.monthSelectLabelWithDefaultName' });
      }
    } else {
      label = intl.formatMessage({ id: 'Terra.date.input.monthSelectLabel' }, { a11yLabel });
    }

    const DateInputMonthWrapperClassNames = cx([
      'month-select-wrapper',
      { focused: this.state.monthIsFocused },
      { disabled: this.props.disabled },
      { error: this.props.isInvalid },
      { incomplete: (this.props.isIncomplete && this.props.required && !this.props.isInvalid) },
    ]);

    const DateInputMonthClassNames = cx([
      'month-select',
      { 'is-placeholder': this.state.month === '' && this.state.isPlaceholderColored },
      { focused: this.state.monthIsFocused },
      { disabled: this.props.disabled },
      { error: this.props.isInvalid },
      { incomplete: (this.props.isIncomplete && this.props.required && !this.props.isInvalid) },
    ]);

    return (
      <div className={DateInputMonthWrapperClassNames}>
        <select
          {...this.props.monthAttributes}
          aria-label={this.props.isInvalid ? 'Error message' : label}
          ref={this.monthRef}
          className={DateInputMonthClassNames}
          value={this.state.month}
          name={'terra-date-month-'.concat(this.props.name)}
          onChange={this.handleMonthChange}
          onKeyDown={(e) => this.handleInputKeyDown(e, DateInputUtil.inputType.MONTH)}
          onClick={this.handleMonthClick}
          onFocus={this.handleMonthFocus}
          onBlur={this.handleMonthBlur}
          disabled={this.props.disabled}
          aria-disabled={this.props.disabled}
          aria-invalid={this.props.isInvalid}
          aria-required={this.props.required}
          aria-describedby={this.hotKeyInstructionId}
        >
          <option value="">{this.props.intl.formatMessage({ id: 'Terra.date.input.monthPlaceholder' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.date.input.january' })} value="01">{this.props.intl.formatMessage({ id: 'Terra.date.input.january' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.date.input.february' })} value="02">{this.props.intl.formatMessage({ id: 'Terra.date.input.february' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.date.input.march' })} value="03">{this.props.intl.formatMessage({ id: 'Terra.date.input.march' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.date.input.april' })} value="04">{this.props.intl.formatMessage({ id: 'Terra.date.input.april' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.date.input.may' })} value="05">{this.props.intl.formatMessage({ id: 'Terra.date.input.may' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.date.input.june' })} value="06">{this.props.intl.formatMessage({ id: 'Terra.date.input.june' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.date.input.july' })} value="07">{this.props.intl.formatMessage({ id: 'Terra.date.input.july' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.date.input.august' })} value="08">{this.props.intl.formatMessage({ id: 'Terra.date.input.august' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.date.input.september' })} value="09">{this.props.intl.formatMessage({ id: 'Terra.date.input.september' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.date.input.october' })} value="10">{this.props.intl.formatMessage({ id: 'Terra.date.input.october' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.date.input.november' })} value="11">{this.props.intl.formatMessage({ id: 'Terra.date.input.november' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.date.input.december' })} value="12">{this.props.intl.formatMessage({ id: 'Terra.date.input.december' })}</option>
        </select>
        <VisuallyHiddenText id={this.hotKeyInstructionId} text={intl.formatMessage({ id: 'Terra.date.input.hotKey' })} />
      </div>
    );
  }

  /**
   * Renders the day input.
   *
   * If the display format begins with the day, then a special label will be set for accessibility.
   * The special label makes it easy for users to see which control on the page is the start of this particular
   * DateInput - even if there are other DateInputs in the same view.
   */
  dayRender() {
    /**
     * JAWS + Chrome is super buggy when it comes to up/down arrow keys cycling values on the input and only seems to work
     * when input[type=number]. This works great, except in Firefox where <input value="03" type="number" />
     * displays in the browsers as "3".
     * To work around this issue, the day input uses type="number" for all browsers, but if we're in a Mozilla browser,
     * we switch over to using type="text" and pattern="\d*" which allows displaying value="03" in the browser as "03"
     */
    const { intl, a11yLabel } = this.props;
    let label;

    if (this.computedDisplayFormat() === 'day-month-year') {
      if (a11yLabel) {
        label = intl.formatMessage({ id: 'Terra.date.input.dayInputLabelWithName' }, { a11yLabel });
      } else {
        label = intl.formatMessage({ id: 'Terra.date.input.dayInputLabelWithDefaultName' });
      }
    } else {
      label = intl.formatMessage({ id: 'Terra.date.input.dayInputLabel' });
    }

    const numberAttributes = window.matchMedia('(min--moz-device-pixel-ratio:0)').matches
      ? { type: 'text', pattern: '\\d*' } : { type: 'number' };

    return (
      <AccessibleInput
        {...this.props.dayAttributes}
        {...numberAttributes}
        refCallback={(inputRef) => { this.dayRef = inputRef; }}
        label={this.props.isInvalid ? `${'Error message'}, ${label}` : label}
        description={`${intl.formatMessage({ id: 'Terra.date.input.dayDescription' })}, ${intl.formatMessage({ id: 'Terra.date.input.hotKey' })}`}
        className={cx('date-input-day', { 'is-focused': this.state.dayIsFocused })}
        value={this.state.day}
        name={'terra-date-day-'.concat(this.props.name)}
        maxLength="2"
        onKeyPress={this.handleKeyPress}
        onChange={this.handleDayChange}
        onKeyDown={(e) => this.handleInputKeyDown(e, DateInputUtil.inputType.DAY)}
        onFocus={this.handleDayFocus}
        onBlur={this.handleDayBlur}
        onPaste={this.handlePaste}
        size="2"
        autoComplete="off"
        disabled={this.props.disabled}
        isInvalid={this.props.isInvalid}
        showIsInvalid
        isIncomplete={this.props.isIncomplete}
        required={this.props.required}
        data-show-focus-styles
      />
    );
  }

  /**
   * Renders year select
   */
  yearRender() {
    /**
     * JAWS + Chrome is super buggy when it comes to up/down arrow keys cycling values on the input and only seems to work
     * when input[type=number]. This works great, except in Firefox where <input value="03" type="number" /> displays the
     * value in the browsers as "3" instead of "03". https://bugzilla.mozilla.org/show_bug.cgi?id=1005603
     * To work around this issue, the year input uses type="number" for all browsers, but if we're in a Mozilla browser,
     * we switch over to using type="text" and pattern="\d*" which allows displaying value="03" in the browser as "03"
     */
    const numberAttributes = window.matchMedia('(min--moz-device-pixel-ratio:0)').matches
      ? { type: 'text', pattern: '\\d*' } : { type: 'number' };

    return (
      <AccessibleInput
        {...this.props.yearAttributes}
        {...numberAttributes}
        refCallback={(inputRef) => { this.yearRef = inputRef; }}
        label={this.props.isInvalid ? `${'Error message'}, ${this.props.intl.formatMessage({ id: 'Terra.date.input.yearLabel' })}` : `${this.props.intl.formatMessage({ id: 'Terra.date.input.yearLabel' })}`}
        description={`${this.props.intl.formatMessage({ id: 'Terra.date.input.yearDescription' })}, ${this.props.intl.formatMessage({ id: 'Terra.date.input.hotKey' })}`}
        className={cx('date-input-year', { 'is-focused': this.state.yearIsFocused })}
        value={this.state.year}
        name={'terra-date-year-'.concat(this.props.name)}
        maxLength="4"
        onChange={this.handleYearChange}
        onKeyPress={this.handleKeyPress}
        onKeyDown={(e) => this.handleInputKeyDown(e, DateInputUtil.inputType.YEAR)}
        onFocus={this.handleYearFocus}
        onBlur={this.handleYearBlur}
        onPaste={this.handlePaste}
        size="4"
        autoComplete="off"
        disabled={this.props.disabled}
        isInvalid={this.props.isInvalid}
        showIsInvalid
        isIncomplete={this.props.isIncomplete}
        required={this.props.required}
        data-show-focus-styles
      />
    );
  }

  /**
   * Renders inputs in month-day-year or day-month-year depending on displayFormat or locale
   * Defaults to day-month-year
   */
  formattedRender() {
    const monthDayYearFormat = (
      <React.Fragment>
        {this.monthRender()}
        {this.dayRender()}
        {this.yearRender()}
      </React.Fragment>
    );

    const dayMonthYearFormat = (
      <React.Fragment>
        {this.dayRender()}
        {this.monthRender()}
        {this.yearRender()}
      </React.Fragment>
    );

    if (this.computedDisplayFormat() === 'month-day-year') {
      return monthDayYearFormat;
    }

    return dayMonthYearFormat;
  }

  render() {
    const {
      a11yLabel,
      disabled,
      displayFormat,
      dayAttributes,
      monthAttributes,
      yearAttributes,
      intl,
      isA11yControlled,
      isInvalid,
      isIncomplete,
      onBlur,
      onChange,
      onFocus,
      refCallback,
      required,
      name,
      useExternalFormatMask,
      value,
      ...customProps
    } = this.props;

    const {
      month,
      day,
      year,
    } = this.state;

    const theme = this.context;

    const dateInputClassNames = classNames(cx(
      { disabled },
      'date-input',
      { 'is-focused': this.state.isFocused },
      theme.className,
    ),
    customProps.className);

    // Using the state of month, day, and year to create a formatted date value
    let dateValue = '';
    let completeDateValue;

    if (month.length > 0 || day.length > 0 || year.length > 0) {
      dateValue = `${year}-${month}-${day}`;
    }

    if (dateValue.length === 'xx-xx-xxxx'.length) {
      completeDateValue = dateValue;
    }

    const format = DateInputUtil.getDateFormat(this.props);
    const label = a11yLabel || this.props.intl.formatMessage({ id: 'Terra.date.input.labelDefault' });
    const dateFormatLabel = this.props.intl.formatMessage({ id: 'Terra.date.input.dateFormatLabel' });
    const inputDate = moment(new Date(this.state.dateString)).format('dddd MMMM D YYYY');
    return (
      <div
        {...customProps}
        className={dateInputClassNames}
        ref={(element) => { this.dateInputContainer.current = element; if (refCallback) { refCallback(element); } }}
        role={isA11yControlled ? null : 'group'}
        aria-label={isA11yControlled ? undefined : label}
      >
        <div aria-live="polite">
          <AccessibleValue value={completeDateValue} readThis={`${dateFormatLabel} ${format}. ${inputDate}, ${intl.formatMessage({ id: 'Terra.date.input.hotKey' })}`} />
        </div>
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but formatted in YYYY-MM-DD format.
          type="hidden"
          name={name}
          value={dateValue}
        />
        {this.formattedRender()}
        {/* The format is aria-hidden because it makes no sense when assistive technologies are reading the entire multi-field DateInput. Instead, each subfield component has its own description.  */}
        {(useExternalFormatMask === false) && (
          <div aria-hidden className={cx('format-text')}>
            {`(${format})`}
          </div>
        )}
      </div>
    );
  }
}

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;
DateInput.contextType = ThemeContext;

export default injectIntl(DateInput);
