"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDays = addDays;
exports.addMonths = addMonths;
exports.addWeeks = addWeeks;
exports.addYears = addYears;
exports.allDaysDisabledAfter = allDaysDisabledAfter;
exports.allDaysDisabledBefore = allDaysDisabledBefore;
exports.cloneDate = cloneDate;
exports.equals = equals;
exports.formatDate = formatDate;
exports.getDate = getDate;
exports.getDay = getDay;
exports.getDayOfWeekCode = getDayOfWeekCode;
exports.getDaysDiff = getDaysDiff;
exports.getDefaultLocale = getDefaultLocale;
exports.getDefaultLocaleData = getDefaultLocaleData;
exports.getEffectiveMaxDate = getEffectiveMaxDate;
exports.getEffectiveMinDate = getEffectiveMinDate;
exports.getEndOfMonth = getEndOfMonth;
exports.getEndOfWeek = getEndOfWeek;
exports.getHightLightDaysMap = getHightLightDaysMap;
exports.getLocaleData = getLocaleData;
exports.getLocaleDataForLocale = getLocaleDataForLocale;
exports.getLocalizedDateForScreenReader = getLocalizedDateForScreenReader;
exports.getMonth = getMonth;
exports.getMonthInLocale = getMonthInLocale;
exports.getStartOfDate = getStartOfDate;
exports.getStartOfDay = getStartOfDay;
exports.getStartOfMonth = getStartOfMonth;
exports.getStartOfWeek = getStartOfWeek;
exports.getWeek = getWeek;
exports.getWeekdayMinInLocale = getWeekdayMinInLocale;
exports.getWeekdayShortInLocale = getWeekdayShortInLocale;
exports.getYear = getYear;
exports.isAfter = isAfter;
exports.isBefore = isBefore;
exports.isDate = isDate;
exports.isDayDisabled = isDayDisabled;
exports.isDayInRange = isDayInRange;
exports.isMoment = isMoment;
exports.isSameDay = isSameDay;
exports.isSameMonth = isSameMonth;
exports.localizeDate = localizeDate;
exports.newDate = newDate;
exports.newDateWithTimeZone = newDateWithTimeZone;
exports.now = now;
exports.parseDate = parseDate;
exports.registerLocale = registerLocale;
exports.safeDateFormat = safeDateFormat;
exports.setMonth = setMonth;
exports.setYear = setYear;
exports.subtractDays = subtractDays;
exports.subtractMonths = subtractMonths;
exports.subtractWeeks = subtractWeeks;
exports.subtractYears = subtractYears;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _DateUtil = _interopRequireDefault(require("../DateUtil"));
var dayOfWeekCodes = {
  1: 'mon',
  2: 'tue',
  3: 'wed',
  4: 'thu',
  5: 'fri',
  6: 'sat',
  7: 'sun'
};

// These functions are not exported so
// that we avoid magic strings like 'days'
function set(date, unit, to) {
  return date.set(unit, to);
}
function add(date, amount, unit) {
  return date.add(amount, unit);
}
function subtract(date, amount, unit) {
  return date.subtract(amount, unit);
}
function get(date, unit) {
  return date.get(unit);
}
function getStartOf(date, unit) {
  return date.startOf(unit);
}
function getEndOf(date, unit) {
  return date.endOf(unit);
}
function getDiff(date1, date2, unit) {
  return date1.diff(date2, unit);
}
function isSame(date1, date2, unit) {
  return date1.isSame(date2, unit);
}

// ** Date Constructors **

function newDate(point) {
  return (0, _momentTimezone.default)(point);
}
function newDateWithTimeZone(timeZone) {
  return (0, _momentTimezone.default)().tz(timeZone);
}
function now(timeZone) {
  if (timeZone == null) {
    return newDate();
  }
  return newDateWithTimeZone(timeZone);
}
function cloneDate(date) {
  return date.clone();
}
function parseDate(value, _ref) {
  var dateFormat = _ref.dateFormat,
    locale = _ref.locale;
  var m = (0, _momentTimezone.default)(value, dateFormat, locale || _momentTimezone.default.locale(), true);

  // Only support dates between 01/01/1900 and 12/31/2010 because the year dropdown only allows 1900 - 2100.
  if (m.isValid() && _DateUtil.default.isBetweenMinMaxDate(m.format('YYYY-MM-DD'))) {
    return m;
  }
  return null;
}

