import React, { useState } from 'react';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

const TimeInputDefault = () => {
  const [input, setInput] = useState('09:22:22');

  const handleOnChange = (event, changedInput) => {
    setInput(changedInput);
  };

  return (
    <div>
      <div id="time-input-value">
        <h3>
          Time Input:
          {input}
        </h3>
      </div>
      <TimeInput
        id="timeInput"
        name="time-input"
        onChange={handleOnChange}
        value="09:22:22"
        variant={TimeUtil.FORMAT_12_HOUR}
        showSeconds
      />
    </div>
  );
};
export default TimeInputDefault;
