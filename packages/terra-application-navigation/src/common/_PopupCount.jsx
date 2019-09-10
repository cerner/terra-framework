import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useAnimatedCount } from '../utils/helpers';

import styles from './PopupCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the count should be present for height calculations, but hidden from view.
   * To ensure that row heights are consistent, we need the ability to have the count and not see it.
   */
  isHidden: PropTypes.bool,
  /**
   * The number of notifications to display.
   */
  value: PropTypes.number,
};

const PopupCount = ({ isHidden, value }) => {
  const countRef = useRef();

  useAnimatedCount(countRef, value);

  let validatedValue = value;
  if (value >= 999) {
    validatedValue = '999+';
  }

  const attrSpread = isHidden ? { 'aria-hidden': true } : undefined;
  return (
    <div
      {...attrSpread}
      ref={countRef}
      className={cx('popup-count', { 'is-hidden': isHidden })}
    >
      {validatedValue}
    </div>
  );
};

PopupCount.propTypes = propTypes;

export default PopupCount;
