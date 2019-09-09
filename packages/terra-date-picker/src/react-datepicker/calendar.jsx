import YearDropdown from './year_dropdown'
import MonthDropdown from './month_dropdown'
import Month from './month'
import Time from './time'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './stylesheets/datepicker.scss'
import {
  now,
  setMonth,
  getMonth,
  addMonths,
  subtractMonths,
  getStartOfWeek,
  getStartOfDate,
  addDays,
  cloneDate,
  formatDate,
  localizeDate,
  setYear,
  getYear,
  isBefore,
  isAfter,
  getLocaleData,
  getWeekdayShortInLocale,
  getWeekdayMinInLocale,

  isSameDay,
  allDaysDisabledBefore,
  allDaysDisabledAfter,
  getEffectiveMinDate,
  getEffectiveMaxDate
} from './date_utils'

const cx = classNames.bind(styles);

const DROPDOWN_FOCUS_CLASSNAMES = [
  'react-datepicker-year-select',
  'react-datepicker-month-select'
]

const isDropdownSelect = (element = {}) => {
  const classNamesList = (element.className || '').split(/\s+/)
  return DROPDOWN_FOCUS_CLASSNAMES.some(testClassname => classNamesList.indexOf(testClassname) >= 0)
}

export default class Calendar extends React.Component {
  static propTypes = {
    /**
     * Prop to change date when a valid date is selected.
     */
    adjustDateOnChange: PropTypes.bool,
    /**
     * Class name to style the date picker.
     */
    className: PropTypes.string,
    /**
     * Components to render within date picker.
     */
    children: PropTypes.node,
    /**
     * Format of the date selected.
     */
    dateFormat: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
    /**
     * Prop to style individual days on calendar.
     */
    dayClassName: PropTypes.func,
    /**
     * Whether the year and month dropdowns should be in the scroll or select mode.
     */
    dropdownMode: PropTypes.oneOf(['scroll', 'select']).isRequired,
    /**
     * Maximum Date for a given range.
     */
    endDate: PropTypes.object,
    /**
     * Array to exclude certain dates.
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
     * A callback function to be executed to format week number .
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
     * Prop to show multiple months on date picker.
     */
    monthsShown: PropTypes.number,
    /**
     * A callback function that is executed when user clicks outside the datepicker.
     */
    onClickOutside: PropTypes.func,
    /**
     * A callback function that is executed when month is selected.
     */
    onMonthChange: PropTypes.func,
    /**
     * Prop to show month navigation.
     */
    forceShowMonthNavigation: PropTypes.bool,
    /**
     * A callback function that is executed when date picker is clicked for dropdown.
     */
    onDropdownFocus: PropTypes.func,
    /**
     * A callback function that is executed when a valid date is selected.
     */
    onSelect: PropTypes.func.isRequired,
    /**
     * A callback function that is executed when a Week number is selected.
     */
    onWeekSelect: PropTypes.func,
    /**
     * Prop to determine whether or not to show the time picker.
     */
    showTimeSelect: PropTypes.bool,
    /**
     * Prop to choose format of time selected.
     */
    timeFormat: PropTypes.string,
    /**
     * Interval between 2 consecutive times on time picker in minutes.
     */
    timeIntervals: PropTypes.number,
    /**
     * A callback function to execute when a valid time is selected.
     */
    onTimeChange: PropTypes.func,
    /**
     * Minimum Value of time that can be selected by user.
     */
    minTime: PropTypes.object,
    /**
     * Maximum Value of time that can be selected by user.
     */
    maxTime: PropTypes.object,
    /**
     * Array to store time values disabled for selection.
     */
    excludeTimes: PropTypes.array,
    /**
     * Prop to open calendar on the given date.
     */
    openToDate: PropTypes.object,
    /**
     * Prop to show dates of next month also.
     */
    peekNextMonth: PropTypes.bool,
    /**
     * Prop to show a scrollable dropdown to choose year on the date picker.
     */
    scrollableYearDropdown: PropTypes.bool,
    /**
     * Prop to store previous selection.
     */
    preSelection: PropTypes.object,
    /**
     * Selected Date Value.
     */
    selected: PropTypes.object,
    /**
     * Mark date picker to select end of range .
     */
    selectsEnd: PropTypes.bool,
    /**
     * Mark date picker to select start of range .
     */
    selectsStart: PropTypes.bool,
    /**
     * Prop to show a dropdown to select month in date picker .
     */
    showMonthDropdown: PropTypes.bool,
    /**
     * Prop to show week numbers .
     */
    showWeekNumbers: PropTypes.bool,
    /**
     * Prop to show a dropdown to select year in date picker .
     */
    showYearDropdown: PropTypes.bool,
    /**
     * Minimum date for a given range .
     */
    startDate: PropTypes.object,
    /**
     * Name of button to select current date .
     */
    todayButton: PropTypes.string,
    /**
     * Prop to show short names of weekdays .
     */
    useWeekdaysShort: PropTypes.bool,
    /**
     * Prop to open a separate portal version of date picker .
     */
    withPortal: PropTypes.bool,
    /**
     * Difference between utc and local time.
     */
    utcOffset: PropTypes.number,
    /**
     * Label value for weeks on date picker.
     */
    weekLabel: PropTypes.string,
    /**
     * Year Values to show on dropdown +/- the given value.
      */
    yearDropdownItemNumber: PropTypes.number,
    /**
     * A callback function to execute when a date picker is open.
     */
    setOpen: PropTypes.func
  }

