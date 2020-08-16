import React from 'react';
import moment from 'moment';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const DateTimePickerMinMax = () => (
  <DateTimePickerExampleTemplate
    minDate={moment().format()}
    maxDate={moment().add(6, 'days').format()}
    value="2019-04-19T10:30:00"
  />
);

export default DateTimePickerMinMax;
