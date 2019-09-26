import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './stylesheets/datepicker.module.scss'

const cx = classNames.bind(styles);

function generateYears (year, noOfYear, minDate, maxDate) {
  var list = []
  for (var i = 0; i < (2 * noOfYear + 1); i++) {
    const newYear = year + noOfYear - i
    let isInRange = true

    if (minDate) {
      isInRange = minDate.year() <= newYear
    }

    if (maxDate && isInRange) {
      isInRange = maxDate.year() >= newYear
    }

    if (isInRange) {
      list.push(newYear)
    }
  }

  return list
}

export default class YearDropdownOptions extends React.Component {
  static propTypes = {
    /**
     * Minimum value of date that can be selected.
     */
    minDate: PropTypes.object,
    /**
     * Maximum value of date that can be selected.
     */
    maxDate: PropTypes.object,
    /**
     * A callback function to execute when user clicks outside.
     */
    onCancel: PropTypes.func.isRequired,
    /**
     * A callback function to execute when a valid date is selected .
     */
    onChange: PropTypes.func.isRequired,
    /**
     *Specifies whether or not a scrollable year dropdown is displayed.
     */
    scrollableYearDropdown: PropTypes.bool,
    /**
     * The selected or entered year to show in date input.
     */
    year: PropTypes.number.isRequired,
    /**
     * Number of years to show in the dropdown.
     */
    yearDropdownItemNumber: PropTypes.number
  }

  constructor (props) {
    super(props)
    const { yearDropdownItemNumber, scrollableYearDropdown } = props
    const noOfYear = yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5)

    this.state = {
      yearsList: generateYears(this.props.year, noOfYear, this.props.minDate, this.props.maxDate)
    }
  }

  renderOptions = () => {
    var selectedYear = this.props.year
    var options = this.state.yearsList.map(year =>
      <div className={cx('react-datepicker-year-option')}
        key={year}
        ref={year}
        onClick={this.onChange.bind(this, year)}>
        {selectedYear === year ? <span className={cx('react-datepicker-year-option--selected')}>✓</span> : ''}
        {year}
      </div>
    )

    const minYear = this.props.minDate ? this.props.minDate.year() : null
    const maxYear = this.props.maxDate ? this.props.maxDate.year() : null

    if (!maxYear || !this.state.yearsList.find(year => year === maxYear)) {
      options.unshift(
        <div className={cx('react-datepicker-year-option')}
          ref={'upcoming'}
          key={'upcoming'}
          onClick={this.incrementYears}>
          <a className={cx(['react-datepicker-navigation', 'react-datepicker-navigation--years', 'react-datepicker-navigation--years-upcoming'])} />
        </div>
      )
    }

    if (!minYear || !this.state.yearsList.find(year => year === minYear)) {
      options.push(
        <div className={cx('react-datepicker-year-option')}
          ref={'previous'}
          key={'previous'}
          onClick={this.decrementYears}>
          <a className={cx(['react-datepicker-navigation', 'react-datepicker-navigation--years', 'react-datepicker-navigation--years-previous'])} />
        </div>
      )
    }

    return options
  }

  onChange = (year) => {
    this.props.onChange(year)
  }

  handleClickOutside = () => {
    this.props.onCancel()
  }

  shiftYears = (amount) => {
    var years = this.state.yearsList.map(function (year) {
      return year + amount
    })

    this.setState({
      yearsList: years
    })
  }

  incrementYears = () => {
    return this.shiftYears(1)
  }

  decrementYears = () => {
    return this.shiftYears(-1)
  }

  render () {
    const dropdownClass = cx({
      'react-datepicker-year-dropdown': true,
      'react-datepicker-year-dropdown--scrollable': this.props.scrollableYearDropdown
    })

    return (
      <div className={dropdownClass}>
        {this.renderOptions()}
      </div>
    )
  }
}
