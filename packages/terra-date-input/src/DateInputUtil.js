class DateInputUtil {
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
   * Increments a day to it's next value
   * @param {String} day Day to increment
   * @return {String} Returns a string representation of the value of the passed in day after it's incremented
   */
  static incrementDay(day) {
    // Handle empty input value
    if (day === '') {
      return '01';
    }

    if (day) {
      let numericDay = Number(day);

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
  static decrementDay(day) {
    // Handle empty input value
    if (day === '') {
      return '31';
    }

    if (day) {
      let numericDay = Number(day);

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
  static incrementYear(year) {
    // Handle empty input value
    if (year === '') {
      return '1';
    }

    if (year) {
      let numericYear = Number(year);

      // Loop back to 1 if incrementing year from "9999"
      if (numericYear === 9999) {
        return '1';
      }

      if (numericYear < 9999) {
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
  static decrementYear(year) {
    // Handle empty input value
    if (year === '') {
      return '9999';
    }

    if (year) {
      let numericYear = Number(year);

      // Loop back to 9999. Accounts for day being 1 or 0 (result of empty string)
      if (numericYear < 2) {
        return '9999';
      }

      if (numericYear > 1) {
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
  static splitMonth(value) {
    if (typeof (value) === 'string') {
      const splitValue = value.split('-');

      if (splitValue[1]) {
        if (splitValue[1].length === 2) {
          const month = Number(splitValue[1]);
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
  static splitDay(value) {
    if (typeof (value) === 'string') {
      const splitValue = value.split('-');

      if (splitValue[2]) {
        const day = Number(splitValue[2]);
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
  static splitYear(value) {
    if (typeof (value) === 'string') {
      const splitValue = value.split('-');
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
  static acceptedDateValue(value) {
    return /^([0-9][0-9][0-9][0-9])-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/.test(value);
  }

  /**
   * Computes the display format based of of the displayFormat prop and the current locale
   * Defaults to 'day-month-year'
   * @param {string} displayFormat The displayFormat prop
   * @param {string} locale The intl.locale value
   * @returns {string} 'month-day-year' or 'day-month-year' depending on computed value
   */
  static computedDisplayFormat(displayFormat, locale) {
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
}

DateInputUtil.inputType = {
  YEAR: 0,
  MONTH: 1,
  DAY: 2,
};

export default DateInputUtil;
