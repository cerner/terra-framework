import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Input from 'terra-form-input';
import ButtonGroup from 'terra-button-group';
import { injectIntl } from 'react-intl';
import uuidv4 from 'uuid/v4';

import * as KeyCode from 'keycode-js';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import TimeUtil from './TimeUtil';
import styles from './TimeInput.module.scss';

import TimeInputFullValue from './_TimeInputFullValue';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Whether the time input should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Custom input attributes that apply to the hour, minute, and second inputs.
   */
  inputAttributes: PropTypes.object,
  /**
   * Custom input attributes to apply to the hour input
   */
  hourAttributes: PropTypes.object,
  /**
  * @private
  * intl object programmatically imported through injectIntl from react-intl.
  * */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
  * Whether the input displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
  */
  isIncomplete: PropTypes.bool,
  /**
  * Whether the input displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalid: PropTypes.bool,
  /**
  * Whether the selected meridiem displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalidMeridiem: PropTypes.bool,
  /**
   * Custom input attributes to apply to the minutes input
   */
  minuteAttributes: PropTypes.object,
  /**
   * Name of the time input. The name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
 * Human-readable name of the time input. Though optional for passivity, you should provide this
 * if at all possible to increase the accessibility of the field, especially for users using
 * assistive technologies such as screen readers.
 *
 * If not given, the default value will be the localized version of Time Input. It is not recommended
 * to use the default, as it will not give good context to the user about the intention of the input.
 *
 * See also: https://www.w3.org/TR/accname-1.1/#dfn-accessible-name
 */
  label: PropTypes.string,
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
  inputAttributes: {},
  isIncomplete: false,
  isInvalid: false,
  isInvalidMeridiem: false,
  minuteAttributes: {},
  hourAttributes: {},
  onBlur: null,
  onChange: null,
  onFocus: undefined,
  refCallback: undefined,
  required: false,
  secondAttributes: {},
  showSeconds: false,
  value: undefined,
  variant: TimeUtil.FORMAT_24_HOUR,
};

