import Hour from './_Hour';
import Minute from './_Minute';
import Second from './_Second';

class TimeUtil {
  /**
   * Determines if a provided numeric input value is valid.
   * Valid inputs are either empty strings or numeric.
   * @param {String} value Value to validate
   * @return True if the value is empty or numeric, false otherwise.
   */
  static validNumericInput(value) {
    return value.length === 0 || /^\d+$/.test(value);
  }

  /**
   * Finds the equivalent twelve hour time and meridiem for a given hour, anteMeridiem, and postMeridiem
   * @param {String} hour Hour to parse.
   * @param {String} anteMeridiem String representation of the anteMeridiem.
   * @param {String} postMeridiem String representation of the postMeridiem.
   * @return {{hourString: string, meridiem: string}} Hour and meridiem associated to the passed in variables.
   *   Hour will be in 2 digit format.
   */
  static parseTwelveHourTime(hour, anteMeridiem, postMeridiem) {
    const parsedHour = { hourString: hour };
    let numericHour = parseInt(hour, 10);

    if (numericHour >= 12) {
      parsedHour.meridiem = postMeridiem;

      if (numericHour > 12) {
        numericHour -= 12;
      }
    } else {
      parsedHour.meridiem = anteMeridiem;

      if (numericHour === 0) {
        numericHour = 12;
      }
    }

    if (numericHour < 10) {
      parsedHour.hourString = '0'.concat(numericHour.toString());
    } else {
      parsedHour.hourString = numericHour.toString();
    }

    return parsedHour;
  }

  /**
   * Increments an hour to it's next value. Resets to 01 if the passed in hour is 12 and the variant is a 12 hour clock.
   * @param {String} hour Hour to increment
   * @param {String} timeVariant Variant of time the passed in hour refers to.
   * @return {String} Returns a string representation of the value of an hour after it's incremented. If the
   *   hour is 01 and the timeVariant is 12, it returns 01.
   */
  static incrementHour(hour, timeVariant) {
    const maxValue = timeVariant === this.FORMAT_12_HOUR ? 12 : 23;

    // Increment the value by 1 when arrow up is pressed.
    if (hour) {
      let numericHour = Number(hour);

      if (numericHour < maxValue) {
        numericHour += 1;
        return numericHour < 10 ? '0'.concat(numericHour.toString()) : numericHour.toString();
      } if (timeVariant === this.FORMAT_12_HOUR) {
        return '01';
      }

      return hour;
    }

    return timeVariant === this.FORMAT_12_HOUR ? '12' : '00';
  }

  /**
   * Decrements an hour to it's next value. Resets to 12 if the passed in hour is 01 and the variant is a 12 hour clock.
   * @param {String} hour Hour to decrement
   * @param {String} timeVariant Variant of time the passed in hour refers to.
   * @return {String} Returns a string representation of the value of the an hour after it's decremented. If the
   *   hour is 12 and the timeVariant is 12, it returns 12.
   */
  static decrementHour(hour, timeVariant) {
    const minValue = timeVariant === this.FORMAT_12_HOUR ? 1 : 0;

    if (hour) {
      let numericHour = Number(hour);

      if (numericHour > minValue) {
        numericHour -= 1;
        return numericHour < 10 ? '0'.concat(numericHour.toString()) : numericHour.toString();
      } if (timeVariant === this.FORMAT_12_HOUR) {
        return '12';
      }

      return hour;
    }

    return timeVariant === this.FORMAT_12_HOUR ? '12' : '00';
  }

  /**
   * Increments a minute to it's next value
   * @param {String} minute Minute to increment
   * @return {String} Returns a string representation of the value of the passed in minute after it's incremented
   */
  static incrementMinute(minute) {
    if (minute) {
      let numericMinute = Number(minute);

      if (numericMinute < 59) {
        numericMinute += 1;
        return numericMinute < 10 ? '0'.concat(numericMinute.toString()) : numericMinute.toString();
      }

      return minute;
    }

    return '00';
  }

  /**
   * Decrements a minute to it's next value
   * @param {String} minute Minute to decrement
   * @return {String} Returns a string representation of the value of the passed in minute after it's decremented
   */
  static decrementMinute(minute) {
    if (minute) {
      let numericMinute = Number(minute);

      if (numericMinute > 0) {
        numericMinute -= 1;
        return numericMinute < 10 ? '0'.concat(numericMinute.toString()) : numericMinute.toString();
      }

      return minute;
    }

    return '00';
  }

  /**
   * Increments a second to it's next value
   * @param {String} second Second to increment
   * @return {String} Returns a string representation of the value of the passed in second after it's incremented
   */
  static incrementSecond(second) {
    if (second) {
      let numericSecond = Number(second);

      if (numericSecond < 59) {
        numericSecond += 1;
        return numericSecond < 10 ? '0'.concat(numericSecond.toString()) : numericSecond.toString();
      }

      return second;
    }

    return '00';
  }

