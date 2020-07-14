import React, { useState } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [value, setValue] = useState('1999-03-10');
  const [isIncomplete, setIsIncomplete] = useState(true);

  return (
    <div>
      <DateInputField
        legend="Legend text"
        name="date-input"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        error="Error message"
        help="Help message"
        isIncomplete={isIncomplete}
        required
      />
      <p>{`DateInputField Value: ${value}`}</p>
      <button type="button" onClick={() => setIsIncomplete(incomplete => !incomplete)}>Toggle isIncomplete</button>
    </div>
  );
};

export default Example;