class TimeInput extends React.Component {
  constructor(props) {
    super(props);

    let { value } = this.props;
    const { showSeconds } = this.props;

    if (value && !TimeUtil.validateTime(value, showSeconds)) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          `An invalid time value, ${value}, has been passed to the terra-time-picker. `
          + 'This value has been ignored and will not be rendered. '
          + `Time values must be in ${showSeconds ? 'hh:mm:ss' : 'hh:mm'} format because showSeconds is ${showSeconds}.`,
        );
      }

      value = undefined;
    }

    this.uuid = uuidv4();

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
    this.handleMeridiemButtonFocus = this.handleMeridiemButtonFocus.bind(this);
    this.handleMeridiemButtonBlur = this.handleMeridiemButtonBlur.bind(this);
    this.handleMeridiemButtonChange = this.handleMeridiemButtonChange.bind(this);

    let hour = TimeUtil.splitHour(value);
    let meridiem;

    if (TimeUtil.getVariantFromLocale(props) === TimeUtil.FORMAT_12_HOUR) {
      this.anteMeridiem = this.props.intl.formatMessage({ id: 'Terra.timeInput.am' });
      this.postMeridiem = this.props.intl.formatMessage({ id: 'Terra.timeInput.pm' });

      if (hour) {
        const parsedHour = TimeUtil.parseTwelveHourTime(hour, this.anteMeridiem, this.postMeridiem);
        hour = parsedHour.hourString;
        meridiem = parsedHour.meridiem;
      } else {
        meridiem = this.anteMeridiem;
      }
    }
    if (this.props.variant === TimeUtil.FORMAT_12_HOUR && TimeUtil.getVariantFromLocale(props) === TimeUtil.FORMAT_24_HOUR) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('This locale only uses 24 hour clock. The ante meridiem and post meridiem will not be displayed');
      }
      this.anteMeridiem = '';
      this.postMeridiem = '';
    }

    this.state = {
      hour,
      minute: TimeUtil.splitMinute(value),
      second: TimeUtil.splitSecond(value),
      isFocused: false,
      meridiem,
      hourInitialFocused: false,
      minuteInitialFocused: false,
      secondInitialFocused: false,
    };
  }

  componentDidUpdate(prevProps) {
    const variant = TimeUtil.getVariantFromLocale(this.props);

    if (
      this.props.value === prevProps.value
      && variant === TimeUtil.getVariantFromLocale(prevProps)
    ) {
      return;
    }

    let hour = TimeUtil.splitHour(this.props.value);
    let { meridiem } = this.state;

    if (variant === TimeUtil.FORMAT_12_HOUR) {
      this.anteMeridiem = this.props.intl.formatMessage({ id: 'Terra.timeInput.am' });
      this.postMeridiem = this.props.intl.formatMessage({ id: 'Terra.timeInput.pm' });

      if (hour) {
        const parsedHour = TimeUtil.parseTwelveHourTime(hour, this.anteMeridiem, this.postMeridiem);
        hour = parsedHour.hourString;
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

  handleSecondFocus(event) {
    this.handleFocus(event);
    this.setState({ secondInitialFocused: true });

    // This check is _needed_ to avoid the contextual menu on mobile devices coming up every time the focus shifts.
    if (!TimeUtil.isConsideredMobileDevice()) {
      this.secondInput.setSelectionRange(0, this.secondInput.value.length);
    }
  }

  handleMinuteFocus(event) {
    this.handleFocus(event);
    this.setState({ minuteInitialFocused: true });

    // This check is _needed_ to avoid the contextual menu on mobile device coming up every time the focus shifts.
    if (!TimeUtil.isConsideredMobileDevice()) {
      this.minuteInput.setSelectionRange(0, this.minuteInput.value.length);
    }
  }

  handleHourFocus(event) {
    this.handleFocus(event);
    this.setState({ hourInitialFocused: true });

    // This check is _needed_ to avoid the contextual menu on mobile device coming up every time the focus shifts.
    if (!TimeUtil.isConsideredMobileDevice()) {
      this.hourInput.setSelectionRange(0, this.hourInput.value.length);
    }
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

  handleMeridiemButtonBlur(event) {
    this.handleBlur(event, TimeUtil.inputType.MERIDIEM);
  }

  handleBlur(event, type) {
    this.setState({ isFocused: false });

    if (type === TimeUtil.inputType.HOUR || type === TimeUtil.inputType.MINUTE || type === TimeUtil.inputType.SECOND) {
      let stateValue = event.target.value;

      // Prepend a 0 to the value when losing focus and the value is single digit.
      if (stateValue.length === 1) {
        if (TimeUtil.getVariantFromLocale(this.props) === TimeUtil.FORMAT_12_HOUR
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
    const variant = TimeUtil.getVariantFromLocale(this.props);
    const maxValue = variant === TimeUtil.FORMAT_12_HOUR ? 12 : 23;

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

      if (variant === TimeUtil.FORMAT_12_HOUR) {
        digitsToPrependZero.push('2');
      }

      if (digitsToPrependZero.indexOf(inputValue) > -1) {
        inputValue = '0'.concat(inputValue);
      }
    }

    if (inputValue === '00' && variant === TimeUtil.FORMAT_12_HOUR) {
      inputValue = '12';
    }

    // Move focus to the minute input if the hour input has a valid and complete entry.
    const moveFocusOnChange = () => {
      if (inputValue.length === 2) {
        this.minuteInput.focus();
      }
    };

    this.handleValueChange(event, TimeUtil.inputType.HOUR, inputValue, this.state.meridiem, moveFocusOnChange);
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

    const moveFocusOnChange = () => {
      // Move focus to second if second is shown and minute input has a valid and complete entry
      if (inputValue.length === 2 && this.props.showSeconds) {
        this.secondInput.focus();
      }
    };

    this.handleValueChange(event, TimeUtil.inputType.MINUTE, inputValue, this.state.meridiem, moveFocusOnChange);
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

    this.handleValueChange(event, TimeUtil.inputType.SECOND, inputValue, this.state.meridiem);
  }

  handleMeridiemButtonFocus(event) {
    if (this.props.onFocus && !this.timeInputContainer.current.contains(event.relatedTarget)) {
      this.props.onFocus(event);
    }
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
    const variant = TimeUtil.getVariantFromLocale(this.props);

    if (event.keyCode === KeyCode.KEY_UP) {
      stateValue = TimeUtil.incrementHour(stateValue, variant);

      // Hitting 12 when incrementing up changes the meridiem
      if (variant === TimeUtil.FORMAT_12_HOUR && stateValue === '12') {
        if (meridiem === this.postMeridiem || !previousStateValue) {
          meridiem = this.anteMeridiem;
        } else {
          meridiem = this.postMeridiem;
        }
      }
    }

    if (event.keyCode === KeyCode.KEY_DOWN) {
      stateValue = TimeUtil.decrementHour(stateValue, variant);

      // Hitting 11 when incrementing down changes the meridiem
      if (variant === TimeUtil.FORMAT_12_HOUR && stateValue === '11') {
        meridiem = meridiem === this.postMeridiem ? this.anteMeridiem : this.postMeridiem;
      }
    }

    if (stateValue !== previousStateValue) {
      this.handleValueChange(event, TimeUtil.inputType.HOUR, stateValue, meridiem);
    }

    if (event.keyCode === KeyCode.KEY_RIGHT) {
      this.focusMinuteFromHour(event);
    }
  }

  /**
   * Takes a key input from the minute input, and processes it based on the value of the keycode.
   * If the key is an up or down arrow, it increments/decrements the minute. If the left arrow
   * is pressed, it shifts focus to the hour input. If the right arrow is pressed, it shifts
   * focus to the meridiem input.
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

    if (event.keyCode === KeyCode.KEY_RIGHT && this.props.showSeconds) {
      this.focusSecondFromMinute(event);
    }
  }

  /**
   * Takes a key input from the second input, and processes it based on the value of the keycode.
   * If the key is an up or down arrow, it increments/decrements the second. If the left arrow
   * is pressed, it shifts focus to the minute input. If the right arrow is pressed, it shifts
   * focus to the meridiem input.
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
      || event.keyCode === KeyCode.KEY_BACK_SPACE) {
      this.focusMinuteFromSecond(event);
    }
  }

  handleValueChange(event, type, timeValue, meridiem, moveFocusOnChange) {
    if (type === TimeUtil.inputType.HOUR) {
      this.setState({
        hour: timeValue,
        meridiem,
        hourInitialFocused: false,
      }, moveFocusOnChange);
    } else if (type === TimeUtil.inputType.MINUTE) {
      this.setState({
        minute: timeValue,
        minuteInitialFocused: false,
      }, moveFocusOnChange);
    } else {
      this.setState({
        second: timeValue,
        secondInitialFocused: false,
      }, moveFocusOnChange);
    }

    // Input values of length 1 indicate incomplete time, which means we cannot get a
    // reliable time so onChange isn't triggered.
    if (this.props.onChange && timeValue.length !== 1) {
      const hour = type === TimeUtil.inputType.HOUR ? timeValue : this.state.hour;
      const minute = type === TimeUtil.inputType.MINUTE ? timeValue : this.state.minute;
      const second = type === TimeUtil.inputType.SECOND ? timeValue : this.state.second;

      if (hour === '' && minute === '' && second === '') {
        this.props.onChange(event, '');
      } else {
        this.props.onChange(event, this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : ''));
      }
    }
  }

  handleMeridiemButtonChange(event, selectedKey) {
    this.handleValueChange(event, TimeUtil.inputType.HOUR, this.state.hour.toString(), selectedKey);
  }

  focusMinuteFromHour(event) {
    // If the hour is empty or the cursor is after the value, move focus to the minute input when the right arrow is pressed.
    if (this.state.hour.length === 0 || this.state.hour.length === this.hourInput.selectionEnd) {
      this.minuteInput.focus();
      this.minuteInput.setSelectionRange(0, 0);
      event.preventDefault();
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

  focusSecondFromMinute(event) {
    // If the minute is empty or the cursor is after the value, move focus to the meridiem.
    if ((this.state.minute.length === 0
      || this.state.minute.length === this.minuteInput.selectionEnd)
      && this.secondInput
    ) {
      this.secondInput.focus();
      if (this.state.second) {
        this.secondInput.setSelectionRange(0, 0);
        event.preventDefault();
      }
    }
  }

  focusMinuteFromSecond(event) {
    // If the cursor is at the left most position in the second input, is empty or the cursor is before the value,
    // move focus to the minute input

    if (this.secondInput.selectionEnd === 0) {
      this.minuteInput.focus();
      if (this.state.minute) {
        this.minuteInput.setSelectionRange(this.state.minute.length, this.state.minute.length);
        event.preventDefault();
      }
    }
  }

  formatHour(hour, meridiem) {
    if (!hour) {
      return hour;
    }

    let tempHour = parseInt(hour, 10);

    if (TimeUtil.getVariantFromLocale(this.props) === TimeUtil.FORMAT_12_HOUR) {
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

  render() {
    const {
      disabled,
      inputAttributes,
      minuteAttributes,
      hourAttributes,
      intl,
      isIncomplete,
      isInvalid,
      isInvalidMeridiem,
      onBlur,
      onChange,
      onFocus,
      name,
      label,
      refCallback,
      required,
      secondAttributes,
      showSeconds,
      value,
      variant,
      ...customProps
    } = this.props;

    const anteMeridiemClassNames = cx([
      'meridiem-button',
      { 'is-invalid': isInvalidMeridiem && this.state.meridiem === this.anteMeridiem },
    ]);

    const postMeridiemClassNames = cx([
      'meridiem-button',
      { 'is-invalid': isInvalidMeridiem && this.state.meridiem === this.postMeridiem },
    ]);

    const variantFromLocale = TimeUtil.getVariantFromLocale(this.props);

    // Using the state of hour, minute, and second (if shown) create a time in UTC represented in ISO 8601 format.
    let timeValue = '';

    if (this.state.hour.length > 0 || this.state.minute.length > 0 || (this.state.second.length > 0 && showSeconds)) {
      let hour = parseInt(this.state.hour, 10);

      if (variantFromLocale === TimeUtil.FORMAT_12_HOUR && this.state.meridiem === this.postMeridiem) {
        hour += 12;
      }

      timeValue = 'T'.concat(hour, ':', this.state.minute);

      if (showSeconds) {
        timeValue = timeValue.concat(':', this.state.second);
      }
    }

    const theme = this.context;

    const timeInputClassNames = classNames(cx(
      { disabled },
      'time-input',
      { 'is-focused': this.state.isFocused },
      { 'is-invalid': isInvalid },
      { 'is-incomplete': (isIncomplete && required && !isInvalid && !isInvalidMeridiem) },
    ), customProps.className);

    const hourClassNames = cx([
      'time-input-hour',
      { 'with-second': showSeconds },
      { 'initial-focus': this.state.hourInitialFocused },
    ]);

    const minuteClassNames = cx([
      'time-input-minute',
      { 'with-second': showSeconds },
      { 'initial-focus': this.state.minuteInitialFocused },
    ]);

    const secondClassNames = cx([
      'time-input-second',
      { 'initial-focus': this.state.secondInitialFocused },
    ]);

    // Allowing ID to be over-written by customProps in case consumers depend on certain
    // ID values for testing.
    const labelId = customProps.id || `terra-time-input-label-${this.uuid}`;

    const descriptionId = `terra-time-input-description-${this.uuid}`;
    const hourLabelId = `terra-time-input-hour-label-${this.uuid}`;
    const hourDescriptionId = `terra-time-input-hour-description-${this.uuid}`;
    const minuteLabelId = `terra-time-input-minute-label-${this.uuid}`;
    const minuteDescriptionId = `terra-time-input-minute-description-${this.uuid}`;
    const secondLabelId = `terra-time-input-second-label-${this.uuid}`;
    const secondDescriptionId = `terra-time-input-second-description-${this.uuid}`;
    const meridianChoiceId = `terra-time-input-meridiem-choice-label-${this.uuid}`;

    const timeSpacer = intl.formatMessage({
      id: 'Terra.timeInput.timeSpacer',
      defaultMessage: ':',
      description: 'The symbol between hours and minutes, or between minutes and seconds.',
    });

    // Returns an aria-labelledby value reflecting the nested components.
    // This structure is critical for speech input users who might need to jump
    // directly into a subfield, like "type '09' in Birth Time Hour".
    //
    // Granted, we don't visually display these labels, but in theory a user w/ a
    // speech input device would be able to index each component using their
    // device. Several browser plug-ins also provide do that for us.
    const subFieldAriaLabelledBy = (subfieldLabelId) => `${labelId} ${subfieldLabelId}`;

    return (
      <React.Fragment>
        <div
          {...customProps}
          id={labelId}
          // All of the sub-fields should be grouped together, so that assistive technologies understand their relationship.
          //
          // See also: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role
          role="group"
          ref={this.timeInputContainer}
          className={cx('time-input-container', theme.className)}
          // This field, the subfields, and the focusable controls should have an accessible label and description.
          // These are available but not visible because the consumers of this component should decide how to visually
          // present the label and description based on their use case. For example: an iOS toolbar versus a web-form.
          //
          // See also:
          // - https://www.w3.org/TR/wai-aria-implementation/#mapping_additional_nd
          // - https://www.w3.org/TR/accname-1.1/
          aria-label={label || intl.formatMessage({ id: 'Terra.timeInput.defaultLabel' })}
          aria-describedby={descriptionId}
        >
          <div className={timeInputClassNames}>
            <input
              // Create a hidden input for storing the name and value attributes to use when submitting the form.
              // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
              type="hidden"
              name={name}
              value={timeValue}
            />
            <VisuallyHiddenText
              // These are aria-hidden so that they don't get read and then re-read again due to the aria-labelledby
              // of the component referencing this node.
              aria-hidden
              id={hourLabelId}
              text={intl.formatMessage({
                id: 'Terra.timeInput.hours',
                description: 'Informs the user they must use a two-digit hour value.',
              })}
            />
            <Input
              {...inputAttributes}
              {...hourAttributes}
              aria-labelledby={hourLabelId}
              // aria-labelledby={subFieldAriaLabelledBy(hourLabelId)}
              aria-describedby={hourDescriptionId}
              refCallback={(inputRef) => {
                this.hourInput = inputRef;
                if (refCallback) refCallback(inputRef);
              }}
              className={hourClassNames}
              type="text"
              value={this.state.hour}
              name={'terra-time-hour-'.concat(name)}
              maxLength="2"
              onChange={this.handleHourChange}
              onKeyDown={this.handleHourInputKeyDown}
              onFocus={this.handleHourFocus}
              onBlur={this.handleHourBlur}
              size="2"
              pattern="\d*"
              disabled={disabled}
            />
            <VisuallyHiddenText id={hourDescriptionId} text={intl.formatMessage({ id: 'Terra.timeInput.hourFormat' })} />
            <span
              // Elements like this time spacer should not be read by assistive technologies
              // because they have no meaning when placed in between two sub-fields.
              aria-hidden
              className={cx('time-spacer')}
            >
              {timeSpacer}
            </span>
            <VisuallyHiddenText aria-hidden id={minuteLabelId} text={intl.formatMessage({ id: 'Terra.timeInput.minutes' })} />
            <Input
              {...inputAttributes}
              {...minuteAttributes}
              refCallback={(inputRef) => { this.minuteInput = inputRef; }}
              aria-labelledby={minuteLabelId}
              // aria-labelledby={subFieldAriaLabelledBy(minuteLabelId)}
              aria-describedby={minuteDescriptionId}
              className={minuteClassNames}
              type="text"
              value={this.state.minute}
              name={'terra-time-minute-'.concat(name)}
              maxLength="2"
              onChange={this.handleMinuteChange}
              onKeyDown={this.handleMinuteInputKeyDown}
              onFocus={this.handleMinuteFocus}
              onBlur={this.handleMinuteBlur}
              size="2"
              pattern="\d*"
              disabled={disabled}
            />
            <VisuallyHiddenText id={minuteDescriptionId} text={intl.formatMessage({ id: 'Terra.timeInput.minuteFormat' })} />
            {showSeconds && (
              <React.Fragment>
                <span
                  aria-hidden
                  className={cx('time-spacer')}
                >
                  {timeSpacer}
                </span>
                <VisuallyHiddenText aria-hidden id={secondLabelId} text={intl.formatMessage({ id: 'Terra.timeInput.seconds' })} />
                <Input
                  {...inputAttributes}
                  {...secondAttributes}
                  refCallback={(inputRef) => { this.secondInput = inputRef; }}
                  // aria-labelledby={subFieldAriaLabelledBy(secondLabelId)}
                  aria-labelledby={secondLabelId}
                  aria-describedby={secondDescriptionId}
                  className={secondClassNames}
                  type="text"
                  value={this.state.second}
                  name={'terra-time-second-'.concat(name)}
                  maxLength="2"
                  onChange={this.handleSecondChange}
                  onKeyDown={this.handleSecondInputKeyDown}
                  onFocus={this.handleSecondFocus}
                  onBlur={this.handleSecondBlur}
                  size="2"
                  pattern="\d*"
                  disabled={disabled}
                />
                <VisuallyHiddenText id={secondDescriptionId} text={intl.formatMessage({ id: 'Terra.timeInput.secondFormat' })} />
              </React.Fragment>
            )}
          </div>
          {variantFromLocale === TimeUtil.FORMAT_12_HOUR && (
            <React.Fragment>
              <VisuallyHiddenText aria-hidden id={meridianChoiceId} text={intl.formatMessage({ id: 'Terra.timeInput.meridianChoiceGroup' })} />
              <ButtonGroup
                // These meridiem buttons should be grouped together so that assistive technologies present them as related.
                // For example, screen readers will read a group of buttons as "button group, a.m., one of two".
                // role="group"
                role="radiogroup"
                // aria-labelledby={subFieldAriaLabelledBy(meridianChoiceId)}
                selectedKeys={[this.state.meridiem]}
                onChange={this.handleMeridiemButtonChange}
                className={cx('meridiem-button-group')}
              >
                {/*
                TODO: give the A.M. and P.M. buttons an accessible name that reflects their grouping as part
                of the Time Input, such as "<Time Input's Name> <AM>", to help when there are multiple Time Inputs presented at once.
                 */}
                <ButtonGroup.Button
                  key={this.anteMeridiem}
                  className={anteMeridiemClassNames}
                  text={this.anteMeridiem}
                  onBlur={this.handleMeridiemButtonBlur}
                  onFocus={this.handleMeridiemButtonFocus}
                  isDisabled={disabled}
                  role="radio"
                />
                <ButtonGroup.Button
                  key={this.postMeridiem}
                  className={postMeridiemClassNames}
                  text={this.postMeridiem}
                  onBlur={this.handleMeridiemButtonBlur}
                  onFocus={this.handleMeridiemButtonFocus}
                  isDisabled={disabled}
                  role="radio"
                />
              </ButtonGroup>
            </React.Fragment>
          )}
          {/* <p aria-hidden>
            {showSeconds ? intl.formatMessage({ id: 'Terra.timeInput.timeFormatSecondsLabel' }) : intl.formatMessage({ id: 'Terra.timeInput.timeFormatLabel' })}
          </p> */}
          <TimeInputFullValue
            // This provides a human readable value to users of assistive technologies.
            // It will read the initial value, if any, and then any updated value. The full value is
            // something like "09:22 pm", is localized, and respects the variants.
            id={descriptionId}
            className={cx('format-text')}
            timeInputLabel={label}
            variant={variantFromLocale}
            showSeconds={showSeconds}
            hour={this.state.hour}
            minute={this.state.minute}
            second={this.state.second}
            meridiem={this.state.meridiem}
          />
        </div>
      </React.Fragment>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;
TimeInput.contextType = ThemeContext;

export default injectIntl(TimeInput);
