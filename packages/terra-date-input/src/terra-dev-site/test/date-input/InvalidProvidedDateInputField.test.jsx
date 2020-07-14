import React, { useState } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [value, setValue] = useState('$5%g-ad-!f');

  return (
    <div>
      <DateInputField
        legend="Legend text"
        name="date-input"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        error="Error message"
        help="Help message"
      />
      <p>{`DateInputField Value: ${value}`}</p>
    </div>
  );
};

export default Example;
