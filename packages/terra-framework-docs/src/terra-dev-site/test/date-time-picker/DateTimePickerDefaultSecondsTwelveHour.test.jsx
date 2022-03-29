import React from 'react';
import DateTimeUtil from 'terra-date-time-picker/lib/DateTimeUtils';
import DateTimePickerExampleTemplate from './common/DateTimePickerExampleTemplate';

const DateTimePickerSecondsTwelveHour = () => (
  <DateTimePickerExampleTemplate
    value="2017-08-08T10:30:00"
    showSeconds
    timeVariant={DateTimeUtil.FORMAT_12_HOUR}
  />
);

export default DateTimePickerSecondsTwelveHour;
