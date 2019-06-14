import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isHeightBounded: PropTypes.bool,
  isWidthBounded: PropTypes.bool,
  onKeyDown: PropTypes.func,
  children: PropTypes.node,
}

const defaultProps = {
  isHeightBounded: false,
  isWidthBounded: false,
}

const PopupContent = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      tabIndex="-1"
      onKeyDown={props.onKeyDown}
    >
      {props.children}
    </div>
  );
});

export default PopupContent;
