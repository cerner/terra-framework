import React from 'react';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';
import DateTimeUtil from '../../../DateTimeUtils';

const DateTimePickerSecondsTwelveHour = () => (
  <DateTimePickerExampleTemplate showSeconds timeVariant={DateTimeUtil.FORMAT_12_HOUR} />
);

export default DateTimePickerSecondsTwelveHour;
