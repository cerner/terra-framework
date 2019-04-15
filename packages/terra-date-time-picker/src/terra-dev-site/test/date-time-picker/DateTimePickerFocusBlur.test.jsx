import React from 'react';
import DateTimePicker from '../../../DateTimePicker';

class DateTimePickerOnBlur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: '', blurTriggerCount: 0, focusTriggerCount: 0 };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.blurCount = 0;
    this.focusCount = 0;
  }

  handleBlur() {
    this.blurCount = this.blurCount + 1;
    this.setState({ blurTriggerCount: this.blurCount });
  }

  handleFocus() {
    this.focusCount = this.focusCount + 1;
    this.setState({ focusTriggerCount: this.focusCount });
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <h3>
          onBlur Trigger Count:
          <span id="blur-count">{this.state.blurTriggerCount}</span>
          <br />
          <br />
          onFocus Trigger Count:
          <span id="focus-count">{this.state.focusTriggerCount}</span>
          <br />
          <br />
          Selected Date:
          <span id="selected-date">{this.state.date}</span>
        </h3>
        <DateTimePicker
          name="date-time-picker-onblur"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
}

export default DateTimePickerOnBlur;
