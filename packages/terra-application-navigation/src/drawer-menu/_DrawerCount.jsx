import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useAnimatedCount } from '../utils/helpers';

import styles from './DrawerCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The number of notifications to display.
   */
  value: PropTypes.number,
};

const DrawerCount = ({ value }) => {
  const countRef = useRef();

  useAnimatedCount(countRef, value);

  let validatedValue = value;
  if (value >= 999) {
    validatedValue = '999+';
  }

  return (
    <div
      ref={countRef}
      className={cx('count')}
    >
      {validatedValue}
    </div>
  );
};

DrawerCount.propTypes = propTypes;

export default DrawerCount;
