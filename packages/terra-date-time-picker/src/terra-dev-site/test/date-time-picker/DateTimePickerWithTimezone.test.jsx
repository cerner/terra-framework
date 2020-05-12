import React from 'react';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const DateTimePickerExample = () => (
  <div>
    <DateTimePickerExampleTemplate
      value="2020-02-13T05:30:00"
      timeZone="Africa/Bangui"
    />
    <DateTimePickerExampleTemplate
      value="2020-03-08T02:30:00"
      timeZone="America/New_York"
    />
    <DateTimePickerExampleTemplate
      timeZone="America/New_York"
    />
    <DateTimePickerExampleTemplate
      value="2017-11-05T01:30:00"
      timeZone="Asia/Dubai"
    />
    <DateTimePickerExampleTemplate
      value="2017-11-05T01:30:00"
    />
  </div>
);

export default DateTimePickerExample;
