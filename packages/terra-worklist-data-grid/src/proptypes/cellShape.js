import PropTypes from 'prop-types';

const cellShape = PropTypes.shape({
  /**
   * Content that will rendered within the Cell.
   */
  content: PropTypes.node,

  /**
   *  Boolean indicating if cell contents are masked.
   */
  isMasked: PropTypes.bool,
  /**
   * Boolean value indicating whether or not the column header is selectable.
   */
  isSelectable: PropTypes.bool,
});

export default cellShape;
