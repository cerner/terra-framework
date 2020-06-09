import React from 'react';
import DatePicker from '../../../DatePicker';

const DatePickerBeyondMinMax = () => (
  <DatePicker
    name="date-input"
    minDate="1899-05-20"
    maxDate="2101-05-20"
    selectedDate="2100-12-25"
  />
);

export default DatePickerBeyondMinMax;
