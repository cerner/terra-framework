import React from 'react';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';

const CalendarFilterDefault = () => (
  <div>
    <p>Defaults to present date</p>
    <CalendarFilter
      id="default"
    />
  </div>
);

export default CalendarFilterDefault;
