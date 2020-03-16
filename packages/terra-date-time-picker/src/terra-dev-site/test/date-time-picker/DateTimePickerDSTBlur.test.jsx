import React from 'react';
import DateTimePicker from '../../../DateTimePicker';

class DateTimePickerOnBlur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blurTriggerCount: 0,
      iSO: '',
      isAmbiguousHour: 'No',
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.blurCount = 0;
  }

  handleBlur(event, options) {
    this.blurCount += 1;
    this.setState({
      blurTriggerCount: this.blurCount,
      iSO: options.iSO,
      isAmbiguousHour: options.isAmbiguousHour ? 'Yes' : 'No',
    });
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
          Selected ISO Date Time:
          {' '}
          <span id="iso">{this.state.iSO}</span>
          <br />
          <br />
          Is Ambiguous?
          {' '}
          <span id="ambiguous-date">{this.state.isAmbiguousHour}</span>
          <br />
          <br />
        </h3>
        <DateTimePicker
          name="date-time-picker-onblur-dst"
          value="2017-11-05T01:30:00"
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default DateTimePickerOnBlur;
