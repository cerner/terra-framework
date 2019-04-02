import React from 'react';
import DateTimePicker from '../../../DateTimePicker';

class DateTimePickerOnBlur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blurState: 'Blur not triggered' };
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur() {
    this.setState({ blurState: 'Blur triggered' });
  }

  render() {
    return (
      <div>
        <h3>
          Blur State:
          <span id="blur-state">{this.state.blurState}</span>
        </h3>
        <DateTimePicker
          name="date-time-picker-onblur"
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default DateTimePickerOnBlur;
