import React, { useState } from 'react';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerExampleInvalid = () => {
  const [dateTime, setDateTime] = useState('');
  const [isInvalid, setisInvalid] = useState(false);

  const handleDateTimeChange = (event, dateTimeValue) => {
    setDateTime(dateTimeValue);
  };

  const handleInvalidButtonClick = () => {
    setisInvalid(!isInvalid);
  };
  return (
    <div>
      <p>
        Selected ISO Date Time:
        {dateTime}
      </p>
      <button type="button" onClick={handleInvalidButtonClick}>Toggle Validity</button>
      <Field label="Enter Date/Time" htmlFor="default-invalid" error="Error Message" isInvalid={isInvalid}>
        <DateTimePicker
          ariaLabel="Enter Date/Time"
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'default-invalid' }}
          onChange={handleDateTimeChange}
          isInvalid={isInvalid}
          errorId="default-invalid-error"
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleInvalid;
