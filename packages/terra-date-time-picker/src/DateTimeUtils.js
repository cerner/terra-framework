import moment from 'moment-timezone';
import DateUtil from 'terra-date-picker/lib/DateUtil';
import TimeUtil from 'terra-time-input/lib/TimeUtil';

class DateTimeUtils {
  /**
   * Checks if the ISO string contains the time (hh:mm) part.
   * @param {string} iSODate - The ISO string
   * @return {boolean} - True if the ISO string contains the time. False, otherwise.
   */
  static hasTime(iSODate, timeZone) {
    if (!DateTimeUtils.createSafeDate(iSODate, timeZone)) {
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
   * Synchronize the date and time for a given the base moment object.
   * Because a moment object must have the date portion, if the provided iSOdate is invalid,
   * The base moment object will not synchronize the time if the provided time is invalid.
   * @param {object} momentDate - The moment object to synchronize the date and time.
   * @param {string} iSOdate - The date string to synchronize with the moment object.
   * @param {string} time - The time to synchronize with the moment object.
   * @param {boolean} hasSeconds - If true seconds will be synchronized as well
   * @return {object} - The synchronized moment object.
   */
  static syncDateTime(momentDate, iSOdate, time, hasSeconds) {
    const date = moment(iSOdate);

    // If the base momentDate is valid, sync the date and time is they are valid.
    if (momentDate && momentDate.isValid()) {
      let tempDate = momentDate.clone();

      if (date.isValid()) {
        tempDate.year(date.get('year')).month(date.get('month')).date(date.get('date'));
      }

      if (time && ((!hasSeconds && time.length === 5) || (hasSeconds && time.length === 8))) {
        tempDate = DateTimeUtils.updateTime(tempDate, time, hasSeconds);
      }

      return tempDate;
    }

    // If the base momentDate is invalid, use the iSOdate as the base and update the time if valid.
    if (date.isValid()) {
      let tempDate = date.clone();

      if (time && ((!hasSeconds && time.length === 5) || (hasSeconds && time.length === 8))) {
        tempDate = DateTimeUtils.updateTime(tempDate, time, hasSeconds);
      }

      return tempDate;
    }

    // Neither the base momentDate nor the iSOdate is valid.
    return momentDate;
  }

  /**
   * Synchronize only the time for a given moment object.
   * @param {object} momentDate - The moment object to synchronize the date and time.
   * @param {string} time - The time to synchronize with the moment object.
   * @param {boolean} hasSeconds - If true seconds will be processed
   * @return {object} - The synchronized moment object.
   */
  static updateTime(momentDate, time, hasSeconds) {
    if (!momentDate || !momentDate.isValid()) {
      return null;
    }

    const newDate = momentDate.clone();
    const timeFormat = hasSeconds ? 'HH:mm:ss' : 'HH:mm';
    const date = moment(time, timeFormat, true);

    if (hasSeconds) {
      return newDate.hour(date.get('hour')).minute(date.get('minute')).second(date.get('second'));
    }

    return newDate.hour(date.get('hour')).minute(date.get('minute'));
  }

  /**
   * Gets the time from a date and time
   * @param {string} time An ISO 8601 string to get the time of
   * @param {boolean} hasSeconds Whether or not seconds should be retrieved
   * @return {string} The time from the date and time string
   */
  static getTime(time, hasSeconds) {
    const timeFormat = hasSeconds ? 'HH:mm:ss' : 'HH:mm';
    return DateUtil.formatISODate(time, timeFormat);
  }

  /**
   * Determines if the date and time are valid and conform to the given format.
   * @param {string} date - The date to validate.
   * @param {string} time - The time to validate.
   * @param {string} format - The date/time format to use for the validation.
   * @param {boolean} hasSeconds Whether or not the time should consider having seconds valid
   * @return {boolean} - True if both the date and time are valid and conform to the format.
   */
  static isValidDateTime(date, time, format, hasSeconds) {
    return DateUtil.isValidDate(date, format) && DateTimeUtils.isValidTime(time, hasSeconds);
  }

  /**
   * Determines if the time is a valid time in the HH:mm (where hasSeconds is false) or
   * HH:mm:ss (where hasSeconds is true) formats
   * @param {string} time - The time to validate.
   * @param {boolean} hasSeconds Whether or not the time should consider having seconds valid
   * @return {boolean} - True if the time is valid.
   */
  static isValidTime(time, hasSeconds) {
    const timeFormat = hasSeconds ? 'HH:mm:ss' : 'HH:mm';
    const timeMoment = moment(time, timeFormat, true);
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

    const localizedDateTime = moment.tz(dateTime.format(), dateTime.tz());
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
   * @param {string} ambiguousDateTime - The ISO date time with the ambiguous hour.
   * @return {string} - The daylight savings time zone offset display.
   */
  static getDaylightSavingTZDisplay(ambiguousDateTime) {
    const daylightSavingsDateTime = moment(ambiguousDateTime);
    if (!daylightSavingsDateTime.isValid()) {
      return '';
    }

    daylightSavingsDateTime.subtract(1, 'days');
    return daylightSavingsDateTime.tz(daylightSavingsDateTime.tz()).format('z');
  }

  /**
   * Gets the long daylight savings time zone offset display. (e.g. America/Chicago CDT -5:00)
   * @param {string} ambiguousDateTime - The ISO date time with the ambiguous hour.
   * @return {string} - The long daylight savings time zone offset display.
   */
  static getDaylightSavingExpandedTZDisplay(ambiguousDateTime) {
    const daylightSavingsDateTime = moment(ambiguousDateTime);
    if (!daylightSavingsDateTime.isValid()) {
      return '';
    }

    daylightSavingsDateTime.subtract(1, 'days');
    const timezone = daylightSavingsDateTime.tz();
    const momentWithTimeZone = daylightSavingsDateTime.tz(timezone);
    return moment.tz.zone(timezone).name + momentWithTimeZone.format(' z Z');
  }

  /**
   * Gets the standard time zone offset display. (e.g. CST)
   * @param {string} ambiguousDateTime - The ISO date time with the ambiguous hour.
   * @return {string} - The standard time zone offset display.
   */
  static getStandardTZDisplay(ambiguousDateTime) {
    const standardDateTime = moment(ambiguousDateTime);
    if (!standardDateTime.isValid()) {
      return '';
    }

    standardDateTime.add(1, 'days');
    return standardDateTime.tz(standardDateTime.tz()).format('z');
  }

  /**
   * Gets the long standard time zone offset display. (e.g. America/Chicago CST -6:00)
   * @param {string} ambiguousDateTime - The ISO date time with the ambiguous hour.
   * @return {string} - The long standard time zone offset display.
   */
  static getStandardExpandedTZDisplay(ambiguousDateTime) {
    const standardDateTime = moment(ambiguousDateTime);
    if (!standardDateTime.isValid()) {
      return '';
    }

    standardDateTime.add(1, 'days');
    const timezone = standardDateTime.tz();
    const momentWithTimeZone = standardDateTime.tz(timezone);
    return moment.tz.zone(timezone).name + momentWithTimeZone.format(' z Z');
  }

  /**
   * Converts a date/time string in the given format to a moment object.
   * @param {string} date - The date string for the conversion.
   * @param {string} time - The time string for the conversion.
   * @param {string} dateformat - The format of the date and time strings.
   * @param {boolean} hasSeconds - If true seconds will be converted
   * @return {object} - The moment object representing the given date and time.
   */
  static convertDateTimeStringToMomentObject(date, time, dateformat, hasSeconds, timeZone) {
    return DateTimeUtils.updateTime(DateTimeUtils.createSafeDate(DateUtil.convertToISO8601(date, dateformat), timeZone), time, hasSeconds);
  }

  /**
   * Creates a moment object using the provided date string. Moment is unable to initialize a valid date if the date passed in is
   * null, empty string, or alpha characters and undefined would be returned.
   * @param {string|undefined} date - The date to convert. Expect to be in ISO format.
   * @return {object|undefined} - The moment object. Undefined if unable to convert.
   */
  static createSafeDate(date, timeZone) {
    if (!date) {
      return undefined;
    }

    const momentDate = (timeZone && moment.tz.zone(timeZone) ? moment.tz(date, timeZone) : moment.tz(date, moment.tz.guess()));

    return momentDate.isValid() ? momentDate : undefined;
  }
}

DateTimeUtils.FORMAT_12_HOUR = TimeUtil.FORMAT_12_HOUR;
DateTimeUtils.FORMAT_24_HOUR = TimeUtil.FORMAT_24_HOUR;

export default DateTimeUtils;
