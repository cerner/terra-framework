import React from 'react';
import PropTypes from 'prop-types';
import PlaceHolder from './Placeholder';

const propTypes = {
  size: PropTypes.string,
};

const ExtensionsExample = ({ size }) => {
  let text = 'Toggle';
  if (size === 'tiny') {
    text = 'T';
  } else if (size === 'small') {
    text = 'Tog';
  }
  return (
    <PlaceHolder text={text} size={size} />
  );
};

ExtensionsExample.propTypes = propTypes;

export default ExtensionsExample;
