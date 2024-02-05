import React from 'react';
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
  return (
    <>{props.value && <VisuallyHiddenText text={props.readThis} aria-live="polite" />}</>
  );
}

AccessibleValue.propTypes = propTypes;

export default AccessibleValue;
