import moment from 'moment-timezone';
import DateUtil from 'terra-date-picker/lib/DateUtil';

class DateTimeUtils {
  /**
   * Checks if the ISO string contains the time (hh:mm) part.
   * @param {string} iSODate - The ISO string
   * @return {boolean} - True if the ISO string contains the time. False, otherwise.
   */
  static hasTime(iSODate) {
    if (!DateUtil.createSafeDate(iSODate)) {
      return false;
    }

    let timePart = '';

    // The time part in a valid ISO 8601 string is separated from the date part either by a space or 'T'.
    if (iSODate.indexOf(' ') > 0) {
      // eslint-disable-next-line prefer-destructuring
      timePart = iSODate.split(' ')[1];
    }

    if (iSODate.indexOf('T') > 0) {
      // eslint-disable-next-line prefer-destructuring
      timePart = iSODate.split('T')[1];
    }

    return timePart.length > 0;
  }

  /**
   * Synchronize the date and time for a given moment object.
   * @param {object} momentDate - The moment object to synchronize the date and time.
   * @param {string} iOSdate - The date string to synchronize with the moment object.
   * @param {string} time - The time to synchronize with the moment object.
   * @return {object} - The synchronized moment object.
   */
  static syncDateTime(momentDate, iOSdate, time) {
    const date = moment(iOSdate);
    let newDate = momentDate ? momentDate.clone() : date;

    // If momentDate was null, a new moment date needs to be created and sync'd with the entered time.
    if (momentDate === null && time && time.length === 5) {
      newDate = DateTimeUtils.updateTime(newDate, time);
    }

    return newDate.year(date.get('year')).month(date.get('month')).date(date.get('date'));
  }

  /**
   * Synchronize only the time for a given moment object.
   * @param {object} momentDate - The moment object to synchronize the date and time.
   * @param {string} time - The time to synchronize with the moment object.
   * @return {object} - The synchronized moment object.
   */
  static updateTime(momentDate, time) {
    if (!momentDate || !momentDate.isValid()) {
      return null;
    }

    const newDate = momentDate.clone();
    const date = moment(time, 'HH:mm', true);

    return newDate.hour(date.get('hour')).minute(date.get('minute'));
  }

  /**
   * Determines if the date and time are valid and conform to the given format.
   * @param {string} date - The date to validate.
   * @param {string} time - The time to validate.
   * @param {string} format - The date/time format to use for the validation.
   * @return {boolean} - True if both the date and time are valid and conform to the format.
   */
  static isValidDateTime(date, time, format) {
    return DateUtil.isValidDate(date, format) && DateTimeUtils.isValidTime(time);
  }

  /**
   * Determines if the time is a valid time in the HH:mm format
   * @param {string} time - The time to validate.
   * @return {boolean} - True if the time is valid.
   */
  static isValidTime(time) {
    const timeMoment = moment(time, 'HH:mm', true);
    return timeMoment.isValid();
  }

  /**
   * Determines if the given moment date object is in the ambiguous hour.
   * @param {object} dateTime - The moment object to check for the ambiguous hour.
   * @return {boolean} - True if the moment object is in the ambiguous hour.
   */
  static checkAmbiguousTime(dateTime) {
    if (!dateTime || !dateTime.isValid()) {
      return false;
    }

    const localizedDateTime = moment.tz(dateTime.format(), moment.tz.guess());
    const beforeDaylightSaving = localizedDateTime.clone();
    const afterDaylightSaving = localizedDateTime.clone();

    // The localizedDateTime could be before or after the time change (e.g. the offset is -500 or -600 in CST)
    // To determine if this is the ambiguous hour, we need to add 1 hour as well as subtract 1 hour to account for both directions.
    beforeDaylightSaving.add(1, 'hour');
    afterDaylightSaving.subtract(1, 'hour');

    const isAmbiguousBeforeChange = localizedDateTime.isDST() && !beforeDaylightSaving.isDST();
    const isAmbiguousAfterChange = !localizedDateTime.isDST() && afterDaylightSaving.isDST();

    return isAmbiguousBeforeChange || isAmbiguousAfterChange;
  }

  /**
   * Gets the daylight savings time zone offset display. (e.g. CDT)
   * @return {string} - The daylight savings time zone offset display.
   */
  static getDaylightSavingTZDisplay() {
    return moment('2017-07-01').tz(moment.tz.guess()).format('z');
  }

  /**
   * Gets the standard time zone offset display. (e.g. CST)
   * @return {string} - The standard time zone offset display.
   */
  static getStandardTZDisplay() {
    return moment('2017-01-01').tz(moment.tz.guess()).format('z');
  }

  /**
   * Converts a date/time string in the given format to a moment object.
   * @param {string} date - The date string for the conversion.
   * @param {string} time - The time string for the conversion.
   * @param {string} dateformat - The format of the date and time strings.
   * @return {object} - The moment object representing the given date and time.
   */
  static convertDateTimeStringToMomentObject(date, time, dateformat) {
    return DateTimeUtils.updateTime(DateUtil.createSafeDate(DateUtil.convertToISO8601(date, dateformat)), time);
  }
}

export default DateTimeUtils;
