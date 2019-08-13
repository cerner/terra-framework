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
    if (day) {
      let numericDay = Number(day);

      // Loop back to 31 if decrementing day from "01"
      if (numericDay === 1) {
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
   * @param {String} year Day to decrement
   * @return {String} Returns a string representation of the value of the passed in year after it's decremented
   */
  static decrementYear(year) {
    if (year) {
      let numericYear = Number(year);

      // Loop back to 9999 if decrementing year from "1"
      if (numericYear === 1) {
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
   * TODO
   */
  static splitMonth(value) {
    if (typeof (value) === 'string') {
      const splitValue = value.split('-');

      if (splitValue.length) {
        const month = Number(splitValue[1]);
        if (month >= 1 && month < 13) {
          // TODO - Review this. Causes value input to not match onChange(value) output
          if (splitValue[1].length === 1) {
            return '0'.concat(splitValue[1]);
          }
          // if (splitValue[1].length === 1) {
          //   return splitValue[1];
          // }

          return splitValue[1];
        }
      }

      return '';
    }

    return '';
  }

  /**
   * TODO
   */
  static splitDay(value) {
    if (typeof (value) === 'string') {
      const splitValue = value.split('-');

      if (splitValue.length) {
        const day = Number(splitValue[2]);
        // If day is valid month day
        if (day >= 1 && day < 32) {
          // if (splitValue[2].length === 1) {
          //   return '0'.concat(splitValue[2]);
          // }

          return splitValue[2];
        }
      }

      return '';
    }

    return '';
  }

  /**
   * TODO
   */
  static splitYear(value) {
    if (typeof (value) === 'string') {
      const splitValue = value.split('-');
      if (splitValue.length) {
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
   * Ensures the passed in value is a valid date
   * @param {string} value The date to validate
   */
  static isValidDate(value) {
    if (!this.acceptedDateValue(value)) {
      return false;
    }

    const splitValue = value.split('-');
    const formattedDay = Number(splitValue[2]);
    const formattedMonth = Number(splitValue[1]) - 1; // Account for 0-indexed month
    const formattedYear = Number(splitValue[0]);

    const d = new Date(formattedYear, formattedMonth, formattedDay);

    const yearMatches = d.getUTCFullYear() === formattedYear;
    const monthMatches = d.getUTCMonth() === formattedMonth;
    const dayMatches = d.getUTCDate() === formattedDay;

    return yearMatches && monthMatches && dayMatches;
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
