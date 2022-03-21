import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from 'terra-time-input';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

const TimeInputDefault = () => (
  <div className={cx('content-wrapper')}>
    <p>Placeholder text to gauge padding.</p>
    <TimeInput
      id="timeInput"
      name="time-input"
    />
    <p>Placeholder text to gauge padding.</p>
  </div>
);

export default TimeInputDefault;
