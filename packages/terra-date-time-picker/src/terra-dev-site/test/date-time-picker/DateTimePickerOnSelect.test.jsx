import React from 'react';
import DateTimePicker from '../../../DateTimePicker';

class DatePickerOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onchangedate: '', onselectdate: '' };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }

  handleDateChange(event, onchangedate) {
    this.setState({ onchangedate });
  }

  handleDateSelect(event, onselectdate) {
    this.setState({ onselectdate });
  }

  render() {
    return (
      <div>
        <h3>
OnChange Date:
          <span id="changed-date">{this.state.onchangedate}</span>
        </h3>
        <h3>
OnSelect Date:
          <span id="selected-date">{this.state.onselectdate}</span>
        </h3>
        <DateTimePicker
          name="date-time-picker-onchange"
          onChange={this.handleDateChange}
          onSelect={this.handleDateSelect}
          value="2017-04-01T12:00"
        />
      </div>
    );
  }
}

export default DatePickerOnChange;
