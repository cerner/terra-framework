import React, { useState } from 'react';
import Button from 'terra-button';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const DateTimePickerChangingDefaultValueProgrammatically = () => {
  const [dateTime, setDate] = useState('2020-01-01T01:10:09');
  const [message, setStatus] = useState('');
  return (
    <div>
      <DateTimePickerExampleTemplate
        value={dateTime}
        selectedDate={dateTime}
      />
      <p>{message}</p>
      <Button
        text="Click To Set Date and Time to 01/30/2020 - 02:30"
        onClick={() => {
          setDate('2019-01-30T02:30:09');
          setStatus('Button clicked');
        }}
        id="button1"
      />
    </div>
  );
};

export default DateTimePickerChangingDefaultValueProgrammatically;
