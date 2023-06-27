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
  /**
   * Boolean value indicating whether or not the column header is selectable.
  */
  isSelectable: PropTypes.bool,
  /**
   * Boolean value to indicate if the cell is the tab stop on the grid. At any given time, the grid has only one tab stop.
   */
  isTabStop: PropTypes.bool,
});

export default cellShape;
