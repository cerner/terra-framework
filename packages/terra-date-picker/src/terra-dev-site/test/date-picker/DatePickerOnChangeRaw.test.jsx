import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

class DatePickerOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      iSO: '',
      inputValue: '',
      isCompleteValue: 'No',
      isValidValue: 'Yes',
    };
    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
  }

  handleDateChangeRaw(event, date, options) {
    this.setState({
      date,
      iSO: options.iSO,
      inputValue: options.inputValue,
      isCompleteValue: options.isCompleteValue ? 'Yes' : 'No',
      isValidValue: options.isValidValue ? 'Yes' : 'No',
    });
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <h3>
          Selected Date:
          {' '}
          <span id="selected-date">{this.state.date}</span>
          <br />
          <br />
          ISO String:
          {' '}
          <span id="iso">{this.state.iSO}</span>
          <br />
          <br />
          Input Value:
          {' '}
          <span id="input-value">{this.state.inputValue}</span>
          <br />
          <br />
          Is Date Complete?
          {' '}
          <span id="complete-date">{this.state.isCompleteValue}</span>
          <br />
          <br />
          Is Date Valid?
          {' '}
          <span id="valid-date">{this.state.isValidValue}</span>
        </h3>
        <DatePicker
          name="date-input-onchangeraw"
          onChangeRaw={this.handleDateChangeRaw}
          excludeDates={['2019-04-01', '2019-04-02']}
        />
      </div>
    );
  }
}

export default DatePickerOnChange;
