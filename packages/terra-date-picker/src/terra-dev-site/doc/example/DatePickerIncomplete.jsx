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

const DatePickerIncompleteExample = (props) => {
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
      <Field label="Enter Date" htmlFor="default-incomplete">
        <DatePicker
          name="date-input"
          id="default-incomplete"
          onChange={handleDateChange}
          onChangeRaw={handleDateChangeRaw}
          required
          isIncomplete
          {...props}
        />
      </Field>
    </div>
  );
};

DatePickerIncompleteExample.propTypes = propTypes;
DatePickerIncompleteExample.defaultProps = defaultProps;

export default DatePickerIncompleteExample;
