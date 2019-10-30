import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

const TimeInputDefault = () => (
  <div className={cx('content-wrapper')}>
    <TimeInput
      id="timeInput"
      name="time-input"
      variant={TimeUtil.FORMAT_12_HOUR}
      required
      isInvalidMeridiem
    />
  </div>
);

export default TimeInputDefault;
