import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateInput from 'terra-date-input';

const Example = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <DateInput
        id="dateInput"
        name="date-input"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        refCallback={(ref) => { console.log(ref)}}
      />
      <p>{`DateInput Value: ${value}`}</p>
    </div>
  );
};

export default Example;
