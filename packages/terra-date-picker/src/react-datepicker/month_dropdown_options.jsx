import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './stylesheets/datepicker.scss'

const cx = classNames.bind(styles);

export default class MonthDropdownOptions extends React.Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    month: PropTypes.number.isRequired,
    monthNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }

  renderOptions = () => {
    return this.props.monthNames.map((month, i) =>
      <div className={cx('react-datepicker-month-option')}
        key={month}
        ref={month}
        onClick={this.onChange.bind(this, i)}>
        {this.props.month === i ? <span className={('react-datepicker-month-option--selected')}>✓</span> : ''}
        {month}
      </div>
    )
  }

  onChange = (month) => this.props.onChange(month)

  handleClickOutside = () => this.props.onCancel()

  render () {
    return (
      <div className={cx('react-datepicker-month-dropdown')}>
        {this.renderOptions()}
      </div>
    )
  }
}
