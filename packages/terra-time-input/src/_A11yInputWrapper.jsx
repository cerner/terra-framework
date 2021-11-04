// import React, { useEffect, useState } from 'react';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import PropTypes from 'prop-types';
import React from 'react';
import Input from 'terra-form-input';

const propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  classNames: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  handleInputKeyDown: PropTypes.string.isRequired,
  handleFocus: PropTypes.string.isRequired,
  handleBlur: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  refCallback: PropTypes.func.isRequired,
};

function A11yInputWrapper(props) {
  const {
    value,
    label,
    labelId,
    classNames,
    description,
    descriptionId,
    name,
    handleChange,
    handleInputKeyDown,
    handleFocus,
    handleBlur,
    disabled,
    refCallback,
    ...customProps
  } = props;

  return (
    <>
      {value && <VisuallyHiddenText text={label} id={labelId} />}
      <Input
        {...customProps}
        refCallback={refCallback}
        className={classNames}
        aria-labelledby={value ? labelId : undefined}
        aria-label={value ? undefined : label}
        aria-describedby={descriptionId}
        type="text"
        value={value}
        name={name}
        maxLength="2"
        onChange={handleChange}
        onKeyDown={handleInputKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        size="2"
        pattern="\d*"
        disabled={disabled}
      />
      <VisuallyHiddenText id={descriptionId} text={description} />
    </>
  );
}

A11yInputWrapper.propTypes = propTypes;

export default A11yInputWrapper;
