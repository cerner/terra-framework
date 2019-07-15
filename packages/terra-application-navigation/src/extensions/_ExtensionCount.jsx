import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useAnimatedCount } from '../utils/helpers';

import styles from './ExtensionCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The number of notifications to display.
   */
  value: PropTypes.number,
  /**
   * Whether or not the count represents rolled up counts.
   */
  isRollup: PropTypes.bool,
};

const ExtensionCount = ({ value, isRollup, ...customProps }) => {
  const countRef = useRef();

  useAnimatedCount(countRef, value);

  let validatedValue = value;
  if (isRollup) {
    validatedValue = null;
  } else if (value >= 99) {
    validatedValue = '99+';
  }

  return (
    <div
      ref={countRef}
      className={cx(
        'count',
        { 'is-rollup': isRollup },
        customProps.className,
      )}
      aria-label={validatedValue}
    >
      {validatedValue}
    </div>
  );
};

ExtensionCount.propTypes = propTypes;

export default ExtensionCount;
