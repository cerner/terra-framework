import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import {
  getHour,
  getMinute,
  newDate,
  getStartOfDay,
  addMinutes,
  cloneDate,
  formatDate,

  isTimeInDisabledRange,
  isTimeDisabled
} from './date_utils'
import styles from './stylesheets/datepicker.scss'

const cx = classNames.bind(styles);

export default class Time extends React.Component {
  static propTypes = {
    /**
     * Format of the selected time.
     */
    format: PropTypes.string,
    /**
     * Interval between 2 consecutive times on the time picker.
     */
    intervals: PropTypes.number,
    /**
     * Selected value of time.
     */
    selected: PropTypes.object,
    /**
     * A callback function to execute when time is picked.
     */
    onChange: PropTypes.func,
    /**
     * Name of button to select current time.
     */
    todayButton: PropTypes.string,
    /**
     * Minimum value of time that can be selected .
     */
    minTime: PropTypes.object,
    /**
     * Maximum value of time that can be selected .
     */
    maxTime: PropTypes.object,
    /**
     * Array to store values of time that are disabled to pick .
     */
    excludeTimes: PropTypes.array,
    /**
     * Prop to store month reference object.
     */
    monthRef: PropTypes.object
  }

  static get defaultProps () {
    return {
      intervals: 30,
      onTimeChange: () => {},
      todayButton: null
    }
  }

  componentDidMount () {
    // code to ensure selected time will always be in focus within time window when it first appears
    const multiplier = 60 / this.props.intervals
    const currH = (this.props.selected) ? getHour(this.props.selected) : getHour(newDate())
    this.list.scrollTop = 30 * (multiplier * currH)
  }

  handleClick = (time) => {
    if (((this.props.minTime || this.props.maxTime) && isTimeInDisabledRange(time, this.props)) || (this.props.excludeTimes && isTimeDisabled(time, this.props.excludeTimes))) {
      return
    }

    this.props.onChange(time)
  }

  liClasses = (time, currH, currM) => {
    let classes = ['react-datepicker-time-list-item']

    if ((currH === getHour(time)) && (currM === getMinute(time))) {
      classes.push('react-datepicker-time-list-item--selected')
    }
    if (((this.props.minTime || this.props.maxTime) && isTimeInDisabledRange(time, this.props)) || (this.props.excludeTimes && isTimeDisabled(time, this.props.excludeTimes))) {
      classes.push('react-datepicker-time-list-item--disabled')
    }

    return classes.join(' ')
  }

  renderTimes = () => {
    let times = []
    const format = (this.props.format) ? this.props.format : 'hh:mm A'
    const intervals = this.props.intervals
    const activeTime = (this.props.selected) ? this.props.selected : newDate()
    const currH = getHour(activeTime)
    const currM = getMinute(activeTime)
    let base = getStartOfDay(newDate())
    const multiplier = 1440 / intervals
    for (let i = 0; i < multiplier; i++) {
      times.push(addMinutes(cloneDate(base), i * intervals))
    }

    return times.map((time, i) =>
      <li key={i} onClick={this.handleClick.bind(this, time)} className={cx(this.liClasses(time, currH, currM))}>
        {formatDate(time, format)}
      </li>
    )
  }

  render () {
    let height = null
    if (this.props.monthRef) {
      height = this.props.monthRef.clientHeight - 39
    }

    return (
      <div className={cx(['react-datepicker-time-container', `${(this.props.todayButton) ? 'react-datepicker-time-container--with-today-button' : ''}`])}>
        <div className={cx(['react-datepicker-header', 'react-datepicker-header--time'])}>
          <div className={cx('react-datepicker-time-header')}>Time</div>
        </div>
        <div className={cx('react-datepicker-time')}>
          <div className={cx('react-datepicker-time-box')}>
            <ul className={cx('react-datepicker-time-list')} ref={list => { this.list = list }} style={height ? {height} : {}}>
              {this.renderTimes.bind(this)()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
