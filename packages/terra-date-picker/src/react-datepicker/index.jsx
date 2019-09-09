import Calendar from './calendar';
import React from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import { Portal } from 'react-portal';
import * as KeyCode from 'keycode-js';
import Popup from 'terra-popup';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import PopupContainer from './PopupContainer';
import {
  newDate,
  now,
  cloneDate,
  isMoment,
  isDate,
  isBefore,
  isAfter,
  setTime,
  getSecond,
  getMinute,
  getHour,
  getMonth,
  addDays,
  addMonths,
  addWeeks,
  addYears,
  subtractDays,
  subtractMonths,
  subtractWeeks,
  subtractYears,
  isSameDay,
  isDayDisabled,
  isDayInRange,
  getEffectiveMinDate,
  getEffectiveMaxDate,
  parseDate,
  safeDateFormat,
  getHightLightDaysMap,
  getLocalizedDateForScreenReader
} from './date_utils'
import onClickOutside from 'react-onclickoutside'
import styles from './stylesheets/datepicker.scss'

const cx = classNames.bind(styles);

const outsideClickIgnoreClass = 'react-datepicker-ignore-onclickoutside'
const WrappedCalendar = onClickOutside(Calendar)

/**
 * General datepicker component.
 */

class DatePicker extends React.Component {
  static propTypes = {
    /**
     * Prop to change date when a valid date is selected.
     */
    adjustDateOnChange: PropTypes.bool,
    /**
     * Whether or not to allow same days to be selected.
     */
    allowSameDay: PropTypes.bool,
    /**
     * Prop to auto complete date.
     */
    autoComplete: PropTypes.string,
    /**
     * Whether or not to auto focus on date picker.
     */
    autoFocus: PropTypes.bool,
    /**
     * Classname for styling calendar.
     */
    calendarClassName: PropTypes.string,
    /**
     * Components to render within date picker.
     */
    children: PropTypes.node,
    /**
     * Classname for styling date picker.
     */
    className: PropTypes.string,
    /**
     * Prop for custom input in date picker.
     */
    customInput: PropTypes.element,
    /**
     * Prop for custom input reference in date picker.
     */
    customInputRef: PropTypes.string,
    /**
     * Format of the date selected.
     */
    dateFormat: PropTypes.oneOfType([ // eslint-disable-line react/no-unused-prop-types
      PropTypes.string,
      PropTypes.array
    ]),
    /**
     * Date format displayed on calendar header.
     */
    dateFormatCalendar: PropTypes.string,
    /**
     * A callback function for custom day class names.
     */
    dayClassName: PropTypes.func,
    /**
     * Prop to disable dates on calendar.
     */
    disabled: PropTypes.bool,
    /**
     * Prop to disable keyboard navigation.
     */
    disabledKeyboardNavigation: PropTypes.bool,
    /**
     * Whether the year and month dropdowns should be in the scroll or select mode.
     */
    dropdownMode: PropTypes.oneOf(['scroll', 'select']).isRequired,
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
    highlightDates: PropTypes.array,
    /**
     * Value of custom input id.
     */
    id: PropTypes.string,
    /**
     * Show dates only in the given array.
     */
    includeDates: PropTypes.array,
    /**
     * Prop to render Inline version of datepicker component.
     */
    inline: PropTypes.bool,
    /**
     * @private
     * Internationalization object with translation APIs. Provided by `injectIntl`.
     */
    intl: intlShape,
    /**
     * Prop to determine whether or not the date picker is clearable.
     */
    isClearable: PropTypes.bool,
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
     * Value for name of custom input.
     */
    name: PropTypes.string,
    /**
     * A callback function to execute when object loses focus.
     */
    onBlur: PropTypes.func,
    /**
     * A callback function to execute when date is selected.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * A callback function to execute when value is selected from dropdown.
     */
    onSelect: PropTypes.func,
    /**
     * A callback function to execute when week is selected.
     */
    onWeekSelect: PropTypes.func,
    /**
     * A callback function to execute when the mouse cursor leaves the element.
     */
    onClickOutside: PropTypes.func,
    /**
     * A callback function to execute when date is entered.
     */
    onChangeRaw: PropTypes.func,
    /**
     * A callback function to execute when object focused.
     */
    onFocus: PropTypes.func,
    /**
     * A callback function to execute when a key is pressed.
     */
    onKeyDown: PropTypes.func,
    /**
     * A callback function to execute when month is selected.
     */
    onMonthChange: PropTypes.func,
    /**
     * Prop to open calendar on a particular date.
     */
    openToDate: PropTypes.object,
    /**
     * A prop to check next month dates.
     */
    peekNextMonth: PropTypes.bool,
    /**
     * Value for placeholder of date picker.
     */
    placeholderText: PropTypes.string,
    /**
     * Prop to prevent date picker from opening on focus.
     */
    preventOpenOnFocus: PropTypes.bool,
    /**
     * Prop to make date picker as read only.
     */
    readOnly: PropTypes.bool,
    /**
     *Prop to make the date picker as a required field.
     */
    required: PropTypes.bool,
    /**
     * Prop to allow scrollable year dropdown.
     */
    scrollableYearDropdown: PropTypes.bool,
    /**
     * Selected Date Value.
     */
    selected: PropTypes.object,
    /**
     * Prop to select end date on a date picker.
     */
    selectsEnd: PropTypes.bool,
    /**
     * Prop to select start date on a date picker.
     */
    selectsStart: PropTypes.bool,
    /**
     * Prop to show month drop down in calendar.
     */
    showMonthDropdown: PropTypes.bool,
    /**
     * Prop to show week numbers .
     */
    showWeekNumbers: PropTypes.bool,
    /**
     * Prop to show a dropdown to select year in date picker calendar .
     */
    showYearDropdown: PropTypes.bool,
    /**
     * Prop to show a month navigation in date picker .
     */
    forceShowMonthNavigation: PropTypes.bool,
    /**
     * Minimum date for a given range .
     */
    startDate: PropTypes.object,
    /**
     * Prop to open calendar dropdown .
     */
    startOpen: PropTypes.bool,
    /**
     * Prop to specify tabbing order of elements .
     */
    tabIndex: PropTypes.number,
    /**
     * Prop to specify title attribute for date picker .
     */
    title: PropTypes.string,
    /**
     * Name of button to select current date .
     */
    todayButton: PropTypes.string,
    /**
     * Prop to show short names for weekdays on calendar .
     */
    useWeekdaysShort: PropTypes.bool,
    /**
     * Difference between utc and local time.
     */
    utcOffset: PropTypes.number,
    /**
     * Value of the date picked by user .
     */
    value: PropTypes.string,
    /**
     * Label value for weeks on date picker.
     */
    weekLabel: PropTypes.string,
    /**
     * Prop to show a separate portal version for date picker.
     */
    withPortal: PropTypes.bool,
    /**
     * Year Values to show on dropdown +/- the given value.
     */
    yearDropdownItemNumber: PropTypes.number,
    /**
     * Prop to close calendar dropdown after date is selected.
     */
    shouldCloseOnSelect: PropTypes.bool,
    /**
     * Prop to show selected date and time.
     */
    showTimeSelect: PropTypes.bool,
    /**
     * Format of the selected time.
     */
    timeFormat: PropTypes.string,
    /**
     * Interval between 2 consecutive times on the time picker.
     */
    timeIntervals: PropTypes.number,
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
    excludeTimes: PropTypes.array
  }

