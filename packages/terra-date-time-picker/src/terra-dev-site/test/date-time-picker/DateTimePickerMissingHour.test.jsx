import React from 'react';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const DateTimePickerExample = () => (
  <div>
    <DateTimePickerExampleTemplate
      value="2017-03-12T02:30:00"
      timeZone="America/New_York"
    />
    <DateTimePickerExampleTemplate
      timeZone="America/New_York"
    />
  </div>
);

export default DateTimePickerExample;
