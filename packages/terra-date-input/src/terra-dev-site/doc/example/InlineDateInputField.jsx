import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [dateFieldValue1, setDateFieldValue1] = useState('');
  const [dateFieldValue2, setDateFieldValue2] = useState('');
  const [isInline, setIsInline] = useState(true);
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <React.Fragment>
      <DateInputField
        legend="Legend text"
        name="date-input-value"
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
      <p>{`First DateField Value: ${dateFieldValue1}`}</p>
      <p>{`Second DateField Value: ${dateFieldValue2}`}</p>
      <button type="button" onClick={() => setIsInline(inline => !inline)}>Toggle isInline</button>
      <button type="button" onClick={() => setIsInvalid(invalid => !invalid)}>Toggle isInvalid</button>
    </React.Fragment>
  );
};

export default Example;
