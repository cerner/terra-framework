import React from 'react';
import moment from 'moment';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

class DatePickerDefault extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectedDateUpdate = this.handleSelectedDateUpdate.bind(this);
    this.state = {
      date: moment().format(),
    };
  }

  handleSelectedDateUpdate() {
    this.setState({ date: moment().format() });
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <DatePicker
          name="date-input"
          selectedDate={this.state.date}
        />
        <button type="button" onClick={this.handleSelectedDateUpdate}>Update selected date</button>
      </div>
    );
  }
}

export default DatePickerDefault;
