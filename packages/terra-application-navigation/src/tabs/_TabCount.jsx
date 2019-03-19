import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TabCount.module.scss';

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
  tabDigits: PropTypes.oneOf(['one', 'two', 'plus']),
  refCallback: PropTypes.func,
};

const TabCount = ({
  value,
  isInline,
  isDark,
  isRollup,
  tabDigits,
  refCallback,
  ...customProps
}) => {
  let validatedValue = value;
  if (isRollup) {
    validatedValue = null;
  } else if (value > 99) {
    validatedValue = '99+';
  }

  return (
    <div {...customProps} ref={refCallback} className={cx(['count', { 'is-inline': isInline }, { 'is-dark': isDark }, { 'is-rollup': isRollup }, tabDigits, customProps.className])}>
      {validatedValue}
    </div>
  );
};

TabCount.propTypes = propTypes;

export default TabCount;
