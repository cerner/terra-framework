import React from 'react';
import DateTimePicker from '../../../DateTimePicker';
import DateTimeUtils from '../../../DateTimeUtils';

class DateTimePickerEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blurTriggerCount: 0,
      focusTriggerCount: 0,
      changeValue: '',
      changeRawValue: '',
      selectValue: '',
      clickOutsideTriggerCount: 0,
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRaw = this.handleChangeRaw.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleOnClickOutside = this.handleOnClickOutside.bind(this);
    this.blurCount = 0;
    this.focusCount = 0;
    this.clickOutsideCount = 0;
  }

  handleBlur() {
    this.blurCount += 1;
    this.setState({ blurTriggerCount: this.blurCount });
  }

  handleFocus() {
    this.focusCount += 1;
    this.setState({ focusTriggerCount: this.focusCount });
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
    this.clickOutsideCount += 1;
    this.setState({ clickOutsideTriggerCount: this.clickOutsideCount });
  }

  render() {
    return (
      <div>
        <p>
          onFocus Trigger Count:
          {' '}
          <span id="onFocus-count">{this.state.focusTriggerCount}</span>
          <br />
          <br />
          onBlur Trigger Count:
          {' '}
          <span id="onBlur-count">{this.state.blurTriggerCount}</span>
          <br />
          <br />
          onClickOutside Trigger Count:
          {' '}
          <span id="onClickOutside-count">{this.state.clickOutsideTriggerCount}</span>
          <br />
          <br />
          onChangeRaw Triggered:
          {' '}
          <span id="onChangeRaw-count">{this.state.changeRawValue}</span>
          <br />
          <br />
          onChange Triggered:
          {' '}
          <span id="onChange-Count">{this.state.changeValue}</span>
          <br />
          <br />
          onSelect Triggered:
          {' '}
          <span id="onSelect-count">{this.state.selectValue}</span>
        </p>
        <DateTimePicker
          name="date-time-picker-events"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onChangeRaw={this.handleChangeRaw}
          onSelect={this.handleSelect}
          onClickOutside={this.handleOnClickOutside}
          timeVariant={DateTimeUtils.FORMAT_12_HOUR}
          showSeconds
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default DateTimePickerEvents;
