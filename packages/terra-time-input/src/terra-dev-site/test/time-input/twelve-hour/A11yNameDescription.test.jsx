import React from 'react';
// import VisuallyHiddenText from 'terra-visually-hidden-text';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

const a11yNameDescription = () => (
  <>
    TODOs:
    <ul>
      <li>Handle prepending zeros in the hour field. Minute field? second field?</li>
    </ul>

    <h1>Use cases</h1>
    <h2>A - 12 hour</h2>
    <TimeInput
      name="time-of-birth-a"
      a11yLabel="Time of Birth A"
      disableA11YInstructions
      showSeconds
      variant={TimeUtil.FORMAT_12_HOUR}
      value="09:22:59"
    />

    <h2>B - 12 hour no value</h2>
    <TimeInput
      name="time-of-birth-b"
      a11yLabel="Time of Birth B"
      disableA11YInstructions
      showSeconds
      variant={TimeUtil.FORMAT_12_HOUR}
    />

    <h2>C - 24-hour</h2>
    <TimeInput
      name="time-of-birth-c"
      a11yLabel="Time of Birth C"
      disableA11YInstructions
      showSeconds
      value="09:22:59"
    />
    <h2>D - 24-hour no value</h2>
    <TimeInput
      name="time-of-birth-d"
      a11yLabel="Time of Birth D"
      disableA11YInstructions
      showSeconds
    />
    <h2>E - 24-hour seconds description</h2>
    <TimeInput
      name="time-of-birth-e"
      a11yLabel="Time of Birth E"
      showSeconds
    />
    <h2>F - 24-hour description</h2>
    <TimeInput
      name="time-of-birth-f"
      a11yLabel="Time of Birth F"
    />
    <h2>G - 12-hour seconds description</h2>
    <TimeInput
      name="time-of-birth-g"
      a11yLabel="Time of Birth G"
      showSeconds
      variant={TimeUtil.FORMAT_12_HOUR}
    />
    <h2>H - 12-hour description</h2>
    <TimeInput
      name="time-of-birth-h"
      a11yLabel="Time of Birth H"
      variant={TimeUtil.FORMAT_12_HOUR}
    />
  </>
);

export default a11yNameDescription;
