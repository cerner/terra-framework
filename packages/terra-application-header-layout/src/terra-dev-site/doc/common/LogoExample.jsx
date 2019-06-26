import React from 'react';
import PropTypes from 'prop-types';
import PlaceHolder from './Placeholder';

const propTypes = {
  size: PropTypes.string,
};

const ExtensionsExample = ({ size }) => {
  let text = 'Logo';
  if (size === 'tiny') {
    text = 'L';
  } else if (size === 'small') {
    text = 'Log';
  }
  return (
    <PlaceHolder text={text} size={size} />
  );
};

ExtensionsExample.propTypes = propTypes;

export default ExtensionsExample;
