import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Day from './day'
import WeekNumber from './week_number'
import * as utils from './date_utils'
import styles from './stylesheets/react_datepicker.module.scss'

const cx = classNames.bind(styles);

export default class Week extends React.Component {
  static propTypes = {
    /**
     * Day Value Entered.
     */
    day: PropTypes.object.isRequired,
    /**
     * A callback function for custom day class names.
     */
    dayClassName: PropTypes.func,
    /**
     * Maximum Date value for a date range.
     */
    endDate: PropTypes.object,
    /**
     * Array to store values of date that are disabled to pick .
     */
    excludeDates: PropTypes.array,
    /**
     * A callback function to be executed to determine if a given date should be filtered.
     */
    filterDate: PropTypes.func,
    /**
     * A callback function to format week number .
     */
    formatWeekNumber: PropTypes.func,
    /**
     * Highlight range of dates with custom classes.
     */
    highlightDates: PropTypes.instanceOf(Map),
    /**
     * Show dates only in the given array.
     */
    includeDates: PropTypes.array,
    /**
     * Timezone value to indicate in which timezone the date-time component is rendered.
     * The value provided should be a valid [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) string, else will default to browser/local timezone.
     */
    initialTimeZone: PropTypes.string,
    /**
     * Prop to show inline version of date picker component.
     */
    inline: PropTypes.bool,
    /**
     * Maximum value of date that can be selected by user.
     */
    maxDate: PropTypes.object,
    /**
     * Minimum value of date that can be selected by user.
     */
    minDate: PropTypes.object,
    /**
     * Month value picked by user.
     */
    month: PropTypes.number,
    /**
     * A callback function to execute when day is selected.
     */
    onDayClick: PropTypes.func,
    /**
     * A callback function to execute when the mouse cursor hovers over the day..
     */
    onDayMouseEnter: PropTypes.func,
    /**
     * A callback function to execute on mouse down on day.
     * requires no parameter.
     */
    onDayMouseDown: PropTypes.func,
    /**
     * A callback function to execute when a week is selected.
     */
    onWeekSelect: PropTypes.func,
    /**
     * Prop to store previous selection value.
     */
    preSelection: PropTypes.object,
    /**
     * Prop to store current selection value.
     */
    selected: PropTypes.object,
    /**
     * Prop to store value while selecting date.
     */
    selectingDate: PropTypes.object,
    /**
     * Mark date picker to select end of range .
     */
    selectsEnd: PropTypes.bool,
    /**
     * Mark date picker to select start of range .
     */
    selectsStart: PropTypes.bool,
    /**
     * Prop to show week numbers .
     */
    showWeekNumber: PropTypes.bool,
    /**
     * Minimum date for a given range.
     */
    startDate: PropTypes.object,
    /**
     * Whether or not calendar is opened via keyboard
     */
    isCalendarKeyboardFocused: PropTypes.bool,
  }

  handleDayClick = (day, event) => {
    if (this.props.onDayClick) {
      this.props.onDayClick(day, event)
    }
  }

  handleDayMouseEnter = (day) => {
    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(day)
    }
  }

  handleDayMouseDown = () => {
    if (this.props.onDayMouseDown) {
      this.props.onDayMouseDown();
    }
  }

  handleWeekClick = (day, weekNumber, event) => {
    if (typeof this.props.onWeekSelect === 'function') {
      this.props.onWeekSelect(day, weekNumber, event)
    }
  }

  formatWeekNumber = (startOfWeek) => {
    if (this.props.formatWeekNumber) {
      return this.props.formatWeekNumber(startOfWeek)
    }
    return utils.getWeek(startOfWeek)
  }

  renderDays = () => {
    const startOfWeek = utils.getStartOfWeek(utils.cloneDate(this.props.day))
    const days = []
    const weekNumber = this.formatWeekNumber(startOfWeek)
    if (this.props.showWeekNumber) {
      const onClickAction = this.props.onWeekSelect
        ? this.handleWeekClick.bind(this, startOfWeek, weekNumber)
        : undefined
      days.push(<WeekNumber key="W" weekNumber={weekNumber} onClick={onClickAction} />)
    }
    return days.concat([0, 1, 2, 3, 4, 5, 6].map(offset => {
      const day = utils.addDays(utils.cloneDate(startOfWeek), offset)
      return (
        <Day
          isCalendarKeyboardFocused={this.props.isCalendarKeyboardFocused}
          key={offset}
          day={day}
          month={this.props.month}
          onClick={this.handleDayClick.bind(this, day)}
          onMouseEnter={this.handleDayMouseEnter.bind(this, day)}
          onDayMouseDown={this.handleDayMouseDown}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
          excludeDates={this.props.excludeDates}
          includeDates={this.props.includeDates}
          initialTimeZone={this.props.initialTimeZone}
          inline={this.props.inline}
          highlightDates={this.props.highlightDates}
          selectingDate={this.props.selectingDate}
          filterDate={this.props.filterDate}
          preSelection={this.props.preSelection}
          selected={this.props.selected}
          selectsStart={this.props.selectsStart}
          selectsEnd={this.props.selectsEnd}
          startDate={this.props.startDate}
          endDate={this.props.endDate}
          dayClassName={this.props.dayClassName}/>
      )
    }))
  }

  render () {
    return (
      <div className={cx('react-datepicker-week')}>
        {this.renderDays()}
      </div>
    )
  }
}
