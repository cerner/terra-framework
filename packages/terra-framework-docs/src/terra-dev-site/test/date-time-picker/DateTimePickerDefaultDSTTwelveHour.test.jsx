import React from 'react';
import DateTimePickerExampleTemplate from './common/DateTimePickerExampleTemplate';
import DateTimeUtil from 'terra-date-time-picker/lib/DateTimeUtils';

const DateTimePickerDefault = () => (
  <DateTimePickerExampleTemplate
    initialTimeZone="America/Chicago"
    timeVariant={DateTimeUtil.FORMAT_12_HOUR}
  />
);

export default DateTimePickerDefault;
