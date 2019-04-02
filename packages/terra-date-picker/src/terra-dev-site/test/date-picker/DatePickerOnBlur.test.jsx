import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

class DatePickerOnBlur extends React.Component {
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
        <DatePicker
          name="date-input-onblur"
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default DatePickerOnBlur;
