import React, { useState } from 'react';
import classNames from 'classnames/bind';
import DatePickerField from 'terra-date-picker/lib/DatePickerField';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerFieldTest = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isIncomplete, setIsIncomplete] = useState(false);
  const [required, setRequired] = useState(false);

  const handleInvalidButtonClick = () => {
    setIsInvalid(!isInvalid);
  };

  const handleIncompleteButtonClick = () => {
    setIsIncomplete(!isIncomplete);
    setRequired(!required);
  };

  return (
    <div className={cx('content-wrapper')}>
      <button type="button" id="validity-toggle" onClick={handleInvalidButtonClick}>Toggle Validity</button>
      <button type="button" id="incomplete-toggle" onClick={handleIncompleteButtonClick}>Toggle Incomplete</button>
      <DatePickerField
        label="Enter Date"
        isInvalid={isInvalid}
        isIncomplete={isIncomplete}
        required={required}
        error="Error message."
        name="date-input"
        datePickerId="default"
        help="Help message."
        value="Enter Date"
      />
    </div>
  );
};

export default DatePickerFieldTest;
