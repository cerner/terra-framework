import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import { useAnimatedCount } from '../utils/helpers';

import styles from './TabCount.module.scss';

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
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: intlShape,
};

const TabCount = ({ value, isRollup, intl }) => {
  const countRef = useRef();

  useAnimatedCount(countRef, value);

  let validatedValue = value;
  if (isRollup) {
    validatedValue = intl.formatMessage({ id: 'Terra.applicationNavigation.notifications.new' });
  } else if (value >= 999) {
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
