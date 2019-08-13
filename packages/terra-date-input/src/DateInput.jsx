import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DateInput.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed as the name
   */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const DateInput = ({ name, ...customProps }) => {
  const DateInputClassNames = cx([
    'date-input',
    customProps.className,
  ]);

  return (<div {...customProps} className={DateInputClassNames}>{name}</div>);
};

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

export default DateInput;
