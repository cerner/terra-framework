"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var DateInputUtil = /*#__PURE__*/function () {
  function DateInputUtil() {
    (0, _classCallCheck2.default)(this, DateInputUtil);
  }
  (0, _createClass2.default)(DateInputUtil, null, [{
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
     * Increments a day to it's next value
     * @param {String} day Day to increment
     * @return {String} Returns a string representation of the value of the passed in day after it's incremented
     */
  }, {
    key: "incrementDay",
    value: function incrementDay(day) {
      // Handle empty input value
      if (day === '') {
        return '01';
      }
      if (day) {
        var numericDay = Number(day);

        // Loop back to 01 if incrementing day from "31"
        if (numericDay === 31) {
          return '01';
        }
        if (numericDay < 31) {
          numericDay += 1;
          return numericDay < 10 ? '0'.concat(numericDay.toString()) : numericDay.toString();
        }
        return day;
      }
      return null;
    }

    /**
     * Decrements a day to it's next value
     * @param {String} day Day to decrement
     * @return {String} Returns a string representation of the value of the passed in day after it's decremented
     */
  }, {
    key: "decrementDay",
    value: function decrementDay(day) {
      // Handle empty input value
      if (day === '') {
        return '31';
      }
      if (day) {
        var numericDay = Number(day);

        // Loop back to 31. Accounts for day being 1 or 0 (result of empty string)
        if (numericDay < 2) {
          return '31';
        }
        if (numericDay > 1) {
          numericDay -= 1;
          return numericDay < 10 ? '0'.concat(numericDay.toString()) : numericDay.toString();
        }
        return day;
      }
      return null;
    }

    /**
     * Increments a year to it's next value
     * @param {String} year Year to increment
     * @return {String} Returns a string representation of the value of the passed in day after it's incremented
     */
  }, {
    key: "incrementYear",
    value: function incrementYear(year) {
      // Handle empty input value
      if (year === '') {
        return DateInputUtil.MinYearValue.toString();
      }
      if (year) {
        var numericYear = Number(year);
        // Loop back to 1900 if incrementing year from "2100"
        if (numericYear === DateInputUtil.MaxYearValue) {
          return DateInputUtil.MinYearValue.toString();
        }
        if (numericYear >= DateInputUtil.MinYearValue && numericYear < DateInputUtil.MaxYearValue) {
          numericYear += 1;
          return numericYear.toString();
        }
        return year;
      }
      return null;
    }

    /**
     * Decrements a year to it's next value
     * @param {String} year Year to decrement
     * @return {String} Returns a string representation of the value of the passed in year after it's decremented
     */
  }, {
    key: "decrementYear",
    value: function decrementYear(year) {
      // Handle empty input value
      if (year === '') {
        return DateInputUtil.MaxYearValue.toString();
      }
      if (year) {
        var numericYear = Number(year);
        // Loop back to 2100. Accounts for day being 1 or 0 (result of empty string)
        if (numericYear === DateInputUtil.MinYearValue) {
          return DateInputUtil.MaxYearValue.toString();
        }
        if (numericYear > DateInputUtil.MinYearValue) {
          numericYear -= 1;
          return numericYear.toString();
        }
        return year;
      }
      return null;
    }

    /**
     * @param {String} value String to split month value from
     * @return {String} Month value generated from input value
     */
  }, {
    key: "splitMonth",
    value: function splitMonth(value) {
      if (typeof value === 'string') {
        var splitValue = value.split('-');
        if (splitValue[1]) {
          if (splitValue[1].length === 2) {
            var month = Number(splitValue[1]);
            if (month >= 1 && month < 13) {
              return splitValue[1];
            }
          }
        }
        return '';
      }
      return '';
    }

    /**
     * @param {String} value String to split day value from
     * @return {String} Day value generated from input value
     */
  }, {
    key: "splitDay",
    value: function splitDay(value) {
      if (typeof value === 'string') {
        var splitValue = value.split('-');
        if (splitValue[2]) {
          var day = Number(splitValue[2]);
          // If day is valid month day
          if (day >= 1 && day < 32) {
            return splitValue[2];
          }
          // Zero handling, accounts for typing 0, followed by positive number
          if (splitValue[2] === '0') {
            return splitValue[2];
          }
          // Allow "00" to pass through
          if (splitValue[2] === '00') {
            return splitValue[2];
          }
        }
        return '';
      }
      return '';
    }

    /**
     * @param {String} value String to split year value from
     * @return {String} Year value generated from input value
     */
  }, {
    key: "splitYear",
    value: function splitYear(value) {
      if (typeof value === 'string') {
        var splitValue = value.split('-');
        if (splitValue.length && !Number.isNaN(parseFloat(splitValue[0]))) {
          return splitValue[0];
        }
        return '';
      }
      return '';
    }

    /**
     * Ensures the passed in value is in the accepted date value format: YYYY-MM-DD
     * @param {string} value The date to validate
     */
  }, {
    key: "acceptedDateValue",
    value: function acceptedDateValue(value) {
      return /^([0-9][0-9][0-9][0-9])-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/.test(value);
    }

    /**
     * Computes the display format based of of the displayFormat prop and the current locale
     * Defaults to 'day-month-year'
     * @param {string} displayFormat The displayFormat prop
     * @param {string} locale The intl.locale value
     * @returns {string} 'month-day-year' or 'day-month-year' depending on computed value
     */
  }, {
    key: "computedDisplayFormat",
    value: function computedDisplayFormat(displayFormat, locale) {
      if (displayFormat === 'month-day-year') {
        return 'month-day-year';
      }
      if (displayFormat === 'day-month-year') {
        return 'day-month-year';
      }
      if (locale === 'en' || locale === 'en-US') {
        return 'month-day-year';
      }
      return 'day-month-year';
    }
  }, {
    key: "getDateFormat",
    value: function getDateFormat(props) {
      if (DateInputUtil.computedDisplayFormat(props.displayFormat, props.intl.locale) === 'month-day-year') {
        return props.intl.formatMessage({
          id: 'Terra.date.input.formatMonthDayYear'
        });
      }
      return props.intl.formatMessage({
        id: 'Terra.date.input.formatDayMonthYear'
      });
    }
  }]);
  return DateInputUtil;
}();
DateInputUtil.inputType = {
  YEAR: 0,
  MONTH: 1,
  DAY: 2
};
DateInputUtil.MinYearValue = 1900;
DateInputUtil.MaxYearValue = 2100;
var _default = DateInputUtil;
exports.default = _default;