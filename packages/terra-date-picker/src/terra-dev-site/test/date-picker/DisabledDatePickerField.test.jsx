import React from 'react';
import DatePickerField from '../../../../lib/DatePickerField';

const DatePickerDisabledDate = () => (
  <DatePickerField
    label="Enter Date"
    name="date-input"
    selectedDate="2017-04-01"
    disabled
  />
);

export default DatePickerDisabledDate;
