import moment from 'moment-timezone'
import DateUtil from '../DateUtil';

const dayOfWeekCodes = {
  1: 'mon',
  2: 'tue',
  3: 'wed',
  4: 'thu',
  5: 'fri',
  6: 'sat',
  7: 'sun'
}

// These functions are not exported so
// that we avoid magic strings like 'days'
function set (date, unit, to) {
  return date.set(unit, to)
}

function add (date, amount, unit) {
  return date.add(amount, unit)
}

function subtract (date, amount, unit) {
  return date.subtract(amount, unit)
}

function get (date, unit) {
  return date.get(unit)
}

function getStartOf (date, unit) {
  return date.startOf(unit)
}

function getEndOf (date, unit) {
  return date.endOf(unit)
}

function getDiff (date1, date2, unit) {
  return date1.diff(date2, unit)
}

function isSame (date1, date2, unit) {
  return date1.isSame(date2, unit)
}

// ** Date Constructors **

export function newDate (point) {
  return moment(point)
}

export function newDateWithTimeZone (timeZone) {
  return moment().tz(timeZone);
}

export function now (timeZone) {
  if (timeZone == null) {
    return newDate()
  }
  return newDateWithTimeZone(timeZone)
}

export function cloneDate (date) {
  return date.clone()
}

export function parseDate (value, { dateFormat, locale }) {
  const m = moment(value, dateFormat, locale || moment.locale(), true)

  // Only support dates between 01/01/1900 and 12/31/2010 because the year dropdown only allows 1900 - 2100.
  if (m.isValid() && DateUtil.isBetweenMinMaxDate(m.format('YYYY-MM-DD'))) {
    return m;
  }

  return null;
}

// ** Date "Reflection" **

export function isMoment (date) {
  return moment.isMoment(date)
}

export function isDate (date) {
  return moment.isDate(date)
}

// ** Date Formatting **

export function formatDate (date, format) {
  return date.format(format)
}

export function safeDateFormat (date, { dateFormat, locale }) {
  return (date && date.clone()
    .locale(locale || moment.locale())
    .format(Array.isArray(dateFormat) ? dateFormat[0] : dateFormat)) || ''
}

// ** Date Setters **
export function setMonth (date, month) {
  return set(date, 'month', month)
}

export function setYear (date, year) {
  return set(date, 'year', year)
}

// ** Date Getters **
// Returns day of week
export function getDay (date) {
  return get(date, 'day')
}

export function getWeek (date) {
  return get(date, 'week')
}

export function getMonth (date) {
  return get(date, 'month')
}

export function getYear (date) {
  return get(date, 'year')
}

// Returns day of month
export function getDate (date) {
  return get(date, 'date')
}

export function getDayOfWeekCode (day) {
  return dayOfWeekCodes[day.isoWeekday()]
}

// *** Start of ***

export function getStartOfDay (date) {
  return getStartOf(date, 'day')
}

export function getStartOfWeek (date) {
  return getStartOf(date, 'week')
}
export function getStartOfMonth (date) {
  return getStartOf(date, 'month')
}

export function getStartOfDate (date) {
  return getStartOf(date, 'date')
}

// *** End of ***

export function getEndOfWeek (date) {
  return getEndOf(date, 'week')
}

export function getEndOfMonth (date) {
  return getEndOf(date, 'month')
}

// ** Date Math **

// *** Addition ***
export function addDays (date, amount) {
  return add(date, amount, 'days')
}

export function addWeeks (date, amount) {
  return add(date, amount, 'weeks')
}

export function addMonths (date, amount) {
  return add(date, amount, 'months')
}

export function addYears (date, amount) {
  return add(date, amount, 'years')
}

// *** Subtraction ***
export function subtractDays (date, amount) {
  return subtract(date, amount, 'days')
}

export function subtractWeeks (date, amount) {
  return subtract(date, amount, 'weeks')
}

export function subtractMonths (date, amount) {
  return subtract(date, amount, 'months')
}

export function subtractYears (date, amount) {
  return subtract(date, amount, 'years')
}

// ** Date Comparison **

export function isBefore (date1, date2) {
  return date1.isBefore(date2)
}

export function isAfter (date1, date2) {
  return date1.isAfter(date2)
}

export function equals (date1, date2) {
  return date1.isSame(date2)
}

export function isSameMonth (date1, date2) {
  return isSame(date1, date2, 'month')
}

export function isSameDay (moment1, moment2) {
  if (moment1 && moment2) {
    return moment1.isSame(moment2, 'day')
  } else {
    return !moment1 && !moment2
  }
}

export function isDayInRange (day, startDate, endDate) {
  const before = startDate.clone().startOf('day').subtract(1, 'seconds')
  const after = endDate.clone().startOf('day').add(1, 'seconds')
  return day.clone().startOf('day').isBetween(before, after)
}

// *** Diffing ***

export function getDaysDiff (date1, date2) {
  return getDiff(date1, date2, 'days')
}

// ** Date Localization **

