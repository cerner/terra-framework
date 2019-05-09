import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

const DatePickerDefaultDateBeforeMinDateOnly = () => (
  <div>
    <h3>minDate Only</h3>
    <DatePicker
      name="date-input"
      minDate="2017-04-02T12:00"
      selectedDate="2017-04-01T12:00"
    />
  </div>
);

export default DatePickerDefaultDateBeforeMinDateOnly;
