import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import DatePicker from 'terra-date-picker';
import classNames from 'classnames/bind';
import styles from './DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The current DatePicker date if selected. Use for the selected date message.
   */
  selectedDate: PropTypes.node,
};

const defaultProps = {
  selectedDate: '',
};

const DatePickerInvalidExample = (props) => {
  const [date, setDate] = useState(props.selectedDate);

  const handleDateChange = (event, dateValue) => {
    setDate(dateValue);
  };

  const handleDateChangeRaw = (event, dateValue, metadata) => {
    if (!metadata.isValidValue) {
      setDate(null);
    }
  };

  return (
    <div>
      <p>
        Selected ISO Date:
        <span className={cx('date-wrapper')}>{date}</span>
      </p>
      <Field label="Enter Date" htmlFor="default-invalid">
        <DatePicker
          name="date-input"
          id="default-invalid"
          onChange={handleDateChange}
          onChangeRaw={handleDateChangeRaw}
          isInvalid
          {...props}
        />
      </Field>
    </div>
  );
};

DatePickerInvalidExample.propTypes = propTypes;
DatePickerInvalidExample.defaultProps = defaultProps;

export default DatePickerInvalidExample;