  static get defaultProps () {
    return {
      onDropdownFocus: () => {},
      monthsShown: 1,
      forceShowMonthNavigation: false
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      date: this.localizeDate(this.getDateInView()),
      selectingDate: null,
      monthContainer: this.monthContainer
    }
  }

  componentDidMount () {
    // monthContainer height is needed in time component
    // to determine the height for the ul in the time component
    // setState here so height is given after final component
    // layout is rendered
    if (this.props.showTimeSelect) {
      this.assignMonthContainer = (() => {
        this.setState({monthContainer: this.monthContainer})
      })()
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.preSelection && !isSameDay(this.props.preSelection, prevProps.preSelection)) {
      this.setState({
        date: this.localizeDate(this.props.preSelection)
      })
    } else if (this.props.openToDate && !isSameDay(this.props.openToDate, prevProps.openToDate)) {
      this.setState({
        date: this.localizeDate(this.props.openToDate)
      })
    }
  }

  handleClickOutside = (event) => {
    this.props.onClickOutside(event)
  }

  handleDropdownFocus = (event) => {
    if (isDropdownSelect(event.target)) {
      this.props.onDropdownFocus()
    }
  }

  getDateInView = () => {
    const { preSelection, selected, openToDate, utcOffset } = this.props
    const minDate = getEffectiveMinDate(this.props)
    const maxDate = getEffectiveMaxDate(this.props)
    const current = now(utcOffset)
    const initialDate = openToDate || selected || preSelection
    if (initialDate) {
      return initialDate
    } else {
      if (minDate && isBefore(current, minDate)) {
        return minDate
      } else if (maxDate && isAfter(current, maxDate)) {
        return maxDate
      }
    }
    return current
  }

  localizeDate = date => localizeDate(date, this.props.locale)

  increaseMonth = () => {
    this.setState({
      date: addMonths(cloneDate(this.state.date), 1)
    }, () => this.handleMonthChange(this.state.date))
  }

  decreaseMonth = () => {
    this.setState({
      date: subtractMonths(cloneDate(this.state.date), 1)
    }, () => this.handleMonthChange(this.state.date))
  }

  handleDayClick = (day, event) => this.props.onSelect(day, event)

  handleDayMouseEnter = day => this.setState({ selectingDate: day })

  handleMonthMouseLeave = () => this.setState({ selectingDate: null })

  handleMonthChange = (date) => {
    if (this.props.onMonthChange) {
      this.props.onMonthChange(date)
    }
    if (this.props.adjustDateOnChange) {
      if (this.props.onSelect) {
        this.props.onSelect(date)
      }
      if (this.props.setOpen) {
        this.props.setOpen(true)
      }
    }
  }

  changeYear = (year) => {
    this.setState({
      date: setYear(cloneDate(this.state.date), year)
    })
  }

  changeMonth = (month) => {
    this.setState({
      date: setMonth(cloneDate(this.state.date), month)
    }, () => this.handleMonthChange(this.state.date))
  }

  header = (date = this.state.date) => {
    const startOfWeek = getStartOfWeek(cloneDate(date))
    const dayNames = []
    if (this.props.showWeekNumbers) {
      dayNames.push(
        <div key="W" className={cx('react-datepicker-day-name')}>
          {this.props.weekLabel || '#'}
        </div>
      )
    }
    return dayNames.concat([0, 1, 2, 3, 4, 5, 6].map(offset => {
      const day = addDays(cloneDate(startOfWeek), offset)
      const localeData = getLocaleData(day)
      const weekDayName = this.props.useWeekdaysShort
        ? getWeekdayShortInLocale(localeData, day)
        : getWeekdayMinInLocale(localeData, day)
      return (
        <div key={offset} className={cx('react-datepicker-day-name')}>
          {weekDayName}
        </div>
      )
    }))
  }

  renderPreviousMonthButton = () => {
    if (!this.props.forceShowMonthNavigation && allDaysDisabledBefore(this.state.date, 'month', this.props)) {
      return
    }
    return <a
      className={cx(['react-datepicker-navigation', 'react-datepicker-navigation--previous'])}
      onClick={this.decreaseMonth} />
  }

  renderNextMonthButton = () => {
    if (!this.props.forceShowMonthNavigation && allDaysDisabledAfter(this.state.date, 'month', this.props)) {
      return
    }

    let classes = ['react-datepicker-navigation', 'react-datepicker-navigation--next']
    if (this.props.showTimeSelect) {
      classes.push('react-datepicker-navigation--next--with-time')
    }
    if (this.props.todayButton) {
      classes.push('react-datepicker-navigation--next--with-today-button')
    }

    return <a
      className={cx(classes)}
      onClick={this.increaseMonth} />
  }

