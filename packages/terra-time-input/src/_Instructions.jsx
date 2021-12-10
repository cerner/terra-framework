/* eslint-disable formatjs/no-multiple-whitespaces */
import React from 'react';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import {
  TWELVE_HOUR_MINUTE, TWELVE_HOUR_MINUTE_SECOND, TWENTY_FOUR_HOUR_MINUTE, TWENTY_FOUR_HOUR_MINUTE_SECOND,
} from './TimeTypes';

const propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  timeType: PropTypes.oneOf([
    TWELVE_HOUR_MINUTE, TWELVE_HOUR_MINUTE_SECOND, TWENTY_FOUR_HOUR_MINUTE, TWENTY_FOUR_HOUR_MINUTE_SECOND,
  ]).isRequired,
};

/**
 * This component displays the appropriate accessibility instructions for a TimeInput based on the time type.
 */
function Instructions(props) {
  const {
    timeType, intl,
  } = props;

  // Pick the right i18n message based on the TimeType, or throw an error.
  const instructions = () => {
    switch (timeType) {
      case TWELVE_HOUR_MINUTE:
        return intl.formatMessage({
          id: 'Terra.timeInput.instructionsTwelveHourMinute',
          defaultMessage: `Enter a 12-hour clock value using a two digit hour and two digit minute format, then toggle
          the AM/PM buttons. Entering a two digit hour will automatically move to the minute field. Arrow up and down
          to step the hour and minute values. Arrow left and right between the hour and minute fields. Tab between the
          fields and the am/pm buttons. The hour, minute, and am/pm work together to make one time value.`,
          description: 'Instructions on how to use a 12-hour input with hours and minutes.',
        });
      case TWELVE_HOUR_MINUTE_SECOND:
        return intl.formatMessage({
          id: 'Terra.timeInput.instructionsTwelveHourMinuteSecond',
          defaultMessage: `Enter a 12-hour clock value using a two digit hour, two digit minute, and two digit second
          format, then toggle the AM/PM buttons. Entering a two digit hour will automatically move to the minute field.
          Entering a a two digit minute will automatically move to the second field. Arrow up and down to step the
          hour, minute, and second values. Arrow left and right between the hour, minute, and second fields. Tab
          between the fields and the am/pm buttons. The hour, minute, second and am/pm work together to make one time
          value.`,
          description: 'Instructions on how to use a 12-hour input with hours, minutes, and seconds.',
        });
      case TWENTY_FOUR_HOUR_MINUTE:
        return intl.formatMessage({
          id: 'Terra.timeInput.instructionsTwentyFourHourMinute',
          defaultMessage: `Enter a 24-hour clock value using a two digit hour and two digit minute format. Entering a
          two digit hour will automatically move to the minute field. Arrow up and down to step the hour and minute
          values. Arrow left and right between the hour and minute fields. The hour and minute work together to make
          one time value.`,
          description: 'Instructions on how to use a 24-hour input with hours and minutes.',
        });
      case TWENTY_FOUR_HOUR_MINUTE_SECOND:
        return intl.formatMessage({
          id: 'Terra.timeInput.instructionsTwentyFourHourMinuteSecond',
          defaultMessage: `Enter a 24-hour clock value using a two digit hour, two digit minute, and two digit second
          format. Entering a two digit hour will automatically move to the minute field. Entering a two digit minute
          will automatically move to the second field. Arrow up and down to step the hour, minute, and second values.
          Arrow left and right between the hour, minute, and second fields. The hour, minute, and second work together
          to make one time value.`,
          description: 'Instructions on how to use a 24-hour input with hours, minutes, and seconds.',
        });
      default:
        throw new Error('Unrecognized TimeType.');
    }
  };
  return <VisuallyHiddenText text={instructions()} />;
}

Instructions.propTypes = propTypes;

export default injectIntl(Instructions);
