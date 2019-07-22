import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './stylesheets/datepicker.scss'

const cx = classNames.bind(styles);

export default class WeekNumber extends React.Component {
  static propTypes = {
    weekNumber: PropTypes.number.isRequired,
    onClick: PropTypes.func
  }

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }

  render () {
    const weekNumberClasses = {
      'react-datepicker-week-number': true,
      'react-datepicker-week-number--clickable': !!this.props.onClick
    }
    return (
      <div
        className={cx(weekNumberClasses)}
        aria-label={`week-${this.props.weekNumber}`}
        onClick={this.handleClick}>
        {this.props.weekNumber}
      </div>
    )
  }
}
