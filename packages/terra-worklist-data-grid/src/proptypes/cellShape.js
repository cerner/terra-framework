import PropTypes from 'prop-types';

const cellShape = PropTypes.shape({
  /**
   * String indicating content to be displayed for the cell.  Content will be ignored if isMasked property is true.
   */
  content: PropTypes.node,

  /**
   *  Boolean indicating if cell contents are masked.
   */
  isMasked: PropTypes.bool,
});

export default cellShape;
