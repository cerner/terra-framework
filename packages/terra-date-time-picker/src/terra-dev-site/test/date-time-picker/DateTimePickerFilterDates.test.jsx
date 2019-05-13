import React from 'react';
import moment from 'moment';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const isWeekday = (date) => {
  const momentDate = moment(date);

  if (momentDate && momentDate.isValid()) {
    const day = momentDate.day();
    return day !== 0 && day !== 6;
  }

  return true;
};

const DateTimePickerExample = () => (
  <DateTimePickerExampleTemplate
    filterDate={isWeekday}
    value="2017-08-15"
  />
);

export default DateTimePickerExample;
