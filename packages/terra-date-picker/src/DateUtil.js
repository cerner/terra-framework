/* eslint-disable no-underscore-dangle */
import moment from 'moment';

class DateUtil {
  /**
   * Creates a moment object using the provided date string.
   * @param {string|undefined} date - The date to convert. Expect to be in ISO format.
   * @return {object|undefined} - The moment object. Undefined if unable to convert.
   */
  static createSafeDate(date) {
    if (!date || (date && date.length === 0)) {
      return undefined;
    }

    const momentDate = moment(date);
    return momentDate.isValid() ? momentDate : undefined;
  }

  /**
   * Filters any invalid dates in the provided list of dates
   * @param {array} date - The array of dates to filter.
   * @return {array|undefined} - The array of moment objects each representing the valid dates. Undefined if there are no valid dates.
   */
  static filterInvalidDates(dates) {
    debugger;
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
   * Determines if a date if in the range of two given dates.
   * @param {object} sourceDate - The moment date to check if it is within range.
   * @param {object} minDate - The moment date that represents the minimum date of the range.
   * @param {object} maxDate - The moment date that represents the maximum date of the range.
   * @return {boolean} - True if the sourceDate is within range. False, otherwise.
   */
  static isDateOutOfRange(sourceDate, startDate, endDate) {
    if (!sourceDate || !sourceDate.isValid()
      || !startDate || !startDate.isValid()
      || !endDate || !endDate.isValid()) {
      return false;
    }

    if (sourceDate.isSameOrAfter(startDate) && sourceDate.isSameOrBefore(endDate)) {
      return false;
    }

    return true;
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
}

export default DateUtil;
