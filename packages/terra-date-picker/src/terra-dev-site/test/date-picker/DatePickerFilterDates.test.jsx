import React from 'react';
import moment from 'moment';
import DatePicker from '../../../DatePicker';

const isWeekday = (date) => {
  const momentDate = moment(date);

  if (momentDate && momentDate.isValid()) {
    const day = momentDate.day();
    return day !== 1 && day !== 2;
  }

  return true;
};

const DatePickerFilterDates = () => (
  <DatePicker
    name="date-input"
    filterDate={isWeekday}
  />
);

export default DatePickerFilterDates;
