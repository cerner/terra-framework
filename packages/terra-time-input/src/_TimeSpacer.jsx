import React from 'react';
import { injectIntl } from 'react-intl';
import classNamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './TimeInput.module.scss';

const propTypes = {
  /**
  * @private
  * intl object programmatically imported through injectIntl from react-intl.
  * */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const cx = classNamesBind.bind(styles);

function TimeSpacer(props) {
  const spacer = props.intl.formatMessage({
    id: 'Terra.timeInput.timeSpacer',
    defaultMessage: ':',
    description: 'The symbol between hours and minutes, or between minutes and seconds.',
  });

  return (
    <span
      // Elements like this time spacer should not be read by assistive technologies
      // because they have no meaning when placed in between two inputs.
      aria-hidden
      className={cx('time-spacer')}
    >
      {spacer}
    </span>
  );
}

TimeSpacer.propTypes = propTypes;
export default injectIntl(TimeSpacer);
