"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _Hour = _interopRequireDefault(require("./_Hour"));
var _Minute = _interopRequireDefault(require("./_Minute"));
var _Second = _interopRequireDefault(require("./_Second"));
var TimeUtil = /*#__PURE__*/function () {
  function TimeUtil() {
    (0, _classCallCheck2.default)(this, TimeUtil);
  }
  (0, _createClass2.default)(TimeUtil, null, [{
    key: "validNumericInput",
    value:
    /**
     * Determines if a provided numeric input value is valid.
     * Valid inputs are either empty strings or numeric.
     * @param {String} value Value to validate
     * @return True if the value is empty or numeric, false otherwise.
     */
    function validNumericInput(value) {
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
  }, {
    key: "parseTwelveHourTime",
    value: function parseTwelveHourTime(hour, anteMeridiem, postMeridiem) {
      var parsedHour = {
        hourString: hour
      };
      var numericHour = parseInt(hour, 10);
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
  }, {
    key: "incrementHour",
    value: function incrementHour(hour, timeVariant) {
      var maxValue = timeVariant === this.FORMAT_12_HOUR ? 12 : 23;

      // Increment the value by 1 when arrow up is pressed.
      if (hour) {
        var numericHour = Number(hour);
        if (numericHour < maxValue) {
          numericHour += 1;
          return numericHour < 10 ? '0'.concat(numericHour.toString()) : numericHour.toString();
        }
        if (timeVariant === this.FORMAT_12_HOUR) {
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
  }, {
    key: "decrementHour",
    value: function decrementHour(hour, timeVariant) {
      var minValue = timeVariant === this.FORMAT_12_HOUR ? 1 : 0;
      if (hour) {
        var numericHour = Number(hour);
        if (numericHour > minValue) {
          numericHour -= 1;
          return numericHour < 10 ? '0'.concat(numericHour.toString()) : numericHour.toString();
        }
        if (timeVariant === this.FORMAT_12_HOUR) {
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
  }, {
    key: "incrementMinute",
    value: function incrementMinute(minute) {
      if (minute) {
        var numericMinute = Number(minute);
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
  }, {
    key: "decrementMinute",
    value: function decrementMinute(minute) {
      if (minute) {
        var numericMinute = Number(minute);
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
  }, {
    key: "incrementSecond",
    value: function incrementSecond(second) {
      if (second) {
        var numericSecond = Number(second);
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
  }, {
    key: "decrementSecond",
    value: function decrementSecond(second) {
      if (second) {
        var numericSecond = Number(second);
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
  }, {
    key: "splitHour",
    value: function splitHour(time) {
      if (typeof time === 'string') {
        var hourMinuteAndSecond = time.split(':');
        if (hourMinuteAndSecond.length) {
          var hour = Number(hourMinuteAndSecond[0]);
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
  }, {
    key: "splitMinute",
    value: function splitMinute(time) {
      if (typeof time === 'string') {
        var hourMinuteAndSecond = time.split(':');
        if (hourMinuteAndSecond.length > 1) {
          var minute = Number(hourMinuteAndSecond[1]);
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
  }, {
    key: "splitSecond",
    value: function splitSecond(time) {
      if (typeof time === 'string') {
        var hourMinuteAndSecond = time.split(':');
        if (hourMinuteAndSecond.length > 2) {
          var second = Number(hourMinuteAndSecond[2]);
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
  }, {
    key: "is12Hour",
    value: function is12Hour(props) {
      return TimeUtil.getVariantFromLocale(props) === TimeUtil.FORMAT_12_HOUR;
    }

    /**
     * Indicates if the Time Input's state is representing a 12-hour time in the PM.
     * @param {Object} props The TimeInput props.
     * @param {Object} state The TimeInput state.
     * @param {String} postMeridiem The PM string to compare against.
     * @returns {Boolean} True iff the time input is in 12-hour mode and the state is a PM time.
     */
  }, {
    key: "isPM",
    value: function isPM(props, state, postMeridiem) {
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
  }, {
    key: "deprecatedAndDangerousKindOfISOValueButNotReally",
    value: function deprecatedAndDangerousKindOfISOValueButNotReally(props, state, postMeridiem) {
      var hour = state.hour,
        minute = state.minute,
        second = state.second;
      var showSeconds = props.showSeconds;
      var timeValue = '';
      if (hour.length > 0 || minute.length > 0 || second.length > 0 && showSeconds) {
        var hourInt = parseInt(hour, 10);
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
  }, {
    key: "getA11YTimeValue",
    value: function getA11YTimeValue(props, state, postMeridiem) {
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
      var meridiem = state.meridiem;
      var intl = props.intl,
        showSeconds = props.showSeconds;
      var is12Hour = TimeUtil.is12Hour(props);
      var hourMode;
      if (TimeUtil.isPM(props, state, postMeridiem)) {
        hourMode = _Hour.default.TWELVE_HOUR_PM;
      } else if (is12Hour) {
        hourMode = _Hour.default.TWELVE_HOUR_AM;
      } else {
        hourMode = _Hour.default.TWENTY_FOUR_HOUR;
      }
      var hour = _Hour.default.fromString(state.hour, hourMode);
      var minute = _Minute.default.fromString(state.minute);
      var second = _Second.default.fromString(state.second);
      if ([hour, minute].includes(undefined)) {
        return undefined;
      }
      if (showSeconds && second === undefined) {
        return undefined;
      }
      if (is12Hour && showSeconds) {
        // description: Human-readable time value in a 12-hour clock with hours, minutes, and seconds.
        return intl.formatMessage({
          id: 'Terra.timeInput.textValueTwelveHourMinuteSecond'
        }, {
          hour: hour.toTwelveHourString(),
          minute: minute,
          second: second,
          meridiem: meridiem
        });
      }
      if (is12Hour) {
        // description: Human-readable time value in a 12-hour clock with hours, and minutes.
        return intl.formatMessage({
          id: 'Terra.timeInput.textValueTwelveHourMinute'
        }, {
          hour: hour.toTwelveHourString(),
          minute: minute,
          meridiem: meridiem
        });
      }
      if (showSeconds) {
        // description: Human-readable time value in a 24-hour clock with hours, minutes, and seconds.
        return intl.formatMessage({
          id: 'Terra.timeInput.textValueTwentyFourHourMinuteSecond'
        }, {
          hour: hour,
          minute: minute,
          second: second
        });
      }

      // description: Human-readable time value in a 24-hour clock with hours and minutes.
      return intl.formatMessage({
        id: 'Terra.timeInput.textValueTwentyFourHourMinute'
      }, {
        hour: hour,
        minute: minute
      });
    }

    /**
     * Ensures the passed in value is a valid time in the HH:mm format or HH:mm:ss format if hasSeconds is true
     * @param {string} value The time to validate
     * @param {boolean} hasSeconds The time will be required to have seconds if this is true
     */
  }, {
    key: "validateTime",
    value: function validateTime(value, hasSeconds) {
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
  }, {
    key: "getVariantFromLocale",
    value: function getVariantFromLocale(props) {
      var intl = props.intl,
        variant = props.variant;
      var locale24Hr = ['de', 'es-ES', 'es', 'fi-FI', 'fr-FR', 'fr', 'nl-BE', 'nl', 'pt-BR', 'pt', 'sv-SE', 'sv'];
      if (locale24Hr.includes(intl.locale)) {
        return this.FORMAT_24_HOUR;
      }
      return variant;
    }
  }]);
  return TimeUtil;
}();
TimeUtil.inputType = {
  HOUR: 0,
  MINUTE: 1,
  MERIDIEM: 2,
  SECOND: 3
};
TimeUtil.isConsideredMobileDevice = function () {
  return window.matchMedia('(max-width: 1024px)').matches && ('ontouchstart' in window
  // eslint-disable-next-line no-undef
  || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints > 0 // eslint-disable-line compat/compat
  || navigator.msMaxTouchPoints > 0);
};

// These formats are designed to be the possible props for the
// variant prop of the TimeInput. They should not change.
Object.defineProperty(TimeUtil, 'FORMAT_12_HOUR', {
  value: '12-hour',
  configurable: false,
  enumerable: true,
  writable: false
});
Object.defineProperty(TimeUtil, 'FORMAT_24_HOUR', {
  value: '24-hour',
  configurable: false,
  enumerable: true,
  writable: false
});
var _default = TimeUtil;
exports.default = _default;