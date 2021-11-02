import React from 'react';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

const a11yNameDescription = () => (
  <>
    <h1>Using aria-label</h1>
    <TimeInput
      id="time-input-1"
      name="time-input-1"
      aria-label="Time of birth 1"
      variant={TimeUtil.FORMAT_12_HOUR}
    />
    <h1>Using aria-labelledby</h1>
    <p id="2">Time of birth 2</p>
    <TimeInput
      id="time-input-2"
      name="time-input-2"
      aria-labelledby="2"
      variant={TimeUtil.FORMAT_12_HOUR}
    />
    <h1>Using &lt;label for=… &gt; </h1>
    <label htmlFor="time-input-3">Time of birth 3</label>
    <br />
    <TimeInput
      id="time-input-3"
      name="time-input-3"
      aria-labelledby="3"
      variant={TimeUtil.FORMAT_12_HOUR}
    />
  </>
);

export default a11yNameDescription;
