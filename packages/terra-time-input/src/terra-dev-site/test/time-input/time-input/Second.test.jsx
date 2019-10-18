import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from '../../../../TimeInput';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

const TimeInputDefault = () => (
  <div className={cx('content-wrapper')}>
    <TimeInput
      id="timeInput"
      name="time-input"
      showSeconds
    />
  </div>
);

export default TimeInputDefault;
