import React, { useEffect } from 'react';
import DateTimeUtil from 'terra-date-time-picker/lib/DateTimeUtils';
import DateTimePickerExampleTemplate from '../common/DateTimePickerExampleTemplate';

let resetOnTouchStart;

const DateTimePickerEmpty12HourMobile = () => {
  useEffect(() => {
    if (!window.ontouchstart) {
      resetOnTouchStart = true;
      window.ontouchstart = 'true';
    }

    return () => {
      if (resetOnTouchStart) {
        delete window.ontouchstart;
      }
    };
  });

  return (
    <>
      <h3>Empty Date-Time-Picker</h3>
      <DateTimePickerExampleTemplate
        id="datetimeEmpty"
        timeVariant={DateTimeUtil.FORMAT_12_HOUR}
      />
    </>
  );
};

export default DateTimePickerEmpty12HourMobile;
