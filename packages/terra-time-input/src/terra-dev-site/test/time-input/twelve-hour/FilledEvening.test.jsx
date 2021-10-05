import React from 'react';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

const TimeInputDefault = () => (
  <React.Fragment>
    <TimeInput
      id="timeInput"
      label="Wake-up time"
      name="time-input"
      value="21:22"
      variant={TimeUtil.FORMAT_12_HOUR}
    />
  </React.Fragment>
);

export default TimeInputDefault;
