import React, { useState } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <React.Fragment>
      <DateInputField
        legend="Patient's Admission Date"
        name="date-input-value"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        showOptional
        error="Please enter a valid patient's admission date"
        help="Help message"
        isInvalid={isInvalid}
      />
      <p>{`Admission Date: ${value}`}</p>
      <button type="button" onClick={() => setIsInvalid((invalid) => !invalid)}>Toggle isInvalid</button>
    </React.Fragment>
  );
};

export default Example;
