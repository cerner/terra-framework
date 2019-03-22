import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Count.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child tabs to be placed in the menu.
   */
  value: PropTypes.number,
  /**
   * Prop from popup, determines if the menu height is bound by the screen.
   */
  isInline: PropTypes.bool,
  /**
   * Prop from popup, determines if the menu height is bound by the screen.
   */
  isDark: PropTypes.bool,
  /**
   * Prop from popup, determines if the menu height is bound by the screen.
   */
  isRollup: PropTypes.bool,
  /**
   * Prop from popup, determines if the menu height is bound by the screen.
   */
  refCallback: PropTypes.func,
};

const Count = ({
  value,
  isInline,
  isDark,
  isRollup,
  refCallback,
  ...customProps
}) => {
  let validatedValue = value;
  if (isRollup) {
    validatedValue = null;
  } else if (isInline) {
    if (value > 999) {
      validatedValue = '999+';
    }
  } else if (value > 99) {
    validatedValue = '99+';
  }

  return (
    <span {...customProps} ref={refCallback} className={cx(['count', { 'is-inline': isInline }, { 'is-dark': isDark }, { 'is-rollup': isRollup }, customProps.className])}>
      {validatedValue}
    </span>
  );
};

Count.propTypes = propTypes;

export default Count;
