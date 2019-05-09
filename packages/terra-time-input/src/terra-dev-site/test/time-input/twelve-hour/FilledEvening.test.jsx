import React from 'react';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

const TimeInputDefault = () => (
  <div style={{ caretColor: 'transparent' }}>
    <TimeInput
      id="timeInput"
      name="time-input"
      value="21:22"
      variant={TimeUtil.FORMAT_12_HOUR}
    />
  </div>
);

export default TimeInputDefault;
