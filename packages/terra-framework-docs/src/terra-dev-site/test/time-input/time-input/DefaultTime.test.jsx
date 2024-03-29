import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from 'terra-time-input';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

const TimeInputDefault = () => (
  <div className={cx('content-wrapper')}>
    <TimeInput
      id="timeInput"
      name="time-input"
      value="12:00"
    />
  </div>
);

export default TimeInputDefault;
