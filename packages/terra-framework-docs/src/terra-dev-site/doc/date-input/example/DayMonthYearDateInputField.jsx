import React, { useState, useRef } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const ref = useRef();
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = () => {
    setIsInvalid(invalid => !invalid);
    if (!isInvalid) {
      if (ref) {
        const monthInput = ref.current.querySelector('[name="terra-date-day-date-input-value"]');
        if (monthInput) {
          monthInput.focus();
        }
      }
      setErrorMessage('Please select a valid event date.');
    } else {
      setErrorMessage('');
    }
  };

  const handleRef = (node) => {
    ref.current = node;
  };

  return (
    <React.Fragment>
      <DateInputField
        legend="Event Date"
        name="date-input-value"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        displayFormat="day-month-year"
        error={errorMessage}
        help="Help message"
        isInvalid={isInvalid}
        refCallback={(node) => handleRef(node)}
      />
      <p>{`Event Date: ${value}`}</p>
      <button type="button" onClick={handleClick}>Toggle isInvalid</button>
    </React.Fragment>
  );
};

export default Example;
