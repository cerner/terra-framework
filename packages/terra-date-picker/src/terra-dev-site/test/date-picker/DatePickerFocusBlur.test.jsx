import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

class DatePickerOnBlur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blurTriggerCount: 0,
      focusTriggerCount: 0,
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
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
        </h3>
        <DatePicker
          name="date-input-onblur"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
        />
      </div>
    );
  }
}

export default DatePickerOnBlur;
