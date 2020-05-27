import React from 'react';
import moment from 'moment';
import CalendarFilter from '../../../../CalendarFilter';

const isWeekday = (date) => {
  const momentDate = moment(date);

  if (momentDate && momentDate.isValid()) {
    const day = momentDate.day();
    return day !== 0 && day !== 6;
  }

  return true;
};

const CalendarFilterFilterDates = () => (
  <CalendarFilter
    filterDate={isWeekday}
    selectedDate="2020-04-02"
  />
);

export default CalendarFilterFilterDates;
