import React from 'react';
import PropTypes from 'prop-types';
import PlaceHolder from '../../app/common/Placeholder';

const propTypes = {
  layoutConfig: PropTypes.object,
};

const ExtensionsExample = ({ layoutConfig }) => {
  let text = 'Toggle';
  let width = '150px';
  if (layoutConfig.size === 'tiny') {
    text = 'T';
    width = '50px';
  } else if (layoutConfig.size === 'small') {
    text = 'Tog';
    width = '100px';
  }
  return (
    <PlaceHolder text={text} width={width} />
  );
};

ExtensionsExample.propTypes = propTypes;

export default ExtensionsExample;
