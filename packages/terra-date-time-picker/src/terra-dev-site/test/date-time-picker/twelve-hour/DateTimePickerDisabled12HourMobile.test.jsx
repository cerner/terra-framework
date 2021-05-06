import React, { useEffect } from 'react';
import DateTimePickerExampleTemplate from '../../../common/DateTimePickerExampleTemplate';
import DateTimeUtil from '../../../../DateTimeUtils';

let resetOnTouchStart;

const DateTimePickerDisabled12HourMobile = () => {
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
      <h3 id="titleWithDateTimeValue">Disabled Date-Time-Picker</h3>
      <DateTimePickerExampleTemplate
        id="disabledDatetimeValueProvided"
        disabled
        value="2019-04-10T15:23:00-05:00"
        timeVariant={DateTimeUtil.FORMAT_12_HOUR}
      />
    </>
  );
};

export default DateTimePickerDisabled12HourMobile;
