import VisuallyHiddenText from 'terra-visually-hidden-text';
import PropTypes from 'prop-types';
import React from 'react';
import Input from 'terra-form-input';
import { v4 as uuidv4 } from 'uuid';

const propTypes = {
  /**
   * The initial value of the Input that this component wraps.
   */
  value: PropTypes.string,
  /**
   * The string labeling the input for assistive technologies like screen readers. This value is not rendered visually.
   * */
  label: PropTypes.string,
  /**
   * The string that gives a deeper understanding of the purpose and usage of the input for assistive technologies like
   * screen readers. This value is not rendered visually.
   * */
  description: PropTypes.string,
  /** Set to true to disable the input and mark it disabled for screen readers. */
  disabled: PropTypes.bool,
  /** Set to true to mark as invalid for screen readers. */
  isInvalid: PropTypes.bool,
  /** When true, setting isInvalid to true will also visually display the input as invalid. */
  showIsInvalid: PropTypes.bool,
};

const defaultProps = {
  isInvalid: false,
  showIsInvalid: false,
};

/**
 * This component adds accessibility features to an Input. One day these features should be merged into Input, but they
 * can't today for passivity reasons. Instead, this wrapper component can be used on new project.
 *
 * The benefits of using this component are:
 *
 *   - The label, description and value are face-up props; this helps you meet WCAG's text alternative guidelines[1].
 *   - Screen readers will read the label then the value, no matter whether the user is in read mode (screen reader is
 *     reading the page to the user) or form mode (the user is picking an input to focus on, from a list of all inputs
 *     on the page). A naive implementation of just using aria-labelledby or aria-label can cause double reading
 *     (e.g. 'Hours Hours 09') in some cases. This component solves that problem for you.
 *
 * 1 - https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#text-alternatives
 */
function AccessibleInput(props) {
  const {
    value,
    label,
    description,
    disabled,
    isInvalid,
    showIsInvalid,
    hotKeyDescription,
    ...inputProps
  } = props;

  const uuid = uuidv4();
  const labelId = `${uuid}-label`;
  const descriptionId = `${uuid}-description`;

  return (
    <>
      {value && <VisuallyHiddenText text={label} id={labelId} />}
      {/*
      When an input field has a value: Prepend the input with an invisible label so that the label will be read
      when the AT is reading the page ("read-mode"). Use aria-labelled to tie the input field to the label for other
      modes of AT. When an input field is blank: Label the input field via aria-label, and keep arial-lablledby
      undefined. The alterative would be to always use an invisible label, but set the invisible label to aria-hidden
      to prevent it from being double-read. This idea was nixed due to concerns from UX that aria-hidden might behave
       inconsistently across browser/AT combinations in the future.
       */}
      <Input
        {...inputProps}
        value={value}
        disabled={disabled}
        aria-disabled={disabled}
        // TimeInput requires us not to show isInvalid visually, but DateInput requires we do show isInvalid visually.
        isInvalid={showIsInvalid && isInvalid}
        aria-invalid={isInvalid}
        aria-labelledby={value ? labelId : undefined}
        aria-label={value ? undefined : label}
        aria-describedby={descriptionId}

      />
      <VisuallyHiddenText id={descriptionId} text={`${description}, ${hotKeyDescription}`} />
    </>
  );
}

AccessibleInput.propTypes = propTypes;
AccessibleInput.defaultProps = defaultProps;

export default AccessibleInput;
