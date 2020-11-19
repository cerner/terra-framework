import React from 'react';
import DateTimePickerTimezoneExampleTemplate from '../../common/DateTimePickerTimezoneExampleTemplate';

const DateTimePickerExample = () => (
  <>
    {/* Before Daylight Savings - Negative utcOffset */}
    <DateTimePickerTimezoneExampleTemplate
      value="2020-10-31T22:30:00"
      initialTimeZone="America/Adak"
    />
    {/* After Daylight Savings - Negative utcOffset */}
    <DateTimePickerTimezoneExampleTemplate
      value="2020-11-02T22:30:00"
      initialTimeZone="America/Adak"
    />

    {/* Before Daylight Savings - Locale utcOffset */}
    <DateTimePickerTimezoneExampleTemplate
      value="2020-10-31T22:30:00"
      initialTimeZone="America/Chicago"
    />
    {/* After Daylight Savings - Locale utcOffset */}
    <DateTimePickerTimezoneExampleTemplate
      value="2020-11-02T22:30:00"
      initialTimeZone="America/Chicago"
    />

    {/* Before Daylight Savings - Positive utcOffset */}
    <DateTimePickerTimezoneExampleTemplate
      value="2020-10-31T22:30:00"
      initialTimeZone="Australia/Sydney"
    />
    {/* After Daylight Savings - Positive utcOffset */}
    <DateTimePickerTimezoneExampleTemplate
      value="2020-11-02T22:30:00"
      initialTimeZone="Australia/Sydney"
    />
  </>
);
export default DateTimePickerExample;
