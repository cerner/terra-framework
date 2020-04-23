import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { FormattedMessage } from 'react-intl';
import MonthDropdownOptions from './month_dropdown_options'
import onClickOutside from 'react-onclickoutside'
import * as utils from './date_utils'
import styles from './stylesheets/react_datepicker.module.scss'

const cx = classNames.bind(styles);

const WrappedMonthDropdownOptions = onClickOutside(MonthDropdownOptions)

export default class MonthDropdown extends React.Component {
  static propTypes = {
    /**
     * Whether the month dropdowns should be in the scroll or select mode..
     */
    dropdownMode: PropTypes.oneOf(['scroll', 'select']).isRequired,
    /**
     * Name of locale data for different international formatting.
     */
    locale: PropTypes.string,
    /**
     * Format of the date selected.
     */
    dateFormat: PropTypes.string.isRequired,
    /**
     * Month value picked by user.
     */
    month: PropTypes.number.isRequired,
    /**
     * A callback function to execute when user selects a month.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Callback ref to pass into the dom element.
     */
    refCallback: PropTypes.func,
    /**
     * Callback to invoke when navigated using mouse.
     */
    onClick: PropTypes.func,
    /**
     * Callback to invoke when navigated using keyboard.
     */
    onKeyDown: PropTypes.func,
  }

  state = {
    dropdownVisible: false
  }

  renderSelectOptions = monthNames =>
    monthNames.map((M, i) => (
      <option key={i} value={i}>{M}</option>
    ))

  renderSelectMode = monthNames => (
    <FormattedMessage id="Terra.datePicker.monthLabel">
      {label => (
        <select onKeyDown={this.props.onKeyDown} onClick={this.props.onClick} aria-label={label} value={this.props.month} className={cx('react-datepicker-month-select')} onChange={e => this.onChange(e.target.value)}>
          {this.renderSelectOptions(monthNames)}
        </select>
      )}
    </FormattedMessage>
  )

  renderReadView = (visible, monthNames) => (
    <div key="read" style={{visibility: visible ? 'visible' : 'hidden'}} className={cx('react-datepicker-month-read-view')} onClick={this.toggleDropdown}>
      <span className={cx('react-datepicker-month-read-view--down-arrow')} />
      <span className={cx('react-datepicker-month-read-view--selected-month')}>{monthNames[this.props.month]}</span>
    </div>
  )

  renderDropdown = monthNames => (
    <WrappedMonthDropdownOptions
      key="dropdown"
      ref="options"
      month={this.props.month}
      monthNames={monthNames}
      onChange={this.onChange}
      onCancel={this.toggleDropdown} />
  )

  renderScrollMode = (monthNames) => {
    const { dropdownVisible } = this.state
    let result = [this.renderReadView(!dropdownVisible, monthNames)]
    if (dropdownVisible) {
      result.unshift(this.renderDropdown(monthNames))
    }
    return result
  }

  onChange = (month) => {
    this.toggleDropdown()
    if (month !== this.props.month) {
      this.props.onChange(month)
    }
  }

  toggleDropdown = () => this.setState({
    dropdownVisible: !this.state.dropdownVisible
  })

  render () {
    const localeData = utils.getLocaleDataForLocale(this.props.locale)
    const monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
      (M) => utils.getMonthInLocale(localeData, utils.newDate({M}), this.props.dateFormat)
    )

    let renderedDropdown
    switch (this.props.dropdownMode) {
      case 'scroll':
        renderedDropdown = this.renderScrollMode(monthNames)
        break
      case 'select':
        renderedDropdown = this.renderSelectMode(monthNames)
        break
    }

    return (
      <div
        ref={this.props.refCallback}
        className={cx(['react-datepicker-month-dropdown-container', `react-datepicker-month-dropdown-container--${this.props.dropdownMode}`])}>
        {renderedDropdown}
      </div>
    )
  }
}
