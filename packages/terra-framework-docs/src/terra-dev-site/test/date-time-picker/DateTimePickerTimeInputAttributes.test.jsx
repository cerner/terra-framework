import React from 'react';
import DateTimeUtil from 'terra-date-time-picker/lib/DateTimeUtils';
import DateTimePickerExampleTemplate from './common/DateTimePickerExampleTemplate';

const DateTimePickerTimeInputAttributes = () => (
  <DateTimePickerExampleTemplate
    timeInputAttributes={{ className: 'time-input-example', readOnly: true }}
    timeVariant={DateTimeUtil.FORMAT_12_HOUR}
  />
);

export default DateTimePickerTimeInputAttributes;
