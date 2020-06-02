import React from 'react';
import moment from 'moment';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';

const CalendarFilterFilterDates = () => {
  const isWeekday = (dateValue) => {
    const momentDate = moment(dateValue);

    if (momentDate && momentDate.isValid()) {
      const day = momentDate.day();
      return day !== 0 && day !== 6;
    }

    return true;
  };

  return (
    <CalendarFilter
      id="filter-dates"
      filterDate={isWeekday}
    />
  );
};

export default CalendarFilterFilterDates;