  /**
   * Decrements a second to it's next value
   * @param {String} second Second to decrement
   * @return {String} Returns a string representation of the value of the passed in second after it's decremented
   */
  static decrementSecond(second) {
    if (second) {
      let numericSecond = Number(second);

      if (numericSecond > 0) {
        numericSecond -= 1;
        return numericSecond < 10 ? '0'.concat(numericSecond.toString()) : numericSecond.toString();
      }

      return second;
    }

    return '00';
  }

  /**
   * Returns a string representation of the time's hour, or ''.
   * @param {*} time String time formatted like hh:mm or hh:mm:ss.
   * @returns A zero-padded two digit hour, 00 <= hh < 24.
   */
  static splitHour(time) {
    if (typeof (time) === 'string') {
      const hourMinuteAndSecond = time.split(':');

      if (hourMinuteAndSecond.length) {
        const hour = Number(hourMinuteAndSecond[0]);
        if (hour >= 0 && hour < 24) {
          if (hourMinuteAndSecond[0].length === 1) {
            return '0'.concat(hourMinuteAndSecond[0]);
          }

          return hourMinuteAndSecond[0];
        }
      }

      return '';
    }

    return '';
  }

  /**
   * Returns a string representation of the time's minute, or ''.
   * @param {*} time String time formatted like hh:mm or hh:mm:ss.
   * @returns A zero-padded two digit minute, 00 <= mm < 60.
   */
  static splitMinute(time) {
    if (typeof (time) === 'string') {
      const hourMinuteAndSecond = time.split(':');

      if (hourMinuteAndSecond.length > 1) {
        const minute = Number(hourMinuteAndSecond[1]);
        if (minute >= 0 && minute < 60) {
          if (hourMinuteAndSecond[1].length === 1) {
            return '0'.concat(hourMinuteAndSecond[1]);
          }

          return hourMinuteAndSecond[1];
        }
      }

      return '';
    }

    return '';
  }

  /**
   * Returns a string representation of the time's second, or ''.
   * @param {*} time String time formatted like hh:mm or hh:mm:ss.
   * @returns A zero-padded two digit second, 00 <= ss < 60.
   */
  static splitSecond(time) {
    if (typeof (time) === 'string') {
      const hourMinuteAndSecond = time.split(':');

      if (hourMinuteAndSecond.length > 2) {
        const second = Number(hourMinuteAndSecond[2]);
        if (second >= 0 && second < 60) {
          if (hourMinuteAndSecond[2].length === 1) {
            return '0'.concat(hourMinuteAndSecond[2]);
          }

          return hourMinuteAndSecond[2];
        }
      }

      return '';
    }

    return '';
  }

  /**
  * Indicates if the Time Input is operating as a 12-hour variant.
  * @param {Object} The TimeInput props.
  * @returns {Boolean} True if the locale allows a 12-hour time and the variant is 12-hour time.
  */
  static is12Hour(props) {
    return TimeUtil.getVariantFromLocale(props) === TimeUtil.FORMAT_12_HOUR;
  }

  /**
   * Indicates if the Time Input's state is representing a 12-hour time in the PM.
   * @param {Object} props The TimeInput props.
   * @param {Object} state The TimeInput state.
   * @param {String} postMeridiem The PM string to compare against.
   * @returns {Boolean} True iff the time input is in 12-hour mode and the state is a PM time.
   */
  static isPM(props, state, postMeridiem) {
    return TimeUtil.is12Hour(props) && state.meridiem === postMeridiem;
  }

  /**
 * Build a UTC time string in kind-of-but-not-really ISO 8601 format.
 *
 * WARNING: Read the name. This has very peculiar behavior you probably don' want ot use for new features. I'm
 * keeping this around as it was, because it's got strange behavior I'm not sure how to break. It has a bug where a
 * person could leave some fields blank and see a value containing 'NaN', like 'TNaN:22'. Not sure if that is
 * desired.
 * @param {Object} props TimeInput props
 * @param {Object} state  TimeInput state
 * @param {String} postMeridiem PM string to compare against.
 * @returns {String} A representation of the time that might be invalid or incomplete. Best case, it's like 'T22:00'.
 */
  static deprecatedAndDangerousKindOfISOValueButNotReally(props, state, postMeridiem) {
    const { hour, minute, second } = state;
    const { showSeconds } = props;
    let timeValue = '';

    if (hour.length > 0 || minute.length > 0 || (second.length > 0 && showSeconds)) {
      let hourInt = parseInt(hour, 10);

      if (TimeUtil.isPM(props, state, postMeridiem)) {
        hourInt += 12;
      }

      timeValue = 'T'.concat(hourInt, ':', minute);

      if (showSeconds) {
        timeValue = timeValue.concat(':', second);
      }
    }
    return timeValue;
  }

