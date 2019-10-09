import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [dateFieldValue1, setDateFieldValue1] = useState('1999-03-10');
  const [dateFieldValue2, setDateFieldValue2] = useState('1999-03-10');
  const [isInline, setIsInline] = useState(true);
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <div>
      <DateInputField
        legend="Legend text"
        name="date-input"
        value={dateFieldValue1}
        onChange={(event, dateString) => setDateFieldValue1(dateString)}
        isInline={isInline}
        isInvalid={isInvalid}
        error="Error message"
        help="Help message"
      />
      <DateInputField
        legend="Legend text"
        name="date-input-value"
        value={dateFieldValue2}
        onChange={(event, dateString) => setDateFieldValue2(dateString)}
        isInline={isInline}
        isInvalid={isInvalid}
        error="Error message"
        help="Help message"
      />
      <p>{`First DateInputField Value: ${dateFieldValue1}`}</p>
      <p>{`Second DateInputField Value: ${dateFieldValue2}`}</p>
      <button type="button" onClick={() => setIsInline(inline => !inline)}>Toggle isInline</button>
      <button type="button" onClick={() => setIsInvalid(invalid => !invalid)}>Toggle isInvalid</button>
    </div>
  );
};

export default Example;
