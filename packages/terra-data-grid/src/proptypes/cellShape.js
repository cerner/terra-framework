import PropTypes from 'prop-types';

const cellShape = PropTypes.shape({
  /**
   * The content to render within the cell.
   */
  content: PropTypes.node,
  /**
   *  A boolean indicating if the cell content is masked.
   */
  isMasked: PropTypes.bool,
  /**
   * A boolean indicating if the cell is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * A boolean indicating if the cell is selected.
   */
  isSelected: PropTypes.bool,
});

export default cellShape;
