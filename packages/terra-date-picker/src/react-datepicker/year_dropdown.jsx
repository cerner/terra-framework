import React from 'react'
import PropTypes from 'prop-types'
import YearDropdownOptions from './year_dropdown_options'
import onClickOutside from 'react-onclickoutside'
import { getYear } from './date_utils'

var WrappedYearDropdownOptions = onClickOutside(YearDropdownOptions)

export default class YearDropdown extends React.Component {
  static propTypes = {
    /**
     * Prop to change date when a valid date is selected.
     */
    adjustDateOnChange: PropTypes.bool,
   /**
     * Whether the year dropdowns should be in the scroll or select mode..
     */
    dropdownMode: PropTypes.oneOf(['scroll', 'select']).isRequired,
    /**
     * Maximum value of date that can be entered or selected.
     */
    maxDate: PropTypes.object,
    /**
     * Minimum value of date that can be entered or selected.
     */
    minDate: PropTypes.object,
    /**
     * A callback function to execute when a valid date is entered.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Prop to allow scrollable year dropdown.
     */
    scrollableYearDropdown: PropTypes.bool,
    /**
     * The selected or entered year to show in date input.
     */
    year: PropTypes.number.isRequired,
    /**
     * Number of years to show in the dropdown.
     */
    yearDropdownItemNumber: PropTypes.number,
    /**
     * The selected or entered valid date value.
     */
    date: PropTypes.object,
    /**
     * A callback function to execute when a valid year is selected.
     */
    onSelect: PropTypes.func,
    /**
     * A callback function to execute when the year dropdown is open.
     */
    setOpen: PropTypes.func
  }

  state = {
    dropdownVisible: false
  }

  renderSelectOptions = () => {
    const minYear = this.props.minDate ? getYear(this.props.minDate) : 1900
    const maxYear = this.props.maxDate ? getYear(this.props.maxDate) : 2100

    const options = []
    for (let i = minYear; i <= maxYear; i++) {
      options.push(<option key={i} value={i}>{i}</option>)
    }
    return options
  }

  onSelectChange = (e) => {
    this.onChange(e.target.value)
  }

  renderSelectMode = () => (
    <select
      tabIndex="-1"
      value={this.props.year}
      className="react-datepicker__year-select"
      onChange={this.onSelectChange}>
      {this.renderSelectOptions()}
    </select>
  )

  renderReadView = (visible) => (
    <div key="read" style={{visibility: visible ? 'visible' : 'hidden'}} className="react-datepicker__year-read-view" onClick={(event) => this.toggleDropdown(event)}>
      <span className="react-datepicker__year-read-view--down-arrow" />
      <span className="react-datepicker__year-read-view--selected-year">{this.props.year}</span>
    </div>
  )

  renderDropdown = () => (
    <WrappedYearDropdownOptions
      key="dropdown"
      ref="options"
      year={this.props.year}
      onChange={this.onChange}
      onCancel={this.toggleDropdown}
      minDate={this.props.minDate}
      maxDate={this.props.maxDate}
      scrollableYearDropdown={this.props.scrollableYearDropdown}
      yearDropdownItemNumber={this.props.yearDropdownItemNumber} />
  )

  renderScrollMode = () => {
    const { dropdownVisible } = this.state
    let result = [this.renderReadView(!dropdownVisible)]
    if (dropdownVisible) {
      result.unshift(this.renderDropdown())
    }
    return result
  }

  onChange = (year) => {
    this.toggleDropdown()
    if (year === this.props.year) return
    this.props.onChange(year)
  }

  toggleDropdown = (event) => {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    }, () => {
      if (this.props.adjustDateOnChange) {
        this.handleYearChange(this.props.date, event)
      }
    })
  }

  handleYearChange = (date, event) => {
    this.onSelect(date, event)
    this.setOpen()
  }

  onSelect = (date, event) => {
    if (this.props.onSelect) {
      this.props.onSelect(date, event)
    }
  }

  setOpen = () => {
    if (this.props.setOpen) {
      this.props.setOpen(true)
    }
  }

  render () {
    let renderedDropdown
    switch (this.props.dropdownMode) {
      case 'scroll':
        renderedDropdown = this.renderScrollMode()
        break
      case 'select':
        renderedDropdown = this.renderSelectMode()
        break
    }

    return (
      <div
        className={`react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--${this.props.dropdownMode}`}>
        {renderedDropdown}
      </div>
    )
  }
}
