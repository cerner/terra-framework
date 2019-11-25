import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

class DatePickerOnBlur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blurTriggerCount: 0,
      focusTriggerCount: 0,
      iSO: '',
      inputValue: '',
      isCompleteValue: 'No',
      isValidValue: 'Yes',
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.blurCount = 0;
    this.focusCount = 0;
  }

  handleBlur(event, options) {
    this.blurCount += 1;
    this.setState({
      blurTriggerCount: this.blurCount,
      iSO: options.iSO,
      inputValue: options.inputValue,
      isCompleteValue: options.isCompleteValue ? 'Yes' : 'No',
      isValidValue: options.isValidValue ? 'Yes' : 'No',
    });
  }

  handleFocus() {
    this.focusCount += 1;
    this.setState({ focusTriggerCount: this.focusCount });
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <h3>
          onBlur Trigger Count:
          {' '}
          <span id="blur-count">{this.state.blurTriggerCount}</span>
          <br />
          <br />
          onFocus Trigger Count:
          {' '}
          <span id="focus-count">{this.state.focusTriggerCount}</span>
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
          name="date-input-onblur"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          excludeDates={['2019-04-01', '2019-04-02']}
        />
      </div>
    );
  }
}

export default DatePickerOnBlur;
