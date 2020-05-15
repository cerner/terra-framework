import React from 'react';
import DateTimePickerTimezoneExampleTemplate from '../../common/DateTimePickerTimezoneExampleTemplate';

const DateTimePickerExample = () => (
  <div>
    <DateTimePickerTimezoneExampleTemplate
      value="2017-03-12T02:30:00"
      timeZone="America/New_York"
    />
    <DateTimePickerTimezoneExampleTemplate
      timeZone="America/New_York"
    />
  </div>
);

export default DateTimePickerExample;