export function localizeDate (date, locale) {
  return date.clone().locale(locale || moment.locale())
}

export function getDefaultLocale () {
  return moment.locale()
}

export function getDefaultLocaleData () {
  return moment.localeData()
}

export function registerLocale (localeName, localeData) {
  moment.defineLocale(localeName, localeData)
}

export function getLocaleData (date) {
  return date.localeData()
}

export function getLocaleDataForLocale (locale) {
  return moment.localeData(locale)
}

export function getWeekdayMinInLocale (locale, date) {
  return locale.weekdaysMin(date)
}

export function getWeekdayShortInLocale (locale, date) {
  return locale.weekdaysShort(date)
}

// TODO what is this format exactly?
export function getMonthInLocale (locale, date, format) {
  return locale.months(date, format)
}

// ** Utils for some components **

export function isDayDisabled (day, { minDate, maxDate, excludeDates, includeDates, filterDate } = {}) {
  return (minDate && day && day.isBefore(minDate, 'day')) ||
    (maxDate && day && day.isAfter(maxDate, 'day')) ||
    (excludeDates && day && excludeDates.some(excludeDate => isSameDay(day, excludeDate))) ||
    (includeDates && day && !includeDates.some(includeDate => isSameDay(day, includeDate))) ||
    (filterDate && day && !filterDate(day.clone())) ||
    false
}

export function allDaysDisabledBefore (day, unit, { minDate, includeDates } = {}) {
  const dateBefore = day.clone().subtract(1, unit)
  return (minDate && dateBefore.isBefore(minDate, unit)) ||
    (includeDates && includeDates.every(includeDate => dateBefore.isBefore(includeDate, unit))) ||
    false
}

export function allDaysDisabledAfter (day, unit, { maxDate, includeDates } = {}) {
  const dateAfter = day.clone().add(1, unit)
  return (maxDate && dateAfter.isAfter(maxDate, unit)) ||
    (includeDates && includeDates.every(includeDate => dateAfter.isAfter(includeDate, unit))) ||
    false
}

export function getEffectiveMinDate ({ minDate, includeDates }) {
  if (includeDates && minDate) {
    return moment.min(includeDates.filter(includeDate => minDate.isSameOrBefore(includeDate, 'day')))
  } else if (includeDates) {
    return moment.min(includeDates)
  } else {
    return minDate
  }
}

export function getEffectiveMaxDate ({ maxDate, includeDates }) {
  if (includeDates && maxDate) {
    return moment.max(includeDates.filter(includeDate => maxDate.isSameOrAfter(includeDate, 'day')))
  } else if (includeDates) {
    return moment.max(includeDates)
  } else {
    return maxDate
  }
}

export function getHightLightDaysMap (
  highlightDates = [],
  defaultClassName = 'react-datepicker-day--highlighted'
) {
  const dateClasses = new WeakMap()
  for (let i = 0, len = highlightDates.length; i < len; i++) {
    const obj = highlightDates[i]
    if (isMoment(obj)) {
      const key = obj.format('MM.DD.YYYY')
      const classNamesArr = dateClasses.get(key) || []
      if (!classNamesArr.includes(defaultClassName)) {
        classNamesArr.push(defaultClassName)
        dateClasses.set(key, classNamesArr)
      }
    } else if (typeof obj === 'object') {
      const keys = Object.keys(obj)
      const className = keys[0]
      const arrOfMoments = obj[keys[0]]
      if (typeof className === 'string' && arrOfMoments.constructor === Array) {
        for (let k = 0, len = arrOfMoments.length; k < len; k++) {
          const key = arrOfMoments[k].format('MM.DD.YYYY')
          const classNamesArr = dateClasses.get(key) || []
          if (!classNamesArr.includes(className)) {
            classNamesArr.push(className)
            dateClasses.set(key, classNamesArr)
          }
        }
      }
    }
  }

  return dateClasses
}

/**
 * Gets the localized date in the long month/day/year format (i.e; January 15, 2019).
 * If the date is disabled, the translated string for Disabled is appended to the date string.
 * @param {Moment} date - The moment date to get the localized string.
 * @param {Object} props - The date props.
 * @return {string} - The localized date string. The string is empty if date is null or invalid.
 */
export function getLocalizedDateForScreenReader (date, props) {
  const { intl, locale } = props;
  let localizedDateLabel = '';

  if (date && date.isValid()) {
    const localizedDate = localizeDate(date, locale);
    localizedDateLabel = localizedDate.format('dddd, LL');

    if (intl && isDayDisabled(date, props)) {
      localizedDateLabel = localizedDateLabel.concat(' ', intl.formatMessage({ id: 'Terra.datePicker.disabled' }));
    }
  }

  return localizedDateLabel;
}

export function getMonthFromDate(date, props) {
  const { intl, locale } = props;
  let month = '';

  if (date && date.isValid()) {
    const localizedDate = localizeDate(date, locale);
    month = localizedDate.format('MMMM');
  }

  return month;
}
