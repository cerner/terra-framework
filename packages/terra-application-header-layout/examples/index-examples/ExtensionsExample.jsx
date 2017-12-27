import React from 'react';
import PropTypes from 'prop-types';
import PlaceHolder from './Placeholder';

const propTypes = {
  size: PropTypes.string,
};

const ExtensionsExample = ({ size }) => {
  let text = 'Extensions';
  let width = '150px';
  if (size === 'tiny') {
    text = 'E';
    width = '50px';
  } else if (size === 'small') {
    text = 'Ext';
    width = '100px';
  }
  return (
    <PlaceHolder text={text} width={width} />
  );
};

ExtensionsExample.propTypes = propTypes;

export default ExtensionsExample;
