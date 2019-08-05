import Calendar from './calendar';
import React from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import { Portal } from 'react-portal';
import KeyCode from 'keycode-js';
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
    adjustDateOnChange: PropTypes.bool,
    allowSameDay: PropTypes.bool,
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    calendarClassName: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    customInput: PropTypes.element,
    customInputRef: PropTypes.string,
    dateFormat: PropTypes.oneOfType([ // eslint-disable-line react/no-unused-prop-types
      PropTypes.string,
      PropTypes.array
    ]),
    dateFormatCalendar: PropTypes.string,
    dayClassName: PropTypes.func,
    disabled: PropTypes.bool,
    disabledKeyboardNavigation: PropTypes.bool,
    dropdownMode: PropTypes.oneOf(['scroll', 'select']).isRequired,
    endDate: PropTypes.object,
    excludeDates: PropTypes.array,
    filterDate: PropTypes.func,
    fixedHeight: PropTypes.bool,
    formatWeekNumber: PropTypes.func,
    highlightDates: PropTypes.array,
    id: PropTypes.string,
    includeDates: PropTypes.array,
    inline: PropTypes.bool,
    /**
     * @private
     * Internationalization object with translation APIs. Provided by `injectIntl`.
     */
    intl: intlShape,
    isClearable: PropTypes.bool,
    locale: PropTypes.string,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    monthsShown: PropTypes.number,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func,
    onWeekSelect: PropTypes.func,
    onClickOutside: PropTypes.func,
    onChangeRaw: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMonthChange: PropTypes.func,
    openToDate: PropTypes.object,
    peekNextMonth: PropTypes.bool,
    placeholderText: PropTypes.string,
    preventOpenOnFocus: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    scrollableYearDropdown: PropTypes.bool,
    selected: PropTypes.object,
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    showMonthDropdown: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    showYearDropdown: PropTypes.bool,
    forceShowMonthNavigation: PropTypes.bool,
    startDate: PropTypes.object,
    startOpen: PropTypes.bool,
    tabIndex: PropTypes.number,
    title: PropTypes.string,
    todayButton: PropTypes.string,
    useWeekdaysShort: PropTypes.bool,
    utcOffset: PropTypes.number,
    value: PropTypes.string,
    weekLabel: PropTypes.string,
    withPortal: PropTypes.bool,
    yearDropdownItemNumber: PropTypes.number,
    shouldCloseOnSelect: PropTypes.bool,
    showTimeSelect: PropTypes.bool,
    timeFormat: PropTypes.string,
    timeIntervals: PropTypes.number,
    minTime: PropTypes.object,
    maxTime: PropTypes.object,
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

  componentDidUpdate() {
    // Shift focus into popup date-picker if it exists
    if (this.datePickerPopupContainer.current) {
      this.datePickerPopupContainer.current.focus();
    }

    // Shift focus into overlay date-picker if it exists
    if (this.datePickerOverlayContainer.current) {
      this.datePickerOverlayContainer.current.focus();
    }
  }

  componentWillReceiveProps (nextProps) {
    const currentMonth = this.props.selected && getMonth(this.props.selected)
    const nextMonth = nextProps.selected && getMonth(nextProps.selected)
    if (this.props.inline && currentMonth !== nextMonth) {
      this.setPreSelection(nextProps.selected)
    }
    if (this.props.highlightDates !== nextProps.highlightDates) {
      this.setState({'highlightDates': getHightLightDaysMap(nextProps.highlightDates)})
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
        className={cx(this.props.calendarClassName)}
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
        className={cx(this.props.calendarClassName)}
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
