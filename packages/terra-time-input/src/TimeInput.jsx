import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ButtonGroup from 'terra-button-group';
import { injectIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';

import * as KeyCode from 'keycode-js';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import TimeUtil from './TimeUtil';
import styles from './TimeInput.module.scss';

import AccessibleInput from './_AccessibleInput';
import TimeSpacer from './_TimeSpacer';
import AccessibleValue from './_AccessibleValue';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * An identifier used by assistive technologies like screen readers to briefly describe this time input to users.
   * The label is not rendered visually.
   *
   * **BEST PRACTICE FOR ACCESSIBILITY**: you _SHOULD_ set this to match whatever visible label you give in your UI.
   * Currently this is optional for passivity reasons, but it will become mandatory in a future major version.
   */
  a11yLabel: PropTypes.string,
  /**
  * @private
  * boolean saying that date associated with time is at max date
  * */
  atMaxDate: PropTypes.bool,
  /**
  * @private
  * boolean saying that date associated with time is at min date
  * */
  atMinDate: PropTypes.bool,
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
  atMaxDate: false,
  atMinDate: false,
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
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
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
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.setTime = this.setTime.bind(this);
    this.visuallyHiddenComponent = null;
    this.handleInvalidInputChange = this.handleInvalidInputChange.bind(this);
    this.setVisuallyHiddenComponent = this.setVisuallyHiddenComponent.bind(this);

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
      atMaxDate: this.props.atMaxDate,
      atMinDate: this.props.atMinDate,
    });
  }

  handleInvalidInputChange = () => {
    if (this.visuallyHiddenComponent) {
      this.visuallyHiddenComponent.innerText = this.props.intl.formatMessage({ id: 'Terra.timeInput.invalidTime' });
    }
  };

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
      this.handleInvalidInputChange();
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
      this.handleInvalidInputChange();
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
      this.handleInvalidInputChange();
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

  handleInputKeyDown(event, inputType) {
    let {
      hour,
      minute,
      second,
      meridiem,
    } = this.state;
    const variant = TimeUtil.getVariantFromLocale(this.props);

    if (event.key === 'n' || event.key === 'N') {
      const currentTime = this.getCurrentTime();
      this.setTime(event, currentTime.hour, currentTime.minute, currentTime.second, currentTime.meridiem);
      return;
    }

    if ((event.key === '-' || event.key === '_') && !this.props.atMinDate) {
      const currentTimeValue = this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : '');
      if (TimeUtil.validateTime(currentTimeValue, this.props.showSeconds)) {
        if (inputType === 3 && this.props.showSeconds) {
          if ((second === '0' || second === '00')) {
            second = '59';
            if (minute === '0' || minute === '00') {
              minute = '59';
              if (hour === '0' || hour === '00') {
                hour = '23';
              } else {
                if (variant === TimeUtil.FORMAT_12_HOUR && hour === '12') {
                  if (meridiem === this.anteMeridiem) {
                    meridiem = this.postMeridiem;
                  } else {
                    meridiem = this.anteMeridiem;
                  }
                }
                hour = TimeUtil.decrementHour(hour, variant);
              }
            } else {
              minute = TimeUtil.decrementMinute(minute);
            }
          } else {
            second = TimeUtil.decrementSecond(second);
          }
        } else if (inputType === 1) {
          if (minute === '0' || minute === '00') {
            minute = '59';
            if (hour === '0' || hour === '00') {
              hour = '23';
            } else {
              if (variant === TimeUtil.FORMAT_12_HOUR && hour === '12') {
                if (meridiem === this.anteMeridiem) {
                  meridiem = this.postMeridiem;
                } else {
                  meridiem = this.anteMeridiem;
                }
              }
              hour = TimeUtil.decrementHour(hour, variant);
            }
          } else {
            minute = TimeUtil.decrementMinute(minute);
          }
        } else if (inputType === 0) {
          if (hour === '0' || hour === '00') {
            hour = '23';
          } else {
            if (variant === TimeUtil.FORMAT_12_HOUR && hour === '12') {
              if (meridiem === this.anteMeridiem) {
                meridiem = this.postMeridiem;
              } else {
                meridiem = this.anteMeridiem;
              }
            }
            hour = TimeUtil.decrementHour(hour, variant);
          }
        }
        this.setTime(event, hour, minute, second, meridiem);
      } else {
        const currentTime = this.getCurrentTime();
        let formatHour = currentTime.hour;
        let formatMinute = currentTime.minute;
        let formatMeridiem = currentTime.meridiem;
        if (inputType === 1) {
          if (formatMinute === '0' || formatMinute === '00') {
            formatMinute = '59';
            if (formatHour === '0' || formatHour === '00') {
              formatHour = '23';
            } else {
              if (variant === TimeUtil.FORMAT_12_HOUR && formatHour === '12') {
                if (formatMeridiem === this.anteMeridiem) {
                  formatMeridiem = this.postMeridiem;
                } else {
                  formatMeridiem = this.anteMeridiem;
                }
              }
              formatHour = TimeUtil.decrementHour(formatHour, variant);
            }
          } else {
            formatMinute = TimeUtil.decrementMinute(formatMinute);
          }
        } else if (inputType === 0) {
          if (formatHour === '0' || formatHour === '00') {
            formatHour = '23';
          } else {
            if (variant === TimeUtil.FORMAT_12_HOUR && formatHour === '12') {
              if (formatMeridiem === this.anteMeridiem) {
                formatMeridiem = this.postMeridiem;
              } else {
                formatMeridiem = this.anteMeridiem;
              }
            }
            formatHour = TimeUtil.decrementHour(formatHour, variant);
          }
        }
        this.setTime(event, formatHour, formatMinute, currentTime.second, formatMeridiem);
      }
      return;
    }

    if ((event.key === '=' || event.key === '+') && !this.props.atMaxDate) {
      const currentTimeValue = this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : '');
      if (TimeUtil.validateTime(currentTimeValue, this.props.showSeconds)) {
        if (inputType === 3 && this.props.showSeconds) {
          if (second === '59') {
            second = '00';
            if (minute === '59') {
              minute = '00';
              if (hour === '23') {
                hour = '00';
              } else {
                if (variant === TimeUtil.FORMAT_12_HOUR && hour === '11') {
                  if (meridiem === this.anteMeridiem) {
                    meridiem = this.postMeridiem;
                  } else {
                    meridiem = this.anteMeridiem;
                  }
                }
                hour = TimeUtil.incrementHour(hour, variant);
              }
            } else {
              minute = TimeUtil.incrementMinute(minute);
            }
          } else {
            second = TimeUtil.incrementSecond(second);
          }
        } else if (inputType === 1) {
          if (minute === '59') {
            minute = '00';
            if (hour === '23') {
              hour = '00';
            } else {
              if (variant === TimeUtil.FORMAT_12_HOUR && hour === '11') {
                if (meridiem === this.anteMeridiem) {
                  meridiem = this.postMeridiem;
                } else {
                  meridiem = this.anteMeridiem;
                }
              }
              hour = TimeUtil.incrementHour(hour, variant);
            }
          } else {
            minute = TimeUtil.incrementMinute(minute);
          }
        } else if (inputType === 0) {
          if (hour === '23') {
            hour = '00';
          } else {
            if (variant === TimeUtil.FORMAT_12_HOUR && hour === '11') {
              if (meridiem === this.anteMeridiem) {
                meridiem = this.postMeridiem;
              } else {
                meridiem = this.anteMeridiem;
              }
            }
            hour = TimeUtil.incrementHour(hour, variant);
          }
        }
        this.setTime(event, hour, minute, second, meridiem);
      } else {
        const currentTime = this.getCurrentTime();
        let formatHour = currentTime.hour;
        let formatMinute = currentTime.minute;
        let formatMeridiem = currentTime.meridiem;
        if (inputType === 1) {
          if (currentTime.minute === '59') {
            formatMinute = '00';
            if (formatHour === '23') {
              formatHour = '00';
            } else {
              if (variant === TimeUtil.FORMAT_12_HOUR && formatHour === '11') {
                if (formatMeridiem === this.anteMeridiem) {
                  formatMeridiem = this.postMeridiem;
                } else {
                  formatMeridiem = this.anteMeridiem;
                }
              }
              formatHour = TimeUtil.incrementHour(formatHour, variant);
            }
          } else {
            formatMinute = TimeUtil.incrementMinute(formatMinute);
          }
        } else if (inputType === 0) {
          if (formatHour === '23') {
            formatHour = '00';
          } else {
            if (variant === TimeUtil.FORMAT_12_HOUR && formatHour === '11') {
              if (formatMeridiem === this.anteMeridiem) {
                formatMeridiem = this.postMeridiem;
              } else {
                formatMeridiem = this.anteMeridiem;
              }
            }
            formatHour = TimeUtil.incrementHour(formatHour, variant);
          }
        }
        this.setTime(event, formatHour, formatMinute, currentTime.second, formatMeridiem);
      }
      return;
    }

    if ((event.key === 'a' || event.key === 'A') && variant === TimeUtil.FORMAT_12_HOUR) {
      const currentTimeValue = this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : '');
      meridiem = this.anteMeridiem;
      if (TimeUtil.validateTime(currentTimeValue, this.props.showSeconds)) {
        this.handleValueChange(event, TimeUtil.inputType.HOUR, hour.toString(), meridiem);
      } else {
        this.setTime(event, '12', '00', '00', meridiem);
      }
      return;
    }

    if ((event.key === 'p' || event.key === 'P') && variant === TimeUtil.FORMAT_12_HOUR) {
      const currentTimeValue = this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : '');
      meridiem = this.postMeridiem;
      if (TimeUtil.validateTime(currentTimeValue, this.props.showSeconds)) {
        this.handleValueChange(event, TimeUtil.inputType.HOUR, hour.toString(), meridiem);
      } else {
        this.setTime(event, '12', '00', '00', meridiem);
      }
      return;
    }

    if (inputType === TimeUtil.inputType.HOUR) {
      this.handleHourInputKeyDown(event);
    } else if (inputType === TimeUtil.inputType.MINUTE) {
      this.handleMinuteInputKeyDown(event);
    } else {
      this.handleSecondInputKeyDown(event);
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
        this.props.onChange(event, this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : ''), meridiem);
      }
    }
  }

  handleMeridiemButtonChange(event, selectedKey) {
    this.handleValueChange(event, TimeUtil.inputType.HOUR, this.state.hour.toString(), selectedKey);
  }

  setVisuallyHiddenComponent = (node) => {
    this.visuallyHiddenComponent = node;
  };

  get a11yLabel() {
    const { a11yLabel, intl } = this.props;
    /**
     * description: For situations where the consumer has not provided a a11yLabel: This will be read by screen
     * readers as the reader moves into the group of inputs. It is intended to help the user understand "you are about
     * to enter a section of the page where many different inputs all work together for this one concept of time. It is
     * also used as part of many other localized messages.
     */
    return a11yLabel || intl.formatMessage({ id: 'Terra.timeInput.a11yLabelDefault' });
  }

  getCurrentTime() {
    const date = new Date();
    // prepend a 0 to single digit values in minute, second, and hours
    const minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const second = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
    let hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let meridiem = '';
    if (TimeUtil.getVariantFromLocale(this.props) === TimeUtil.FORMAT_12_HOUR) {
      const parsedHour = TimeUtil.parseTwelveHourTime(hour, this.anteMeridiem, this.postMeridiem);
      hour = parsedHour.hourString;
      meridiem = parsedHour.meridiem;
    }
    const currentTime = {
      minute,
      second,
      hour,
      meridiem,
    };

    return currentTime;
  }

  setTime(event, hour, minute, second, meridiem) {
    this.setState({
      hour,
      meridiem,
      hourInitialFocused: false,
      minute,
      minuteInitialFocused: false,
      second,
      secondInitialFocused: false,
    });
    if (this.props.onChange) {
      this.props.onChange(event, this.formatHour(hour, meridiem).concat(':', minute).concat(this.props.showSeconds ? ':'.concat(second) : ''), meridiem);
    }
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
      a11yLabel,
      atMaxDate,
      atMinDate,
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

    /**
     * Get the mask string to place under the time input fields.
     * @returns {String} a visual hint of the time format, like 'hh:mm'.
     */
    function mask() {
      if (showSeconds) {
        // description: A visual hint that the Time Input expects two-digit hour, minute and second.
        return intl.formatMessage({ id: 'Terra.timeInput.maskHourMinuteSecond' });
      }
      // description: Like Terra.timeInput.maskHourMinuteSecond but no second.,
      return intl.formatMessage({ id: 'Terra.timeInput.maskHourMinute' });
    }
    /**
     * Get the description for the hour field.
     *
     * NOTE: the description does not take the place of validation or error messages.
     * @returns {String} a description of the hour field, intended to be read to screen reader users.
     */
    function hourDescription() {
      if (variantFromLocale === TimeUtil.FORMAT_12_HOUR) {
        /**
         * description: Explains to screen reader users that the hour field needs a two digit hour. This will be read
         * only when a screen reader is enabled. It is never displayed. It will be read when the user has focused on
         * the hour input or when the screen reader is reading the page to the user.
         */
        return intl.formatMessage({ id: 'Terra.timeInput.hourDescriptionTwelve' });
      }
      // description: Like Terra.timeInput.hourDescriptionTwelve but for a 24-hour clock.
      return intl.formatMessage({ id: 'Terra.timeInput.hourDescriptionTwentyFour' });
    }

    // Fan out some component-level props into input-level a11y attributes. See the big comment below for more info.
    inputAttributes.isInvalid = isInvalid;
    inputAttributes.disabled = disabled;
    inputAttributes.required = required;

    const a11yTimeValue = TimeUtil.getA11YTimeValue(this.props, this.state, this.postMeridiem);
    const hotKeyDescription = intl.formatMessage({ id: 'Terra.timePicker.hotKey' });
    const minuteDescription = intl.formatMessage({ id: 'Terra.timeInput.descriptionMinute' });
    const secondDescription = intl.formatMessage({ id: 'Terra.timeInput.descriptionSecond' });

    return (
      <div
        {...customProps}
        ref={this.timeInputContainer}
        className={cx('time-input-container', theme.className)}
      >
        <div className={timeInputClassNames} role="group" aria-label={this.a11yLabel}>
          {/*
          "Time of Birth group. Time of birth Hours input., ..."
        All of the controls should be presented as a group to assistive technologies. Then, each component also
        has its own specific label as well. If a TimeInput is to be labeled Time of Birth then it would be presented to
        assistive tech. like this:
          Time of Birth (group)
            |--Time of Birth Hours (input)
            |--Minutes (input)
            |--Seconds (input)
            |--AM (toggle button)
            |--PM (toggle button)
        In read mode, and ignoring values and descriptions for a moment, the screen reader would read
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
        To remain passive, the a11yLabel is optional. If a consumer doesn't supply a a11yLabel like 'Time of Birth'
        then the best we can do is say "hour" and we have this scenario:
          ==SCREEN READER'S LIST OF FORM INPUTS TO PICK==
          1. Hour
          2. Minute
          3. Second
          4. Hour <-- Confusing which hour/minute is which because there is no a11yLabel.
          5. Minute
        The AccessibleValue's job is to announce a localized human-readable representation of the time to screen reader
        users. The announcement is only made when the value changes to a valid time. If the Time of Birth started out at
        T14:22 and the user changed the hour from 02 to 03, the value would be T15:22 and the announcer would
        immediately say "Time of birth 3:22 pm." or just "3:22 pm" if no a11yLabel is provided.
        It's important to give screen reader users an indication if the Time Input is disabled, incomplete or invalid
        just as we do for visual users. Since the isInvalid and required flags are component-wide but
        aria-invalid/required are for inputs, we must mark all inputs the same. It's not perfect but it gives better
        information than nothing.
        Unanswered questions:
        1 - why does it mean to have an invalid meridiem? Why is that possible? It is not supported by Aria or HTML to indicate a button is "invalid".
        2 - why won't the mobile invalid and mobile incomplete tests read the inputs as invalid or incomplete? The voiceOver rotor and the accessibility panel both show them correctly as incomplete or invalid, just the read-mode is wrong. This problem doesn't happen on the normal incomplete/invalid tests. I was testing on macOS the entire time.
          */}
          <AccessibleValue
            value={a11yTimeValue}
            /**
             * description: This will be read to screen reader users only textValue changes to a new time. We want to
             * give the screen reader user feedback that their change to one of the controls has updated this time.
             */
            readThis={intl.formatMessage({ id: 'Terra.timeInput.labeledTextValue' },
              { a11yLabel: this.a11yLabel, a11yTimeValue })}
          />
          <input
            // Create a hidden input for storing the name and value attributes to use when submitting the form.
            // The value will be sort of like, but not strictly, an ISO 8601 value's time component.
            type="hidden"
            name={name}
            value={timeValue}
          />
          <AccessibleInput
            {...inputAttributes}
            {...hourAttributes}
            /**
             * If the entire Time Input isInvalid, then pass isInvalid into each wrapped input, so that the screen
             * reader users will get an indication that something is invalid. It's not perfect because both inputs will
             * be marked invalid even though it's the combination of both that is really the problem. For example,
             * 09:88 is a valid hour and an invalid minute, but both hour and minute will be marked invalid.
             *
             * description: The label that will only be read to screen readers. It is prefixed with the time input's
             * name e.g. 'Time of Birth', so that screen reader users can pick this specific hour field out of a list
             * of many hour fields on the same page. The minute and second screen reader labels won't contain the name
             * because they will always follow their labeled hour field. We didn't want to say the a11yLabel too many
             * times.
             */
            label={intl.formatMessage({ id: 'Terra.timeInput.hourLabel' }, { a11yLabel: this.a11yLabel })}
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
            onKeyDown={(e) => this.handleInputKeyDown(e, TimeUtil.inputType.HOUR)}
            onFocus={this.handleHourFocus}
            onBlur={this.handleHourBlur}
            size="2"
            pattern="\d*"
            description={`${hourDescription()}, ${hotKeyDescription}`}
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
            onKeyDown={(e) => this.handleInputKeyDown(e, TimeUtil.inputType.MINUTE)}
            onFocus={this.handleMinuteFocus}
            onBlur={this.handleMinuteBlur}
            size="2"
            pattern="\d*"
            // description: Like the hour descriptions, but for the minute input.
            description={`${minuteDescription}, ${hotKeyDescription}`}
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
              onKeyDown={(e) => this.handleInputKeyDown(e, TimeUtil.inputType.SECOND)}
              onFocus={this.handleSecondFocus}
              onBlur={this.handleSecondBlur}
              size="2"
              pattern="\d*"
              // description: Like the hour descriptions, but for the second input.
              description={`${secondDescription}, ${hotKeyDescription}`}
            />
          </React.Fragment>
          )}
        </div>
        {variantFromLocale === TimeUtil.FORMAT_12_HOUR && (
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
        Screen readers should not read this because it will not make sense.
        */}
        <div aria-hidden className={cx('format-text')}>{mask()}</div>
        <VisuallyHiddenText
          aria-atomic="true"
          aria-relevant="all"
          aria-live="assertive"
          refCallback={this.setVisuallyHiddenComponent}
        />
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;
TimeInput.contextType = ThemeContext;

export default injectIntl(TimeInput);
