import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

const TestPopupContent = ({
  onClick,
  size,
}) => (
  <div style={{ height: size.height, width: size.width, backgroundColor: 'red' }}>
    <button type="button" id="resize-content" onClick={onClick}>
      Resize
    </button>
  </div>
);

TestPopupContent.propTypes = propTypes;

export default TestPopupContent;
