import React from 'react';
import DateTimePickerTimezoneExampleTemplate from '../../common/DateTimePickerTimezoneExampleTemplate';

const DateTimePickerExample = () => (
  <>
    <DateTimePickerTimezoneExampleTemplate
      value="2020-09-13T05:30:00"
      initialTimeZone="Pacific/Apia"
    />
    <DateTimePickerTimezoneExampleTemplate
      value="2020-09-13T05:30:00"
      initialTimeZone="America/Chicago"
    />
  </>
);

export default DateTimePickerExample;
