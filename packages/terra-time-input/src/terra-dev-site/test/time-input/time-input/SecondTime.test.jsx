import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from '../../../../TimeInput';

const TimeInputDefault = () => (
  <TimeInput
    id="timeInput"
    name="time-input"
    value="12:12:12"
    showSeconds
  />
);

export default TimeInputDefault;