// ** Date "Reflection" **

function isMoment(date) {
  return _momentTimezone.default.isMoment(date);
}
function isDate(date) {
  return _momentTimezone.default.isDate(date);
}

// ** Date Formatting **

function formatDate(date, format) {
  return date.format(format);
}
function safeDateFormat(date, _ref2) {
  var dateFormat = _ref2.dateFormat,
    locale = _ref2.locale;
  return date && date.clone().locale(locale || _momentTimezone.default.locale()).format(Array.isArray(dateFormat) ? dateFormat[0] : dateFormat) || '';
}

// ** Date Setters **
function setMonth(date, month) {
  return set(date, 'month', month);
}
function setYear(date, year) {
  return set(date, 'year', year);
}

// ** Date Getters **
// Returns day of week
function getDay(date) {
  return get(date, 'day');
}
function getWeek(date) {
  return get(date, 'week');
}
function getMonth(date) {
  return get(date, 'month');
}
function getYear(date) {
  return get(date, 'year');
}

// Returns day of month
function getDate(date) {
  return get(date, 'date');
}
function getDayOfWeekCode(day) {
  return dayOfWeekCodes[day.isoWeekday()];
}

// *** Start of ***

function getStartOfDay(date) {
  return getStartOf(date, 'day');
}
function getStartOfWeek(date) {
  return getStartOf(date, 'week');
}
function getStartOfMonth(date) {
  return getStartOf(date, 'month');
}
function getStartOfDate(date) {
  return getStartOf(date, 'date');
}

// *** End of ***

function getEndOfWeek(date) {
  return getEndOf(date, 'week');
}
function getEndOfMonth(date) {
  return getEndOf(date, 'month');
}

// ** Date Math **

// *** Addition ***
function addDays(date, amount) {
  return add(date, amount, 'days');
}
function addWeeks(date, amount) {
  return add(date, amount, 'weeks');
}
function addMonths(date, amount) {
  return add(date, amount, 'months');
}
function addYears(date, amount) {
  return add(date, amount, 'years');
}

// *** Subtraction ***
function subtractDays(date, amount) {
  return subtract(date, amount, 'days');
}
function subtractWeeks(date, amount) {
  return subtract(date, amount, 'weeks');
}
function subtractMonths(date, amount) {
  return subtract(date, amount, 'months');
}
function subtractYears(date, amount) {
  return subtract(date, amount, 'years');
}

// ** Date Comparison **

function isBefore(date1, date2) {
  return date1.isBefore(date2);
}
function isAfter(date1, date2) {
  return date1.isAfter(date2);
}
function equals(date1, date2) {
  return date1.isSame(date2);
}
function isSameMonth(date1, date2) {
  return isSame(date1, date2, 'month');
}
function isSameDay(moment1, moment2) {
  if (moment1 && moment2) {
    return moment1.isSame(moment2, 'day');
  } else {
    return !moment1 && !moment2;
  }
}
function isDayInRange(day, startDate, endDate) {
  var before = startDate.clone().startOf('day').subtract(1, 'seconds');
  var after = endDate.clone().startOf('day').add(1, 'seconds');
  return day.clone().startOf('day').isBetween(before, after);
}

// *** Diffing ***

function getDaysDiff(date1, date2) {
  return getDiff(date1, date2, 'days');
}

// ** Date Localization **

function localizeDate(date, locale) {
  return date.clone().locale(locale || _momentTimezone.default.locale());
}
function getDefaultLocale() {
  return _momentTimezone.default.locale();
}
function getDefaultLocaleData() {
  return _momentTimezone.default.localeData();
}
function registerLocale(localeName, localeData) {
  _momentTimezone.default.defineLocale(localeName, localeData);
}
function getLocaleData(date) {
  return date.localeData();
}
function getLocaleDataForLocale(locale) {
  return _momentTimezone.default.localeData(locale);
}
function getWeekdayMinInLocale(locale, date) {
  return locale.weekdaysMin(date);
}
function getWeekdayShortInLocale(locale, date) {
  return locale.weekdaysShort(date);
}

// TODO what is this format exactly?
function getMonthInLocale(locale, date, format) {
  return locale.months(date, format);
}

// ** Utils for some components **

