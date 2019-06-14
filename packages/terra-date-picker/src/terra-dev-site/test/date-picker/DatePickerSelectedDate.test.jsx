import React from 'react';
import moment from 'moment';
import DatePicker from '../../../DatePicker';

class DatePickerDefault extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectedDateUpdate = this.handleSelectedDateUpdate.bind(this);

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
    this.state = {
      date: "2019-10-15", //moment().format(),
    };
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  handleDateChangeRaw(event, date) {
    this.setState({ date });
  }

  handleSelectedDateUpdate() {
    this.setState({ date: moment().format() });
  }

  render() {
    return (
      <div>
        <DatePicker
          name="date-input"
          // defaultValue={this.state.date}
          // selectedDate={this.state.date}
          value={this.state.date}
          onChange={this.handleDateChange}
          onChangeRaw={this.handleDateChangeRaw}
        />
        <button type="button" onClick={this.handleSelectedDateUpdate}>Update selected date</button>
      </div>
    );
  }
}

export default DatePickerDefault;
