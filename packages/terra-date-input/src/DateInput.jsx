import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import Input from 'terra-form-input';
import KeyCode from 'keycode-js';

import DateInputUtil from './DateInputUtil';
import styles from './DateInput.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
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
   * Custom input attributes to apply to the day input
   */
  // eslint-disable-next-line react/forbid-prop-types
  dayAttributes: PropTypes.object,
  /**
   * @private
   * Intl object injected from injectIntl
   */
  intl: intlShape,
  /**
   * Custom input attributes to apply to the month select
   */
  // eslint-disable-next-line react/forbid-prop-types
  monthAttributes: PropTypes.object,
  /**
   * Custom input attributes to apply to the year input
   */
  // eslint-disable-next-line react/forbid-prop-types
  yearAttributes: PropTypes.object,
  /**
   * Name of the date input. This name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
   * A callback function to execute when the entire date input component loses focus.
   * This event does not get triggered when the focus is moved from one input to another within the date input component because the focus is still within the main date input component.
   */
  onBlur: PropTypes.func,
  /**
   * A callback function to execute when either the day, month, or year value has been changed.
   * The first parameter is the event. The second parameter is the changed date value.
   */
  onChange: PropTypes.func,
  /**
   * A callback function triggered when the day, month, or year input receives focus.
   */
  onFocus: PropTypes.func,
  /**
   * An ISO 8601 string representation of the date value in the input.
   */
  value: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  monthAttributes: {},
  dayAttributes: {},
  yearAttributes: {},
  onBlur: null,
  onChange: null,
  onFocus: undefined,
  value: undefined,
};

class DateInput extends React.Component {
  constructor(props) {
    super(props);

    let { value } = this.props;

    if (value && !DateInputUtil.acceptedDateValue(value)) {
      if (process.env !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          `An invalid date value, ${value}, has been passed to the terra-date-input. `
          + 'This value has been ignored and will not be rendered. '
          + 'Date values must be in YYYY-MM-DD format.',
        );
      }

      value = undefined;
    }

