import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';

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
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const TabCount = ({ value, isRollup, intl }) => {
  const theme = React.useContext(ThemeContext);
  const countRef = useRef();

  useAnimatedCount(countRef, value);

  let validatedValue = value;
  if (isRollup) {
    validatedValue = intl.formatMessage({ id: 'terraApplication.navigation.notifications.new' });
  } else if (value > 99) {
    validatedValue = '99+';
  }

  return (
    <div
      ref={countRef}
      className={cx(
        'count',
        theme.className,
        { 'is-rollup': isRollup },
      )}
    >
      {validatedValue}
    </div>
  );
};

TabCount.propTypes = propTypes;

export default injectIntl(TabCount);
