import VisuallyHiddenText from 'terra-visually-hidden-text';
import PropTypes from 'prop-types';
import React from 'react';
import Input from 'terra-form-input';

const propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionId: PropTypes.string.isRequired,
};

// -=PATTERNS FOR Accessibility and Accessibility Technology (AT)=-

//   When an input field has a value:
//       Prepend the input with an invisible label so that the label will be read when the AT is reading the page ("read-mode").
//       Use aria-labelled to tie the input field to the label for other modes of AT.
//   When an input field is blank:
//       Label the input field via aria-label, and keep arial-lablledby undefined.

//   The altenative would be to always use an invisible label, but set the invisible label to aria-hidden to prevent it from being
//   double-read. This idea was nixed due to concerns from UX that aria-hidden might behave inconsistently across browser/AT combinations
//   in the future.
function A11yInputWrapper(props) {
  const {
    value,
    label,
    labelId,
    description,
    descriptionId,
    ...inputProps
  } = props;

  return (
    <>
      {value && <VisuallyHiddenText text={label} id={labelId} />}
      <Input
        {...inputProps}
        value={value}
        aria-labelledby={value ? labelId : undefined}
        aria-label={value ? undefined : label}
        aria-describedby={descriptionId}

      />
      <VisuallyHiddenText id={descriptionId} text={description} />
    </>
  );
}

A11yInputWrapper.propTypes = propTypes;

export default A11yInputWrapper;
