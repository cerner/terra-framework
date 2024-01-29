/* eslint-disable no-underscore-dangle */
import moment from 'moment-timezone';

class DateUtil {
  /**
   * Creates a moment object using the provided date string. Moment is unable to initialize a valid date if the date passed in is
   * null, empty string, or alpha characters and undefined would be returned.
   * @param {string|undefined} date - The date to convert. Expect to be in ISO format.
   * @param {string|undefined} initialTimeZone - The timezone of the date.
   * @return {object|undefined} - The moment object. Undefined if unable to convert.
   */
  static createSafeDate(date, initialTimeZone) {
    if (!date) {
      return undefined;
    }

    const isTimeZoneValid = initialTimeZone && moment.tz.zone(initialTimeZone);

    let momentDate;
    if (isTimeZoneValid) {
      momentDate = moment.tz(date, DateUtil.ISO_EXTENDED_DATE_FORMAT, true, initialTimeZone);
    } else {
      momentDate = moment(date, DateUtil.ISO_EXTENDED_DATE_FORMAT, true);
    }

    if (!momentDate || !momentDate.isValid()) {
      // This should allow DateTime inputs that used to work in the moment.ISO_8601 to still pass but discard the time from the value.
      if (isTimeZoneValid) {
        momentDate = moment.tz(date.slice(0, 10), DateUtil.ISO_EXTENDED_DATE_FORMAT, true, initialTimeZone);
      } else {
        momentDate = moment(date.slice(0, 10), DateUtil.ISO_EXTENDED_DATE_FORMAT, true);
      }
    }
    return momentDate.isValid() ? momentDate : undefined;
  }

  /**
   * Determines the default value for the date picker.
   * @param {Object} props - The component props.
   * @return {object|undefined} - The default date value.
   */
  static defaultValue(props) {
    const { initialTimeZone, selectedDate, value } = props;

    if (value !== undefined) {
      return DateUtil.createSafeDate(value, initialTimeZone);
    }

    return DateUtil.createSafeDate(selectedDate, initialTimeZone);
  }

  /**
   * Filters any invalid dates in the provided list of dates
   * @param {array} date - The array of dates to filter.
   * @return {array|undefined} - The array of moment objects each representing the valid dates. Undefined if there are no valid dates.
   */
  static filterInvalidDates(dates) {
    const validMomentDates = [];

    if (Array.isArray(dates)) {
      let index = 0;
      for (index = 0; index < dates.length; index += 1) {
        const momentDate = moment(dates[index]);
        if (momentDate.isValid()) {
          validMomentDates.push(momentDate);
        }
      }
    }

    return validMomentDates.length > 0 ? validMomentDates : undefined;
  }

