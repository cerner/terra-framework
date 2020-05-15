import React from 'react';
import DateTimePickerTimezoneExampleTemplate from '../../common/DateTimePickerTimezoneExampleTemplate';

const DateTimePickerExample = () => (
  <>
    <DateTimePickerTimezoneExampleTemplate
      value="2020-02-13T05:30:00"
      timeZone="Africa/Bangui"
    />
    <DateTimePickerTimezoneExampleTemplate
      value="2017-11-05T01:30:00"
      timeZone="Asia/Dubai"
    />
  </>
);

export default DateTimePickerExample;
