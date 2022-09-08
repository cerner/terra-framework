import React, { useState } from 'react';
import classNames from 'classnames/bind';
import TimeInput from '../../../../TimeInput';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

const TimeInputDefault = () => {
  const [value, setValue] = useState('12:00');

  return (
    <div className={cx('blue-wrapper')}>
      <TimeInput
        id="timeInput"
        name="time-input"
        value={value}
        onChange={(event, timeString) => setValue(timeString)}
      />
      <p>{`TimeInput Value: ${value}`}</p>
    </div>
  );
};

export default TimeInputDefault;
