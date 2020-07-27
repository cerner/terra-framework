import React, { useState } from 'react';

import DateInput from 'terra-date-input';

const Example = () => {
  const [value, setValue] = useState('');

  return (
    <React.Fragment>
      <DateInput
        name="date-input-value"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        displayFormat="month-day-year"
      />
      <p>{`DateInput Value: ${value}`}</p>
    </React.Fragment>
  );
};

export default Example;
