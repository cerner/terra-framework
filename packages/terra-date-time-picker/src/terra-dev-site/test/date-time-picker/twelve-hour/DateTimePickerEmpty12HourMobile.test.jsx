import React from 'react';
import DateTimePickerExampleTemplate from '../../../common/DateTimePickerExampleTemplate';
import DateTimeUtil from '../../../../DateTimeUtils';

export default class DateTimePickerEmpty12HourMobile extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <>
        <h3>Empty Date-Time-Picker</h3>
        <DateTimePickerExampleTemplate
          id="datetimeEmpty"
          timeVariant={DateTimeUtil.FORMAT_12_HOUR}
        />
      </>
    );
  }
}
