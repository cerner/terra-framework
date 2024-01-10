import React, { useState } from 'react';

import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [dateFieldValue1, setDateFieldValue1] = useState('');
  const [dateFieldValue2, setDateFieldValue2] = useState('');
  const [isInline, setIsInline] = useState(true);
  const [isInvalid, setIsInvalid] = useState(false);

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
      <button type="button" onClick={() => setIsInvalid(invalid => !invalid)}>Toggle isInvalid</button>
    </React.Fragment>
  );
};

export default Example;
