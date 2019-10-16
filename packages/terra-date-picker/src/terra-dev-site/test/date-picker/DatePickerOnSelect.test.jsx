import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

class DatePickerOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: '' };
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }

  handleDateSelect(event, date) {
    this.setState({ date });
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <h3>
          Selected Date:
          {' '}
          <span id="selected-date">{this.state.date}</span>
        </h3>
        <DatePicker
          name="date-input-onselect"
          onSelect={this.handleDateSelect}
        />
      </div>
    );
  }
}

export default DatePickerOnChange;
