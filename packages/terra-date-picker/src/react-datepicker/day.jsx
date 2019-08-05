import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectIntl, intlShape } from 'react-intl';
import {
  getDay,
  getMonth,
  getDate,
  now,
  isSameDay,
  isDayDisabled,
  isDayInRange,
  getDayOfWeekCode,
  getLocalizedDateForScreenReader
} from './date_utils'

class Day extends React.Component {
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
     * Highlight range of dates with custom classes.
     */
    highlightDates: PropTypes.instanceOf(Map),
    /**
     * Prop to render Inline version of date picker component.
     */
    inline: PropTypes.bool,
    /**
     * @private
     * Internationalization object with translation APIs. Provided by `injectIntl`.
     */
    intl: intlShape,
    /**
     * Month value for the date entered.
     */
    month: PropTypes.number,
    /**
     * A callback function to execute when a valid date is selected.
     */
    onClick: PropTypes.func,
    /**
     * A callback function to execute when mouse is clicked to select date.
     */
    onMouseEnter: PropTypes.func,
    /**
     * Previous Date Value selected .
     */
    preSelection: PropTypes.object,
    /**
     * Selected Date Value.
     */
    selected: PropTypes.object,
    /**
     * Date selected to check if in range.
     */
    selectingDate: PropTypes.object,
    /**
     * Prop to select end date on a date picker.
     */
    selectsEnd: PropTypes.bool,
    /**
     * Prop to select start date on a date picker.
     */
    selectsStart: PropTypes.bool,
    /**
     * Minimum date for a given range .
     */
    startDate: PropTypes.object,
    /**
     * Difference between utc and local time.
     */
    utcOffset: PropTypes.number
  }

  handleClick = (event) => {
    if (!this.isDisabled() && this.props.onClick) {
      this.props.onClick(event)
    }
  }

  handleMouseEnter = (event) => {
    if (!this.isDisabled() && this.props.onMouseEnter) {
      this.props.onMouseEnter(event)
    }
  }

  isSameDay = (other) => isSameDay(this.props.day, other)

  isKeyboardSelected = () =>
    !this.props.inline && !this.isSameDay(this.props.selected) && this.isSameDay(this.props.preSelection)

  isDisabled = () => isDayDisabled(this.props.day, this.props)

  getHighLightedClass = (defaultClassName) => {
    const { day, highlightDates } = this.props

    if (!highlightDates) {
      return false
    }

    // Looking for className in the Map of {'day string, 'className'}
    const dayStr = day.format('MM.DD.YYYY')
    return highlightDates.get(dayStr)
  }

  isInRange = () => {
    const { day, startDate, endDate } = this.props
    if (!startDate || !endDate) {
      return false
    }
    return isDayInRange(day, startDate, endDate)
  }

  isInSelectingRange = () => {
    const { day, selectsStart, selectsEnd, selectingDate, startDate, endDate } = this.props

    if (!(selectsStart || selectsEnd) || !selectingDate || this.isDisabled()) {
      return false
    }

    if (selectsStart && endDate && selectingDate.isSameOrBefore(endDate)) {
      return isDayInRange(day, selectingDate, endDate)
    }

    if (selectsEnd && startDate && selectingDate.isSameOrAfter(startDate)) {
      return isDayInRange(day, startDate, selectingDate)
    }

    return false
  }

  isSelectingRangeStart = () => {
    if (!this.isInSelectingRange()) {
      return false
    }

    const { day, selectingDate, startDate, selectsStart } = this.props

    if (selectsStart) {
      return isSameDay(day, selectingDate)
    } else {
      return isSameDay(day, startDate)
    }
  }

  isSelectingRangeEnd = () => {
    if (!this.isInSelectingRange()) {
      return false
    }

    const { day, selectingDate, endDate, selectsEnd } = this.props

    if (selectsEnd) {
      return isSameDay(day, selectingDate)
    } else {
      return isSameDay(day, endDate)
    }
  }

  isRangeStart = () => {
    const { day, startDate, endDate } = this.props
    if (!startDate || !endDate) {
      return false
    }
    return isSameDay(startDate, day)
  }

  isRangeEnd = () => {
    const { day, startDate, endDate } = this.props
    if (!startDate || !endDate) {
      return false
    }
    return isSameDay(endDate, day)
  }

  isWeekend = () => {
    const weekday = getDay(this.props.day)
    return weekday === 0 || weekday === 6
  }

  isOutsideMonth = () => {
    return this.props.month !== undefined &&
      this.props.month !== getMonth(this.props.day)
  }

  getClassNames = (date) => {
    const dayClassName = (this.props.dayClassName ? this.props.dayClassName(date) : undefined)
    return classnames('react-datepicker__day', dayClassName, 'react-datepicker__day--' + getDayOfWeekCode(this.props.day), {
      'react-datepicker__day--disabled': this.isDisabled(),
      'react-datepicker__day--selected': this.isSameDay(this.props.selected),
      'react-datepicker__day--keyboard-selected': this.isKeyboardSelected(),
      'react-datepicker__day--range-start': this.isRangeStart(),
      'react-datepicker__day--range-end': this.isRangeEnd(),
      'react-datepicker__day--in-range': this.isInRange(),
      'react-datepicker__day--in-selecting-range': this.isInSelectingRange(),
      'react-datepicker__day--selecting-range-start': this.isSelectingRangeStart(),
      'react-datepicker__day--selecting-range-end': this.isSelectingRangeEnd(),
      'react-datepicker__day--today': this.isSameDay(now(this.props.utcOffset)),
      'react-datepicker__day--weekend': this.isWeekend(),
      'react-datepicker__day--outside-month': this.isOutsideMonth()
    }, this.getHighLightedClass('react-datepicker__day--highlighted'))
  }

  render () {
    const { day } = this.props;

    return (
      <div
        className={this.getClassNames(day)}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        aria-label={getLocalizedDateForScreenReader(day, this.props)}
        role="option">
        {getDate(day)}
      </div>
    )
  }
}

export default injectIntl(Day);
