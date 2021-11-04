import React from 'react';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

const a11yNameDescription = () => (
  <>
    <h1>Label, Description and Instructions Tests</h1>
    {/* eslint-disable react/jsx-one-expression-per-line  */}
    {/* eslint-disable-next-line react/forbid-dom-props */}
    <ul style={{ width: '80em' }}>
      <li>
        There is a special accessibility label prop - <code>A11yLabel</code> - that users can provide. The label is optional for passivity but when provided it will appear in several places to meet our a11y standards - see below.
      </li>
      <li>
        The hour/minute/second inputs each have a their own label and description. These labels and descriptions are visually hidden but available to the browser&apos;s Accessibility Tree (AT) for use by assistive technology like screen readers.  The <code>A11yLabel</code> label is part of the hour label, so that users can pick the right field out of many on a page. The hour description indicates whether the input is using a 12 or 24-hour clock.
      </li>
      <li>The visual description is hidden from the AT so that it won&apos;t confuse users who hear the field descriptions.</li>
      <li>
        Invisible instructions describing the controls and quirks of the TimeInput are provided to the AT so that the instructions will be read prior to reading the fields. The instructions change based on the <code>variant</code> and <code>showSeconds</code>.
      </li>
      <li>
        There is an invisible status region provided to the AT. The status region reads the full value to the user. It will read the initial time when the user is reading the whole page and again after the user updates the time. No partially entered times or blank times are read. The status includes the <code>A11yLabel</code>, and respects the <code>variant</code> and showSecond props. It is also localized. For example: in English the status is something like: <samp>Time of Birth: 09:22:59p.m.</samp>
      </li>
    </ul>
    {/* eslint-enable react/jsx-one-expression-per-line  */}
    <h1>Blank</h1>
    <TimeInput
      name="time-of-birth"
      a11yLabel="Time of birth"
      disableA11YInstructions
      showSeconds
    />
    <h1>With an initial value</h1>
    <TimeInput
      name="time-of-death"
      a11yLabel="Time of death"
      disableA11YInstructions
      showSeconds
      value="09:22:59"
    />
    <h1>Description for Hour/Minute</h1>
    <TimeInput
      name="time-of-zombie"
      a11yLabel="Time of zombie"
      showSeconds
    />
    <h1>Description for Hour/Minute/Second</h1>
    <TimeInput
      name="time-of-zombie-decapitation"
      a11yLabel="Time of zombie decapitation"
    />
  </>
);

export default a11yNameDescription;
