import PropTypes from 'prop-types';

const cellShape = PropTypes.shape({
  /**
   * String indicating content to be displayed for the cell.
   */
  content: PropTypes.string,
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
