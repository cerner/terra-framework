import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <DateInputField
        legend="Legend text"
        name="date-input"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        error="Error message"
        help="Help message"
        disabled
      />
      <p>{`DateInputField Value: ${value}`}</p>
      <DateInputField
        legend="Legend text"
        name="date-input"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        error="Error message"
        help="Help message"
        isInvalid
        disabled
      />
      <p>{`DateInputField Value: ${value}`}</p>
      <DateInputField
        legend="Legend text"
        name="date-input"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        error="Error message"
        help="Help message"
        isIncomplete
        required
        disabled
      />
      <p>{`DateInputField Value: ${value}`}</p>
    </div>
  );
};

export default Example;
