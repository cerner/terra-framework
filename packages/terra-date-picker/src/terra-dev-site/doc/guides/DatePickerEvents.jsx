import React from 'react';
import DatePicker from '../../../DatePicker';

class DatePickerEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blurTriggerCount: 0,
      changeValue: '',
      changeRawValue: '',
      selectValue: '',
      clickOutsideTriggerCount: 0,
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRaw = this.handleChangeRaw.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleOnClickOutside = this.handleOnClickOutside.bind(this);
    this.blurCount = 0;
    this.clickOutsideCount = 0;
  }

  handleBlur() {
    this.blurCount = this.blurCount + 1;
    this.setState({ blurTriggerCount: this.blurCount });
  }

  handleChange(event, value) {
    this.setState({ changeValue: value });
  }

  handleChangeRaw(event, vaue) {
    this.setState({ changeRawValue: vaue });
  }

  handleSelect(event, value) {
    this.setState({ selectValue: value });
  }

  handleOnClickOutside() {
    this.clickOutsideCount = this.clickOutsideCount + 1;
    this.setState({ clickOutsideTriggerCount: this.clickOutsideCount });
  }

  render() {
    return (
      <div>
        <p>
          onBlur Trigger Count:
          <span id="blur-state">{this.state.blurTriggerCount}</span>
          <br />
          <br />
          onClickOutside Trigger Count:
          <span id="blur-state">{this.state.clickOutsideTriggerCount}</span>
          <br />
          <br />
          onChange Triggered:
          <span id="blur-state">{this.state.changeValue}</span>
          <br />
          <br />
          onChangeRaw Triggered:
          <span id="blur-state">{this.state.changeRawValue}</span>
          <br />
          <br />
          onSelect Triggered:
          <span id="blur-state">{this.state.selectValue}</span>
        </p>
        <DatePicker
          name="date-picker-events"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onChangeRaw={this.handleChangeRaw}
          onSelect={this.handleSelect}
          onClickOutside={this.handleOnClickOutside}
        />
      </div>
    );
  }
}

export default DatePickerEvents;
