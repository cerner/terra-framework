import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'terra-date-picker';
import classNames from 'classnames/bind';
import styles from '../../doc/example/DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The current DatePicker date if selected. Use for the selected date message.
   */
  selectedDate: PropTypes.node,
};

const defaultProps = {
  selectedDate: '',
};

class DatePickerTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: this.props.selectedDate };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  handleDateChangeRaw(event, date, metadata) {
    if (!metadata.isValidValue) {
      this.setState({ date: null });
    }
  }

  render() {
    return (
      <div>
        <p>
          Selected ISO Date:
          <span className={cx('date-wrapper')}>{this.state.date}</span>
        </p>
        <DatePicker
          name="date-input"
          selectedDate="2100-12-25"
          onChange={this.handleDateChange}
          onChangeRaw={this.handleDateChangeRaw}
        />
      </div>
    );
  }
}

DatePickerTest.propTypes = propTypes;
DatePickerTest.defaultProps = defaultProps;

const DatePickerBeyondMinMax = () => (
  <DatePickerTest
    minDate="1899-05-20"
    maxDate="2101-05-20"
  />
);

export default DatePickerBeyondMinMax;

