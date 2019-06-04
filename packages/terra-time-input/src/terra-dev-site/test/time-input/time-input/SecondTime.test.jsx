import React from 'react';
import TimeInput from '../../../../TimeInput';

const TimeInputDefault = () => (
  <div style={{ caretColor: 'transparent' }}>
    <TimeInput
      id="timeInput"
      name="time-input"
      value="12:12:12"
      showSecond
    />
  </div>
);

export default TimeInputDefault;
