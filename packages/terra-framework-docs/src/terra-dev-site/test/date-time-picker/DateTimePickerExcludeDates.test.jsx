import React from 'react';
import DateTimePickerExampleTemplate from './common/DateTimePickerExampleTemplate';

const DateTimePickerExcludeDates = () => (
  <DateTimePickerExampleTemplate
    excludeDates={['2017-08-14']}
    value="2017-08-15"
  />
);

export default DateTimePickerExcludeDates;
