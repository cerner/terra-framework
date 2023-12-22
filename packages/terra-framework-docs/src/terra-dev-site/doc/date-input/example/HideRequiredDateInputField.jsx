import React, { useState } from 'react';
import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <React.Fragment>
      <DateInputField
        legend="Select Event Date"
        name="date-input-value"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        required
        hideRequired
        error="Please select a valid event date."
        help="Help message"
        isInvalid={isInvalid}
      />
      <p>{`DateInputField Value: ${value}`}</p>
      <button type="button" onClick={() => setIsInvalid(invalid => !invalid)}>Toggle isInvalid</button>
    </React.Fragment>
  );
};

export default Example;
