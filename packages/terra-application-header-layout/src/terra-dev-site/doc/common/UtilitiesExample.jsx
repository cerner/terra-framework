import React from 'react';
import PropTypes from 'prop-types';
import PlaceHolder from './Placeholder';

const propTypes = {
  size: PropTypes.string,
};

const ExtensionsExample = ({ size }) => {
  let text = 'Utilities';
  if (size === 'tiny') {
    text = 'U';
  } else if (size === 'small') {
    text = 'Util';
  }
  return (
    <PlaceHolder text={text} size={size} />
  );
};

ExtensionsExample.propTypes = propTypes;

export default ExtensionsExample;
