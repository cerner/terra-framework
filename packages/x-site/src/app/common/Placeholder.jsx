import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
};

const Placeholder = ({ text }) => (
  <div style={{ height: '100%' }}>
    <div style={{ height: '100%', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', color: 'grey', transform: 'translateX(-50%)' }}>
        <h2>{text}</h2>
      </div>
    </div>
  </div>
);

Placeholder.propTypes = propTypes;

export default Placeholder;
