import React from 'react';
import Field from 'terra-form-field';
import Spacer from 'terra-spacer';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';


const TimeInputDefault = () => (
  <>
    <Spacer padding="large+4">
      <h1>Accessible Time Input Demo</h1>

      <h2>Situation:</h2>
      <p>We are working to make an existing component retroactively more accessible. Of course, it is not ideal, but we are working with requirements that dictate the current approach. We are working with the Titanic, and we can't simply turn the accessible corner at one time. Instead, we must ease into the path. That said, we want to make this version as accessible as possible within the given constraints.</p>
      <p>We are essentially working with a dual input for time (an input for hours and an input for minutes) that visually appears as one input. Each input functions independently and combines the ease of auto-advance or backspace to quickly key time values. We would appreciate any feedback you can afford to help us provide the right amount of context for assistive technology users or any other disabled user. Specifically, we would like feedback on the time input itself but welcome any constructive criticism or advice to improve the group of controls.</p>
      <h2>Known issues:</h2>
      <p>The AM / PM radio buttons have issues: they do not provide the proper context, the keyboard interactions do not meet expected behaviors, and other issues. We will fix all radio button issues.</p>

      <h2>Questions for the accessibility community:</h2>
      <ul>
        <li>What works well and what doesn't?</li>
        <li>Does the Time input provide enough programmatic context for screen readers, or are any parts too verbose?</li>
        <li>How do you solve pronunciation issues with AM / PM options?</li>
        <li>How do you label AM / PM radio buttons? Would "AM or PM?" provide enough context?</li>
      </ul>

      <h2>Demo:</h2>
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
    </Spacer>
  </>
);

export default TimeInputDefault;