  /**
   * Determines if a date is within the range of two given dates.
   * @param {object} sourceDate - The moment date to check if it is within range.
   * @param {object} minDate - The moment date that represents the minimum date of the range.
   * @param {object} maxDate - The moment date that represents the maximum date of the range.
   * @return {boolean} - True if the sourceDate is within range. False, otherwise.
   */
  static isDateOutOfRange(sourceDate, minDate, maxDate) {
    if (sourceDate && sourceDate.isValid()) {
      if (minDate && minDate.isValid() && (!maxDate || !maxDate.isValid())) {
        if (sourceDate.isBefore(minDate, 'day')) {
          return true;
        }
      }

      if ((!minDate || !minDate.isValid()) && maxDate && maxDate.isValid()) {
        if (sourceDate.isAfter(maxDate, 'day')) {
          return true;
        }
      }

      if (minDate && minDate.isValid() && maxDate && maxDate.isValid()) {
        if (sourceDate.isBefore(minDate, 'day') || sourceDate.isAfter(maxDate, 'day')) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Determines if a date matched the year, month, and day of any dates in the list.
   * @param {object} sourceDate - The moment date to check for match.
   * @param {array} excludedDates - An array of moment dates to check against.
   * @return {boolean} - True if the sourceDate is found in the list. False, otherwise.
   */
  static isDateExcluded(sourceDate, excludedDates) {
    if (!sourceDate || !sourceDate.isValid()) {
      return false;
    }

    const excludeMomentDates = DateUtil.filterInvalidDates(excludedDates);

    if (excludeMomentDates) {
      for (let index = 0; index < excludeMomentDates.length; index += 1) {
        if (sourceDate.isSame(excludeMomentDates[index], 'day')) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Determines if a date matched the year, month, and day of any dates in the list.
   * @param {object} sourceDate - The moment date to check for match.
   * @param {array} includedDates - An array of moment dates to check for.
   * @return {boolean} - True if the sourceDate is found in the list. False, otherwise.
   */
  static isDateNotIncluded(sourceDate, includedDates) {
    if (!sourceDate || !sourceDate.isValid() || !includedDates) {
      return false;
    }

    const includeMomentDates = DateUtil.filterInvalidDates(includedDates);

    if (includeMomentDates) {
      for (let index = 0; index < includeMomentDates.length; index += 1) {
        if (sourceDate.isSame(includeMomentDates[index], 'day')) {
          return false;
        }
      }
    }

    return true;
  }

  /**
   * Converts a date string in the given format to the ISO format with only the date part.
   * @param {string} date - The date string to convert.
   * @param {string} format - The format of the date string.
   * @return {string} - The converted ISO string.
   */
  static convertToISO8601(date, format) {
    if (date && format) {
      const momentDate = moment(date, format, true);
      return momentDate.isValid() ? momentDate.format('YYYY-MM-DD') : date;
    }

    return date;
  }

  /**
   * Gets the preferred date format (moment's long date format) given the locale.
   * @param {string} locale - The locale to get the date format.
   * @return {string} - The preferred date format for the given locale.
   */
  static getFormatByLocale(locale) {
    if (locale) {
      const localMoment = moment();
      localMoment.locale(locale);
      return localMoment.localeData()._longDateFormat.L;
    }

    return undefined;
  }

  /**
   * Gets the date format order from moment's long date format.
   * @param {string} momentDateFormat - Moment's long date format.
   * @return {string} - The date format order. Possible Values (MDY, DMY, YMD)
   */
  static getDateFormatOrder(momentDateFormat) {
    let dateFormatOrder;
    if (momentDateFormat === 'MM/DD/YYYY') {
      dateFormatOrder = DateUtil.dateOrder.MDY;
    } else if (momentDateFormat === 'DD/MM/YYYY' || momentDateFormat === 'DD.MM.YYYY' || momentDateFormat === 'DD-MM-YYYY') {
      dateFormatOrder = DateUtil.dateOrder.DMY;
    } else if (momentDateFormat === 'YYYY-MM-DD') {
      dateFormatOrder = DateUtil.dateOrder.YMD;
    }

    return dateFormatOrder;
  }

  /**
   * Gets the date separator based on the locale.
   * @param {string} locale - The locale to get the date separator.
   * @return {string} - The date separator. Possible Values (/, -, .)
   */
  static getDateSeparator(locale) {
    let dateSeparator;
    const localesWithSlash = ['en-AU', 'en-GB', 'en-US', 'en', 'es-ES', 'es-US', 'es', 'fr-FR', 'fr', 'nl-BE', 'pt-BR', 'pt'];
    const localesWithHyphen = ['en-CA', 'nl', 'sv-SE', 'sv'];
    const localesWithDot = ['de'];

    if (localesWithSlash.includes(locale)) {
      dateSeparator = '/';
    } else if (localesWithHyphen.includes(locale)) {
      dateSeparator = '-';
    } else if (localesWithDot.includes(locale)) {
      dateSeparator = '.';
    }

    return dateSeparator;
  }

  /**
   * Returns an object consisting of date input values based on the date format.
   * @param {string} dateOrder - String containing the date input order. Possible values (MDY, DMY, YMD)
   * @param {string} value - The date/placeholder string.
   * @param {string} separator - The date separator.
   * @return {Object} - The object containing the day, month and year values.
   */
  static getDateInputValues(dateOrder, value, separator) {
    let day = '';
    let month = '';
    let year = '';

    if (value) {
      const dateInputParts = value.split(separator);

      switch (dateOrder) {
        case DateUtil.dateOrder.DMY:
          [day, month, year] = dateInputParts;
          break;
        case DateUtil.dateOrder.MDY:
          [month, day, year] = dateInputParts;
          break;
        case DateUtil.dateOrder.YMD:
          [year, month, day] = dateInputParts;
          break;
        default:
          [day, month, year] = ['', '', ''];
      }
    }

    return { day, month, year };
  }

  /**
   * Determines if the date is valid and conforms to the given format.
   * @param {string} date - The date to validate.
   * @param {string} format - The date format to use for the validation.
   * @return {boolean} - True if the date is valid and conforms to the format.
   */
  static isValidDate(date, format) {
    const dateMoment = moment(date, format, true);
    return dateMoment.isValid();
  }

  /**
   * Converts an ISO string to the given format.
   * @param {string} iSODate - The ISO string to convert.
   * @param {string} format - The desired date format for the conversion
   * @return {string} - The formatted date string.
   */
  static formatISODate(iSODate, format) {
    if (!iSODate || iSODate.length <= 0) {
      return '';
    }

    const momentDate = moment(iSODate);
    return DateUtil.formatMomentDate(momentDate, format);
  }

  /**
   * Converts a moment object to the given format.
   * @param {object} momentDate - The moment object to convert.
   * @param {string} format - The desired date format for the conversion
   * @return {string} - The formatted date string.
   */
  static formatMomentDate(momentDate, format) {
    return momentDate?.isValid() ? momentDate.format(format, true) : undefined;
  }

  /**
   * Determines if a provided date input value is valid.
   * Valid inputs are either empty strings or contain only numeric characters.
   * @param {String} value Value to validate
   * @return True if the value is valid, false otherwise.
   */
  static validDateInput(value) {
    return value.length === 0 || /^\d+$/.test(value);
  }

  /**
   * Determines if a provided date values are valid.
   * @param {String} value Value to validate
   * @return True if the value is valid, false otherwise.
   */
  static validdateDateValues(value, dateFormatOrder, editOnkeyDown, previousDateValueRef) {
    const date = { day: '', month: '', year: '' };

    if (editOnkeyDown.current) {
      let separator = '-';
      if (value?.includes('.')) {
        separator = '.';
      } else if (value?.includes('/')) {
        separator = '/';
      }
      return this.getDateInputValues(dateFormatOrder, value, separator);
    }

    return (value === '') ? date : previousDateValueRef.current || date;
  }

  /**
   * Converts an ISO string to the given format.
   * @param {string} iSODate - The ISO string to convert.
   * @param {string} format - The desired date format for the conversion
   * @return {string} - The formatted date string.
   */
  static strictFormatISODate(iSODate, format) {
    if (!iSODate || iSODate.length <= 0) {
      return undefined;
    }

    let momentDate = moment(iSODate, [format, DateUtil.ISO_EXTENDED_DATE_FORMAT], true);
    if (!momentDate || !momentDate.isValid()) {
      // This should allow DateTime inputs that used to work in the moment.ISO_8601 to still pass but discard the time from the value.
      momentDate = moment(iSODate.slice(0, 10), DateUtil.ISO_EXTENDED_DATE_FORMAT, true);
    }
    return DateUtil.formatMomentDate(momentDate, format);
  }

  /**
   * Ensures the maxDate is before DateUtil.MAX_DATE.
   * @param {String} maxDate - The maxDate prop.
   * @return The maxDate prop if before DateUtil.MAX_DATE. Otherwise return DateUtil.MAX_DATE.
   */
  static getMaxDate(maxDate) {
    if (DateUtil.isBetweenMinMaxDate(maxDate)) {
      return maxDate;
    }

    return DateUtil.MAX_DATE;
  }

  /**
   * Ensures the minDate is after the DateUtil.MIN_DATE.
   * @param {String} minDate - The minDate prop.
   * @return The minDate prop if after DateUtil.MIN_DATE. Otherwise return DateUtil.MIN_DATE.
   */
  static getMinDate(minDate) {
    if (DateUtil.isBetweenMinMaxDate(minDate)) {
      return minDate;
    }

    return DateUtil.MIN_DATE;
  }

  /**
   * Check if the date is between DateUtil.MIN_DATE and DateUtil.MAX_DATE.
   * @param {String} date - The date to check. Must be in the 'YYYY-MM-DD' format.
   * @return True if date is between DateUtil.MIN_DATE and DateUtil.MAX_DATE. Otherwise return false.
   */
  static isBetweenMinMaxDate(date) {
    const momentDate = moment(date);
    const minDate = moment(DateUtil.MIN_DATE);
    const maxDate = moment(DateUtil.MAX_DATE);

    return momentDate.isValid() && momentDate.isSameOrAfter(minDate, 'day') && momentDate.isSameOrBefore(maxDate, 'day');
  }

  /**
   * Increments the month to its next value
   * @param {String} month - Month to increment
   * @return {String} The incremented string value of the month
   */
  static incrementMonth(month) {
    if (month) {
      let numericMonth = Number(month);

      if (numericMonth < 12) {
        numericMonth += 1;
        return numericMonth < 10 ? '0'.concat(numericMonth.toString()) : numericMonth.toString();
      }

      return month;
    }

    return '01';
  }

  /**
   * Decrements the month to its next value
   * @param {String} month - Month to decrement
   * @return {String} The decremented string value of the month
   */
  static decrementMonth(month) {
    if (month) {
      let numericMonth = Number(month);

      if (numericMonth > 1) {
        numericMonth -= 1;
        return numericMonth < 10 ? '0'.concat(numericMonth.toString()) : numericMonth.toString();
      }

      return month;
    }

    return '01';
  }

  /**
   * Increments the day to its next value
   * @param {String} day - Day to increment
   * @param {string} month - Month value
   * @param {string} year - Year value
   * @return {String} The incremented string value of the day
   */
  static incrementDay(day, month, year) {
    if (day) {
      let numericDay = Number(day);
      const numericMonth = month === '' ? undefined : Number(month);
      const monthsWithThirtyDays = [4, 6, 9, 11];
      let dayUpperLimit = 31;

      if (monthsWithThirtyDays.indexOf(numericMonth) > -1) {
        dayUpperLimit = 30;
      } else if (numericMonth === 2) {
        const numericYear = year === '' ? undefined : Number(year);
        const momentYear = moment([numericYear]);
        if (momentYear.isLeapYear()) {
          dayUpperLimit = 29;
        } else {
          dayUpperLimit = 28;
        }
      }

      if (numericDay < dayUpperLimit) {
        numericDay += 1;
        return numericDay < 10 ? '0'.concat(numericDay.toString()) : numericDay.toString();
      }

      if (numericDay > dayUpperLimit) {
        return '01';
      }

      return day;
    }

    return '01';
  }

  /**
   * Decrements the day to its next value
   * @param {String} day - Day to decrement
   * @param {string} month - Month value
   * @param {string} year - Year value
   * @return {String} The decremented string value of the day
   */
  static decrementDay(day, month, year) {
    if (day) {
      let numericDay = Number(day);
      const numericMonth = month === '' ? undefined : Number(month);
      const monthsWithThirtyDays = [4, 6, 9, 11];
      let dayUpperLimit = 31;

      if (monthsWithThirtyDays.indexOf(numericMonth) > -1) {
        dayUpperLimit = 30;
      } else if (numericMonth === 2) {
        const numericYear = year === '' ? undefined : Number(year);
        const momentYear = moment([numericYear]);
        if (momentYear.isLeapYear()) {
          dayUpperLimit = 29;
        } else {
          dayUpperLimit = 28;
        }
      }

      if (numericDay > dayUpperLimit) {
        return dayUpperLimit.toString();
      }
      if (numericDay > 1) {
        numericDay -= 1;
        return numericDay < 10 ? '0'.concat(numericDay.toString()) : numericDay.toString();
      }

      return day;
    }

    return '01';
  }

  /**
   * Increments the year to its next value
   * @param {String} year - Year to increment
   * @return {String} The incremented string value of the year
   */
  static incrementYear(year) {
    if (year) {
      let numericYear = Number(year);

      if (numericYear < Number(DateUtil.MAX_YEAR)) {
        numericYear += 1;
        return numericYear.toString();
      }

      return year;
    }

    return DateUtil.MIN_YEAR;
  }

  /**
   * Decrements the year to its next value
   * @param {String} year - Year to decrement
   * @return {String} The decremented string value of the year
   */
  static decrementYear(year) {
    if (year) {
      let numericYear = Number(year);

      if (numericYear > Number(DateUtil.MIN_YEAR)) {
        numericYear -= 1;
        return numericYear.toString();
      }

      return year;
    }

    return DateUtil.MIN_YEAR;
  }

  /**
   * Increments a date by one day
   * @param {moment} date - date to increment
   * @return {moment} The incremented moment date
   */
  static incrementDateByDay(date, format, inputTypeValue) {
    const momentDate = moment(date, format, true).add(1, inputTypeValue);
    if (momentDate.year() < Number(DateUtil.MIN_YEAR)) {
      return DateUtil.MIN_DATE;
    } if (momentDate.year() > Number(DateUtil.MAX_YEAR)) {
      return DateUtil.MAX_DATE;
    }
    return momentDate.format('YYYY-MM-DD');
  }

  /**
   * Decrement a date by one day
   * @param {moment} date - date to decrement
   * @return {moment} The decremented moment date
   */
  static decrementDateByDay(date, format, inputTypeValue) {
    const momentDate = moment(date, format, true).subtract(1, inputTypeValue);
    if (momentDate.year() < Number(DateUtil.MIN_YEAR)) {
      return DateUtil.MIN_DATE;
    } if (momentDate.year() > Number(DateUtil.MAX_YEAR)) {
      return DateUtil.MAX_DATE;
    }
    return momentDate.format('YYYY-MM-DD');
  }

  /**
   * Return current date
   * @param {string} format - format for moment
   * @return {moment} The current date
   */
  static getCurrentDate() {
    const momentDate = moment();
    if (momentDate.year() < Number(DateUtil.MIN_YEAR)) {
      return DateUtil.MIN_DATE;
    } if (momentDate.year() > Number(DateUtil.MAX_YEAR)) {
      return DateUtil.MAX_DATE;
    }
    return momentDate.format('YYYY-MM-DD');
  }

  /**
   * Util to determine if the user agent indicates that it is macOS
   * @return {boolean}
   */

  static isMac = () => navigator.userAgent.indexOf('Mac') !== -1 && navigator.userAgent.indexOf('Win') === -1;
}

DateUtil.inputType = {
  DAY: 0,
  MONTH: 1,
  YEAR: 2,
};
DateUtil.dateOrder = {
  DMY: 'DMY',
  MDY: 'MDY',
  YMD: 'YMD',
};
DateUtil.inputTypeString = {
  DAYVALUE: 'd',
  MONTHVALUE: 'months',
  YEARVALUE: 'years',
};
DateUtil.ISO_EXTENDED_DATE_FORMAT = 'YYYY-MM-DD';
DateUtil.MIN_DATE = '1900-01-01';
DateUtil.MAX_DATE = '2100-12-31';
DateUtil.MIN_YEAR = '1900';
DateUtil.MAX_YEAR = '2100';

export default DateUtil;
