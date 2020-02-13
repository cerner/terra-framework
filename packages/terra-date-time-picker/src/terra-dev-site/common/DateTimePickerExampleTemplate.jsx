import React from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from '../../DateTimePicker';
import DateTimeUtils from '../../DateTimeUtils';

const propTypes = {
  /**
   * The current entered date time. Use for the selected date message.
   */
  value: PropTypes.node,
  /**
   * Work in progress
   */
  timeZone: PropTypes.string,
};

const defaultProps = {
  value: '',
};

class DatePickerExample extends React.Component {
  constructor(props) {
    super(props);
    let dateTimeDisplay = props.value;
    let timeZone = props;
    const dateTime = DateTimeUtils.createSafeDate(dateTimeDisplay, props.timeZone);

    if (dateTime && dateTime.isValid()) {
      dateTimeDisplay = dateTime.format();
      timeZone = dateTime.tz() || 'Local Time Zone';
    }

    this.state = { dateTime: dateTimeDisplay, timeZone };
    this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
  }

  handleDateTimeChange(event, dateTime) {
    this.setState({ dateTime });
  }

  render() {
    return (
      <div>
        <p>
          Selected ISO Date Time:
          <span id="date-time-value">{this.state.dateTime}</span>
        </p>
        <p>
          Selected Time Zone:
          <span id="date-time-timeZone">{this.state.timeZone}</span>
        </p>
        <DateTimePicker
          name="date-time-picker-example"
          {...this.props}
        />
      </div>
    );
  }
}

DatePickerExample.propTypes = propTypes;
DatePickerExample.defaultProps = defaultProps;

export default DatePickerExample;
