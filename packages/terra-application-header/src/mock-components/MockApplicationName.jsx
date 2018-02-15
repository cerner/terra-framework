import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';

const propTypes = {
  accessory: PropTypes.element,
  title: PropTypes.string,
};

const MockApplicationName = ({
  accessory,
  title,
  ...customProps
}) => (
  <div {...customProps} style={{ backgroundColor: 'blue', width: '100px', height: '100%' }} />
);

MockApplicationName.propTypes = propTypes;

export default MockApplicationName;
