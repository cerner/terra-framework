import React from 'react';
import DateTimePickerTimezoneExampleTemplate from './common/DateTimePickerTimezoneExampleTemplate';

const DateTimePickerExample = () => (
  <>
    {/* Before Daylight Savings */}
    <DateTimePickerTimezoneExampleTemplate
      value="2020-10-31T22:30:00"
      initialTimeZone="America/Adak"
    />
    {/* After Daylight Savings */}
    <DateTimePickerTimezoneExampleTemplate
      value="2020-11-02T22:30:00"
      initialTimeZone="America/Adak"
    />

    {/* Before Daylight Savings */}
    <DateTimePickerTimezoneExampleTemplate
      value="2020-10-31T22:30:00"
      initialTimeZone="America/Chicago"
    />
    {/* After Daylight Savings */}
    <DateTimePickerTimezoneExampleTemplate
      value="2020-11-02T22:30:00"
      initialTimeZone="America/Chicago"
    />

    {/* Before Daylight Savings */}
    <DateTimePickerTimezoneExampleTemplate
      value="2020-10-31T22:30:00"
      initialTimeZone="Australia/Sydney"
    />
    {/* After Daylight Savings */}
    <DateTimePickerTimezoneExampleTemplate
      value="2020-11-02T22:30:00"
      initialTimeZone="Australia/Sydney"
    />
  </>
);
export default DateTimePickerExample;
