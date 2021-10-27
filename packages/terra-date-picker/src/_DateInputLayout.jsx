import React from 'react';
import PropTypes from 'prop-types';
import DateUtil from './DateUtil';

const propTypes = {
  /**
   * The date input order based on the locale date format.
   */
  dateFormatOrder: PropTypes.string,
  /**
   * The separator component with the locale appropriate separator.
   */
  separator: PropTypes.node,
  /**
   * The date day component
   */
  day: PropTypes.node,
  /**
   * The date month component
   */
  month: PropTypes.node,
  /**
   * The date year component
   */
  year: PropTypes.node,
};

const DateInputLayout = (props) => {
  const {
    dateFormatOrder,
    separator,
    day,
    month,
    year,
  } = props;
  let formatOrder;

  if (dateFormatOrder === DateUtil.dateOrder.DMY) {
    formatOrder = (
      <>
        {day}
        {separator}
        {month}
        {separator}
        {year}
      </>
    );
  } else if (dateFormatOrder === DateUtil.dateOrder.MDY) {
    formatOrder = (
      <>
        {month}
        {separator}
        {day}
        {separator}
        {year}
      </>
    );
  } else if (dateFormatOrder === DateUtil.dateOrder.YMD) {
    formatOrder = (
      <>
        {year}
        {separator}
        {month}
        {separator}
        {day}
      </>
    );
  }

  return formatOrder;
};

DateInputLayout.propTypes = propTypes;

export default DateInputLayout;
