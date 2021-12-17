import React, { useState } from 'react';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import PropTypes from 'prop-types';

const propTypes = {
  // The value you want read only when changed. An undefined value is never read.
  value: PropTypes.string,
  readThis: PropTypes.string,
};

const defaultProps = {
  value: undefined,
  readThis: undefined,
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
AccessibleValue.defaultProps = defaultProps;

export default AccessibleValue;
