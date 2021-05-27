import React, { useState } from 'react';
import classNames from 'classnames/bind';
import TimeInputField from 'terra-time-input/lib/TimeInputField';
import styles from './TimeInputDocCommon.module.scss';

const cx = classNames.bind(styles);

const TimeInputFieldExample = () => {
  const [value, setValue] = useState('');

  return (
    <div className={cx('time-wrapper')}>
      <TimeInputField
        timeInputId="timeInputField"
        name="time-input-field"
        label="Label text"
        value={value}
        onChange={(event, timeString) => setValue(timeString)}
        required
        error="Error message."
        help="Help message."
      />
      <p>{`TimeInputField Value: ${value}`}</p>
    </div>
  );
};

export default TimeInputFieldExample;
