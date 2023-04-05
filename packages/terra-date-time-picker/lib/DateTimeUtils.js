"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _DateUtil = _interopRequireDefault(require("terra-date-picker/lib/DateUtil"));
var _TimeUtil = _interopRequireDefault(require("terra-time-input/lib/TimeUtil"));
var DateTimeUtils = /*#__PURE__*/function () {
  function DateTimeUtils() {
    (0, _classCallCheck2.default)(this, DateTimeUtils);
  }
  (0, _createClass2.default)(DateTimeUtils, null, [{
    key: "hasTime",
    value:
    /**
     * Checks if the ISO string contains the time (hh:mm) part.
     * @param {string} iSODate - The ISO string
     * @param {string} timeZone - Time zone value for the moment object.
     * @return {boolean} - True if the ISO string contains the time. False, otherwise.
     */
    function hasTime(iSODate, timeZone) {
      if (!DateTimeUtils.createSafeDate(iSODate, timeZone)) {
        return false;
      }
      var timePart = '';

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
  }, {
    key: "syncDateTime",
    value: function syncDateTime(momentDate, iSOdate, time, hasSeconds) {
      var date = (0, _momentTimezone.default)(iSOdate);

      // If the base momentDate is valid, sync the date and time is they are valid.
      if (momentDate && momentDate.isValid()) {
        var tempDate = momentDate.clone();
        if (date.isValid()) {
          tempDate.year(date.get('year')).month(date.get('month')).date(date.get('date'));
        }
        if (time && (!hasSeconds && time.length === 5 || hasSeconds && time.length === 8)) {
          tempDate = DateTimeUtils.updateTime(tempDate, time, hasSeconds);
        }
        return tempDate;
      }

      // If the base momentDate is invalid, use the iSOdate as the base and update the time if valid.
      if (date.isValid()) {
        var _tempDate = date.clone();
        if (time && (!hasSeconds && time.length === 5 || hasSeconds && time.length === 8)) {
          _tempDate = DateTimeUtils.updateTime(_tempDate, time, hasSeconds);
        }
        return _tempDate;
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
  }, {
    key: "updateTime",
    value: function updateTime(momentDate, time, hasSeconds) {
      if (!momentDate || !momentDate.isValid()) {
        return null;
      }
      var newDate = momentDate.clone();
      var timeFormat = hasSeconds ? 'HH:mm:ss' : 'HH:mm';
      var date = (0, _momentTimezone.default)(time, timeFormat, true);
      var timeZone = momentDate.tz() || DateTimeUtils.getLocalTimeZone();
      if (date.isValid()) {
        var dateTimeString = newDate.format('YYYY-MM-DD').concat(' ').concat(date.format(timeFormat));
        return _momentTimezone.default.tz(dateTimeString, timeZone);
      }
      return momentDate;
    }

    /**
     * Gets the time from a date and time
     * @param {string} time An ISO 8601 string to get the time of
     * @param {boolean} hasSeconds Whether or not seconds should be retrieved
     * @param {string} timeZone - Time zone value for the moment object.
     * @return {string} The time from the date and time string
     */
  }, {
    key: "getTime",
    value: function getTime(time, hasSeconds, timeZone) {
      var timeFormat = hasSeconds ? 'HH:mm:ss' : 'HH:mm';
      var momentDate = DateTimeUtils.createSafeDate(time, timeZone);
      return _DateUtil.default.formatMomentDate(momentDate, timeFormat);
    }

    /**
     * Determines if the date and time are valid and conform to the given format.
     * @param {string} date - The date to validate.
     * @param {string} time - The time to validate.
     * @param {string} format - The date/time format to use for the validation.
     * @param {boolean} hasSeconds Whether or not the time should consider having seconds valid
     * @return {boolean} - True if both the date and time are valid and conform to the format.
     */
  }, {
    key: "isValidDateTime",
    value: function isValidDateTime(date, time, format, hasSeconds) {
      return _DateUtil.default.isValidDate(date, format) && DateTimeUtils.isValidTime(time, hasSeconds);
    }

    /**
     * Determines if the time is a valid time in the HH:mm (where hasSeconds is false) or
     * HH:mm:ss (where hasSeconds is true) formats
     * @param {string} time - The time to validate.
     * @param {boolean} hasSeconds Whether or not the time should consider having seconds valid
     * @return {boolean} - True if the time is valid.
     */
  }, {
    key: "isValidTime",
    value: function isValidTime(time, hasSeconds) {
      var timeFormat = hasSeconds ? 'HH:mm:ss' : 'HH:mm';
      var timeMoment = (0, _momentTimezone.default)(time, timeFormat, true);
      return timeMoment.isValid();
    }

    /**
     * Determines if the given moment date object is in the ambiguous hour.
     * @param {object} dateTime - The moment object to check for the ambiguous hour.
     * @return {boolean} - True if the moment object is in the ambiguous hour.
     */
  }, {
    key: "checkAmbiguousTime",
    value: function checkAmbiguousTime(dateTime) {
      if (!dateTime || !dateTime.isValid()) {
        return false;
      }
      var localizedDateTime = _momentTimezone.default.tz(dateTime.format(), dateTime.tz());
      var beforeDaylightSaving = localizedDateTime.clone();
      var afterDaylightSaving = localizedDateTime.clone();

      // The localizedDateTime could be before or after the time change (e.g. the offset is -500 or -600 in CST)
      // To determine if this is the ambiguous hour, we need to add 1 hour as well as subtract 1 hour to account for both directions.
      beforeDaylightSaving.add(1, 'hour');
      afterDaylightSaving.subtract(1, 'hour');
      var isAmbiguousBeforeChange = localizedDateTime.isDST() && !beforeDaylightSaving.isDST();
      var isAmbiguousAfterChange = !localizedDateTime.isDST() && afterDaylightSaving.isDST();
      return isAmbiguousBeforeChange || isAmbiguousAfterChange;
    }

    /**
     * Gets the daylight savings time zone offset display. (e.g. CDT)
     * @param {string} ambiguousDateTime - The ISO date time with the ambiguous hour.
     * @param {string} timeZone - Time zone value for the moment object.
     * @return {string} - The daylight savings time zone offset display.
     */
  }, {
    key: "getDaylightSavingTZDisplay",
    value: function getDaylightSavingTZDisplay(ambiguousDateTime, timeZone) {
      var daylightSavingsDateTime = DateTimeUtils.createSafeDate(ambiguousDateTime, timeZone);
      if (!daylightSavingsDateTime.isValid()) {
        return '';
      }
      daylightSavingsDateTime.subtract(1, 'days');
      return daylightSavingsDateTime.tz(daylightSavingsDateTime.tz()).format('z');
    }

    /**
     * Gets the long daylight savings time zone offset display. (e.g. America/Chicago CDT -5:00)
     * @param {string} ambiguousDateTime - The ISO date time with the ambiguous hour.
     * @param {string} timeZone - Time zone value for the moment object.
     * @return {string} - The long daylight savings time zone offset display.
     */
  }, {
    key: "getDaylightSavingExpandedTZDisplay",
    value: function getDaylightSavingExpandedTZDisplay(ambiguousDateTime, timeZone) {
      var daylightSavingsDateTime = DateTimeUtils.createSafeDate(ambiguousDateTime, timeZone);
      if (!daylightSavingsDateTime.isValid()) {
        return '';
      }
      daylightSavingsDateTime.subtract(1, 'days');
      var timezone = daylightSavingsDateTime.tz();
      var momentWithTimeZone = daylightSavingsDateTime.tz(timezone);
      return _momentTimezone.default.tz.zone(timezone).name + momentWithTimeZone.format(' z Z');
    }

    /**
     * Gets the standard time zone offset display. (e.g. CST)
     * @param {string} ambiguousDateTime - The ISO date time with the ambiguous hour.
     * @param {string} timeZone - Time zone value for the moment object.
     * @return {string} - The standard time zone offset display.
     */
  }, {
    key: "getStandardTZDisplay",
    value: function getStandardTZDisplay(ambiguousDateTime, timeZone) {
      var standardDateTime = DateTimeUtils.createSafeDate(ambiguousDateTime, timeZone);
      if (!standardDateTime.isValid()) {
        return '';
      }
      standardDateTime.add(1, 'days');
      return standardDateTime.tz(standardDateTime.tz()).format('z');
    }

    /**
     * Gets the long standard time zone offset display. (e.g. America/Chicago CST -6:00)
     * @param {string} ambiguousDateTime - The ISO date time with the ambiguous hour.
     * @param {string} timeZone - Time zone value for the moment object.
     * @return {string} - The long standard time zone offset display.
     */
  }, {
    key: "getStandardExpandedTZDisplay",
    value: function getStandardExpandedTZDisplay(ambiguousDateTime, timeZone) {
      var standardDateTime = DateTimeUtils.createSafeDate(ambiguousDateTime, timeZone);
      if (!standardDateTime.isValid()) {
        return '';
      }
      standardDateTime.add(1, 'days');
      var timezone = standardDateTime.tz();
      var momentWithTimeZone = standardDateTime.tz(timezone);
      return _momentTimezone.default.tz.zone(timezone).name + momentWithTimeZone.format(' z Z');
    }

    /**
     * Converts a date/time string in the given format to a moment object.
     * @param {string} date - The date string for the conversion.
     * @param {string} time - The time string for the conversion.
     * @param {string} dateformat - The format of the date and time strings.
     * @param {boolean} hasSeconds - If true seconds will be converted
     * @param {string} timeZone - Time zone value for the moment object.
     * @return {object} - The moment object representing the given date and time.
     */
  }, {
    key: "convertDateTimeStringToMomentObject",
    value: function convertDateTimeStringToMomentObject(date, time, dateformat, hasSeconds, timeZone) {
      var dateTime = DateTimeUtils.createSafeDate(_DateUtil.default.convertToISO8601(date, dateformat), timeZone);
      return DateTimeUtils.updateTime(dateTime, time, hasSeconds);
    }

    /**
     * Creates a moment object using the provided date string. Moment is unable to initialize a valid date if the date passed in is
     * null, empty string, or alpha characters and undefined would be returned.
     * @param {string|undefined} date - The date to convert. Expect to be in ISO format.
     * @param {string} timeZone - Time zone value for the moment object.
     * @return {object|undefined} - The moment object. Undefined if unable to convert.
     */
  }, {
    key: "createSafeDate",
    value: function createSafeDate(date, timeZone) {
      if (!date) {
        return undefined;
      }
      var momentDate = timeZone && _momentTimezone.default.tz.zone(timeZone) ? _momentTimezone.default.tz(date, timeZone) : _momentTimezone.default.tz(date, DateTimeUtils.getLocalTimeZone());
      return momentDate.isValid() ? momentDate : undefined;
    }

    /**
     * Checks whether the passed parameter is a moment object or not
     * @param {string|object} value - Value to be checked
     * @return {boolean} - Returns true if passed value is a moment object
     */
  }, {
    key: "isMomentObject",
    value: function isMomentObject(value) {
      return _momentTimezone.default.isMoment(value);
    }

    /**
     * Creates moment object with local timezone.
     * @return {string} - Local/Browser time zone string.
     */
  }, {
    key: "getLocalTimeZone",
    value: function getLocalTimeZone() {
      return _momentTimezone.default.tz.guess();
    }

    /**
     * Checks if the intitialTimeZone is a valid timezone string.
     * If valid the provided timezone is returned or local/browser timezone is returned.
     * @param {string} intitialTimeZone - timezone string
     * @return {string} - Returns the timezone string if it is valid or returns the local timezone string.
     */
  }, {
    key: "checkIfTimeZoneIsValid",
    value: function checkIfTimeZoneIsValid(intitialTimeZone) {
      return _momentTimezone.default.tz.zone(intitialTimeZone) ? intitialTimeZone : DateTimeUtils.getLocalTimeZone();
    }
  }]);
  return DateTimeUtils;
}();
DateTimeUtils.FORMAT_12_HOUR = _TimeUtil.default.FORMAT_12_HOUR;
DateTimeUtils.FORMAT_24_HOUR = _TimeUtil.default.FORMAT_24_HOUR;
var _default = DateTimeUtils;
exports.default = _default;