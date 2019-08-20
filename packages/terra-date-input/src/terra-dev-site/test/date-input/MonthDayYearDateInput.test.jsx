import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateInput from 'terra-date-input';

const Example = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <DateInput
        name="date-input"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        displayFormat="month-day-year"
      />
      <p>{`DateInput Value: ${value}`}</p>
    </div>
  );
};

export default Example;
