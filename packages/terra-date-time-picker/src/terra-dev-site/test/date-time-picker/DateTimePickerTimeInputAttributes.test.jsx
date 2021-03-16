import React from 'react';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';
import DateTimeUtil from '../../../DateTimeUtils';

const DateTimePickerExample = () => (
  <DateTimePickerExampleTemplate
    timeInputAttributes={{ className: 'time-input-example', readOnly: true }}
    timeVariant={DateTimeUtil.FORMAT_12_HOUR}
  />
);

export default DateTimePickerExample;
