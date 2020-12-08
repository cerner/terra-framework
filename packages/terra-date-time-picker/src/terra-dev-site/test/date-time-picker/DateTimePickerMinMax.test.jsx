import React from 'react';
import moment from 'moment-timezone';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const DateTimePickerExample = () => (
  <DateTimePickerExampleTemplate
    minDate={moment().format()}
    maxDate={moment().add(6, 'days').format()}
    value="2019-04-19T10:30:00"
  />
);

export default DateTimePickerExample;
