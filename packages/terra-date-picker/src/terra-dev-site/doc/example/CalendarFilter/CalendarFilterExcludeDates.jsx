import React from 'react';
import moment from 'moment-timezone';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';

const CalendarFilterExcludeDates = () => (
  <CalendarFilter
    id="default"
    excludeDates={[moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
  />
);

export default CalendarFilterExcludeDates;
