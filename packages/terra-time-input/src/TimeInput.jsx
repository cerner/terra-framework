import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ButtonGroup from 'terra-button-group';
import { injectIntl } from 'react-intl';
import uuidv4 from 'uuid/v4';
import * as KeyCode from 'keycode-js';
import TimeUtil from './TimeUtil';
import styles from './TimeInput.module.scss';
import Instructions from './_Instructions';
import {
  TWELVE_HOUR_MINUTE,
  TWELVE_HOUR_MINUTE_SECOND,
  TWENTY_FOUR_HOUR_MINUTE,
  TWENTY_FOUR_HOUR_MINUTE_SECOND,
} from './TimeTypes';
import AccessibleInput from './_AccessibleInput';
import TimeSpacer from './_TimeSpacer';
import AccessibleValue from './_AccessibleValue';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Whether the time input should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Prevents screen reader users from hearing instructions on how to use this Time Input. The instructions are never
   * rendered visually.
   *
   * **BEST PRACTICE FOR ACCESSIBILITY**: Only set this prop true on the 2nd, 3rd, etc. Time Inputs on the same view.
   * The idea is you can save screen reader users the annoyance of hearing the same lengthy instructions more than once
   * when the screen reader is reading the entire view. Do not disable instructions on the 1st or only Time Input in the
   * view. Time Input uses some non-standard keyboard controls, so it's important to explain them to the user.
   */
  disableInstructions: PropTypes.bool,
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
   * An identifier used by assistive technologies like screen readers to briefly describe this time input to users.
   * The label is not rendered visually.
   *
   * **BEST PRACTICE FOR ACCESSIBILITY**: you _SHOULD_ set this to match whatever visible label you give in your UI.
   * Currently this is optional for passivity reasons, but it will become mandatory in a future major version.
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
  disableInstructions: false,
  inputAttributes: {},
  isIncomplete: false,
  isInvalid: false,
  isInvalidMeridiem: false,
  minuteAttributes: {},
  hourAttributes: {},
  label: '',
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
      disableInstructions,
      inputAttributes,
      minuteAttributes,
      hourAttributes,
      intl,
      isIncomplete,
      isInvalid,
      isInvalidMeridiem,
      label,
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
      { 'is-invalid': isInvalidMeridiem && this.state.meridiem === this.anteMeridiem },
    ]);

    const postMeridiemClassNames = cx([
      'meridiem-button',
      { 'is-invalid': isInvalidMeridiem && this.state.meridiem === this.postMeridiem },
    ]);

    const variantFromLocale = TimeUtil.getVariantFromLocale(this.props);

    /**
     * Returns an ISO 8601 representation of the state. The representation might be incomplete or invalid.
     */
    const isoValue = () => {
      // Using the state of hour, minute, and second (if shown) create a time in UTC represented in ISO 8601 format.
      let iso = '';

      if (this.state.hour.length > 0 || this.state.minute.length > 0 || (this.state.second.length > 0 && showSeconds)) {
        let hour = parseInt(this.state.hour, 10);
        console.log(`parsed hour: ${hour}`);
        if (variantFromLocale === TimeUtil.FORMAT_12_HOUR && this.state.meridiem === this.postMeridiem) {
          hour += 12;
          console.log(`parsed hour: ${hour}`);
        }

        iso = 'T'.concat(hour, ':', this.state.minute);

        if (showSeconds) {
          iso = iso.concat(':', this.state.second);
        }
      }

      return iso;
    };

    const theme = this.context;

    const timeInputClassNames = classNames(cx(
      { disabled },
      'time-input',
      { 'is-focused': this.state.isFocused },
      { 'is-invalid': isInvalid },
      { 'is-incomplete': (isIncomplete && required && !isInvalid && !isInvalidMeridiem) },
    ),
    customProps.className);

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

    function mask() {
      if (showSeconds) {
        return intl.formatMessage({
          id: 'Terra.timeInput.maskHourMinute',
          defaultMessage: '(hh:mm:ss)',
          description: 'A visual hint that the Time Input expects two-digit hour, minute and second.',
        });
      }
      return intl.formatMessage({
        id: 'Terra.timeInput.maskHourMinuteSecond',
        defaultMessage: '(hh:mm)',
        description: 'Like Terra.timeInput.maskHourMinute but no second.',
      });
    }

    // timeType is used in a couple places to avoid repeating this if ladder when both variant and showSeconds need to
    // be considered.
    function timeType() {
      if (variantFromLocale === TimeUtil.FORMAT_12_HOUR && showSeconds) {
        return TWELVE_HOUR_MINUTE_SECOND;
      }
      if (variantFromLocale === TimeUtil.FORMAT_12_HOUR) {
        return TWELVE_HOUR_MINUTE;
      }
      if (showSeconds) {
        return TWELVE_HOUR_MINUTE_SECOND;
      }
      return TWELVE_HOUR_MINUTE;
    }

    // Thh:mm or Thh:mm:ss
    const isCompleteTime = () => (showSeconds ? isoValue().length === 9 : isoValue().length === 6);

    /**
     * Using the state to create a human-readable representation to be used for screen readers.
     *
     * Returns undefined if the time is incomplete or invalid.
     * */
    const textValue = () => {
      if (!isCompleteTime()) {
        console.log(`incomplete time: ${isoValue()}`);
        return undefined;
      }

      console.log(`complete time: ${isoValue()}`);

      switch (timeType()) {
        case TWELVE_HOUR_MINUTE:
          return intl.formatMessage({
            id: 'Terra.timeInput.textValueTwelveHourMinute',
            defaultMessage: `${this.state.hour}:${this.state.minute} ${this.state.meridiem}`,
            description: 'Human-readable time value in a 12-hour clock with hours and minutes.',
          });
        case TWELVE_HOUR_MINUTE_SECOND:
          return intl.formatMessage({
            id: 'Terra.timeInput.textValueTwelveHourMinuteSecond',
            defaultMessage: `${this.state.hour}:${this.state.minute}:${this.state.second} ${this.state.meridiem}`,
            description: 'Human-readable time value in a 12-hour clock with hours, minutes, and seconds.',
          });
        case TWENTY_FOUR_HOUR_MINUTE:
          return intl.formatMessage({
            id: 'Terra.timeInput.textValueTwentyFourHourMinute',
            defaultMessage: `${this.state.hour}:${this.state.minute}`,
            description: 'Human-readable time value in a 24-hour clock with hours and minutes.',
          });
        case TWENTY_FOUR_HOUR_MINUTE_SECOND:
          return intl.formatMessage({
            id: 'Terra.timeInput.textValueTwentyFourHourMinuteSecond',
            defaultMessage: `${this.state.hour}:${this.state.minute}:${this.state.second}`,
            description: 'Human-readable time value in a 24-hour clock with hours, minutes, and seconds.',
          });
        default:
          throw new Error('Unrecognized TimeType.');
      }
    };

    /**
     * Returns a localized description for the hour input that reflects whether this is a 12 or 24-hour clock.
     *
     * NOTE: the description does not take the place of validation or error messages.
     */
    function hourDescription() {
      if (variantFromLocale === TimeUtil.FORMAT_12_HOUR) {
        return intl.formatMessage({
          id: 'Terra.timeInput.hourDescriptionTwelve',
          defaultMessage: 'A two-digit 12-hour value',
          description: `Explains to screen reader users that the hour field needs a two digit hour. This will be read
          only when a screen reader is enabled. It is never displayed. It will be read when the user has focused on
          the hour input or when the screen reader is reading the page to the user.`,
        });
      }
      return intl.formatMessage({
        id: 'Terra.timeInput.hourDescriptionTwelve',
        defaultMessage: 'A two-digit 24-hour value',
        description: 'Like Terra.timeInput.hourDescriptionTwelve but for a 24-hour clock.',
      });
    }

    return (
      <div
        {...customProps}
        ref={this.timeInputContainer}
        className={cx('time-input-container', theme.className)}
      >
        {/*
        Explaining to screen reader users how to use the Time Input is important, because we're not using a native
        time input like the ones some browsers now support. We present an invisible set of instructions first so that
        the user will hear something like this:

          "Time of Birth group. <instruction text> Time of birth Hours input., ..."

        Hearing the same lengthy instructions several times in the same view can get annoying, so the instructions can
        be disabled for the 2nd and subsequent Time Inputs.

        All of the controls should be presented as a group to assistive technologies. Then, each component also
        has its own specific label as well. If a TimeInput is to be labeled Time of Birth then it would be presented to
        assistive tech. like this:

          Time of Birth (group)
            |--<instructions>
            |--Time of Birth Hours (input)
            |--Minutes (input)
            |--Seconds (input)
            |--AM (toggle button)
            |--PM (toggle button)

        In read mode, and ignoring instructions, values and descriptions for a moment, the screen reader would read
        something like:

          "Time of Birth group. Time of Birth hours input. Minutes input. Seconds input. AM toggle button.
          PM toggle button."

        The first Input in the group has a combination label, 'Time of Birth Hours', so that it's easy to pick out that
        field out of a list of many inputs in the same view when the screen reader is in picker mode. Picker mode lets
        the user can jump to elements in a page. Screen readers tend to present a flat list of inputs without context
        of which Time Input those inputs belong to, like this:

          ==SCREEN READER'S LIST OF FORM INPUTS TO PICK==
          1. Time of Birth Hour
          2. Minute
          3. Second
          4. Time of Death Hour <-- easy to spot the start of the Time of Death input.
          5. Minute

        The AccessibleValue's job is to announce a localized human-readable representation of the time to screen reader
        users. The announcement is only made when the value changes to a valid time. If the Time of Birth started out at
        T14:22 and the user changed the hour from 02 to 03, the value would be T15:22 and the announcer would
        immediately say "Time of birth 3:22 pm."
        */}
        {!disableInstructions && <Instructions timeType={timeType()} />}
        <AccessibleValue
          value={textValue()}
          readThis={intl.formatMessage({
            id: 'Terra.timeInput.textValue',
            defaultMessage: `${label} ${textValue()}`,
            description: `This will be read to screen reader users only when there is a change to a new time. We want to
          give the screen reader user feedback that their change to one of the controls has updated this time.`,
          })}
        />
        <div className={timeInputClassNames} role="group" aria-label={label}>
          <input
            // Create a hidden input for storing the name and value attributes to use when submitting the form.
            // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
            type="hidden"
            name={name}
            value={isoValue()}
          />
          <AccessibleInput
            {...inputAttributes}
            {...hourAttributes}
            label={intl.formatMessage({ id: 'Terra.timeInput.hours' })}
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
            description={hourDescription()}
          />
          <TimeSpacer className={cx('time-spacer')} />
          <AccessibleInput
            {...inputAttributes}
            {...minuteAttributes}
            refCallback={(inputRef) => { this.minuteInput = inputRef; }}
            label={intl.formatMessage({ id: 'Terra.timeInput.minutes' })}
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
            description={intl.formatMessage({
              id: 'Terra.timeInput.descriptionMinute',
              defaultMessage: 'A two-digit minute.',
              description: 'Like the hour descriptions, but for the minute input.',
            })}
          />
          {showSeconds && (
            <React.Fragment>
              <TimeSpacer className={cx('time-spacer')} />
              <AccessibleInput
                {...inputAttributes}
                {...secondAttributes}
                refCallback={(inputRef) => { this.secondInput = inputRef; }}
                label={intl.formatMessage({ id: 'Terra.timeInput.seconds' })}
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
                description={intl.formatMessage({
                  id: 'Terra.timeInput.descriptionSecond',
                  defaultMessage: 'A two-digit second.',
                  description: 'Like the hour descriptions, but for the second input.',
                })}
              />
            </React.Fragment>
          )}
        </div>
        {variantFromLocale === TimeUtil.FORMAT_12_HOUR && (
          // TODO: consume https://github.com/cerner/terra-core/pull/3535 so that the am/pm controls present as toggle buttons to screen reader users.
          <ButtonGroup selectedKeys={[this.state.meridiem]} onChange={this.handleMeridiemButtonChange} className={cx('meridiem-button-group')}>
            <ButtonGroup.Button
              key={this.anteMeridiem}
              className={anteMeridiemClassNames}
              text={this.anteMeridiem}
              onBlur={this.handleMeridiemButtonBlur}
              onFocus={this.handleMeridiemButtonFocus}
              isDisabled={disabled}
            />
            <ButtonGroup.Button
              key={this.postMeridiem}
              className={postMeridiemClassNames}
              text={this.postMeridiem}
              onBlur={this.handleMeridiemButtonBlur}
              onFocus={this.handleMeridiemButtonFocus}
              isDisabled={disabled}
            />
          </ButtonGroup>
        )}
        {/*
        Screen readers should not read this because it will not make sense, and screen reader users already got special
        instructions including format information.
        */}
        <p aria-hidden className={cx('format-text')}>{mask()}</p>
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;
TimeInput.contextType = ThemeContext;

export default injectIntl(TimeInput);
