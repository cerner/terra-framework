import React, { useState, useRef } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const ref = useRef();
  const [dateFieldValue1, setDateFieldValue1] = useState('');
  const [dateFieldValue2, setDateFieldValue2] = useState('');
  const [isInline, setIsInline] = useState(true);
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
        legend="Select Appointment Date"
        name="date-input-value"
        value={dateFieldValue1}
        onChange={(event, dateString) => setDateFieldValue1(dateString)}
        isInline={isInline}
        isInvalid={isInvalid}
        error="Please select a valid appointment date"
        help="Help message"
        refCallback={(node) => handleRef(node)}
      />
      <DateInputField
        legend="Select Appointment Date"
        name="date-input-value"
        value={dateFieldValue2}
        onChange={(event, dateString) => setDateFieldValue2(dateString)}
        isInline={isInline}
        isInvalid={isInvalid}
        error="Please select a valid appointment date"
        help="Help message"
      />
      <p>{`First DateInputField Value: ${dateFieldValue1}`}</p>
      <p>{`Second DateInputField Value: ${dateFieldValue2}`}</p>
      <button type="button" onClick={() => setIsInline(inline => !inline)}>Toggle isInline</button>
      <button type="button" onClick={handleClick}>Toggle isInvalid</button>
    </React.Fragment>
  );
};

export default Example;
