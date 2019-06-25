import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';
import styles from '../time-input/time-input.test.module.scss';

const cx = classNames.bind(styles);

const TimeInputDefault = () => (
  <div className={cx('content-wrapper')}>
    <TimeInput
      id="timeInput"
      name="time-input"
      value="09:22"
      variant={TimeUtil.FORMAT_12_HOUR}
    />
  </div>
);

export default TimeInputDefault;