    this.dateInputContainer = React.createRef();
    this.monthRef = React.createRef();

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);

    this.handleMonthInputKeyDown = this.handleMonthInputKeyDown.bind(this);
    this.handleDayInputKeyDown = this.handleDayInputKeyDown.bind(this);
    this.handleYearInputKeyDown = this.handleYearInputKeyDown.bind(this);

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

    this.state = {
      month: DateInputUtil.splitMonth(value),
      day: DateInputUtil.splitDay(value),
      year: DateInputUtil.splitYear(value),
      isFocused: false,
      monthInitialFocused: false,
      dayInitialFocused: false,
      yearInitialFocused: false,
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
    this.setState({ monthInitialFocused: true });
  }

  handleDayFocus(event) {
    this.handleFocus(event);
    this.setState({ dayInitialFocused: true });
    this.dayRef.setSelectionRange(0, this.dayRef.value.length);
  }

  handleYearFocus(event) {
    this.handleFocus(event);
    this.setState({ yearInitialFocused: true });
    this.yearRef.setSelectionRange(0, this.yearRef.value.length);
  }

  handleMonthBlur(event) {
    this.handleBlur(event, DateInputUtil.inputType.MONTH);
    this.setState({ monthInitialFocused: false });
  }

  handleDayBlur(event) {
    this.handleBlur(event, DateInputUtil.inputType.DAY);
    this.setState({ dayInitialFocused: false });
  }

  handleYearBlur(event) {
    this.handleBlur(event, DateInputUtil.inputType.YEAR);
    this.setState({ yearInitialFocused: false });
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

  handleMonthChange(event) {
    if (!DateInputUtil.validNumericInput(event.target.value)) {
      return;
    }

    const inputValue = event.target.value;
    const stateValue = this.state.month;
    const maxValue = 12;

    // Ignore the entry if the value did not change or it is invalid.
    if (inputValue === stateValue || Number(inputValue) > maxValue) {
      return;
    }

    // Move focus to the next input
    const moveFocusOnChange = () => {
      if (DateInputUtil.computedDisplayFormat(this.props.displayFormat, this.props.intl.locale) === 'month-day-year') {
        return this.dayRef.focus();
      }

      return this.yearRef.focus();
    };

    this.handleValueChange(event, DateInputUtil.inputType.MONTH, inputValue, moveFocusOnChange);
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
    if (inputValue === stateValue || inputValue.length > 2 || Number(inputValue) > maxValue) {
      return;
    }

    const moveFocusOnChange = () => {
      if (inputValue.length === 2 || Number(inputValue) > 3) {
        if (DateInputUtil.computedDisplayFormat(this.props.displayFormat, this.props.intl.locale) === 'month-day-year') {
          return this.yearRef.focus();
        }

        return this.monthRef.current.focus();
      }

      return null;
    };

    this.handleValueChange(event, DateInputUtil.inputType.DAY, inputValue, moveFocusOnChange);
  }

  handleYearChange(event) {
    if (!DateInputUtil.validNumericInput(event.target.value)) {
      return;
    }

    const inputValue = event.target.value;
    const stateValue = this.state.day;
    const maxValue = 9999;

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have
    // to check the length of inputValue to make sure that it is less then 2.
    if (inputValue === stateValue || inputValue.length > 5 || Number(inputValue) > maxValue) {
      return;
    }

    const moveFocusOnChange = () => {
    };

    this.handleValueChange(event, DateInputUtil.inputType.YEAR, inputValue, moveFocusOnChange);
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
   * Takes a key input from the month select, and processes it based on the value of the keycode.
   * @param {Object} event Event object generated from the event delegation.
   */
  handleMonthInputKeyDown(event) {
    const displayFormat = DateInputUtil.computedDisplayFormat(this.props.displayFormat, this.props.intl.locale);

    if (event.keyCode === KeyCode.KEY_RIGHT) {
      if (displayFormat === 'month-day-year') {
        this.focusDay(event);
      }

      if (displayFormat === 'day-month-year') {
        this.focusYear(event);
      }
    }

    if (event.keyCode === KeyCode.KEY_LEFT) {
      if (displayFormat === 'day-month-year') {
        this.focusDay(event);
      }
    }

    if (event.keyCode === KeyCode.KEY_BACK_SPACE || event.keyCode === KeyCode.KEY_DELETE) {
      this.handleValueChange(event, DateInputUtil.inputType.MONTH, '');

      if (displayFormat === 'day-month-year' && event.target.value === '') {
        this.focusDay(event);
      }
    }
  }

  /**
   * Takes a key input from the day input, and processes it based on the value of the keycode.
   * @param {Object} event Event object generated from the event delegation.
   */
  handleDayInputKeyDown(event) {
    let stateValue = this.state.day;
    const previousStateValue = stateValue;
    const displayFormat = DateInputUtil.computedDisplayFormat(this.props.displayFormat, this.props.intl.locale);

    if (event.keyCode === KeyCode.KEY_UP) {
      stateValue = DateInputUtil.incrementDay(stateValue);
    }

    if (event.keyCode === KeyCode.KEY_DOWN) {
      stateValue = DateInputUtil.decrementDay(stateValue);
    }

    if (previousStateValue !== stateValue) {
      this.handleValueChange(event, DateInputUtil.inputType.DAY, stateValue);
    }

    if (event.keyCode === KeyCode.KEY_LEFT) {
      // If cursor at beginning of input
      if (this.dayRef.selectionEnd === 0) {
        if (displayFormat === 'month-day-year') {
          this.focusMonth(event);
        }
      }
    }

    if (event.keyCode === KeyCode.KEY_BACK_SPACE || event.keyCode === KeyCode.KEY_DELETE) {
      if (displayFormat === 'month-day-year' && event.target.value === '') {
        this.focusMonth(event);
      }
    }

    if (event.keyCode === KeyCode.KEY_RIGHT) {
      // If the day input is empty or the cursor is after the value
      if (this.state.day.length === 0 || this.state.day.length === this.dayRef.selectionEnd) {
        if (displayFormat === 'month-day-year') {
          this.focusYear(event);
        }


        if (displayFormat === 'day-month-year') {
          this.focusMonth(event);
        }
      }
    }
  }

  /**
   * Takes a key input from the year input, and processes it based on the value of the keycode.
   * @param {Object} event Event object generated from the event delegation.
   */
  handleYearInputKeyDown(event) {
    let stateValue = this.state.year;
    const previousStateValue = stateValue;
    const displayFormat = DateInputUtil.computedDisplayFormat(this.props.displayFormat, this.props.intl.locale);

    if (event.keyCode === KeyCode.KEY_UP) {
      stateValue = DateInputUtil.incrementYear(stateValue);
    }

    if (event.keyCode === KeyCode.KEY_DOWN) {
      stateValue = DateInputUtil.decrementYear(stateValue);
    }

    if (previousStateValue !== stateValue) {
      this.handleValueChange(event, DateInputUtil.inputType.YEAR, stateValue);
    }

    if (event.keyCode === KeyCode.KEY_LEFT) {
      // If cursor at beginning of input
      if (this.yearRef.selectionEnd === 0) {
        if (displayFormat === 'month-day-year') {
          this.focusDay(event);
        }

        if (displayFormat === 'day-month-year') {
          this.focusMonth(event);
        }
      }
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

  handleValueChange(event, type, value, moveFocusOnChange) {
    if (type === DateInputUtil.inputType.MONTH) {
      this.setState({
        month: value,
        monthInitialFocused: false,
      }, moveFocusOnChange);
    } else if (type === DateInputUtil.inputType.DAY) {
      this.setState({
        day: value,
        dayInitialFocused: false,
      }, moveFocusOnChange);
    } else if (type === DateInputUtil.inputType.YEAR) {
      this.setState({
        year: value,
        yearInitialFocused: false,
      }, moveFocusOnChange);
    }

    // Input values of length 1 indicate incomplete date, which means we cannot get a
    // reliable time so onChange isn't triggered.
    if (this.props.onChange && value.length !== 1) {
      const month = type === DateInputUtil.inputType.MONTH ? value : this.state.month;
      const day = type === DateInputUtil.inputType.DAY ? value : this.state.day;
      const year = type === DateInputUtil.inputType.YEAR ? value : this.state.year;

      if (month === '' && day === '' && year === '') {
        this.handleOnChange(event, '', false);
      } else {
        const dateString = `${year}-${month}-${day}`;
        this.handleOnChange(event, dateString, DateInputUtil.isValidDate(dateString));
      }
    }
  }

  /**
   * Calls onChange callback prop if it exists
   * @param {Object} event Event object generated from the event delegation.
   * @param {String} dateString Returns the dateString from the component
   * @param {Boolean} isValidDate Returns true if dateString is a valid date
   */
  handleOnChange(event, dateString, isValidDate) {
    if (this.props.onChange) {
      this.props.onChange(event, dateString, isValidDate);
    }
  }

  /**
   * Renders month input
   */
  monthRender() {
    return (
      <div className={cx('date-input-month-wrapper')}>
        <select
          {...this.props.monthAttributes}
          aria-label={this.props.intl.formatMessage({ id: 'Terra.form.date.monthLabel' })}
          ref={this.monthRef}
          className={cx('date-input-month', { 'initial-focus': this.state.monthInitialFocused })}
          value={this.state.month}
          name={'terra-date-month-'.concat(this.props.name)}
          onChange={this.handleMonthChange}
          onKeyDown={this.handleMonthInputKeyDown}
          onFocus={this.handleMonthFocus}
          onBlur={this.handleMonthBlur}
          disabled={this.props.disabled}
        >
          <option value="" disabled>{this.props.intl.formatMessage({ id: 'Terra.form.date.monthPlaceholder' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.form.date.january' })} value="01">{this.props.intl.formatMessage({ id: 'Terra.form.date.january' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.form.date.february' })} value="02">{this.props.intl.formatMessage({ id: 'Terra.form.date.february' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.form.date.march' })} value="03">{this.props.intl.formatMessage({ id: 'Terra.form.date.march' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.form.date.april' })} value="04">{this.props.intl.formatMessage({ id: 'Terra.form.date.april' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.form.date.may' })} value="05">{this.props.intl.formatMessage({ id: 'Terra.form.date.may' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.form.date.june' })} value="06">{this.props.intl.formatMessage({ id: 'Terra.form.date.june' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.form.date.july' })} value="07">{this.props.intl.formatMessage({ id: 'Terra.form.date.july' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.form.date.august' })} value="08">{this.props.intl.formatMessage({ id: 'Terra.form.date.august' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.form.date.september' })} value="09">{this.props.intl.formatMessage({ id: 'Terra.form.date.september' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.form.date.october' })} value="10">{this.props.intl.formatMessage({ id: 'Terra.form.date.october' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.form.date.november' })} value="11">{this.props.intl.formatMessage({ id: 'Terra.form.date.november' })}</option>
          <option key={this.props.intl.formatMessage({ id: 'Terra.form.date.december' })} value="12">{this.props.intl.formatMessage({ id: 'Terra.form.date.december' })}</option>
        </select>
      </div>
    );
  }

  /**
   * Renders day input
   */
  dayRender() {
    return (
      <Input
        {...this.props.dayAttributes}
        refCallback={(inputRef) => { this.dayRef = inputRef; }}
        aria-label={this.props.intl.formatMessage({ id: 'Terra.form.date.dayLabel' })}
        className={cx('date-input-day', { 'initial-focus': this.state.dayInitialFocused })}
        type="text"
        value={this.state.day}
        name={'terra-date-day-'.concat(this.props.name)}
        placeholder={this.props.intl.formatMessage({ id: 'Terra.form.date.dayPlaceholder' })}
        maxLength="2"
        onChange={this.handleDayChange}
        onKeyDown={this.handleDayInputKeyDown}
        onFocus={this.handleDayFocus}
        onBlur={this.handleDayBlur}
        size="2"
        pattern="\d*"
        disabled={this.props.disabled}
      />
    );
  }

  /**
   * Renders year select
   */
  yearRender() {
    return (
      <Input
        {...this.props.yearAttributes}
        refCallback={(inputRef) => { this.yearRef = inputRef; }}
        aria-label={this.props.intl.formatMessage({ id: 'Terra.form.date.yearLabel' })}
        className={cx('date-input-year', { 'initial-focus': this.state.yearInitialFocused })}
        type="text"
        value={this.state.year}
        name={'terra-date-year-'.concat(this.props.name)}
        placeholder={this.props.intl.formatMessage({ id: 'Terra.form.date.yearPlaceholder' })}
        maxLength="4"
        onChange={this.handleYearChange}
        onKeyDown={this.handleYearInputKeyDown}
        onFocus={this.handleYearFocus}
        onBlur={this.handleYearBlur}
        size="4"
        pattern="\d*"
        disabled={this.props.disabled}
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

    if (DateInputUtil.computedDisplayFormat(this.props.displayFormat, this.props.intl.locale) === 'month-day-year') {
      return monthDayYearFormat;
    }

    return dayMonthYearFormat;
  }

  render() {
    const {
      disabled,
      displayFormat,
      dayAttributes,
      monthAttributes,
      yearAttributes,
      intl,
      onBlur,
      onChange,
      onFocus,
      name,
      value,
      ...customProps
    } = this.props;

    const {
      month,
      day,
      year,
    } = this.state;

    const dateInputClassNames = cx([
      { disabled },
      'date-input',
      { 'is-focused': this.state.isFocused },
      customProps.className,
    ]);

    // Using the state of month, day, and year to create a formatted date value
    let dateValue = '';

    if (month.length > 0 || day.length > 0 || year.length > 0) {
      dateValue = `${year}-${month}-${day}`;
    }

    return (
      <div
        {...customProps}
        className={dateInputClassNames}
        ref={this.dateInputContainer}
      >
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but formatted in YYYY-MM-DD format.
          type="hidden"
          name={name}
          value={dateValue}
        />
        {this.formattedRender()}
      </div>
    );
  }
}

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

export default injectIntl(DateInput);
