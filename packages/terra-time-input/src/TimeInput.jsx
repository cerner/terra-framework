import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Input from 'terra-form-input';
import ButtonGroup from 'terra-button-group';

import KeyCode from 'keycode-js';
import TimeUtil from './TimeUtil';
import styles from './TimeInput.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether the time input should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Custom input attributes that apply to both the hour and minute inputs.
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttributes: PropTypes.object,
  /**
   * Custom input attributes to apply to the hour input
   */
  // eslint-disable-next-line react/forbid-prop-types
  hourAttributes: PropTypes.object,
  /**
   * Custom input attributes to apply to the minutes input
   */
  // eslint-disable-next-line react/forbid-prop-types
  minuteAttributes: PropTypes.object,
  /**
   * Custom input attributes to apply to the second input
   */
  // eslint-disable-next-line react/forbid-prop-types
  secondAttributes: PropTypes.object,
  /**
   * Boolean to hide of show seconds field
   */
  hasSeconds: PropTypes.bool,
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
   * An ISO 8601 string representation of the time value in the input.
   */
  value: PropTypes.string,
  /**
   * Type of time input to initialize. Must be '24-hour' or '12-hour'
   */
  variant: PropTypes.oneOf([TimeUtil.FORMAT_12_HOUR, TimeUtil.FORMAT_24_HOUR]),
};

