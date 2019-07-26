import React from 'react';
import DateTimePickerExampleTemplate from '../../../common/DateTimePickerExampleTemplate';
import DateTimeUtil from '../../../../DateTimeUtils';

export default class DateTimePickerValue12HourMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datetime: '2019-04-10T15:23:00-05:00' };
    this.handleOnChange = this.handleOnChange.bind(this);
    if (!window.ontouchstart) {
      this.resetontouchstart = true;
      window.ontouchstart = 'true';
    }
  }

  componentDidMount() {
    if (!window.ontouchstart) {
      this.resetontouchstart = true;
      window.ontouchstart = 'true';
    }
  }

  componentWillUnmount() {
    if (this.resetontouchstart) {
      delete window.ontouchstart;
    }
  }

  handleOnChange(event, datetime) {
    this.setState({ datetime });
  }

  render() {
    return (
      <>
        <h3 id="titleWithDateTimeValue">Date-Time-Picker with Seconds</h3>
        <DateTimePickerExampleTemplate
          id="disabledDatetimeValueProvided"
          showSeconds
          value={this.state.datetime}
          timeVariant={DateTimeUtil.FORMAT_12_HOUR}
        />
      </>
    );
  }
}
