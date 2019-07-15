import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Boolean prop for bounded height of container.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * Boolean prop for bounded width of container.
   */
  isWidthBounded: PropTypes.bool,
  /**
   * A callback function to execute when a key is pressed.
   */
  onKeyDown: PropTypes.func,
  /**
   * A component to be included in the popup container.
   */
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
