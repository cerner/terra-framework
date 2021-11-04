import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ButtonGroup from 'terra-button-group';
import { injectIntl } from 'react-intl';
import uuidv4 from 'uuid/v4';

import * as KeyCode from 'keycode-js';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import TimeUtil from './TimeUtil';
import styles from './TimeInput.module.scss';

import AccessibleValue from './_AccessibleValue';
import TimeSpacer from './_TimeSpacer';
import A11yInputWrapper from './_A11yInputWrapper';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * WE HIGHLY RECOMMNEDED you set this prop to match the label of this TimeInput, though it is optional for passivity. By setting this prop, you'll be increasing accessibility for end-users of assistive technologies such as screen readers or braille keyboards.
   *
   * Places this prop shows up include:
   * - Assistive technology (AT) users will hear (and see/feel/etc.) this prop when the time value is presented or updated.
   * - AT users will hear this prop when picking from a menu of the hour, minute, etc. inputs to view or edit out.
   * - Speech input user can speak this prop as part of requesting to view or edit one the time.
   *
   * This prop never appears visually. It only appears to users of AT.
   */
  a11yLabel: PropTypes.string,
  /**
   * Whether the time input should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * WE HIGHLY RECOMMEND you do not set this prop unless you are presenting several TimeInputs together. The TimeInput control has special keyboard controls that must be explained to users of AT. If you have several TimeInputs together, consider setting this value on the 2nd, 3rd, etc. Time Inputs to spare AT users from hearing a repeat of the Time Input instructions.
   */
  disableA11YInstructions: PropTypes.bool,
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
  disableA11YInstructions: false,
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
    this.handleMeridiemKeyDown = this.handleMeridiemKeyDown.bind(this);
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
      this.am = this.props.intl.formatMessage({ id: 'Terra.timeInput.am' });
      this.pm = this.props.intl.formatMessage({ id: 'Terra.timeInput.pm' });

      if (hour) {
        const parsedHour = TimeUtil.parseTwelveHourTime(hour, this.am, this.pm);
        hour = parsedHour.hourString;
        meridiem = parsedHour.meridiem;
      } else {
        meridiem = this.am;
      }
    }
    if (this.props.variant === TimeUtil.FORMAT_12_HOUR && TimeUtil.getVariantFromLocale(props) === TimeUtil.FORMAT_24_HOUR) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('This locale only uses 24 hour clock. The ante meridiem and post meridiem will not be displayed');
      }
      this.am = '';
      this.pm = '';
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
      this.am = this.props.intl.formatMessage({ id: 'Terra.timeInput.am' });
      this.pm = this.props.intl.formatMessage({ id: 'Terra.timeInput.pm' });

      if (hour) {
        const parsedHour = TimeUtil.parseTwelveHourTime(hour, this.am, this.pm);
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
        if (meridiem === this.pm || !previousStateValue) {
          meridiem = this.am;
        } else {
          meridiem = this.pm;
        }
      }
    }

    if (event.keyCode === KeyCode.KEY_DOWN) {
      stateValue = TimeUtil.decrementHour(stateValue, variant);

      // Hitting 11 when incrementing down changes the meridiem
      if (variant === TimeUtil.FORMAT_12_HOUR && stateValue === '11') {
        meridiem = meridiem === this.pm ? this.am : this.pm;
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

  /**
   * Make the meridiem buttons behave like a radio button group. UP and LEFT
   * select AM, while DOWN and RIGHT select PM.
   */
  handleMeridiemKeyDown(event) {
    if ([KeyCode.KEY_UP, KeyCode.KEY_LEFT].includes(event.keyCode)) {
      if (this.state.meridiem === this.pm) {
        this.handleValueChange(event, TimeUtil.inputType.MERIDIEM, '', this.am);
        this.anteMeridiemButton.focus();
      }
    } else if ([KeyCode.KEY_DOWN, KeyCode.KEY_RIGHT].includes(event.keyCode)) {
      if (this.state.meridiem === this.am) {
        this.handleValueChange(event, TimeUtil.inputType.MERIDIEM, '', this.pm);
        this.postMeridiemButton.focus();
      }
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
    } else if (type === TimeUtil.inputType.SECOND) {
      this.setState({
        second: timeValue,
        secondInitialFocused: false,
      }, moveFocusOnChange);
    } else if (type === TimeUtil.inputType.MERIDIEM) {
      this.setState({
        meridiem,
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
      if (meridiem === this.pm && tempHour < 12) {
        tempHour += 12;
      } else if (meridiem === this.am && tempHour === 12) {
        tempHour = 0;
      }
    }

    let hourString = tempHour.toString();

    if (hourString.length < 2) {
      hourString = '0'.concat(hourString);
    }

    return hourString;
  }

  // Returns true if a time is fully specified.
  completeTime() {
    if (this.state.hour.length < 2 || this.state.minute.length < 2) {
      return false;
    }
    if (this.props.showSeconds && this.state.second.length < 2) {
      return false;
    }
    return true;
  }

  a11yInstructions() {
    const { variant, showSeconds, intl } = this.props;
    if (variant === TimeUtil.FORMAT_12_HOUR && showSeconds) {
      return intl.formatMessage({ id: 'Terra.timeInput.instructionsHourMinuteSecond12' });
    }
    if (variant === TimeUtil.FORMAT_12_HOUR) {
      return intl.formatMessage({ id: 'Terra.timeInput.instructionsHourMinute12' });
    }
    if (variant === TimeUtil.FORMAT_24_HOUR && showSeconds) {
      return intl.formatMessage({ id: 'Terra.timeInput.instructionsHourMinuteSecond24' });
    }
    return intl.formatMessage({ id: 'Terra.timeInput.instructionsHourMinute24' });
  }

  a11yValue() {
    const {
      a11yLabel, variant, showSeconds, intl,
    } = this.props;

    if (!this.completeTime()) {
      return undefined;
    }
    if (variant === TimeUtil.FORMAT_12_HOUR && showSeconds) {
      return intl.formatMessage({ id: 'Terra.timeInput.statusHourMinuteSecond12' }, {
        a11yLabel,
        hour: this.state.hour,
        minute: this.state.minute,
        second: this.state.second,
        meridiem: this.state.meridiem,
      });
    }
    if (variant === TimeUtil.FORMAT_12_HOUR) {
      return intl.formatMessage({ id: 'Terra.timeInput.statusHourMinute12' }, {
        a11yLabel,
        hour: this.state.hour,
        minute: this.state.minute,
        meridiem: this.state.meridiem,
      });
    }
    if (variant === TimeUtil.FORMAT_24_HOUR && showSeconds) {
      return intl.formatMessage({ id: 'Terra.timeInput.statusHourMinuteSecond24' }, {
        a11yLabel,
        hour: this.state.hour,
        minute: this.state.minute,
        second: this.state.second,
      });
    }
    return intl.formatMessage({ id: 'Terra.timeInput.statusHourMinute24' }, {
      a11yLabel,
      hour: this.state.hour,
      minute: this.state.minute,
    });
  }

  render() {
    const {
      a11yLabel,
      disabled,
      disableA11YInstructions,
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
      { 'is-invalid': isInvalidMeridiem && this.state.meridiem === this.am },
    ]);

    const postMeridiemClassNames = cx([
      'meridiem-button',
      { 'is-invalid': isInvalidMeridiem && this.state.meridiem === this.pm },
    ]);

    const variantFromLocale = TimeUtil.getVariantFromLocale(this.props);

    // Using the state of hour, minute, and second (if shown) create a time in UTC represented in ISO 8601 format.
    let timeValue = '';

    if (this.state.hour.length > 0 || this.state.minute.length > 0 || (this.state.second.length > 0 && showSeconds)) {
      let hour = parseInt(this.state.hour, 10);

      if (variantFromLocale === TimeUtil.FORMAT_12_HOUR && this.state.meridiem === this.pm) {
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

    return (
      <>
        {!disableA11YInstructions && (<VisuallyHiddenText text={this.a11yInstructions()} />)}
        <div
          {...customProps}
          ref={this.timeInputContainer}
          className={cx('time-input-container', theme.className)}
        >
          <div className={timeInputClassNames}>
            <input
              // Create a hidden input for storing the name and value attributes to use when submitting the form.
              // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
              type="hidden"
              name={name}
              value={timeValue}
            />
            <A11yInputWrapper
              {...inputAttributes}
              {...hourAttributes}
              value={this.state.hour}
              label={intl.formatMessage({ id: 'Terra.timeInput.hourInputLabel' }, { a11yLabel })}
              labelId={`hour-input-label-${this.uuid}`}
              description={variantFromLocale === TimeUtil.FORMAT_12_HOUR ? intl.formatMessage({ id: 'Terra.timeInput.hourInputDescription12' }) : intl.formatMessage({ id: 'Terra.timeInput.hourInputDescription24' })}
              descriptionId={`hour-description-${this.uuid}`}
              refCallback={(inputRef) => {
                this.hourInput = inputRef;
                if (refCallback) refCallback(inputRef);
              }}
              className={hourClassNames}
              type="text"
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
            <TimeSpacer />
            <A11yInputWrapper
              {...inputAttributes}
              {...minuteAttributes}
              value={this.state.minute}
              label={intl.formatMessage({ id: 'Terra.timeInput.minuteInputLabel' })}
              labelId={`minute-input-label-${this.uuid}`}
              description={intl.formatMessage({ id: 'Terra.timeInput.minuteInputDescription' })}
              descriptionId={`minute-description-${this.uuid}`}
              refCallback={(inputRef) => { this.minuteInput = inputRef; }}
              className={minuteClassNames}
              type="text"
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
            {showSeconds && (
              <>
                <TimeSpacer />
                <A11yInputWrapper
                  {...inputAttributes}
                  {...secondAttributes}
                  value={this.state.second}
                  label={intl.formatMessage({ id: 'Terra.timeInput.secondInputLabel' })}
                  labelId={`second-input-label-${this.uuid}`}
                  description={intl.formatMessage({ id: 'Terra.timeInput.secondInputDescription' })}
                  descriptionId={`second-input-description-${this.uuid}`}
                  refCallback={(inputRef) => { this.secondInput = inputRef; }}
                  className={secondClassNames}
                  type="text"
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
              </>
            )}
          </div>
          {variantFromLocale === TimeUtil.FORMAT_12_HOUR && (
            <>
              <ButtonGroup
                role="radiogroup"
                selectedKeys={[this.state.meridiem]}
                onChange={this.handleMeridiemButtonChange}
                className={cx('meridiem-button-group')}
              >
                <ButtonGroup.Button
                  refCallback={(inputRef) => { this.anteMeridiemButton = inputRef; }}
                  role="radio"
                  aria-checked={this.state.meridiem === this.am}
                  tabIndex={this.state.meridiem === this.am ? '0' : '-1'}
                  key={this.am}
                  className={anteMeridiemClassNames}
                  text={this.am}
                  onBlur={this.handleMeridiemButtonBlur}
                  onFocus={this.handleMeridiemButtonFocus}
                  isDisabled={disabled}
                  onKeyDown={this.handleMeridiemKeyDown}
                />
                <ButtonGroup.Button
                  refCallback={(inputRef) => { this.postMeridiemButton = inputRef; }}
                  role="radio"
                  aria-checked={this.state.meridiem === this.pm}
                  tabIndex={this.state.meridiem === this.pm ? '0' : '-1'}
                  key={this.pm}
                  className={postMeridiemClassNames}
                  text={this.pm}
                  onBlur={this.handleMeridiemButtonBlur}
                  onFocus={this.handleMeridiemButtonFocus}
                  isDisabled={disabled}
                  onKeyDown={this.handleMeridiemKeyDown}
                />
              </ButtonGroup>
            </>
          )}
          <p aria-hidden>
            {showSeconds ? intl.formatMessage({ id: 'Terra.timeInput.descriptionHourMinuteSecond' }) : intl.formatMessage({ id: 'Terra.timeInput.descriptionHourMinute' })}
          </p>
          <AccessibleValue value={this.a11yValue()} />
        </div>
      </>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;
TimeInput.contextType = ThemeContext;

export default injectIntl(TimeInput);
