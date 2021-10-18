import React from 'react';
import Field from 'terra-form-field';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

const TimeInputDefault = () => (
  <>
    <h1>Accessible Time Input Demo</h1>
    <strong id="formLabel">Birth Information</strong>
    <form
      action=""
      aria-labelledby="formLabel"
    >
      <p>Enter the information below. There is no submit button because this is just a demo.</p>
      <Field
        label="Time of Birth:"
        help="Time Format: hh:mm"
      >
        <TimeInput
          id="timeInput"
          name="time-of-birth"
          value="09:22"
          label="Time of Birth"
          variant={TimeUtil.FORMAT_12_HOUR}
        />
      </Field>
    </form>
  </>
);

export default TimeInputDefault;
