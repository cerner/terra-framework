import DatePicker from 'terra-date-picker/lib/DatePicker';
import Button from 'terra-button';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../../doc/example/DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

export default () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className={cx('content-wrapper')}>
      <Button id="button1" text="Test Button" onBlur={() => setDisabled(true)} />
      <DatePicker name="date-input" disabled={disabled} />
    </div>
  );
};
