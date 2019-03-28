import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';

const propTypes = {
  /**
   * The current entered date time. Use for the selected date message.
   */
  value: PropTypes.node,
};

const defaultProps = {
  value: '',
};

class DateTimePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeDateTime: this.props.value,
      selectDateTime: this.props.value,
    };
    this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
    this.handleDateTimeOnSelect = this.handleDateTimeOnSelect.bind(this);
  }

  handleDateTimeChange(event, dateTime) {
    this.setState({ changeDateTime: dateTime });
  }

  handleDateTimeOnSelect(event, dateTime) {
    this.setState({ selectDateTime: dateTime });
  }

  render() {
    return (
      <div>
        <p>
Selected ISO Date Time:
          {this.state.changeDateTime}
        </p>
        <p>
onSelect ISO Date Time:
          {this.state.selectDateTime}
        </p>
        <Field label="Enter Date/Time" htmlFor="default">
          <DateTimePicker
            name="date-time-picker-example"
            dateInputAttributes={{ id: 'default' }}
            onChange={this.handleDateTimeChange}
            onSelect={this.handleDateTimeOnSelect}
            {...this.props}
          />
        </Field>
      </div>
    );
  }
}

DateTimePickerExample.propTypes = propTypes;
DateTimePickerExample.defualtProps = defaultProps;

export default DateTimePickerExample;
