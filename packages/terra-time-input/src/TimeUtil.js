class TimeUtil {
  /**
   * Determines if a provided nuermic input value is valid.
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

    if (!intl.messages['Terra.timeInput.am'] || !intl.messages['Terra.timeInput.pm']) {
      return this.FORMAT_24_HOUR;
    }

    return variant;
  }
}

TimeUtil.inputType = {
  HOUR: 0,
  MINUTE: 1,
  MERIDIEM: 2,
  SECOND: 3,
};

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
