import DatePicker from 'terra-date-picker/lib/DatePicker';
import Button from 'terra-button';
import React, { useState } from 'react';

export default () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <Button id="button1" text="Test Button" onBlur={() => setDisabled(true)} />
      <DatePicker name="date-input" disabled={disabled} />
    </div>
  );
};
