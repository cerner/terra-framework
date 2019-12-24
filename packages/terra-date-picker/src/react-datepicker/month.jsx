import React from 'react'
import { FormattedMessage, intlShape } from 'react-intl';
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Week from './week'
import * as utils from './date_utils'
import styles from './stylesheets/react_datepicker.module.scss'

const cx = classNames.bind(styles);

const FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6

export default class Month extends React.Component {
  static propTypes = {
    /**
     * day Value Entered.
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
     * Specifies whether the height of calendar dom fixed or variable.
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
     * @private
     * Internationalization object with translation APIs. Provided by `injectIntl`.
     */
    intl: intlShape,
    /**
     * @private
     * Name of locale data for different international formatting.
     */
    locale: PropTypes.string,
    /**
     * Maximum value of date that can be selected by user.
     */
    maxDate: PropTypes.object,
    /**
     * Minimum value of date that can be selected by user.
     */
    minDate: PropTypes.object,
    /**
     * A callback function to execute when a day is selected.
     */
    onDayClick: PropTypes.func,
    /**
     * A callback function to execute when the mouse cursor hovers over the day..
     */
    onDayMouseEnter: PropTypes.func,
    /**
     * A callback function to execute when the mouse cursor leaves the element.
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
     * Callback ref to pass into the dom element.
     */
    refCallback: PropTypes.func,
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
    showWeekNumbers: PropTypes.bool,
    /**
     * Minimum date for a given range .
     */
    startDate: PropTypes.object,
    /**
     * Difference between utc and local time.
     */
    utcOffset: PropTypes.number,
    /**
     * Whether or not to apply keyboard selected styles.
     */
    disableKeyboardSelected: PropTypes.bool,
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

  handleMonthBlur = () => {
    if (this.props.onMonthBlur) {
      this.props.onMonthBlur()
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
        utcOffset={this.props.utcOffset}
        disableKeyboardSelected={this.props.disableKeyboardSelected} />)

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

  render() {
    const getClassNames = cx({
      'react-datepicker-month': true,
      'react-datepicker-body': true,
      'react-datepicker-month--selecting-range': this.props.selectingDate && (this.props.selectsStart || this.props.selectsEnd),
      'is-calendar-focused': this.props.isCalendarKeyboardFocused
    });
    return (
      <FormattedMessage id="Terra.datePicker.calendarInstructions">
        {text => (
          <div
            tabIndex="0"
            className={getClassNames}
            onMouseLeave={this.handleMouseLeave}
            role="application"
            onBlur={this.handleMonthBlur}
            aria-label={`${utils.getLocalizedDateForScreenReader(this.props.preSelection, { intl: this.props.intl, locale: this.props.locale })}. ${text}`}
            onKeyDown={this.props.handleCalendarKeyDown}
            ref={this.props.refCallback}
          >
            {this.renderWeeks()}
          </div>
        )}
      </FormattedMessage>
    )
  }
}
