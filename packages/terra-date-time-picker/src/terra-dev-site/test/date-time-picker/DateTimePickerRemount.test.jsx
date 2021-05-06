import React, { useState } from 'react';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const DateTimePickerRemount = () => {
  const [dateTime, setDateTime] = useState('2020-04-06T01:30');

  return (
    <DateTimePickerExampleTemplate
      key={dateTime}
      value={dateTime}
      onChange={(event, value) => {
        setDateTime(value);
      }}
    />
  );
};

export default DateTimePickerRemount;
