import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useAnimatedCount } from '../utils/helpers';

import styles from './ToggleCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The number of notifications to display.
   */
  value: PropTypes.number,
};

const ToggleCount = ({ value }) => {
  const countRef = useRef();

  useAnimatedCount(countRef, value);

  return (
    <div
      ref={countRef}
      className={cx('count')}
    />
  );
};

ToggleCount.propTypes = propTypes;

export default ToggleCount;
