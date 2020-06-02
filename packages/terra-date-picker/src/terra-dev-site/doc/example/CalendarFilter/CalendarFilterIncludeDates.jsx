import React from 'react';
import moment from 'moment';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';

const CalendarFilterIncludeDates = () => (
  <CalendarFilter
    id="default"
    includeDates={[moment().format(), moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
  />
);

export default CalendarFilterIncludeDates;
