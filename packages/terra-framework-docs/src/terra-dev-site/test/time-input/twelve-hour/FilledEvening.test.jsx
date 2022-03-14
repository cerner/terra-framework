import React from 'react';
import TimeInput from 'terra-time-input';
import TimeUtil from 'terra-time-input/lib/TimeUtil';

const TimeInputDefault = () => (
  <TimeInput
    id="timeInput"
    name="time-input"
    value="21:22"
    variant={TimeUtil.FORMAT_12_HOUR}
  />
);

export default TimeInputDefault;
