import React, { useState } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <React.Fragment>
      <DateInputField
        legend="Patient's Birthdate"
        name="patient-birthdate"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        displayFormat="month-day-year"
        error="Please select a valid event date."
        help="Help message"
        isInvalid={isInvalid}
      />
      <p>{`Patient's Birthdate: ${value}`}</p>
      <button type="button" onClick={() => setIsInvalid(invalid => !invalid)}>Toggle isInvalid</button>
    </React.Fragment>
  );
};

export default Example;
