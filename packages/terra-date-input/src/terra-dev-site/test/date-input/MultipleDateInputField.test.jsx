import React, { useState } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <div id="primary-description">Description text provided by user for Primary Date Input</div>
      <DateInputField
        legend="Primary Date Input"
        name="date-input"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        error="Error message."
        help="Help message."
        dayAttributes={{ 'aria-describedby': 'primary-description' }}
        monthAttributes={{ 'aria-describedby': 'primary-description' }}
        yearAttributes={{ 'aria-describedby': 'primary-description' }}
      />
      <DateInputField
        legend="Secondary Date Input"
        name="date-input"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        error="Error message."
        help="Help message."
        isInvalid
      />
    </div>
  );
};

export default Example;
