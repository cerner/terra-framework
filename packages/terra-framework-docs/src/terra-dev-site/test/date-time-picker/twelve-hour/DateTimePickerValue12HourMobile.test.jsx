import React, { useEffect } from 'react';
import DateTimeUtil from 'terra-date-time-picker/lib/DateTimeUtils';
import DateTimePickerExampleTemplate from '../common/DateTimePickerExampleTemplate';

let resetOnTouchStart;

const DateTimePickerValue12HourMobile = () => {
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
      <h3 id="titleWithDateTimeValue">
        Date-Time-Picker with value provided - Current Value:&nbsp;
        2019-04-10T15:23:00-05:00
      </h3>
      <DateTimePickerExampleTemplate
        id="datetimeValueProvided"
        value="2019-04-10T15:23:00-05:00"
        timeVariant={DateTimeUtil.FORMAT_12_HOUR}
      />
    </>
  );
};

export default DateTimePickerValue12HourMobile;
