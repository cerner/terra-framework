import React from 'react';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

const TimeInputDefault = () => (
  <TimeInput
    id="timeInput"
    name="time-input"
    value="21:22"
    variant={TimeUtil.FORMAT_12_HOUR}
  />
);

export default TimeInputDefault;
