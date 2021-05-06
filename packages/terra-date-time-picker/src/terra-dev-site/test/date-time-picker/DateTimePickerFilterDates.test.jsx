import React from 'react';
import moment from 'moment-timezone';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const isWeekdayOrToday = (date) => {
  const momentDate = moment(date);

  // Ensure if today is a weekend that the Today button doesn't get disabled and causes the screenshot to mismatch.
  if (momentDate.isSame(moment(), 'day')) {
    return true;
  }

  if (momentDate && momentDate.isValid()) {
    const day = momentDate.day();
    return day !== 0 && day !== 6;
  }

  return true;
};

const DateTimePickerFilterDates = () => (
  <DateTimePickerExampleTemplate
    filterDate={isWeekdayOrToday}
    value="2017-08-15"
  />
);

export default DateTimePickerFilterDates;
