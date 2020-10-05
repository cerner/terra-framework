import React from 'react';
import classNames from 'classnames/bind';
import TimeInputField from '../../../../TimeInputField';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

const TimeInputFieldDefault = () => (
  <div className={cx('content-wrapper')}>
    <TimeInputField
      timeInputId="timeInput"
      name="time-input"
      label="Enter Time"
      value="12:00"
      disabled
    />
  </div>
);

export default TimeInputFieldDefault;
