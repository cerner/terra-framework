import React from 'react';
import PropTypes from 'prop-types';
import PlaceHolder from './Placeholder';

const propTypes = {
  size: PropTypes.string,
};

const ExtensionsExample = ({ size }) => {
  let text = 'Logo';
  let width = '150px';
  if (size === 'tiny') {
    text = 'L';
    width = '50px';
  } else if (size === 'small') {
    text = 'Log';
    width = '100px';
  }
  return (
    <PlaceHolder text={text} width={width} />
  );
};

ExtensionsExample.propTypes = propTypes;

export default ExtensionsExample;
