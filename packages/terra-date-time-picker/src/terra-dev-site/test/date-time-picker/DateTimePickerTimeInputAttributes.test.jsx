import React from 'react';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const DateTimePickerExample = () => (
  <DateTimePickerExampleTemplate
    timeInputAttributes={{ id: 'time-input-example', readOnly: true }}
    timeVariant="12-hour"
  />
);

export default DateTimePickerExample;
