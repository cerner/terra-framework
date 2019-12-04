import React from 'react';
import DateTimePicker from '../../../DateTimePicker';

class DateTimePickerOnBlur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      blurTriggerCount: 0,
      focusTriggerCount: 0,
      iSO: '',
      inputValue: '',
      isCompleteValue: 'No',
      isValidValue: 'Yes',
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.blurCount = 0;
    this.focusCount = 0;
  }

  handleBlur(event, options) {
    this.blurCount += 1;
    this.setState({
      blurTriggerCount: this.blurCount,
      iSO: options.iSO,
      inputValue: options.inputValue,
      isCompleteValue: options.isCompleteValue ? 'Yes' : 'No',
      isValidValue: options.isValidValue ? 'Yes' : 'No',
    });
  }

  handleFocus() {
    this.focusCount += 1;
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
          {' '}
          <span id="blur-count">{this.state.blurTriggerCount}</span>
          <br />
          <br />
          onFocus Trigger Count:
          {' '}
          <span id="focus-count">{this.state.focusTriggerCount}</span>
          <br />
          <br />
          Selected Date:
          {' '}
          <span id="selected-date">{this.state.date}</span>
          <br />
          <br />
          ISO String:
          {' '}
          <span id="iso">{this.state.iSO}</span>
          <br />
          <br />
          Input Value:
          {' '}
          <span id="input-value">{this.state.inputValue}</span>
          <br />
          <br />
          Is Date Complete?
          {' '}
          <span id="complete-date">{this.state.isCompleteValue}</span>
          <br />
          <br />
          Is Date Valid?
          {' '}
          <span id="valid-date">{this.state.isValidValue}</span>
        </h3>
        <DateTimePicker
          name="date-time-picker-onblur"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={this.handleDateChange}
          excludeDates={['2019-04-01', '2019-04-02']}
        />
      </div>
    );
  }
}

export default DateTimePickerOnBlur;
