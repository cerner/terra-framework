import React, { useState } from 'react';
import moment from 'moment';
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

const DatePickerExample = (props) => {
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
      <Field label="Enter Date" htmlFor="include-dates">
        <DatePicker
          name="date-input"
          id="include-dates"
          onChange={handleDateChange}
          onChangeRaw={handleDateChangeRaw}
          {...props}
        />
      </Field>
    </div>
  );
};

DatePickerExample.propTypes = propTypes;
DatePickerExample.defaultProps = defaultProps;

const DatePickerExampleIncludeDates = () => (
  <DatePickerExample
    includeDates={[moment().format(), moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
  />
);

export default DatePickerExampleIncludeDates;
