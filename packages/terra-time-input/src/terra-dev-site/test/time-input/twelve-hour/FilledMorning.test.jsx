import React from 'react';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

const TimeInputDefault = () => (
  <>
    <h1>Demo: Birth Information</h1>
    <strong id="formLabel">Birth Information</strong>
    <form
      action=""
      aria-labelledby="formLabel"
    >
      <p>Enter the information below. There is no submit button because this is just a demo.</p>
      <TimeInput
        id="timeInput"
        name="birth-time"
        value="09:22"
        label="Birth Time"
        variant={TimeUtil.FORMAT_12_HOUR}
      />
    </form>
  </>
);

export default TimeInputDefault;
