import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';

import styles from './TabCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child tabs to be placed in the menu.
   */
  value: PropTypes.number,
  /**
   * Whether or not the count represents rolled up counts.
   */
  isRollup: PropTypes.bool,
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: intlShape,
};

const TabCount = ({ value, isRollup, intl }) => {
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
    validatedValue = intl.formatMessage({ id: 'Terra.applicationNavigation.notifications.new' });
  } else if (value > 99) {
    validatedValue = '99+';
  }

  return (
    <div
      ref={countRef}
      className={cx(
        'count',
        { 'is-rollup': isRollup },
      )}
    >
      {validatedValue}
    </div>
  );
};

TabCount.propTypes = propTypes;

export default injectIntl(TabCount);
