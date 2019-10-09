import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateInput from 'terra-date-input';

const Example = () => (
  <div>
    <DateInput
      id="dateInput"
      name="date-input"
      value="1999-03-10"
      required
      isIncomplete
      isInvalid
    />
  </div>
);

export default Example;