  /**
 * Returns a time string suitable for being read by a screen reader to the end user.
 *
 * NOTE: this is not meant to replace general localization of the time. It's just enough for screen reading.
 * @param {Object} props The TimeInput's props.
 * @param {Object} state The TimeInput's state.
 * @param {String} postMeridiem The localized PM string (e.g. 'p.m.') used to compare against current state in 12-hour scenarios.
 * @returns The time string or undefined if the time is incomplete or invalid.
 */
  static getA11YTimeValue(props, state, postMeridiem) {
    /**
      * FUTURE: this is not the right way to localize a time. We should be using the Intl API to format the time per
      * locale. Since we support IE 10, and IE 10 lacks the Intl API, we will have to update our polyfills before we can
      * properly localize these time values. As it is written it's probably good enough for release until we update the
      * polyfills.
      *
      * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
      *
      * e.g.:
      * > new Date(1983, 3, 24, ...value.split(':')).toLocaleTimeString(locale, {timeStyle: 'short', hour12: true});
      */
    const { meridiem } = state;
    const { intl, showSeconds } = props;
    const is12Hour = TimeUtil.is12Hour(props);

    let hourMode;
    if (TimeUtil.isPM(props, state, postMeridiem)) {
      hourMode = Hour.TWELVE_HOUR_PM;
    } else if (is12Hour) {
      hourMode = Hour.TWELVE_HOUR_AM;
    } else {
      hourMode = Hour.TWENTY_FOUR_HOUR;
    }

    const hour = Hour.fromString(state.hour, hourMode);
    const minute = Minute.fromString(state.minute);
    const second = Second.fromString(state.second);

    if ([hour, minute].includes(undefined)) {
      return undefined;
    }

    if (showSeconds && second === undefined) {
      return undefined;
    }

    if (is12Hour && showSeconds) {
      // description: Human-readable time value in a 12-hour clock with hours, minutes, and seconds.
      return intl.formatMessage({ id: 'Terra.timeInput.textValueTwelveHourMinuteSecond' }, {
        hour: hour.toTwelveHourString(), minute, second, meridiem,
      });
    }
    if (is12Hour) {
      // description: Human-readable time value in a 12-hour clock with hours, and minutes.
      return intl.formatMessage({ id: 'Terra.timeInput.textValueTwelveHourMinute' }, {
        hour: hour.toTwelveHourString(), minute, meridiem,
      });
    }
    if (showSeconds) {
      // description: Human-readable time value in a 24-hour clock with hours, minutes, and seconds.
      return intl.formatMessage({ id: 'Terra.timeInput.textValueTwentyFourHourMinuteSecond' }, {
        hour, minute, second,
      });
    }

    // description: Human-readable time value in a 24-hour clock with hours and minutes.
    return intl.formatMessage({ id: 'Terra.timeInput.textValueTwentyFourHourMinute' }, {
      hour, minute,
    });
  }

  /**
   * Ensures the passed in value is a valid time in the HH:mm format or HH:mm:ss format if hasSeconds is true
   * @param {string} value The time to validate
   * @param {boolean} hasSeconds The time will be required to have seconds if this is true
   */
  static validateTime(value, hasSeconds) {
    // Including seconds in the value is required if seconds are shown
    if (hasSeconds) {
      return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(value);
    }

    return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(value);
  }

  /**
   * Determines if the locale can use the 12-hour time notation. Default to use the 24-hour variant if the locale does not use it.
   * @param {Object} props - The component props.
   * @return {String} FORMAT_24_HOUR if the locale does not use the 12-hour notation. Otherwise, the current variant prop.
   */
  static getVariantFromLocale(props) {
    const { intl, variant } = props;
    const locale24Hr = ['de', 'es-ES', 'es', 'fi-FI', 'fr-FR', 'fr', 'nl-BE', 'nl', 'pt-BR', 'pt', 'sv-SE', 'sv'];

    if (locale24Hr.includes(intl.locale)) {
      return this.FORMAT_24_HOUR;
    }

    return variant;
  }

  /**
   * Util to determine if the user agent indicates that it is macOS
   * @return {boolean}
   */

   static isMac = () => navigator.userAgent.indexOf('Mac') !== -1 && navigator.userAgent.indexOf('Win') === -1;
}

TimeUtil.inputType = {
  HOUR: 0,
  MINUTE: 1,
  MERIDIEM: 2,
  SECOND: 3,
};

TimeUtil.LastHour = '23';
TimeUtil.LastMinute = '59';
TimeUtil.LastSecond = '59';
TimeUtil.SingleZeroDigit = '0';
TimeUtil.DoubleZeroDigit = '00';

TimeUtil.initialValue = ['0', '00'];

TimeUtil.isConsideredMobileDevice = () => window.matchMedia('(max-width: 1024px)').matches
  && (
    'ontouchstart' in window
    // eslint-disable-next-line no-undef
    || (window.DocumentTouch && document instanceof DocumentTouch)
    || navigator.maxTouchPoints > 0 // eslint-disable-line compat/compat
    || navigator.msMaxTouchPoints > 0
  );

// These formats are designed to be the possible props for the
// variant prop of the TimeInput. They should not change.
Object.defineProperty(TimeUtil, 'FORMAT_12_HOUR', {
  value: '12-hour',
  configurable: false,
  enumerable: true,
  writable: false,
});

Object.defineProperty(TimeUtil, 'FORMAT_24_HOUR', {
  value: '24-hour',
  configurable: false,
  enumerable: true,
  writable: false,
});

export default TimeUtil;
