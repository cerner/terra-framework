import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func, 
  size: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

const TestPopupContent = ({
  onChange,
  onClick,
  size,
}) => (
  <div style={{ height: size.height, width: size.width, backgroundColor: 'red' }}>
    <button id="resize-content" onClick={onClick}>
      Resize
    </button>
  </div>
);

TestPopupContent.propTypes = propTypes;

export default TestPopupContent;
