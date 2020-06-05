import React from 'react';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';

const CalendarFilterDefault = () => (
  <div>
    <p>Opens to current date. if no date values are provided</p>
    <CalendarFilter
      id="default"
    />
  </div>
);

export default CalendarFilterDefault;
