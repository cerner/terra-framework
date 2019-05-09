import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ExtensionCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The number of notifications to display..
   */
  value: PropTypes.number,
  /**
   * Whether or not the count represents rolled up counts.
   */
  isRollup: PropTypes.bool,
};

const ExtensionCount = ({ value, isRollup }) => {
  const countRef = useRef();
  const previousValueRef = useRef(value);

  function handleAnimation() {
    if (countRef.current) {
      countRef.current.setAttribute('data-count-pulse', 'false');
      countRef.current.removeEventListener('animationend', handleAnimation);
    }
  }

  useLayoutEffect(() => {
    if (value > previousValueRef.current && countRef.current) {
      countRef.current.setAttribute('data-count-pulse', 'true');
      countRef.current.addEventListener('animationend', handleAnimation);
    }

    previousValueRef.current = value;
  }, [value]);

  let validatedValue = value;
  if (isRollup) {
    validatedValue = null;
  } else if (value > 99) {
    validatedValue = '99+';
  }

  return (
    <div
      ref={countRef}
      className={cx([
        'count',
        { 'is-rollup': isRollup },
      ])}
    >
      {validatedValue}
    </div>
  );
};

ExtensionCount.propTypes = propTypes;

export default ExtensionCount;