  static get defaultProps () {
    return {
      allowSameDay: false,
      dateFormat: 'L',
      dateFormatCalendar: 'MMMM YYYY',
      onChange () {},
      disabled: false,
      disabledKeyboardNavigation: false,
      dropdownMode: 'scroll',
      onFocus () {},
      onBlur () {},
      onKeyDown () {},
      onSelect () {},
      onClickOutside () {},
      onMonthChange () {},
      preventOpenOnFocus: false,
      monthsShown: 1,
      withPortal: false,
      shouldCloseOnSelect: true,
      showTimeSelect: false,
      timeIntervals: 30
    }
  }

  constructor (props) {
    super(props)
    this.state = this.calcInitialState();
    this.handleKeydown = this.handleKeydown.bind(this);
    this.datePickerContainer = React.createRef();
    this.datePickerPopupContainer = React.createRef();
    this.datePickerOverlayContainer = React.createRef();
    this.handleCalendarKeyDown = this.handleCalendarKeyDown.bind(this);
    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);
    this.updateAriaLiveStatus = this.updateAriaLiveStatus.bind(this);
    this.ariaLiveStatus = '';
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentDidUpdate(prevProps) {
    const currentMonth = prevProps.selected && getMonth(prevProps.selected)
    const nextMonth = this.props.selected && getMonth(this.props.selected)
    if (prevProps.inline && currentMonth !== nextMonth) {
      this.setPreSelection(this.props.selected)
    }
    if (prevProps.highlightDates !== this.props.highlightDates) {
      this.setState({'highlightDates': getHightLightDaysMap(nextProps.highlightDates)})
    }
    // Shift focus into popup date-picker if it exists
    if (this.datePickerPopupContainer.current) {
      this.datePickerPopupContainer.current.focus();
    }

    // Shift focus into overlay date-picker if it exists
    if (this.datePickerOverlayContainer.current) {
      this.datePickerOverlayContainer.current.focus();
    }
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeydown);
    this.clearPreventFocusTimeout()
  }

  handleKeydown(event) {
    if (event.keyCode === KeyCode.KEY_ESCAPE) {
      // If date picker is open in overlay
      if (this.datePickerOverlayContainer.current) {
        if (event.target === this.datePickerOverlayContainer.current || this.datePickerOverlayContainer.current.contains(event.target)) {
          this.setOpen(false);
        }
      }
    }
  }

  handleOnRequestClose() {
    this.setOpen(false);
  }

  getPreSelection = () => (
    this.props.openToDate ? newDate(this.props.openToDate)
      : this.props.selectsEnd && this.props.startDate ? newDate(this.props.startDate)
        : this.props.selectsStart && this.props.endDate ? newDate(this.props.endDate)
          : now(this.props.utcOffset)
  )

  calcInitialState = () => {
    const defaultPreSelection = this.getPreSelection()
    const minDate = getEffectiveMinDate(this.props)
    const maxDate = getEffectiveMaxDate(this.props)
    const boundedPreSelection =
      minDate && isBefore(defaultPreSelection, minDate) ? minDate
        : maxDate && isAfter(defaultPreSelection, maxDate) ? maxDate
          : defaultPreSelection
    return {
      open: this.props.startOpen || false,
      preventFocus: false,
      preSelection: this.props.selected ? newDate(this.props.selected) : boundedPreSelection,
      // transforming highlighted days (perhaps nested array)
      // to flat Map for faster access in day.jsx
      highlightDates: getHightLightDaysMap(this.props.highlightDates)
    }
  }

  clearPreventFocusTimeout = () => {
    if (this.preventFocusTimeout) {
      clearTimeout(this.preventFocusTimeout)
    }
  }

  setFocus = () => {
    if (this.input.focus) {
      this.input.focus()
    }
  }

  setOpen = (open) => {
    this.setState({
      open: open,
      preSelection: open && this.state.open ? this.state.preSelection : this.calcInitialState().preSelection
    })
  }

  handleFocus = (event) => {
    if (!this.state.preventFocus) {
      this.props.onFocus(event)
      if (!this.props.preventOpenOnFocus) {
        this.setOpen(true)
      }
    }
  }

  cancelFocusInput = () => {
    clearTimeout(this.inputFocusTimeout)
    this.inputFocusTimeout = null
  }

  deferFocusInput = () => {
    this.cancelFocusInput()
    this.inputFocusTimeout = setTimeout(() => this.setFocus(), 1)
  }

  handleDropdownFocus = () => {
    this.cancelFocusInput()
  }

  handleBlur = (event) => {
    if (this.state.open) {
      this.deferFocusInput()
    } else {
      this.props.onBlur(event)
    }
  }

  handleCalendarClickOutside = (event) => {
    if (!this.props.inline) {
      this.setOpen(false)
    }
    this.props.onClickOutside(event)
    if (this.props.withPortal) { event.preventDefault() }
  }

  handleChange = (event) => {
    if (this.props.onChangeRaw) {
      this.props.onChangeRaw(event)
      if (event.isDefaultPrevented()) {
        return
      }
    }
    this.setState({ inputValue: event.target.value })
    const date = parseDate(event.target.value, this.props)
    if (date || !event.target.value) {
      this.setSelected(date, event, true)
    }
  }

  handleSelect = (date, event) => {
    // Preventing onFocus event to fix issue
    // https://github.com/Hacker0x01/react-datepicker/issues/628
    this.setState({ preventFocus: true },
      () => {
        this.preventFocusTimeout = setTimeout(() => this.setState({ preventFocus: false }), 50)
        return this.preventFocusTimeout
      }
    )
    this.setSelected(date, event)
    if (!this.props.shouldCloseOnSelect || this.props.showTimeSelect) {
      this.setPreSelection(date)
    } else if (!this.props.inline) {
      this.setOpen(false)
    }
  }

  setSelected = (date, event, keepInput) => {
    let changedDate = date

    if (changedDate !== null && isDayDisabled(changedDate, this.props)) {
      return
    }

    let hasChanged = false;

    if (!isSameDay(this.props.selected, changedDate) || this.props.allowSameDay) {
      if (changedDate !== null) {
        if (this.props.selected) {
          changedDate = setTime(newDate(changedDate), {
            hour: getHour(this.props.selected),
            minute: getMinute(this.props.selected),
            second: getSecond(this.props.selected)
          })
        }
        this.setState({
          preSelection: changedDate
        })
      }
      hasChanged = true;
    }

    this.props.onSelect(changedDate, event)

    if (hasChanged) {
      this.props.onChange(changedDate, event)
    }

    if (!keepInput) {
      this.setState({ inputValue: null })
    }
  }

  setPreSelection = (date) => {
    const isDateRangePresent = ((typeof this.props.minDate !== 'undefined') && (typeof this.props.maxDate !== 'undefined'))
    const isValidDateSelection = isDateRangePresent && date ? isDayInRange(date, this.props.minDate, this.props.maxDate) : true
    if (isValidDateSelection) {
      this.setState({
        preSelection: date
      })

      this.updateAriaLiveStatus(getLocalizedDateForScreenReader(date, this.props));
    }
  }

  updateAriaLiveStatus(message) {
    this.ariaLiveStatus = message;

    // Clears status so aria live announces correctly next time a date is preselected.
    setTimeout(() => {
      this.ariaLiveStatus = '';
    }, 1000);
  }

  handleTimeChange = (time) => {
    const selected = (this.props.selected) ? this.props.selected : this.getPreSelection()
    let changedDate = setTime(cloneDate(selected), {
      hour: getHour(time),
      minute: getMinute(time)
    })

    this.setState({
      preSelection: changedDate
    })

    this.props.onChange(changedDate)
    this.setOpen(false)
  }

  onInputClick = () => {
    if (!this.props.disabled) {
      this.setOpen(true)
    }
  }

  handleCalendarKeyDown = (event) => {
    this.props.onKeyDown(event)
    const eventKey = event.key
    const copy = newDate(this.state.preSelection)
    if (eventKey === 'Enter') {
      event.preventDefault()
      if (isMoment(this.state.preSelection) || isDate(this.state.preSelection)) {
        this.handleSelect(copy, event)
        !this.props.shouldCloseOnSelect && this.setPreSelection(copy)
      } else {
        this.setOpen(false)
      }
    } else if (eventKey === 'Escape') {
      event.preventDefault()
      this.setOpen(false)
    } else if (eventKey === 'Tab') {
      this.setOpen(false)
    } else if (!this.props.disabledKeyboardNavigation) {
      let newSelection
      switch (eventKey) {
        case 'ArrowLeft':
          event.preventDefault()
          newSelection = subtractDays(copy, 1)
          break
        case 'ArrowRight':
          event.preventDefault()
          newSelection = addDays(copy, 1)
          break
        case 'ArrowUp':
          event.preventDefault()
          newSelection = subtractWeeks(copy, 1)
          break
        case 'ArrowDown':
          event.preventDefault()
          newSelection = addWeeks(copy, 1)
          break
        case 'PageUp':
          event.preventDefault()
          newSelection = subtractMonths(copy, 1)
          break
        case 'PageDown':
          event.preventDefault()
          newSelection = addMonths(copy, 1)
          break
        case 'Home':
          event.preventDefault()
          newSelection = subtractYears(copy, 1)
          break
        case 'End':
          event.preventDefault()
          newSelection = addYears(copy, 1)
          break
      }
      if (this.props.adjustDateOnChange) {
        this.setSelected(newSelection)
      }
      this.setPreSelection(newSelection)
    }
  }

  onClearClick = (event) => {
    event.preventDefault()
    this.props.onChange(null, event)
    this.setState({ inputValue: null })
  }

  renderCalendar = () => {
    if (!this.props.inline && (!this.state.open || this.props.disabled)) {
      return null
    }

    if (this.props.withPortal) {
      return <WrappedCalendar
        ref={(elem) => { this.calendar = elem }}
        locale={this.props.locale}
        adjustDateOnChange={this.props.adjustDateOnChange}
        setOpen={this.setOpen}
        dateFormat={this.props.dateFormatCalendar}
        useWeekdaysShort={this.props.useWeekdaysShort}
        dropdownMode={this.props.dropdownMode}
        selected={this.props.selected}
        preSelection={this.state.preSelection}
        onSelect={this.handleSelect}
        onWeekSelect={this.props.onWeekSelect}
        openToDate={this.props.openToDate}
        minDate={this.props.minDate}
        maxDate={this.props.maxDate}
        selectsStart={this.props.selectsStart}
        selectsEnd={this.props.selectsEnd}
        startDate={this.props.startDate}
        endDate={this.props.endDate}
        excludeDates={this.props.excludeDates}
        filterDate={this.props.filterDate}
        onClickOutside={this.handleCalendarClickOutside}
        formatWeekNumber={this.props.formatWeekNumber}
        highlightDates={this.state.highlightDates}
        includeDates={this.props.includeDates}
        inline={this.props.inline}
        peekNextMonth={this.props.peekNextMonth}
        showMonthDropdown={this.props.showMonthDropdown}
        showWeekNumbers={this.props.showWeekNumbers}
        showYearDropdown={this.props.showYearDropdown}
        withPortal={this.props.withPortal}
        forceShowMonthNavigation={this.props.forceShowMonthNavigation}
        scrollableYearDropdown={this.props.scrollableYearDropdown}
        todayButton={this.props.todayButton}
        weekLabel={this.props.weekLabel}
        utcOffset={this.props.utcOffset}
        outsideClickIgnoreClass={outsideClickIgnoreClass}
        fixedHeight={this.props.fixedHeight}
        monthsShown={this.props.monthsShown}
        onDropdownFocus={this.handleDropdownFocus}
        onMonthChange={this.props.onMonthChange}
        dayClassName={this.props.dayClassName}
        showTimeSelect={this.props.showTimeSelect}
        onTimeChange={this.handleTimeChange}
        timeFormat={this.props.timeFormat}
        timeIntervals={this.props.timeIntervals}
        minTime={this.props.minTime}
        maxTime={this.props.maxTime}
        excludeTimes={this.props.excludeTimes}
        className={this.props.calendarClassName}
        yearDropdownItemNumber={this.props.yearDropdownItemNumber}
      >
        {this.props.children}
        <VisuallyHiddenText aria-atomic="true" aria-live="assertive" text={this.ariaLiveStatus} />
      </WrappedCalendar>
    }

    return (
      <Calendar
        ref={(elem) => { this.calendar = elem }}
        locale={this.props.locale}
        adjustDateOnChange={this.props.adjustDateOnChange}
        setOpen={this.setOpen}
        dateFormat={this.props.dateFormatCalendar}
        useWeekdaysShort={this.props.useWeekdaysShort}
        dropdownMode={this.props.dropdownMode}
        selected={this.props.selected}
        preSelection={this.state.preSelection}
        onSelect={this.handleSelect}
        onWeekSelect={this.props.onWeekSelect}
        openToDate={this.props.openToDate}
        minDate={this.props.minDate}
        maxDate={this.props.maxDate}
        selectsStart={this.props.selectsStart}
        selectsEnd={this.props.selectsEnd}
        startDate={this.props.startDate}
        endDate={this.props.endDate}
        excludeDates={this.props.excludeDates}
        filterDate={this.props.filterDate}
        formatWeekNumber={this.props.formatWeekNumber}
        highlightDates={this.state.highlightDates}
        includeDates={this.props.includeDates}
        inline={this.props.inline}
        peekNextMonth={this.props.peekNextMonth}
        showMonthDropdown={this.props.showMonthDropdown}
        showWeekNumbers={this.props.showWeekNumbers}
        showYearDropdown={this.props.showYearDropdown}
        withPortal={this.props.withPortal}
        forceShowMonthNavigation={this.props.forceShowMonthNavigation}
        scrollableYearDropdown={this.props.scrollableYearDropdown}
        todayButton={this.props.todayButton}
        weekLabel={this.props.weekLabel}
        utcOffset={this.props.utcOffset}
        fixedHeight={this.props.fixedHeight}
        monthsShown={this.props.monthsShown}
        onDropdownFocus={this.handleDropdownFocus}
        onMonthChange={this.props.onMonthChange}
        dayClassName={this.props.dayClassName}
        showTimeSelect={this.props.showTimeSelect}
        onTimeChange={this.handleTimeChange}
        timeFormat={this.props.timeFormat}
        timeIntervals={this.props.timeIntervals}
        minTime={this.props.minTime}
        maxTime={this.props.maxTime}
        excludeTimes={this.props.excludeTimes}
        className={this.props.calendarClassName}
        yearDropdownItemNumber={this.props.yearDropdownItemNumber}
      >
        {this.props.children}
        <VisuallyHiddenText aria-atomic="true" aria-live="assertive" text={this.ariaLiveStatus} />
      </Calendar>
    );
  }

  renderDateInput = () => {
    var classNameList = cx(this.props.className, {
      [outsideClickIgnoreClass]: this.state.open
    })

    const customInput = this.props.customInput || <input type="text" />
    const customInputRef = this.props.customInputRef || 'ref'
    const inputValue =
      typeof this.props.value === 'string' ? this.props.value
        : typeof this.state.inputValue === 'string' ? this.state.inputValue
          : safeDateFormat(this.props.selected, this.props)

    return React.cloneElement(customInput, {
      [customInputRef]: (input) => { this.input = input },
      value: inputValue,
      onBlur: this.handleBlur,
      onChange: this.handleChange,
      onClick: this.onInputClick,
      onFocus: this.handleFocus,
      onKeyDown: this.onInputKeyDown,
      id: this.props.id,
      name: this.props.name,
      autoFocus: this.props.autoFocus,
      placeholder: this.props.placeholderText,
      disabled: this.props.disabled,
      autoComplete: this.props.autoComplete,
      className: classNameList,
      title: this.props.title,
      readOnly: this.props.readOnly,
      required: this.props.required,
      tabIndex: this.props.tabIndex
    })
  }

  renderClearButton = () => {
    if (this.props.isClearable && this.props.selected != null) {
      return <a className={cx('react-datepicker-close-icon')} href="#" onClick={this.onClearClick} />
    } else {
      return null
    }
  }

  render () {
    const calendar = this.renderCalendar()

    if (this.props.inline && !this.props.withPortal) {
      return calendar
    }

    if (this.props.withPortal) {
      return (
        <div>
          {
            !this.props.inline
              ? <div className={cx('react-datepicker-input-container')}>
                {this.renderDateInput()}
                {this.renderClearButton()}
              </div>
              : null
          }
          {
            this.state.open || this.props.inline
              ? (<Portal isOpened={true}>
                  <FocusTrap focusTrapOptions={{ returnFocusOnDeactivate: false, clickOutsideDeactivates: true }}>
                    <div
                      ref={this.datePickerOverlayContainer}
                      className={cx('react-datepicker-portal')}
                      tabIndex="-1"
                      onKeyDown={this.handleCalendarKeyDown}
                    >
                      {calendar}
                    </div>
                  </FocusTrap>
                </Portal>)
              : null
          }
        </div>
      )
    }

    return (
      <React.Fragment>
        <div
         ref={this.datePickerContainer}
         className={cx('react-datepicker-input-container')}
        >
          {this.renderDateInput()}
          {this.renderClearButton()}
        </div>
        {calendar && <Popup
          attachmentBehavior="flip"
          contentAttachment="top center"
          isOpen={(this.state.open && !this.props.disabled)}
          targetAttachment="bottom center"
          targetRef={() => this.datePickerContainer.current }
          onPosition={this.handleOnPosition}
          onRequestClose={this.handleOnRequestClose}
          classNameArrow={cx('react-datepicker-arrow')}
          contentWidth="auto"
          contentHeight="auto"
          isArrowDisplayed
          isHeaderDisabled
          isContentFocusDisabled
        >
          <PopupContainer
            ref={this.datePickerPopupContainer}
            onKeyDown={this.handleCalendarKeyDown}
          >
            {calendar}
          </PopupContainer>
        </Popup>}
      </React.Fragment>
    )
  }
}

export default injectIntl(DatePicker);