  renderCurrentMonth = (date = this.state.date) => {
    const classes = ['react-datepicker-current-month']

    if (this.props.showYearDropdown) {
      classes.push('react-datepicker-current-month--hasYearDropdown')
    }
    if (this.props.showMonthDropdown) {
      classes.push('react-datepicker-current-month--hasMonthDropdown')
    }
    return (
      <div className={cx(classes)}>
        {formatDate(date, this.props.dateFormat)}
      </div>
    )
  }

  renderYearDropdown = (overrideHide = false) => {
    if (!this.props.showYearDropdown || overrideHide) {
      return
    }
    return (
      <YearDropdown
        adjustDateOnChange={this.props.adjustDateOnChange}
        date={this.state.date}
        onSelect={this.props.onSelect}
        setOpen={this.props.setOpen}
        dropdownMode={this.props.dropdownMode}
        onChange={this.changeYear}
        minDate={this.props.minDate}
        maxDate={this.props.maxDate}
        year={getYear(this.state.date)}
        scrollableYearDropdown={this.props.scrollableYearDropdown}
        yearDropdownItemNumber={this.props.yearDropdownItemNumber} />
    )
  }

  renderMonthDropdown = (overrideHide = false) => {
    if (!this.props.showMonthDropdown) {
      return
    }
    return (
      <MonthDropdown
        dropdownMode={this.props.dropdownMode}
        locale={this.props.locale}
        dateFormat={this.props.dateFormat}
        onChange={this.changeMonth}
        month={getMonth(this.state.date)} />
    )
  }

  renderTodayButton = () => {
    if (!this.props.todayButton) {
      return
    }
    return (
      <div
        className={cx('react-datepicker-today-button')}
        onClick={e => this.props.onSelect(getStartOfDate(now(this.props.utcOffset)), e)}>
        {this.props.todayButton}
      </div>
    )
  }

  renderMonths = () => {
    var monthList = []
    for (var i = 0; i < this.props.monthsShown; ++i) {
      var monthDate = addMonths(cloneDate(this.state.date), i)
      var monthKey = `month-${i}`
      monthList.push(
        <div key={monthKey} ref={div => { this.monthContainer = div }} className={cx('react-datepicker-month-container')}>
          <div className={cx('react-datepicker-header')}>
            {this.renderCurrentMonth(monthDate)}
            <div
              className={cx(['react-datepicker-header-dropdown', `react-datepicker-header-dropdown--${this.props.dropdownMode}`])}
              onFocus={this.handleDropdownFocus}>
              {this.renderMonthDropdown(i !== 0)}
              {this.renderYearDropdown(i !== 0)}
            </div>
            <div className={cx('react-datepicker-day-names')}>
              {this.header(monthDate)}
            </div>
          </div>
          <Month
            day={monthDate}
            dayClassName={this.props.dayClassName}
            onDayClick={this.handleDayClick}
            onDayMouseEnter={this.handleDayMouseEnter}
            onMouseLeave={this.handleMonthMouseLeave}
            onWeekSelect={this.props.onWeekSelect}
            formatWeekNumber={this.props.formatWeekNumber}
            minDate={this.props.minDate}
            maxDate={this.props.maxDate}
            excludeDates={this.props.excludeDates}
            highlightDates={this.props.highlightDates}
            selectingDate={this.state.selectingDate}
            includeDates={this.props.includeDates}
            inline={this.props.inline}
            fixedHeight={this.props.fixedHeight}
            filterDate={this.props.filterDate}
            preSelection={this.props.preSelection}
            selected={this.props.selected}
            selectsStart={this.props.selectsStart}
            selectsEnd={this.props.selectsEnd}
            showWeekNumbers={this.props.showWeekNumbers}
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            peekNextMonth={this.props.peekNextMonth}
            utcOffset={this.props.utcOffset} />
        </div>
      )
    }
    return monthList
  }

  renderTimeSection = () => {
    if (this.props.showTimeSelect) {
      return (
        <Time
          selected={this.props.selected}
          onChange={this.props.onTimeChange}
          format={this.props.timeFormat}
          intervals={this.props.timeIntervals}
          minTime={this.props.minTime}
          maxTime={this.props.maxTime}
          excludeTimes={this.props.excludeTimes}
          todayButton={this.props.todayButton}
          showMonthDropdown={this.props.showMonthDropdown}
          showYearDropdown={this.props.showYearDropdown}
          withPortal={this.props.withPortal}
          monthRef={this.state.monthContainer} />
      )
    }
  }

  render () {
    return (
      <div className={cx(['react-datepicker', this.props.className])} data-terra-date-picker-calendar>
        {this.renderPreviousMonthButton()}
        {this.renderNextMonthButton()}
        {this.renderMonths()}
        {this.renderTodayButton()}
        {this.renderTimeSection()}
        {this.props.children}
      </div>
    )
  }
}
