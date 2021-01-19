import React from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';
import DateTimeUtils from '../../DateTimeUtils';

const propTypes = {
  /**
   * The current entered date time. Use for the selected date message.
   */
  value: PropTypes.string,
  /**
   * Timezone for the provided date time.
   */
  initialTimeZone: PropTypes.string,
};

const defaultProps = {
  value: '',
};

class DatePickerExample extends React.Component {
  constructor(props) {
    super(props);
    let dateTimeDisplay = props.value;
    const dateTime = DateTimeUtils.createSafeDate(dateTimeDisplay, props.initialTimeZone);

    if (dateTime && dateTime.isValid()) {
      dateTimeDisplay = dateTime.format();
    }

    this.state = { dateTime: dateTimeDisplay };
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
          <span data-date-time-value>{this.state.dateTime}</span>
        </p>
        <DateTimePicker
          name="date-time-picker-example"
          onChange={this.handleDateTimeChange}
          initialTimeZone={this.props.initialTimeZone}
          {...this.props}
        />
      </div>
    );
  }
}

DatePickerExample.propTypes = propTypes;
DatePickerExample.defaultProps = defaultProps;

export default DatePickerExample;
