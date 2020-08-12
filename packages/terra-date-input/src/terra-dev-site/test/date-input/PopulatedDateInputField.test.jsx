import React, { useState } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [value, setValue] = useState('2000-07-04');
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <div>
      <DateInputField
        legend="Legend text"
        name="date-input"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        error="Error message"
        help="Help message"
        isInvalid={isInvalid}
      />
      <p>{`DateInputField Value: ${value}`}</p>
      <button type="button" onClick={() => setIsInvalid(invalid => !invalid)}>Toggle isInvalid</button>
    </div>
  );
};

export default Example;
