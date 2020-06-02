import React from 'react';
import moment from 'moment';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';

const CalendarFilterMinMax = () => (
  <CalendarFilter
    id="default"
    minDate={moment().format()}
    maxDate={moment().add(6, 'days').format()}
  />
);

export default CalendarFilterMinMax;