function isDayDisabled(day) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    minDate = _ref3.minDate,
    maxDate = _ref3.maxDate,
    excludeDates = _ref3.excludeDates,
    includeDates = _ref3.includeDates,
    filterDate = _ref3.filterDate;
  return minDate && day && day.isBefore(minDate, 'day') || maxDate && day && day.isAfter(maxDate, 'day') || excludeDates && day && excludeDates.some(function (excludeDate) {
    return isSameDay(day, excludeDate);
  }) || includeDates && day && !includeDates.some(function (includeDate) {
    return isSameDay(day, includeDate);
  }) || filterDate && day && !filterDate(day.clone()) || false;
}
function allDaysDisabledBefore(day, unit) {
  var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    minDate = _ref4.minDate,
    includeDates = _ref4.includeDates;
  var dateBefore = day.clone().subtract(1, unit);
  return minDate && dateBefore.isBefore(minDate, unit) || includeDates && includeDates.every(function (includeDate) {
    return dateBefore.isBefore(includeDate, unit);
  }) || false;
}
function allDaysDisabledAfter(day, unit) {
  var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    maxDate = _ref5.maxDate,
    includeDates = _ref5.includeDates;
  var dateAfter = day.clone().add(1, unit);
  return maxDate && dateAfter.isAfter(maxDate, unit) || includeDates && includeDates.every(function (includeDate) {
    return dateAfter.isAfter(includeDate, unit);
  }) || false;
}
function getEffectiveMinDate(_ref6) {
  var minDate = _ref6.minDate,
    includeDates = _ref6.includeDates;
  if (includeDates && minDate) {
    return _momentTimezone.default.min(includeDates.filter(function (includeDate) {
      return minDate.isSameOrBefore(includeDate, 'day');
    }));
  } else if (includeDates) {
    return _momentTimezone.default.min(includeDates);
  } else {
    return minDate;
  }
}
function getEffectiveMaxDate(_ref7) {
  var maxDate = _ref7.maxDate,
    includeDates = _ref7.includeDates;
  if (includeDates && maxDate) {
    return _momentTimezone.default.max(includeDates.filter(function (includeDate) {
      return maxDate.isSameOrAfter(includeDate, 'day');
    }));
  } else if (includeDates) {
    return _momentTimezone.default.max(includeDates);
  } else {
    return maxDate;
  }
}
function getHightLightDaysMap() {
  var highlightDates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var defaultClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'react-datepicker-day--highlighted';
  var dateClasses = new WeakMap();
  for (var i = 0, len = highlightDates.length; i < len; i++) {
    var obj = highlightDates[i];
    if (isMoment(obj)) {
      var key = obj.format('MM.DD.YYYY');
      var classNamesArr = dateClasses.get(key) || [];
      if (!classNamesArr.includes(defaultClassName)) {
        classNamesArr.push(defaultClassName);
        dateClasses.set(key, classNamesArr);
      }
    } else if ((0, _typeof2.default)(obj) === 'object') {
      var keys = Object.keys(obj);
      var className = keys[0];
      var arrOfMoments = obj[keys[0]];
      if (typeof className === 'string' && arrOfMoments.constructor === Array) {
        for (var k = 0, _len = arrOfMoments.length; k < _len; k++) {
          var _key = arrOfMoments[k].format('MM.DD.YYYY');
          var _classNamesArr = dateClasses.get(_key) || [];
          if (!_classNamesArr.includes(className)) {
            _classNamesArr.push(className);
            dateClasses.set(_key, _classNamesArr);
          }
        }
      }
    }
  }
  return dateClasses;
}

/**
 * Gets the localized date in the long month/day/year format (i.e; January 15, 2019).
 * If the date is disabled, the translated string for Disabled is appended to the date string.
 * @param {Moment} date - The moment date to get the localized string.
 * @param {Object} props - The date props.
 * @return {string} - The localized date string. The string is empty if date is null or invalid.
 */
function getLocalizedDateForScreenReader(date, props) {
  var intl = props.intl,
    locale = props.locale;
  var localizedDateLabel = '';
  if (date && date.isValid()) {
    var localizedDate = localizeDate(date, locale);
    localizedDateLabel = localizedDate.format('dddd, LL');
    if (intl && isDayDisabled(date, props)) {
      localizedDateLabel = localizedDateLabel.concat(' ', intl.formatMessage({
        id: 'Terra.datePicker.disabled'
      }));
    }
  }
  return localizedDateLabel;
}