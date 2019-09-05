import React from 'react';
import Button from 'terra-button';
import DatePicker from '../../../DatePicker';

class DatePickerDefault extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectedDateUpdate = this.handleSelectedDateUpdate.bind(this);

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
    this.state = {
      date: '2019-03-07',
    };
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  handleDateChangeRaw(event, date) {
    this.setState({ date });
  }

  handleSelectedDateUpdate(event) {
    this.setState({ date: event.currentTarget.textContent });
  }

  render() {
    return (
      <div>
        <DatePicker
          name="controlled-date-picker"
          value={this.state.date}
          onChange={this.handleDateChange}
          onChangeRaw={this.handleDateChangeRaw}
        />
        {'  '}
        <Button
          id="button1"
          text=""
          onClick={this.handleSelectedDateUpdate}
        />
        {'  '}
        <Button
          id="button2"
          text="01/01/2019"
          onClick={this.handleSelectedDateUpdate}
        />
        {'  '}
        <Button
          id="button3"
          text="2019-02-02"
          onClick={this.handleSelectedDateUpdate}
        />
        {'  '}
        <Button
          id="button4"
          text="2019-03-03T10:30"
          onClick={this.handleSelectedDateUpdate}
        />
        {'  '}
        <Button
          id="button5"
          text="0101123"
          onClick={this.handleSelectedDateUpdate}
        />
      </div>
    );
  }
}

export default DatePickerDefault;
