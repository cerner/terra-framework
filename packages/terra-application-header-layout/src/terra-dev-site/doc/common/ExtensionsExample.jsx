import React from 'react';
import PropTypes from 'prop-types';
import PlaceHolder from './Placeholder';

const propTypes = {
  size: PropTypes.string,
};

const ExtensionsExample = ({ size }) => {
  let text = 'Extensions';
  if (size === 'tiny') {
    text = 'E';
  } else if (size === 'small') {
    text = 'Ext';
  }
  return (
    <PlaceHolder text={text} size={size} />
  );
};

ExtensionsExample.propTypes = propTypes;

export default ExtensionsExample;
