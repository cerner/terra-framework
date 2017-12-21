import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const LinkWrapper = ({ children }) => (
  <div>
    {children}
  </div>
);

LinkWrapper.propTypes = propTypes;

export default LinkWrapper;
