import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useAnimatedCount } from '../utils/helpers';

import styles from './PopupCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the count should be used as placeholder height.
   */
  isPlaceholder: PropTypes.bool,
  /**
   * The number of notifications to display.
   */
  value: PropTypes.number,
};

const PopupCount = ({ isPlaceholder, value }) => {
  const countRef = useRef();

  useAnimatedCount(countRef, value);

  let validatedValue = value;
  if (value >= 999) {
    validatedValue = '999+';
  }

  const attrSpread = isPlaceholder ? { 'aria-hidden': true } : undefined;
  return (
    <div
      {...attrSpread}
      ref={countRef}
      className={cx('popup-count', { 'is-placeholder': isPlaceholder })}
    >
      {validatedValue}
    </div>
  );
};

PopupCount.propTypes = propTypes;

export default PopupCount;
