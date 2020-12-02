import React from 'react';
import moment from 'moment-timezone';
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

class DatePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: this.props.selectedDate };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  handleDateChangeRaw(event, date, metadata) {
    if (!metadata.isValidValue) {
      this.setState({ date: null });
    }
  }

  render() {
    return (
      <div>
        <p>
          Selected ISO Date:
          <span className={cx('date-wrapper')}>{this.state.date}</span>
        </p>
        <Field label="Enter Date" htmlFor="include-dates">
          <DatePicker
            name="date-input"
            id="include-dates"
            onChange={this.handleDateChange}
            onChangeRaw={this.handleDateChangeRaw}
            {...this.props}
          />
        </Field>
      </div>
    );
  }
}

DatePickerExample.propTypes = propTypes;
DatePickerExample.defaultProps = defaultProps;

const DatePickerExampleIncludeDates = () => (
  <DatePickerExample
    includeDates={[moment().format(), moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
  />
);

export default DatePickerExampleIncludeDates;
