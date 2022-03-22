import React from 'react';
import DateTimeUtil from 'terra-date-time-picker/lib/DateTimeUtils';
import DateTimePickerExampleTemplate from './common/DateTimePickerExampleTemplate';

const DateTimePickerDefault = () => (
  <DateTimePickerExampleTemplate
    initialTimeZone="America/Chicago"
    timeVariant={DateTimeUtil.FORMAT_12_HOUR}
  />
);

export default DateTimePickerDefault;
