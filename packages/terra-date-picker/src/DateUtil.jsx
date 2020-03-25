/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

class DateUtil {
  /**
   * Creates a moment object using the provided date string. Moment is unable to initialize a valid date if the date passed in is
   * null, empty string, or alpha characters and undefined would be returned.
   * @param {string|undefined} date - The date to convert. Expect to be in ISO format.
   * @return {object|undefined} - The moment object. Undefined if unable to convert.
   */
  static createSafeDate(date) {
    if (!date) {
      return undefined;
    }

    let momentDate = moment(date, DateUtil.ISO_EXTENDED_DATE_FORMAT, true);
    if (!momentDate || !momentDate.isValid()) {
      // This should allow DateTime inputs that used to work in the moment.ISO_8601 to still pass but discard the time from the value.
      momentDate = moment(date.slice(0, 10), DateUtil.ISO_EXTENDED_DATE_FORMAT, true);
    }
    return momentDate.isValid() ? momentDate : undefined;
  }

  /**
   * Determines the default value for the date picker.
   * @param {Object} props - The component props.
   * @return {object|undefined} - The default date value.
   */
  static defaultValue(props) {
    const { selectedDate, value } = props;

    if (value !== undefined) {
      return DateUtil.createSafeDate(value);
    }

    return DateUtil.createSafeDate(selectedDate);
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
   * Converts a date string in the given format to the ISO format with only the date part.
   * @param {string} date - The date string to convert.
   * @param {string} format - The format of the date string.
   * @return {string} - The converted ISO string.
   */
  static convertToISO8601(date, format) {
    if (date && format) {
      const momentDate = moment(date, format);
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
   * Returns an easily parsable date format string.
   * @param {string} formatOrder - The locale variant from dateFormatOrder.
   */
  static getDateFormatVariant(formatOrder) {
    let dateVariant;

    if (formatOrder === '0') {
      dateVariant = 'MM-DD-YYYY';
    } else if (formatOrder === '1') {
      dateVariant = 'YYYY-MM-DD';
    } else {
      dateVariant = 'DD-MM-YYYY';
    }

    return dateVariant;
  }

  /**
   * Returns an object consisting of placeholder strings and a delimiter,
   * based on the date format.
   * @param {string} variant - Variant string obtained from getDateFormat.
   * @param {string} placeholder - Passed on placeholder prop string.
   */
  static getPlaceholderValues(variant, placeholder) {
    let dateMonth;
    let dateDay;
    let dateYear;
    let dateDelimiter;
    let ph = placeholder;

    if (!ph) {
      ph = 'MM-DD-YYYY';
    }

    if (variant === 'MM-DD-YYYY') {
      dateMonth = ph.substr(0, 2);
      dateDay = ph.substr(3, 2);
      dateYear = ph.substr(6, 4);
    } else if (variant === 'YYYY-MM-DD') {
      dateMonth = ph.substr(5, 2);
      dateDay = ph.substr(8, 2);
      dateYear = ph.substr(0, 4);
      dateDelimiter = '-';
    } else {
      dateMonth = ph.substr(3, 2);
      dateDay = ph.substr(0, 2);
      dateYear = ph.substr(6, 4);
      if (ph[2] === '.') {
        dateDelimiter = '.';
      }
    }

    if (!dateDelimiter) {
      dateDelimiter = '/';
    }

    return {
      month: dateMonth,
      day: dateDay,
      year: dateYear,
      delimiter: dateDelimiter,
    };
  }

  /**
   * Returns a component layout based on locale format.
   * @param {string} order - Layout order, based on the locale date order variant.
   * @param {object} spacer - The spacer component with the locale appropriate delimiter.
   * @param {object} month - The date month component.
   * @param {object} day - The date day component.
   * @param {object} year - The date year component.
   */
  static getInputLayout(order, spacer, month, day, year) {
    let formatOrder;
    if (order === 'MM-DD-YYYY') {
      formatOrder = (
        <>
          {month}
          {spacer}
          {day}
          {spacer}
          {year}
        </>
      );
    } else if (order === 'YYYY-MM-DD') {
      formatOrder = (
        <>
          {year}
          {spacer}
          {month}
          {spacer}
          {day}
        </>
      );
    } else {
      formatOrder = (
        <>
          {day}
          {spacer}
          {month}
          {spacer}
          {year}
        </>
      );
    }

    return formatOrder;
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
    return momentDate && momentDate.isValid() ? momentDate.format(format, true) : undefined;
  }

  /**
   * Determines if a provided date input value is valid.
   * Valid inputs are either empty strings or contain only numeric, `/`, and '.' characters.
   * @param {String} value Value to validate
   * @return True if the value is valid, false otherwise.
   */
  static validDateInput(value) {
    /* eslint-disable-next-line no-useless-escape */
    return value.length === 0 || /^[\d\/.-]+$/.test(value);
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
}

DateUtil.inputType = {
  MONTH: 0,
  DAY: 1,
  YEAR: 2,
};

DateUtil.ISO_EXTENDED_DATE_FORMAT = 'YYYY-MM-DD';

export default DateUtil;
