import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';

const propTypes = {
  accessory: PropTypes.element,
  title: PropTypes.string,
};

const ApplicationHeaderName = ({
  accessory,
  title,
  ...customProps
}) => (
  <div {...customProps} style={{ backgroundColor: 'blue', width: '100%', height: '40px' }} />
);

ApplicationHeaderName.propTypes = propTypes;

export default ApplicationHeaderName;
