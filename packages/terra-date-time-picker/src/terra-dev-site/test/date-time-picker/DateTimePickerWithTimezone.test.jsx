import React from 'react';
import DateTimePickerExampleTemplateTimezone from '../../common/DateTimePickerExampleTemplateTimezone';

const DateTimePickerExample = () => (
  <>
    <DateTimePickerExampleTemplateTimezone
      value="2020-02-13T05:30:00"
      timeZone="Africa/Bangui"
    />
    <DateTimePickerExampleTemplateTimezone
      value="2020-03-08T02:30:00"
      timeZone="America/New_York"
    />
    <DateTimePickerExampleTemplateTimezone
      value="2017-11-05T01:30:00"
      timeZone="America/New_York"
    />
    <DateTimePickerExampleTemplateTimezone
      value="2017-11-05T01:30:00"
      timeZone="Asia/Dubai"
    />
  </>
);

export default DateTimePickerExample;
