import React, { useState } from 'react';
import Button from 'terra-button';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const DateTimePickerDSTDisabled = () => {
  const [active, setActive] = useState(true);

  const toggleDateTimePicker = () => {
    setActive(!active);
  };

  return (
    <div>
      <Button
        id="date-time-picker-toggler"
        text={active ? 'Disable' : 'Enable'}
        onClick={toggleDateTimePicker}
      />
      <DateTimePickerExampleTemplate
        value="2017-11-05T01:30:00"
        disabled={!active}
        initialTimeZone="America/Chicago"
      />
    </div>
  );
};

export default DateTimePickerDSTDisabled;
