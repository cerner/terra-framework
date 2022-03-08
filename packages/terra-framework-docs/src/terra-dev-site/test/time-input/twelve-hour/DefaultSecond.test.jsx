import React, { useState } from 'react';
import TimeInput from 'terra-time-input';
import TimeUtil from 'terra-time-input/lib/TimeUtil';

const TimeInputDefault = () => {
  const [input, setInput] = useState(null);

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
        variant={TimeUtil.FORMAT_12_HOUR}
        showSeconds
      />
    </div>
  );
};
export default TimeInputDefault;
