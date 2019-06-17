import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from '../../../../TimeInput';
import styles from './time-input.test.common.scss';

const cx = classNames.bind(styles);

const TimeInputDefault = () => (
  <div className={cx('content-wrapper')}>
    <TimeInput
      id="timeInput"
      name="time-input"
    />
  </div>
);

export default TimeInputDefault;
