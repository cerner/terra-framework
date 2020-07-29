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
  timeZone: PropTypes.string,
};

const defaultProps = {
  value: '',
  timeZone: undefined,
};

class DateTimePickerTimezoneTemplate extends React.Component {
  constructor(props) {
    super(props);
    let dateTimeDisplay = props.value;
    let timeZoneDisplay = props.timeZone;
    const dateTime = DateTimeUtils.createSafeDate(dateTimeDisplay, props.timeZone);

    if (dateTime && dateTime.isValid()) {
      dateTimeDisplay = dateTime.format();
      timeZoneDisplay = dateTime.tz();
    }

    this.state = { dateTime: dateTimeDisplay, timeZone: timeZoneDisplay };
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
          onChange={this.handleDateTimeChange}
          {...this.props}
        />
      </div>
    );
  }
}

DateTimePickerTimezoneTemplate.propTypes = propTypes;
DateTimePickerTimezoneTemplate.defaultProps = defaultProps;

export default DateTimePickerTimezoneTemplate;
