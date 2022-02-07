import React from 'react';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

const TimeInputA11y = () => {
  const label = 'Time of birth';
  return (
    <>
      <TimeInput
        id="timeInput"
        name="time-input"
        a11yLabel={label}
        value="13:22:59"
        isInvalid
        isIncomplete
        required
        showSeconds
        variant={TimeUtil.FORMAT_12_HOUR}
      />
      <p>
        Turn on your screen reader to hear the accessibility features:
      </p>
      <ul>
        <li>
          The label attribute,
          {`"${label}"`}
          , is read as the input group&apos;s name.
        </li>
        <li>The a11yLabel attribute is read as a prefix to reading the full time value.</li>
        <li>The full time value is read after any valid change to the time value.</li>
        <li>Each component, e.g. minute, of the time input is described upon focus.</li>
      </ul>
    </>
  );
};
export default TimeInputA11y;
