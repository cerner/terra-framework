import React from 'react';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

const a11yNameDescription = () => (
  <>
    <h1>12-hour A11Y Label, Description and Instructions Tests</h1>
    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
    <p>See documentation in the <a href="../time-input/accessibility-label-description-instruction">24-hour version of this test</a>.</p>
    <h1>Blank</h1>
    <TimeInput
      variant={TimeUtil.FORMAT_12_HOUR}
      name="time-of-birth"
      a11yLabel="Time of birth"
      disableA11YInstructions
      showSeconds
    />
    <h1>With an initial value</h1>
    <TimeInput
      variant={TimeUtil.FORMAT_12_HOUR}
      name="time-of-death"
      a11yLabel="Time of death"
      disableA11YInstructions
      showSeconds
      value="09:22:59"
    />
    <h1>Description for Hour/Minute</h1>
    <TimeInput
      variant={TimeUtil.FORMAT_12_HOUR}
      name="time-of-zombie"
      a11yLabel="Time of zombie"
      showSeconds
    />
    <h1>Description for Hour/Minute/Second</h1>
    <TimeInput
      variant={TimeUtil.FORMAT_12_HOUR}
      name="time-of-zombie-decapitation"
      a11yLabel="Time of zombie decapitation"
    />
  </>
);

export default a11yNameDescription;
