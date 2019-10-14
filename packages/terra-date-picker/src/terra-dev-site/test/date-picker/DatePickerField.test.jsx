import React from 'react';
import classNames from 'classnames/bind';
import DatePickerField from '../../../DatePickerField';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

class DatePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInvalid: false,
      isIncomplete: false,
      required: false,
    };
    this.handleInvalidButtonClick = this.handleInvalidButtonClick.bind(this);
    this.handleIncompleteButtonClick = this.handleIncompleteButtonClick.bind(this);
  }

  handleInvalidButtonClick() {
    this.setState(prevState => ({
      isInvalid: !prevState.isInvalid,
    }));
  }

  handleIncompleteButtonClick() {
    this.setState(prevState => ({
      isIncomplete: !prevState.isIncomplete,
      required: !prevState.required,
    }));
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <button type="button" id="validity-toggle" onClick={this.handleInvalidButtonClick}>Toggle Validity</button>
        <button type="button" id="incomplete-toggle" onClick={this.handleIncompleteButtonClick}>Toggle Incomplete</button>
        <DatePickerField
          label="Enter Date"
          isInvalid={this.state.isInvalid}
          isIncomplete={this.state.isIncomplete}
          required={this.state.required}
          error="Error message."
          name="date-input"
          datePickerId="default"
          help="Help message."
        />
      </div>
    );
  }
}

export default DatePickerExample;
