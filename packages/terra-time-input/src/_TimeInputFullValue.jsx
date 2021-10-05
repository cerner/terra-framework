import React, { useState } from 'react';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import TimeUtil from './TimeUtil';

const propTypes = {
  // The consumer must specify the ID so that they associate this component
  // as the help text, or description, of the parent time input.
  //
  // See also: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
  id: PropTypes.string.isRequired,

  // The input label is required so that when the region announces the full value it is in context of the field.
  // Example: "Birth time 09:22 pm"
  //
  // This is for situations when multiple time inputs are presented at once.
  timeInputLabel: PropTypes.string.isRequired,

  // We need to know all of the constituent values of the TimeInput consumer
  // so that we can properly construct a full, human-readable value.
  showSeconds: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([TimeUtil.FORMAT_12_HOUR, TimeUtil.FORMAT_24_HOUR]).isRequired,
  hour: PropTypes.string.isRequired,
  minute: PropTypes.string.isRequired,
  second: PropTypes.string,
  meridiem: PropTypes.string,

  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

// This private component's job is to produce a full, localized, human readable value
// for screen readers, braille keyboards and other assistive technologies to announce
// updates to the user.

// For example: if the hour field was "09", and the minute field was "22", and the user
// entered "23" in the minute field then this component will create a status region
// with innerText of "09:23" (assuming that's the localized format).
//
// Status regions are used by assistive technologies like screen readers and braille
// keyboards to announce updated content in a meaningful way to the user.
//
// See also: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_status_role
function TimeInputFullValue(props) {
  const {
    id, showSeconds, variant, hour, minute, second, meridiem, timeInputLabel, intl,
  } = props;

  // There are four possibilities:
  //     1) the time input field uses 24 hours and minutes.
  //     2) 24 hours, minutes, and seconds.
  //     3) 12 hours, minutes.
  //     4) 12 hours, minutes, and seconds.
  const varTwelve = variant === TimeUtil.FORMAT_12_HOUR;
  const values = showSeconds ? [hour, minute, second] : [hour, minute];
  const defaultValue = '';
  const [value, setValue] = useState(defaultValue);

  // The role of the text area will start as generic but be promoted to status based
  // on user inputs.
  //
  // See also: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_status_role
  const [role, setRole] = useState('generic');

  // Only update the value if the user has completed entering a valid time.
  // For example don't update if the hour field is just _1_, because we don't know yet if
  // they intend _01_ or _10_, _11_, etc.
  let newValue = value;
  if (values.reduce((prev, curr) => curr.length === 2 && prev, true)) {
    if (varTwelve && showSeconds) {
      newValue = intl.formatMessage({ id: 'Terra.timeInput.fullValueLabelTwelveHourWithSeconds' }, {
        timeInputLabel, hour, minute, second, meridiem,
      });
    } else if (varTwelve) {
      newValue = intl.formatMessage({ id: 'Terra.timeInput.fullValueLabelTwelveHour' }, {
        timeInputLabel, hour, minute, meridiem,
      });
    } else if (showSeconds) {
      newValue = intl.formatMessage({ id: 'Terra.timeInput.fullValueLabelWithSeconds' }, {
        timeInputLabel, hour, minute, second,
      });
    } else {
      newValue = intl.formatMessage({ id: 'Terra.timeInput.fullValueLabel' }, {
        timeInputLabel, hour, minute,
      });
    }
  }

  // Flip the region to be a status role only after the first valid update,
  // So that setting the initial value doesn't trigger a redundant announcement
  // when screen readers are reading the entire area.
  if (newValue !== value) {
    if (value !== defaultValue) {
      setRole('status');
    }
    setValue(newValue);
  }

  // This needs to be invisible so that consumers of the control can decide how to label it.
  // Example: toolbars probably have a different label standard than a web form.
  return (
    <VisuallyHiddenText
      id={id}
      text={value}
      role={role}
    />
  );
}

TimeInputFullValue.propTypes = propTypes;

export default injectIntl(TimeInputFullValue);
