import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from '../../../../TimeInput';

const cx = classNames.bind(styles);

const TimeInputDefault = () => (
  <TimeInput
    id="timeInput"
    name="time-input"
    showSeconds
  />
);

export default TimeInputDefault;
