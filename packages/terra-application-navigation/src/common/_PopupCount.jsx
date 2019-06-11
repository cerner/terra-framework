import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './PopupCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The number of notifications to display..
   */
  value: PropTypes.number,
};

const PopupCount = ({ value }) => {
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
  if (value > 999) {
    validatedValue = '999+';
  }

  return (
    <div
      ref={countRef}
      className={cx('popup-count')}
    >
      {validatedValue}
    </div>
  );
};

PopupCount.propTypes = propTypes;

export default PopupCount;