const defaultProps = {
  disabled: false,
  inputAttributes: {},
  secondAttributes: {},
  minuteAttributes: {},
  hourAttributes: {},
  hasSeconds: false,
  onBlur: null,
  onChange: null,
  onFocus: undefined,
  refCallback: undefined,
  value: undefined,
  variant: TimeUtil.FORMAT_24_HOUR,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

class TimeInput extends React.Component {
  constructor(props, context) {
    super(props);

    let { value } = this.props;

    if (value && !(TimeUtil.validateTime.test(value) || TimeUtil.validateTimeSeconds.test(value))) {
      if (process.env !== 'production') {
        // eslint-disable-next-line
        console.warn(
          `An invalid time value, ${value}, has been passed to the terra-time-picker.`
          + 'This value has been ignored and will not be rendered. Time values must be in hh:mm or hh:mm:ss format.',
        );
      }
      value = undefined;
    }

    this.timeInputContainer = React.createRef();
    this.handleHourChange = this.handleHourChange.bind(this);
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.handleSecondChange = this.handleSecondChange.bind(this);
    this.handleHourInputKeyDown = this.handleHourInputKeyDown.bind(this);
    this.handleMinuteInputKeyDown = this.handleMinuteInputKeyDown.bind(this);
    this.handleSecondInputKeyDown = this.handleSecondInputKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleHourFocus = this.handleHourFocus.bind(this);
    this.handleMinuteFocus = this.handleMinuteFocus.bind(this);
    this.handleSecondFocus = this.handleSecondFocus.bind(this);
    this.handleHourBlur = this.handleHourBlur.bind(this);
    this.handleMinuteBlur = this.handleMinuteBlur.bind(this);
    this.handleSecondBlur = this.handleSecondBlur.bind(this);
    this.handleMeridiemBlur = this.handleMeridiemBlur.bind(this);
    this.handleMeridiemChange = this.handleMeridiemChange.bind(this);
    this.handleMeridiemInputKeyDown = this.handleMeridiemInputKeyDown.bind(this);
    this.handleMeridiemInputFocus = this.handleMeridiemInputFocus.bind(this);
    this.handleMeridiemSelectFocus = this.handleMeridiemSelectFocus.bind(this);
    this.handleMeridiemButtonChange = this.handleMeridiemButtonChange.bind(this);

    let hour = TimeUtil.splitHour(value);
    let meridiem;

    if (props.variant === TimeUtil.FORMAT_12_HOUR) {
      if (!context.intl.messages['Terra.timeInput.am'] || !context.intl.messages['Terra.timeInput.pm']) {
        if (process.env !== 'production') {
          // eslint-disable-next-line no-console
          console.warn('This locale only uses 24 hour clock. The ante meridiem and post meridiem will not be displayed');
        }

        this.anteMeridiem = '';
        this.postMeridiem = '';
      } else {
        this.anteMeridiem = context.intl.formatMessage({ id: 'Terra.timeInput.am' });
        this.postMeridiem = context.intl.formatMessage({ id: 'Terra.timeInput.pm' });
      }

      if (hour) {
        const parsedHour = TimeUtil.parseTwelveHourTime(hour, this.anteMeridiem, this.postMeridiem);
        hour = parsedHour.hourString;
        // eslint-disable-next-line prefer-destructuring
        meridiem = parsedHour.meridiem;
      } else {
        meridiem = this.anteMeridiem;
      }
    }

    this.state = {
      hour,
      minute: TimeUtil.splitMinute(value),
      second: TimeUtil.splitSecond(value),
      isFocused: false,
      meridiem,
      hourInitialFocused: false,
      minuteInitialFocused: false,
      meridiemFocused: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.value === prevProps.value
      && this.props.variant === prevProps.variant
    ) {
      return;
    }

    let hour = TimeUtil.splitHour(this.props.value);
    let { meridiem } = this.state;

    if (this.props.variant === TimeUtil.FORMAT_12_HOUR) {
      if (!this.context.intl.messages['Terra.timeInput.am'] || !this.context.intl.messages['Terra.timeInput.pm']) {
        if (process.env !== 'production') {
          // eslint-disable-next-line no-console
          console.warn('This locale only uses 24 hour clock. The ante meridiem and post meridiem will not be displayed');
        }

        this.anteMeridiem = '';
        this.postMeridiem = '';
      } else {
        this.anteMeridiem = this.context.intl.formatMessage({ id: 'Terra.timeInput.am' });
        this.postMeridiem = this.context.intl.formatMessage({ id: 'Terra.timeInput.pm' });
      }

      if (hour) {
        const parsedHour = TimeUtil.parseTwelveHourTime(hour, this.anteMeridiem, this.postMeridiem);
        hour = parsedHour.hourString;
        // eslint-disable-next-line prefer-destructuring
        meridiem = parsedHour.meridiem;
      }
    }

    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({
      hour,
      minute: TimeUtil.splitMinute(this.props.value),
      second: TimeUtil.splitSecond(this.props.value),
      meridiem,
    });
  }

  handleFocus(event) {
    if (this.props.onFocus && !this.timeInputContainer.current.contains(event.relatedTarget)) {
      this.props.onFocus(event);
    }

    this.setState({ isFocused: true });
  }

  handleMinuteFocus(event) {
    this.handleFocus(event);
    this.setState({ minuteInitialFocused: true });
    this.minuteInput.setSelectionRange(0, this.minuteInput.value.length);
  }

  handleSecondFocus(event) {
    this.handleFocus(event);
    this.setState({ secondInitialFocused: true });
    this.secondInput.setSelectionRange(0, this.secondInput.value.length);
  }

  handleHourFocus(event) {
    this.handleFocus(event);
    this.setState({ hourInitialFocused: true });
    this.hourInput.setSelectionRange(0, this.hourInput.value.length);
  }

  handleHourBlur(event) {
    this.handleBlur(event, TimeUtil.inputType.HOUR);
    this.setState({ hourInitialFocused: false });
  }

  handleMinuteBlur(event) {
    this.handleBlur(event, TimeUtil.inputType.MINUTE);
    this.setState({ minuteInitialFocused: false });
  }

  handleSecondBlur(event) {
    this.handleBlur(event, TimeUtil.inputType.SECOND);
    this.setState({ secondInitialFocused: false });
  }

  handleMeridiemBlur(event) {
    this.handleBlur(event, TimeUtil.inputType.MERIDIEM);
    this.setState({ meridiemFocused: false });
  }

  handleBlur(event, type) {
    this.setState({ isFocused: false });

    if (type === TimeUtil.inputType.HOUR || type === TimeUtil.inputType.MINUTE || type === TimeUtil.inputType.SECOND) {
      let stateValue = event.target.value;

      // Prepend a 0 to the value when losing focus and the value is single digit.
      if (stateValue.length === 1) {
        if (this.props.variant === TimeUtil.FORMAT_12_HOUR
          && type === TimeUtil.inputType.HOUR
          && stateValue === '0') {
          stateValue = '12';
        } else {
          stateValue = '0'.concat(stateValue);
        }

        this.handleValueChange(event, type, stateValue, this.state.meridiem);
      }
    }

    if (this.props.onBlur) {
      // Modern browsers support event.relatedTarget but event.relatedTarget returns null in IE 10 / IE 11.
      // IE 11 sets document.activeElement to the next focused element before the blur event is called.
      const activeTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;

      // Handle blur only if focus has moved out of the entire time input component.
      if (!this.timeInputContainer.current.contains(activeTarget)) {
        this.props.onBlur(event);
      }
    }
  }

  handleHourChange(event) {
    if (!TimeUtil.validNumericInput(event.target.value)) {
      return;
    }

    let inputValue = event.target.value;
    const stateValue = this.state.hour;
    const maxValue = this.props.variant === TimeUtil.FORMAT_12_HOUR ? 12 : 23;

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have to
    // check the length of inputValue to make sure that it is less then 2.
    if (inputValue === stateValue || inputValue.length > 2 || Number(inputValue) > maxValue) {
      return;
    }

    // If the change made was not a deletion of a digit, then prepend '0' if the input value is a
    // single digit value between 3 and 9 for a 24 hour time, or 2 and 9 for a 12 hour clock
    if (inputValue.length >= stateValue.length) {
      const digitsToPrependZero = ['3', '4', '5', '6', '7', '8', '9'];

      if (this.props.variant === TimeUtil.FORMAT_12_HOUR) {
        digitsToPrependZero.push('2');
      }

      if (digitsToPrependZero.indexOf(inputValue) > -1) {
        inputValue = '0'.concat(inputValue);
      }
    }

    if (inputValue === '00' && this.props.variant === TimeUtil.FORMAT_12_HOUR) {
      inputValue = '12';
    }

    // // Move focus to the minute input if the hour input has a valid and complete entry.
    if (inputValue.length === 2) {
      this.minuteInput.focus();
    }

    this.handleValueChange(event, TimeUtil.inputType.HOUR, inputValue, this.state.meridiem);
  }

  handleMinuteChange(event) {
    if (!TimeUtil.validNumericInput(event.target.value)) {
      return;
    }

    let inputValue = event.target.value;
    const stateValue = this.state.minute;
    const maxValue = 59;

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have
    // to check the length of inputValue to make sure that it is less then 2.
    if (inputValue === stateValue || inputValue.length > 2 || Number(inputValue) > maxValue) {
      return;
    }

    // If the change made was not a deletion of a digit, then prepend '0'
    // if the input value is a single digit value between 6 and 9.
    if (inputValue.length >= stateValue.length) {
      const digitsToPrependZero = ['6', '7', '8', '9'];
      if (digitsToPrependZero.indexOf(inputValue) > -1) {
        inputValue = '0'.concat(inputValue);
      }
    }

    // Move focus to the merdiem for 12 hours times if the minute input has a valid and complete entry.
    // Move focus to the seconds if hasSeconds is true and minute input has a valid and complete entry.
    if (inputValue.length === 2) {
      if (this.props.hasSeconds) {
        this.secondInput.focus();
      } else if (this.props.variant === TimeUtil.FORMAT_12_HOUR && this.meridiemSelect) {
        this.meridiemSelect.focus();
      }
    }

    this.handleValueChange(event, TimeUtil.inputType.MINUTE, inputValue, this.state.meridiem);
  }

  handleSecondChange(event) {
    if (!TimeUtil.validNumericInput(event.target.value)) {
      return;
    }

    let inputValue = event.target.value;
    const stateValue = this.state.second;
    const maxValue = 59;

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have
    // to check the length of inputValue to make sure that it is less then 2.
    if (inputValue === stateValue || inputValue.length > 2 || Number(inputValue) > maxValue) {
      return;
    }

    // If the change made was not a deletion of a digit, then prepend '0'
    // if the input value is a single digit value between 6 and 9.
    if (inputValue.length >= stateValue.length) {
      const digitsToPrependZero = ['6', '7', '8', '9'];
      if (digitsToPrependZero.indexOf(inputValue) > -1) {
        inputValue = '0'.concat(inputValue);
      }
    }

    // Move focus to the merdiem for 12 hours times if the second input has a valid and complete entry.
    if (this.props.variant === TimeUtil.FORMAT_12_HOUR && inputValue.length === 2 && this.meridiemSelect) {
      this.meridiemSelect.focus();
    }

    this.handleValueChange(event, TimeUtil.inputType.SECOND, inputValue, this.state.meridiem);
  }

  handleMeridiemChange(event) {
    this.setState({
      meridiem: event.target.value,
    });

    this.handleValueChange(event, TimeUtil.inputType.HOUR, this.state.hour.toString(), event.target.value);
  }

  handleMeridiemInputFocus(event) {
    // When clicked to put focus on the meridiem input, the focus would then need to be passed and set on the meridium select,
    // which would call handleMeridiemSelectFocus, to get the desired behavior and styles.
    this.meridiemSelect.focus();

    if (this.props.onFocus && !this.timeInputContainer.current.contains(event.relatedTarget)) {
      this.props.onFocus(event);
    }
  }

  handleMeridiemSelectFocus() {
    this.setState({
      isFocused: true,
      meridiemFocused: true,
    });
  }

  /**
   * Takes a key input from the hour input, and processes it based on the value of the keycode.
   * If the key is an up or down arrow, it increments/decrements the hour. If the right arrow
   * is pressed, it shifts focus to the minute input.
   * @param {Object} event Event object generated from the event delegation.
   */
  handleHourInputKeyDown(event) {
    let stateValue = this.state.hour;
    let { meridiem } = this.state;
    const previousStateValue = stateValue;

    if (event.keyCode === KeyCode.KEY_UP) {
      stateValue = TimeUtil.incrementHour(stateValue, this.props.variant);

      // Hitting 12 when incrementing up changes the meridiem
      if (this.props.variant === TimeUtil.FORMAT_12_HOUR && stateValue === '12') {
        if (meridiem === this.postMeridiem || !previousStateValue) {
          meridiem = this.anteMeridiem;
        } else {
          meridiem = this.postMeridiem;
        }
      }
    }

    if (event.keyCode === KeyCode.KEY_DOWN) {
      stateValue = TimeUtil.decrementHour(stateValue, this.props.variant);

      // Hitting 11 when incrementing down changes the meridiem
      if (this.props.variant === TimeUtil.FORMAT_12_HOUR && stateValue === '11') {
        meridiem = meridiem === this.postMeridiem ? this.anteMeridiem : this.postMeridiem;
      }
    }

    if (stateValue !== previousStateValue) {
      this.handleValueChange(event, TimeUtil.inputType.HOUR, stateValue, meridiem);
    }

    if (event.keyCode === KeyCode.KEY_RIGHT) {
      this.focusMinute(event);
    }
  }

  focusMinute(event) {
    // If the hour is empty or the cursor is after the value, move focus to the second input when the right arrow is pressed.
    if (this.state.hour.length === 0 || this.state.hour.length === this.hourInput.selectionEnd) {
      this.minuteInput.focus();
      this.minuteInput.setSelectionRange(0, 0);
      event.preventDefault();
    }
  }

  focusSecond(event) {
    // If the minute is empty or the cursor is after the value, move focus to the meridiem input when the right arrow is pressed.
    if (this.state.minute.length === 0 || this.state.minute.length === this.minuteInput.selectionEnd) {
      this.secondInput.focus();
      this.secondInput.setSelectionRange(0, 0);
      event.preventDefault();
    }
  }

  /**
   * Takes a key input from the minute input, and processes it based on the value of the keycode.
   * If the key is an up or down arrow, it increments/decrements the minute. If the left arrow
   * is pressed, it shifts focus to the hour input. If the right arrow is pressed, it shifts
   * focus to the second input.
   * @param {Object} event Event object generated from the event delegation.
   */
  handleMinuteInputKeyDown(event) {
    let stateValue = this.state.minute;
    const previousStateValue = stateValue;

    if (event.keyCode === KeyCode.KEY_UP) {
      stateValue = TimeUtil.incrementMinute(stateValue);
    }

    if (event.keyCode === KeyCode.KEY_DOWN) {
      stateValue = TimeUtil.decrementMinute(stateValue);
    }

    if (previousStateValue !== stateValue) {
      this.handleValueChange(event, TimeUtil.inputType.MINUTE, stateValue, this.state.meridiem);
    }

    if (event.keyCode === KeyCode.KEY_LEFT
      || event.keyCode === KeyCode.KEY_DELETE
      || event.keyCode === KeyCode.KEY_BACK_SPACE) {
      this.focusHour(event);
    }

    if (event.keyCode === KeyCode.KEY_RIGHT) {
      if (this.props.hasSeconds) {
        this.focusSecond(event);
      } else {
        this.focusMeridiem();
      }
    }
  }

  /**
   * Takes a key input from the second input, and processes it based on the value of the keycode.
   * If the key is an up or down arrow, it increments/decrements the second. If the left arrow
   * is pressed, it shifts focus to the minute input. If the right arrow is pressed, it shifts
   * focus to the merdiem input.
   * @param {Object} event Event object generated from the event delegation.
   */
  handleSecondInputKeyDown(event) {
    let stateValue = this.state.second;
    const previousStateValue = stateValue;

    if (event.keyCode === KeyCode.KEY_UP) {
      stateValue = TimeUtil.incrementSecond(stateValue);
    }

    if (event.keyCode === KeyCode.KEY_DOWN) {
      stateValue = TimeUtil.decrementSecond(stateValue);
    }

    if (previousStateValue !== stateValue) {
      this.handleValueChange(event, TimeUtil.inputType.SECOND, stateValue, this.state.meridiem);
    }

    if (event.keyCode === KeyCode.KEY_LEFT
        || event.keyCode === KeyCode.KEY_DELETE
        || event.keyCode === KeyCode.KEY_BACKSPACE) {
      this.focusMinute(event);
    }

    if (event.keyCode === KeyCode.KEY_RIGHT) {
      this.focusMeridiem(event);
    }
  }

  focusHour(event) {
    // If the cursor is at the left most position in the minute input, is empty or the cursor is before the value,
    // move focus to the hour input

    if (this.minuteInput.selectionEnd === 0) {
      this.hourInput.focus();
      if (this.state.hour) {
        this.hourInput.setSelectionRange(this.state.hour.length, this.state.hour.length);
        event.preventDefault();
      }
    }
  }

  focusMeridiem(event) {
    // If the minute is empty or the cursor is after the value, move focus to the meridiem.
    if ((this.state.minute.length === 0
      || this.state.minute.length === this.minuteInput.selectionEnd)
      && this.meridiemSelect
    ) {
      this.meridiemSelect.focus();
      // event.preventDefault();
    }
  }

  handleValueChange(event, type, timeValue, meridiem) {
    if (type === TimeUtil.inputType.HOUR) {
      this.setState({
        hour: timeValue,
        meridiem,
        hourInitialFocused: false,
      });
    } else if (type === TimeUtil.inputType.MINUTE) {
      this.setState({
        minute: timeValue,
        minuteInitialFocused: false,
      });
    } else if (type === TimeUtil.inputType.SECOND) {
      this.setState({
        second: timeValue,
        secondInitialFocused: false,
      });
    }

    // Input values of length 1 indicate incomplete time, which means we cannot get a
    // reliable time so onChange isn't triggered.
    if (this.props.onChange && timeValue.length !== 1) {
      const hour = type === TimeUtil.inputType.HOUR ? timeValue : this.state.hour;
      const minute = type === TimeUtil.inputType.MINUTE ? timeValue : this.state.minute;
      const second = type === TimeUtil.inputType.SECOND ? timeValue : this.state.second;

      if (hour === '' && minute === '' && second === '') {
        this.props.onChange(event, '');
      } else if (this.state.second) {
        this.props.onChange(event, this.formatHour(hour, meridiem).concat(':', minute, ':', second));
      } else {
        this.props.onChange(event, this.formatHour(hour, meridiem).concat(':', minute));
      }
    }
  }

  formatHour(hour, meridiem) {
    if (!hour) {
      return hour;
    }

    let tempHour = parseInt(hour, 10);

    if (this.props.variant === TimeUtil.FORMAT_12_HOUR) {
      if (meridiem === this.postMeridiem && tempHour < 12) {
        tempHour += 12;
      } else if (meridiem === this.anteMeridiem && tempHour === 12) {
        tempHour = 0;
      }
    }

    let hourString = tempHour.toString();

    if (hourString.length < 2) {
      hourString = '0'.concat(hourString);
    }

    return hourString;
  }

  handleMeridiemInputKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_LEFT
        || event.keyCode === KeyCode.KEY_DELETE
        || event.keyCode === KeyCode.KEY_BACK_SPACE) {
      if (this.props.hasSeconds) {
        this.secondInput.focus();
      } else {
        this.minuteInput.focus();
      }
      event.preventDefault();
    }
  }

  mobileInput() {
    const {
      disabled,
      hasSeconds,
      inputAttributes,
      minuteAttributes,
      secondAttributes,
      hourAttributes,
      onBlur,
      onChange,
      onFocus,
      name,
      refCallback,
      value,
      variant,
      ...customProps
    } = this.props;

    const instanceHoursAttrs = Object.assign({}, hourAttributes);
    const instanceMinuteAttrs = Object.assign({}, minuteAttributes);
    const instanceSecondAttrs = Object.assign({}, secondAttributes);

    // Using the state of hour, minute, and second create a time in UTC represented in ISO 8601 format.
    let timeValue = '';

    if (this.state.hour.length > 0 || this.state.minute.length > 0) {
      let hour = parseInt(this.state.hour, 10);

      if (this.props.variant === TimeUtil.FORMAT_12_HOUR && this.state.meridiem === this.postMeridiem && hour > 12) {
        hour += 12;
      }
      if (this.props.hasSeconds) {
        timeValue = 'T'.concat(hour, ':', this.state.minute, ':', this.state.second);
      } else {
        timeValue = 'T'.concat(hour, ':', this.state.minute);
      }
    }

    if (!instanceHoursAttrs.id) {
      instanceHoursAttrs.id = 'terra-time-hour-'.concat(name);
    }

    if (!instanceMinuteAttrs.id) {
      instanceMinuteAttrs.id = 'terra-time-minute-'.concat(name);
    }
    if (!instanceSecondAttrs.id) {
      instanceSecondAttrs.id = 'terra-time-second-'.concat(name);
    }

    return (
      <div
        {...customProps}
        className={cx(['mobile-time-picker', customProps.className])}
        ref={this.timeInputContainer}
      >
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          type="hidden"
          name={name}
          value={timeValue}
        />
        <div className={cx('time-input-group')}>
          <Input
            {...inputAttributes}
            {...instanceHoursAttrs}
            refCallback={(inputRef) => {
              this.hourInput = inputRef;
              if (refCallback) refCallback(inputRef);
            }}
            className={cx('time-input-hour')}
            value={this.state.hour}
            name={'terra-time-hour-'.concat(name)}
            placeholder={this.context.intl.formatMessage({ id: 'Terra.timeInput.hh' })}
            maxLength="2"
            onChange={this.handleHourChange}
            onKeyDown={this.handleHourInputKeyDown}
            onFocus={this.handleFocus}
            onBlur={this.handleHourBlur}
            size="2"
            pattern="\d*"
            disabled={disabled}
          />
          <label htmlFor={instanceHoursAttrs.id} className={cx('mobile-input-label')}>
            {this.context.intl.formatMessage({ id: 'Terra.timeInput.hours' })}
          </label>
        </div>
        <span className={cx('time-spacer')}>:</span>
        <div className={cx('time-input-group')}>
          <Input
            {...inputAttributes}
            {...instanceMinuteAttrs}
            refCallback={(inputRef) => { this.minuteInput = inputRef; }}
            className={cx('time-input-minute')}
            value={this.state.minute}
            name={'terra-time-minute-'.concat(name)}
            placeholder={this.context.intl.formatMessage({ id: 'Terra.timeInput.mm' })}
            maxLength="2"
            onChange={this.handleMinuteChange}
            onKeyDown={this.handleMinuteInputKeyDown}
            onFocus={this.handleFocus}
            onBlur={this.handleMinuteBlur}
            size="2"
            pattern="\d*"
            disabled={disabled}
          />
          <label htmlFor={instanceMinuteAttrs.id} className={cx('mobile-input-label')}>
            {this.context.intl.formatMessage({ id: 'Terra.timeInput.minutes' })}
          </label>
          {this.props.hasSeconds && (
            [
              <span className={cx('time-spacer')} key="colon-span">:</span>,
              <Input
                {...inputAttributes}
                {...secondAttributes}
                refCallback={(inputRef) => { this.secondInput = inputRef; }}
                className={cx('time-input-second')}
                type="text"
                value={this.state.second}
                name={'terra-time-second-'.concat(name)}
                placeholder={this.context.intl.formatMessage({ id: 'Terra.timeInput.ss' })}
                maxLength="2"
                onChange={this.handleSecondChange}
                onKeyDown={this.handleSecondInputKeyDown}
                onFocus={this.handleSecondFocus}
                onBlur={this.handleSecondBlur}
                size="2"
                pattern="\d*"
                disabled={disabled}
                key="seconds-input"
              />,
              <label htmlFor={instanceSecondAttrs.id} className={cx('mobile-input-label')} key="seconds-label">
                {this.context.intl.formatMessage({ id: 'Terra.timeInput.seconds' })}
              </label>,
            ])
          }
        </div>
        {this.props.variant === TimeUtil.FORMAT_12_HOUR && (
          <ButtonGroup selectedKeys={[this.state.meridiem]} onChange={this.handleMeridiemButtonChange} className={cx('meridiem-button-group')}>
            <ButtonGroup.Button
              key={this.anteMeridiem}
              className={cx('meridiem-button')}
              text={this.anteMeridiem}
              onBlur={this.handleMeridiemBlur}
              onFocus={this.handleFocus}
              isDisabled={disabled}
            />
            <ButtonGroup.Button
              key={this.postMeridiem}
              className={cx('meridiem-button')}
              text={this.postMeridiem}
              onBlur={this.handleMeridiemBlur}
              onFocus={this.handleFocus}
              isDisabled={disabled}
            />
          </ButtonGroup>
        )}
      </div>
    );
  }

  handleMeridiemButtonChange(event, selectedKey) {
    this.handleValueChange(event, TimeUtil.inputType.HOUR, this.state.hour.toString(), selectedKey);
  }

  desktopInput() {
    const {
      disabled,
      hasSeconds,
      inputAttributes,
      secondAttributes,
      minuteAttributes,
      hourAttributes,
      onBlur,
      onChange,
      onFocus,
      name,
      refCallback,
      value,
      variant,
      ...customProps
    } = this.props;

    const timeInputClassNames = cx([
      { disabled },
      'time-input',
      { 'is-focused': this.state.isFocused },
      customProps.className,
    ]);

    // Using the state of hour and minute create a time in UTC represented in ISO 8601 format.
    let timeValue = '';

    if (this.state.hour.length > 0 || this.state.minute.length > 0 || this.state.second.length > 0) {
      let hour = parseInt(this.state.hour, 10);

      if (this.props.variant === TimeUtil.FORMAT_12_HOUR && this.state.meridiem === this.postMeridiem) {
        hour += 12;
      }
      if (this.props.hasSeconds) {
        timeValue = 'T'.concat(hour, ':', this.state.minute, ':', this.state.second);
      } else {
        timeValue = 'T'.concat(hour, ':', this.state.minute);
      }
    }

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div
        {...customProps}
        className={timeInputClassNames}
        ref={this.timeInputContainer}
      >
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          type="hidden"
          name={name}
          value={timeValue}
        />
        <Input
          {...inputAttributes}
          {...minuteAttributes}
          aria-label={this.context.intl.formatMessage({ id: 'Terra.timeInput.hours' })}
          refCallback={(inputRef) => {
            this.hourInput = inputRef;
            if (refCallback) refCallback(inputRef);
          }}
          className={cx('time-input-hour', 'desktop', { 'initial-focus': this.state.hourInitialFocused })}
          type="text"
          value={this.state.hour}
          name={'terra-time-hour-'.concat(name)}
          placeholder={this.context.intl.formatMessage({ id: 'Terra.timeInput.hh' })}
          maxLength="2"
          onChange={this.handleHourChange}
          onKeyDown={this.handleHourInputKeyDown}
          onFocus={this.handleHourFocus}
          onBlur={this.handleHourBlur}
          size="2"
          pattern="\d*"
          disabled={disabled}
        />
        <span className={cx('time-spacer')}>:</span>
        <Input
          {...inputAttributes}
          {...minuteAttributes}
          refCallback={(inputRef) => { this.minuteInput = inputRef; }}
          aria-label={this.context.intl.formatMessage({ id: 'Terra.timeInput.minutes' })}
          className={cx('time-input-minute', 'desktop', { 'initial-focus': this.state.minuteInitialFocused })}
          type="text"
          value={this.state.minute}
          name={'terra-time-minute-'.concat(name)}
          placeholder={this.context.intl.formatMessage({ id: 'Terra.timeInput.mm' })}
          maxLength="2"
          onChange={this.handleMinuteChange}
          onKeyDown={this.handleMinuteInputKeyDown}
          onFocus={this.handleMinuteFocus}
          onBlur={this.handleMinuteBlur}
          size="2"
          pattern="\d*"
          disabled={disabled}
        />
        {this.props.hasSeconds && (
          [
            <span className={cx('time-spacer')} key="colon-span">:</span>,
            <Input
              {...inputAttributes}
              {...secondAttributes}
              refCallback={(inputRef) => { this.secondInput = inputRef; }}
              aria-label={this.context.intl.formatMessage({ id: 'Terra.timeInput.seconds' })}
              className={cx('time-input-second', 'desktop', { 'initial-focus': this.state.secondInitialFocused })}
              type="text"
              value={this.state.second}
              name={'terra-time-second-'.concat(name)}
              placeholder="ss"
              maxLength="2"
              onChange={this.handleSecondChange}
              onKeyDown={this.handleSecondInputKeyDown}
              onFocus={this.handleSecondFocus}
              onBlur={this.handleSecondBlur}
              size="2"
              pattern="\d*"
              disabled={disabled}
              key="seconds-input"
            />,
          ])
        }
        {this.props.variant === TimeUtil.FORMAT_12_HOUR && (
          [
            <Input
              {...inputAttributes}
              aria-label={this.context.intl.formatMessage({ id: 'Terra.timeInput.display.meridiem' })} // value in translations set to 'Display Meridiem'
              aria-readonly
              className={cx(['meridiem-display', { focused: this.state.meridiemFocused }])}
              onFocus={this.handleMeridiemInputFocus}
              key="meridiem_display"
              tabIndex="-1"
              value={this.state.meridiem}
              size={this.state.meridiem.length || 1}
              readOnly
              disabled={disabled}
            />,
            <div
              className={cx('meridiem-select-wrapper')}
              key="meridiem_select_box"
            >
              <select
                aria-label={this.context.intl.formatMessage({ id: 'Terra.timeInput.select.meridiem' })} // value in translations set to 'Select Meridiem'
                ref={(select) => { this.meridiemSelect = select; }}
                onBlur={this.handleMeridiemBlur}
                onFocus={this.handleMeridiemSelectFocus}
                name={'terra-time-meridiem-'.concat(name)}
                value={this.state.meridiem}
                className={cx('time-input-meridiem')}
                onChange={this.handleMeridiemChange}
                onKeyDown={this.handleMeridiemInputKeyDown}
                size="2"
              >
                <option key="anteMeridiem" value={this.anteMeridiem}>{this.anteMeridiem}</option>
                <option key="postMeridiem" value={this.postMeridiem}>{this.postMeridiem}</option>
              </select>
            </div>,
          ]
        )}
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }

  render() {
    if (TimeUtil.isConsideredMobileDevice()) {
      return this.mobileInput();
    }

    return this.desktopInput();
  }
}

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;
TimeInput.contextTypes = contextTypes;

export default TimeInput;
