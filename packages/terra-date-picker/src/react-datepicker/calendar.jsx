import { FormattedMessage } from 'react-intl';
import * as KeyCode from 'keycode-js';
import YearDropdown from './year_dropdown'
import MonthDropdown from './month_dropdown'
import Month from './month'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './stylesheets/react_datepicker.module.scss'
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
  getStartOfMonth,
  isSameDay,
  allDaysDisabledBefore,
  allDaysDisabledAfter,
  getEffectiveMinDate,
  getEffectiveMaxDate,
  isDayDisabled,
  dateValues
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
    highlightDates: PropTypes.instanceOf(WeakMap),
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
     * @private
     * Internationalization object with translation APIs. Provided by `injectIntl`.
     */
    intl: PropTypes.shape({ formatMessage: PropTypes.func }),
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
     * A callback function to execute when month component loses focus.
     * requires no parameter.
     */
    onMonthBlur: PropTypes.func,
    /**
     * Prop to show month navigation.
     */
    forceShowMonthNavigation: PropTypes.bool,
    /**
     * A callback function that is executed when date picker is clicked for dropdown.
     */
    onDropdownFocus: PropTypes.func,
    /**
     * A callback function to execute on mouse down on day.
     * requires no parameter.
     */
    onDayMouseDown: PropTypes.func,
    /**
     * A callback function that is executed when a valid date is selected.
     */
    onSelect: PropTypes.func.isRequired,
    /**
     * A callback function that is executed when a Week number is selected.
     */
    onWeekSelect: PropTypes.func,
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
     * A callback function used to set preSelection date when the calendar month or year is updated
     */
    setPreSelection: PropTypes.func,
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
    setOpen: PropTypes.func,
    /**
     * Whether or not calendar is navigated by keyboard
     */
    isCalendarKeyboardFocused: PropTypes.bool,
    /**
     * Whether or not calendar is opened by keyboard
     */
    isCalendarOpenedViaKeyboard: PropTypes.bool,
  }

  static get defaultProps () {
    return {
      onDropdownFocus: () => {},
      monthsShown: 1,
      forceShowMonthNavigation: false,
      isCalendarKeyboardFocused: false
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      isMonthChanged: false,
      date: this.localizeDate(this.getDateInView()),
      selectingDate: null,
      calendarIsKeyboardFocused: this.props.isCalendarKeyboardFocused,
    }

    this.todayBtnRef = React.createRef();
    this.closeBtnRef = React.createRef();
    this.previousMonthBtnRef = React.createRef();
    this.nextMonthBtnRef = React.createRef();
    this.monthRef;
    this.monthDropdownRef;
    this.yearDropdownRef;
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
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

  handleDropdownClick(event){
    console.log("CHECKING THIS dropdown clicked")
    if(event.keyCode === KeyCode.KEY_UP || event.keyCode === KeyCode.KEY_DOWN ) {
      this.setState({ calendarIsKeyboardFocused : true});
    }
    else {
      this.setState({ calendarIsKeyboardFocused : false});
    }
  }

  handleOnClick = (event) => {
    const calendarControls = [
      this.todayBtnRef.current,
      this.closeBtnRef.current,
      this.previousMonthBtnRef.current,
      this.nextMonthBtnRef.current,
      this.monthDropdownRef,
      this.yearDropdownRef,
    ];

    const isEventTargetMatchingCalendarControl = (target) => {
      return calendarControls.indexOf(target) >= 0;
    }

    const isEventTargetContainedWithinCalendarControl = (target) => {
      const containsEventTarget = (this.previousMonthBtnRef.current && this.previousMonthBtnRef.current.contains(target)
        || this.nextMonthBtnRef.current && this.nextMonthBtnRef.current.contains(target)
        || this.monthDropdownRef && this.monthDropdownRef.contains(target)
        || this.yearDropdownRef && this.yearDropdownRef.contains(target));

      return containsEventTarget;
    }

    if (isEventTargetMatchingCalendarControl(event.target) || isEventTargetContainedWithinCalendarControl(event.target)) {
      return;
    }

    // If the user is not clicking on a calendar control, shift focus to the calendar
    if (this.monthRef) {
      this.monthRef.focus();
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

  handleCloseButtonClick = (event) => {
    if (this.props.onRequestClose) {
      this.props.onRequestClose(event)
    }
  }

  handlePreviousMonthBtnKeyDown = (event) => {
    if (event.shiftKey && event.keyCode === KeyCode.KEY_TAB) {
      this.setState({ calendarIsKeyboardFocused: true })  
    }
  }

  handleNextMonthBtnKeyDown = (event) => {
    if (event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ calendarIsKeyboardFocused: true })
    }
  }

  handleTodayBtnKeyDown = (event) => {
    if (event.keyCode === KeyCode.KEY_TAB) {
      this.setState({ calendarIsKeyboardFocused: true })
    }
  }

  handleMonthBlur = () => {
    this.setState({ calendarIsKeyboardFocused: false })
    if (this.props.onMonthBlur) {
      this.props.onMonthBlur();
    }
  }

  handleMonthFocus = () => {
    if (this.props.inline) {
      this.setState({ calendarIsKeyboardFocused: true })
    }
  }

  setMonthRef = (node) => {
    this.monthRef = node;
  }

  setMonthDropdownRef = (node) => {
    this.monthDropdownRef = node;
  }

  setYearDropdownRef = (node) => {
    this.yearDropdownRef = node;
  }

  getDateInView = () => {
    const { preSelection, selected, openToDate, initialTimeZone } = this.props
    const minDate = getEffectiveMinDate(this.props)
    const maxDate = getEffectiveMaxDate(this.props)
    const current = now(initialTimeZone)
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

  increaseMonth = (event) => {
    this.nextMonthBtnRef.current.focus(); // To apply focus style in firefox
    this.setState({
      isMonthChanged: true,
      date: getStartOfMonth(addMonths(cloneDate(this.state.date), 1)),
    }, () => this.handleMonthChange(this.state.date))
    this.props.setPreSelection(getStartOfMonth(addMonths(cloneDate(this.state.date), 1)),dateValues.MONTH,addMonths(cloneDate(this.state.date), 1));
    // To check if button is pressed using mouse or keyboard
    if(event.target.type === undefined) {
      this.setState({ calendarIsKeyboardFocused : false});
    }
  }

  decreaseMonth = (event) => {
    this.previousMonthBtnRef.current.focus(); // To apply focus style in firefox
    this.setState({
      isMonthChanged: true,
      date: getStartOfMonth(subtractMonths(cloneDate(this.state.date), 1))
    }, () => this.handleMonthChange(this.state.date))
    this.props.setPreSelection(getStartOfMonth(subtractMonths(cloneDate(this.state.date), 1)),dateValues.MONTH,subtractMonths(cloneDate(this.state.date), 1));
    // To check if button is pressed using mouse or keyboard
    if(event.target.type === undefined) {
      this.setState({ calendarIsKeyboardFocused : false});
    }
  }

  handleDayClick = (day, event) => this.props.onSelect(day, event)

  handleDayMouseEnter = day => this.setState({ selectingDate: day })

  handleDayMouseDown = () => {
    if (this.props.onDayMouseDown) {
      this.props.onDayMouseDown();
    }
  }

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
      isMonthChanged: true,
      date: getStartOfMonth(setYear(cloneDate(this.state.date), year))
    })
    //this.props.setPreSelection(getStartOfMonth(setYear(cloneDate(this.state.date), year)),dateValues.YEAR,year);
  }

  changeMonth = (month) => {
    this.setState({
      isMonthChanged: true,
      date: getStartOfMonth(setMonth(cloneDate(this.state.date), month))
    }, () => this.handleMonthChange(this.state.date))
   // this.props.setPreSelection(getStartOfMonth(setMonth(cloneDate(this.state.date), month)),dateValues.MONTH,month);
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
      return (<div></div>)
    }

    return (
      <FormattedMessage id="Terra.datePicker.previousMonth">
        {text => (
          <button
            type="button"
            className={cx('react-datepicker-navigation--previous')}
            aria-label={text}
            onClick={this.decreaseMonth}
            onKeyDown={this.handlePreviousMonthBtnKeyDown}
            ref={this.previousMonthBtnRef}
          >
            <span data-navigation-previous className={cx('prev-month-icon')} />
          </button>
        )}
      </FormattedMessage>
    )
  }

  renderNextMonthButton = () => {
    if (!this.props.forceShowMonthNavigation && allDaysDisabledAfter(this.state.date, 'month', this.props)) {
      return (<div></div>)
    }

    return (
      <FormattedMessage id="Terra.datePicker.nextMonth">
        {text => (
          <button
            type="button"
            className={cx('react-datepicker-navigation--next')}
            aria-label={text}
            onClick={this.increaseMonth}
            onKeyDown={this.handleNextMonthBtnKeyDown}
            ref={this.nextMonthBtnRef}
          >
            <span data-navigation-next className={cx('next-month-icon')} />
          </button>
        )}
      </FormattedMessage>
    )
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
        refCallback={this.setYearDropdownRef}
        year={getYear(this.state.date)}
        scrollableYearDropdown={this.props.scrollableYearDropdown}
        yearDropdownItemNumber={this.props.yearDropdownItemNumber}
        onClick={this.handleDropdownClick}
        onKeyDown={this.handleDropdownClick} />

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
        month={getMonth(this.state.date)}
        refCallback={this.setMonthDropdownRef}
        onClick={this.handleDropdownClick}
        onKeyDown={this.handleDropdownClick} />
    )
  }

  renderTodayButton = () => {
    if (!this.props.todayButton) {
      return
    }

    const today = getStartOfDate(now(this.props.initialTimeZone));
    return (
      <button
        className={cx('react-datepicker-today-button')}
        onClick={e => this.props.onSelect(today, e)}
        onKeyDown={this.handleTodayBtnKeyDown}
        ref={this.todayBtnRef}
        disabled={isDayDisabled(today, this.props)}
      >
        {this.props.todayButton}
      </button>
    )
  }

  renderCloseButton = () => {
    return (
      <FormattedMessage id="Terra.datePicker.closeCalendar">
        {text => (
          <button
            className={cx('react-datepicker-close-button')}
            type="button"
            onClick={this.handleCloseButtonClick}
            ref={this.closeBtnRef}
          >
            {text}
          </button>
        )}
      </FormattedMessage>
    )
  }
  renderMonths = () => {
    let keyboardFocus= false;
    if(this.props.isCalendarOpenedViaKeyboard || this.props.isCalendarKeyboardFocused) {
      keyboardFocus = true;
    }
    if(this.state.isMonthChanged) {
      keyboardFocus= this.state.calendarIsKeyboardFocused;
    }
    if(!keyboardFocus && this.state.calendarIsKeyboardFocused) {
      keyboardFocus = true;
    }
    var monthList = []
    for (var i = 0; i < this.props.monthsShown; ++i) {
      var monthDate = addMonths(cloneDate(this.state.date), i)
      var monthKey = `month-${i}`
      monthList.push(
        <div key={monthKey} onClick={this.handleOnClick} className={cx('react-datepicker-month-container')}>
          <Month
            day={monthDate}
            isCalendarKeyboardFocused={keyboardFocus}
            dayClassName={this.props.dayClassName}
            onMonthFocus={this.handleMonthFocus}
            onMonthBlur={this.handleMonthBlur}
            onDayClick={this.handleDayClick}
            onDayMouseEnter={this.handleDayMouseEnter}
            onDayMouseDown={this.handleDayMouseDown}
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
            refCallback={this.setMonthRef}
            selected={this.props.selected}
            selectsStart={this.props.selectsStart}
            selectsEnd={this.props.selectsEnd}
            showWeekNumbers={this.props.showWeekNumbers}
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            peekNextMonth={this.props.peekNextMonth}
            handleCalendarKeyDown={this.props.handleCalendarKeyDown}
            locale={this.props.locale}
            intl={this.props.intl}
            initialTimeZone={this.props.initialTimeZone} />
          <div className={cx('react-datepicker-header')}>
            {this.renderCurrentMonth(monthDate)}
            <div className={cx('react-datepicker-header-controls')}>
              {this.renderPreviousMonthButton()}
              <div
                className={cx(['react-datepicker-header-dropdown', `react-datepicker-header-dropdown--${this.props.dropdownMode}`])}
                onFocus={this.handleDropdownFocus}
              >
                {this.renderMonthDropdown(i !== 0)}
                {this.renderYearDropdown(i !== 0)}
              </div>
              {this.renderNextMonthButton()}
            </div>
            <div className={cx('react-datepicker-day-names')} aria-hidden="true">
              {this.header(monthDate)}
            </div>
          </div>
        </div>
      )
    }
    return monthList
  }

  render () {
    const supportsOnTouchStart = 'ontouchstart' in window;

    /**
     * Ensures focus moves into datepicker popup correctly when it is opened on touch devices
     * by making focusable element (today button) first in the DOM order
     */
    if (supportsOnTouchStart) {
      return (
        <div className={cx(['react-datepicker', 'supports-on-touch-start', this.props.className])} data-terra-date-picker-calendar>
          <div className={cx('react-datepicker-footer')}>
            {this.renderTodayButton()}
            {this.renderCloseButton()}
          </div>
          {this.renderMonths()}
          {this.props.children}
        </div>
      );
    }

    /**
     * Ensures users can start interacting with the calendar via up/down/left/right arrow keys
     * when it first opens by making the month component render first in the DOM order
     */
    return (
      <div className={cx(['react-datepicker', this.props.className])} data-terra-date-picker-calendar>
          {this.renderMonths()}
          <div className={cx('react-datepicker-footer')}>
            {this.renderTodayButton()}
          </div>
        {this.props.children}
      </div>
    )
  }
}
