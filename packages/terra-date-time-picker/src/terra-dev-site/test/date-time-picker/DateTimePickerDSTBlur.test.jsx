import React, { useState } from 'react';
import DateTimePicker from '../../../DateTimePicker';

let blurCount = 0;

const DateTimePickerDSTBlur = () => {
  const [blurTriggerCount, setBlurTriggerCount] = useState(0);
  const [iSO, setISO] = useState('');
  const [isAmbiguousHour, setIsAmbiguousHour] = useState('No');

  const handleBlur = (event, options) => {
    blurCount += 1;
    setBlurTriggerCount(blurCount);
    setISO(options.iSO);
    setIsAmbiguousHour(options.isAmbiguousHour ? 'Yes' : 'No');
  };

  return (
    <div>
      <h3>
        onBlur Trigger Count:
        {' '}
        <span id="blur-count">{blurTriggerCount}</span>
        <br />
        <br />
        Selected ISO Date Time:
        {' '}
        <span id="iso">{iSO}</span>
        <br />
        <br />
        Is Ambiguous?
        {' '}
        <span id="ambiguous-date">{isAmbiguousHour}</span>
        <br />
        <br />
      </h3>
      <DateTimePicker
        name="date-time-picker-onblur-dst"
        value="2017-11-05T01:30:00"
        onBlur={handleBlur}
        initialTimeZone="America/Chicago"
      />
    </div>
  );
};

export default DateTimePickerDSTBlur;
