import React, { useState, useRef } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const ref = useRef();
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleClick = () => {
    setIsInvalid(invalid => !invalid);
    if (!isInvalid) {
      if (ref) {
        const monthInput = ref.current.querySelector('[name="terra-date-month-date-input-value"]');
        if (monthInput) {
          monthInput.focus();
        }
      }
    }
  };

  const handleRef = (node) => {
    ref.current = node;
  };

  return (
    <React.Fragment>
      <DateInputField
        legend="Departure Date"
        name="date-input-value"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        error="Invalid Departure Date"
        help="Note: Departure date should be greater than arrival date"
        isInvalid={isInvalid}
        refCallback={(node) => handleRef(node)}
      />
      <p>{`DateInputField Value: ${value}`}</p>
      <button type="button" onClick={handleClick}>Toggle isInvalid</button>
    </React.Fragment>
  );
};

export default Example;
