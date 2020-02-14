import React from 'react';
import DateTimePicker from '../../../DateTimePicker';

class DatePickerOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      iSO: '',
      inputValue: '',
      dateValue: '',
      timeValue: '',
      isAmbiguousHour: 'No',
      isCompleteValue: 'No',
      isValidValue: 'Yes',
    };
    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
  }

  handleDateChangeRaw(event, date, options) {
    this.setState({
      date,
      iSO: options.iSO,
      inputValue: options.inputValue,
      dateValue: options.dateValue,
      timeValue: options.timeValue,
      isAmbiguousHour: options.isAmbiguousHour ? 'Yes' : 'No',
      isCompleteValue: options.isCompleteValue ? 'Yes' : 'No',
      isValidValue: options.isValidValue ? 'Yes' : 'No',
    });
  }

  render() {
    return (
      <div>
        <h3>
          Selected Date:
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
          Date Value:
          {' '}
          <span id="date-value">{this.state.dateValue}</span>
          <br />
          <br />
          Time Value:
          {' '}
          <span id="time-value">{this.state.timeValue}</span>
          <br />
          <br />
          Is Ambiguous?
          {' '}
          <span id="ambiguous-date">{this.state.isAmbiguousHour}</span>
          <br />
          <br />
          Is Date-Time Complete?
          {' '}
          <span id="complete-date">{this.state.isCompleteValue}</span>
          <br />
          <br />
          Is Date-Time Valid?
          {' '}
          <span id="valid-date">{this.state.isValidValue}</span>
        </h3>
        <DateTimePicker
          name="date-time-picker-onchangeraw"
          onChangeRaw={this.handleDateChangeRaw}
        />
      </div>
    );
  }
}

export default DatePickerOnChange;
