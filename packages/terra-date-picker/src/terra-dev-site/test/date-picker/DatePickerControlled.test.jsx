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

  handleSelectedDateUpdate() {
    this.setState({ date: '2019-01-01' });
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
          id="reset-button"
          text="Set to 01/01/2019"
          onClick={this.handleSelectedDateUpdate}
        />
      </div>
    );
  }
}

export default DatePickerDefault;
