import React from 'react';
import { injectIntl } from 'react-intl';
import classNamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './TimeInput.module.scss';

const propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const cx = classNamesBind.bind(styles);

/**
 * TimeSpacer is a localized, accessible string to put between inputs for hours, minutes and seconds, usually ':'.
 *
 * You get two benefits from using this component rather than a hard-coded string:
 * 1) Localize once, use many times.
 * 2) Screen readers won't read your time 09:33 as "oh-nine, COLON, thirty-three", because the spacer is hidden from
 * screen readers.
 */
function TimeSpacer(props) {
  // description: 'The symbol between hours and minutes, or between minutes and seconds.',
  const spacer = props.intl.formatMessage({ id: 'Terra.timeInput.timeSpacer' });

  return (
    <span
      // Elements like this time spacer should not be read by screen readers because they have no meaning when placed
      // between two inputs.
      aria-hidden
      className={cx('time-spacer')}
    >
      {spacer}
    </span>
  );
}

TimeSpacer.propTypes = propTypes;
export default injectIntl(TimeSpacer);
