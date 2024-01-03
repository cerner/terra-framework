import React, { useState } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [value, setValue] = useState('');
  const [isIncomplete, setIsIncomplete] = useState(false);

  return (
    <React.Fragment>
      <DateInputField
        legend="Appointment Date"
        name="date-input-value"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        required
        error="Please enter a valid event date."
        help="Help message"
        isIncomplete={isIncomplete}
      />
      <p>{`Appointment Date: ${value}`}</p>
      <button type="button" onClick={() => setIsIncomplete(incomplete => !incomplete)}>Toggle isIncomplete</button>
    </React.Fragment>
  );
};

export default Example;
