import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Week from './week'
import * as utils from './date_utils'

const FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6

export default class Month extends React.Component {
  static propTypes = {
    /**
   * Date Value Entered.
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
   * Filter specific dates that can be selected only .
   */
    filterDate: PropTypes.func,
   /**
   * Prop to allow variable or fixed height of calendar .
   */
    fixedHeight: PropTypes.bool,
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
   * Prop to show inline version of date picker component.
   */
    inline: PropTypes.bool,
    /**
   * Maximum Value of date that can be selected by user.
   */
    maxDate: PropTypes.object,
    /**
   * Minimum Value of date that can be selected by user.
   */
    minDate: PropTypes.object,
    /**
   * A callback function to execute when a date is selected.
   */
    onDayClick: PropTypes.func,
    /**
   * A callback function to execute when day is clicked by mouse.
   */
    onDayMouseEnter: PropTypes.func,
    /**
   * A callback function to execute when nothing is selected.
   */
    onMouseLeave: PropTypes.func,
    /**
   * A callback function to execute when a week is selected.
   */
    onWeekSelect: PropTypes.func,
    /**
   * A prop to check next month dates.
   */
    peekNextMonth: PropTypes.bool,
    /**
   * Prop to store previous selection value.
   */
    preSelection: PropTypes.object,
    /**
   * Prop to store current selection value.
   */
    selected: PropTypes.object,
    /**
   * Prop to store value while selecting date. .
   */
    selectingDate: PropTypes.object,
    /**
   * Mark date picker  to select end of range .
   */
    selectsEnd: PropTypes.bool,
    /**
   * Mark date picker  to select start of range .
   */
    selectsStart: PropTypes.bool,
    /**
   * Prop to show week numbers .
   */
    showWeekNumbers: PropTypes.bool,
    /**
   * Date selected by user .
   */
    startDate: PropTypes.object,
    /**
   * Difference between utc and local time.
   */
    utcOffset: PropTypes.number
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

  handleMouseLeave = () => {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave()
    }
  }

  isWeekInMonth = (startOfWeek) => {
    const day = this.props.day
    const endOfWeek = utils.addDays(utils.cloneDate(startOfWeek), 6)
    return utils.isSameMonth(startOfWeek, day) || utils.isSameMonth(endOfWeek, day)
  }

  renderWeeks = () => {
    const weeks = []
    var isFixedHeight = this.props.fixedHeight
    let currentWeekStart = utils.getStartOfWeek(utils.getStartOfMonth(utils.cloneDate(this.props.day)))
    let i = 0
    let breakAfterNextPush = false

    while (true) {
      weeks.push(<Week
        key={i}
        day={currentWeekStart}
        month={utils.getMonth(this.props.day)}
        onDayClick={this.handleDayClick}
        onDayMouseEnter={this.handleDayMouseEnter}
        onWeekSelect={this.props.onWeekSelect}
        formatWeekNumber={this.props.formatWeekNumber}
        minDate={this.props.minDate}
        maxDate={this.props.maxDate}
        excludeDates={this.props.excludeDates}
        includeDates={this.props.includeDates}
        inline={this.props.inline}
        highlightDates={this.props.highlightDates}
        selectingDate={this.props.selectingDate}
        filterDate={this.props.filterDate}
        preSelection={this.props.preSelection}
        selected={this.props.selected}
        selectsStart={this.props.selectsStart}
        selectsEnd={this.props.selectsEnd}
        showWeekNumber={this.props.showWeekNumbers}
        startDate={this.props.startDate}
        endDate={this.props.endDate}
        dayClassName={this.props.dayClassName}
        utcOffset={this.props.utcOffset}/>)

      if (breakAfterNextPush) break

      i++
      currentWeekStart = utils.addWeeks(utils.cloneDate(currentWeekStart), 1)

      // If one of these conditions is true, we will either break on this week
      // or break on the next week
      const isFixedAndFinalWeek = isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT
      const isNonFixedAndOutOfMonth = !isFixedHeight && !this.isWeekInMonth(currentWeekStart)

      if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
        if (this.props.peekNextMonth) {
          breakAfterNextPush = true
        } else {
          break
        }
      }
    }

    return weeks
  }

  getClassNames = () => {
    const { selectingDate, selectsStart, selectsEnd } = this.props
    return classnames('react-datepicker__month', {
      'react-datepicker__month--selecting-range': selectingDate && (selectsStart || selectsEnd)
    })
  }

  render () {
    return (
      <div tabIndex="0" className={this.getClassNames()} onMouseLeave={this.handleMouseLeave} role="listbox">
        {this.renderWeeks()}
      </div>
    )
  }
}
