import React from 'react';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';
import DateTimeUtil from '../../../DateTimeUtils';

const DateTimePickerDefault = () => (
  <DateTimePickerExampleTemplate
    initialTimeZone="America/Chicago"
    timeVariant={DateTimeUtil.FORMAT_12_HOUR}
  />
);

export default DateTimePickerDefault;
