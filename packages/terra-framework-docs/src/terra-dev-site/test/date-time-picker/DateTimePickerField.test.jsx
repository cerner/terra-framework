import React, { useState } from 'react';
import DateTimePickerField from '../../../../../terra-date-time-picker/src/DateTimePickerField';

const DatePickerFieldTest = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isIncomplete, setIsIncomplete] = useState(false);
  const [required, setRequired] = useState(false);

  const handleInvalidButtonClick = () => {
    setIsInvalid(!isInvalid);
  };

  const handleIncompleteButtonClick = () => {
    setIsIncomplete(!isIncomplete);
    setRequired(!required);
  };

  return (
    <div>
      <button type="button" id="validity-toggle" onClick={handleInvalidButtonClick}>Toggle Validity</button>
      <button type="button" id="incomplete-toggle" onClick={handleIncompleteButtonClick}>Toggle Incomplete</button>
      <DateTimePickerField
        isInvalid={isInvalid}
        isIncomplete={isIncomplete}
        required={required}
        error="Error message."
        name="date-input"
        datePickerId="default"
        help="Help message."
        label="Enter Date"
      />
    </div>
  );
};

export default DatePickerFieldTest;
