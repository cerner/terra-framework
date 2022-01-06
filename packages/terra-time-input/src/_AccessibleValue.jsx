import React, { useState } from 'react';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * This is examined to determine whether readThis should be read or not. If value is undefined or falsy, then
   * readThis will not be read. If value has not changed, or is set for the first time, then readThis will be read. If
   * value is changed to another non-falsy value then readThis will be read.
   */
  value: PropTypes.string,
  /**
   * This is what will be read when value is not falsy.
   */
  readThis: PropTypes.string,
};

/**
 * Use this component to provide a value to screen reader in a more natural fashion.
 *
 * You get these benefits by using this component:
 * - The value will be announced only when it is changed. An undefined value is never read.
 * - Less conditional rendering in the controlling component. No need to check for a value, or a change to the value.
 */
function AccessibleValue(props) {
  const [role, setRole] = useState(undefined);
  const [ariaLive, setAriaLive] = useState(undefined);
  const [value, setValue] = useState(props.value);

  // We want the reader to read a changed or set value at the earliest possible opportunity.
  // See https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes.
  //
  // FUTURE: If this convention spreads to more Terra controls consider using a package
  // like https://www.npmjs.com/package/react-aria-live to allow broadcasting across an entire frontend?
  // useEffect(() => {
  const makeStatus = () => {
    setRole('status');
    setAriaLive('polite');
    setValue(props.value);
  };

  const reset = () => {
    setRole(undefined);
    setAriaLive(undefined);
    setValue(undefined);
  };

  if (props.value && !value) {
    makeStatus();
  } else if (props.value && value && props.value !== value) {
    makeStatus();
  } else if (!props.value && value) {
    reset();
  }

  return (
    <VisuallyHiddenText aria-hidden={!props.value} text={props.readThis} aria-live={ariaLive} role={role} />
  );
}

AccessibleValue.propTypes = propTypes;

export default AccessibleValue;
