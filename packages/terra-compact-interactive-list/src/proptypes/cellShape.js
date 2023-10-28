import PropTypes from 'prop-types';

const cellShape = PropTypes.shape({
  /**
   * Content that will be rendered within the Cell.
   */
  content: PropTypes.node,
  /**
   * @private
   * Boolean value indicating whether or not the column header is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * @private
   * Boolean value indicating whether or not the cell should render as selected.
   */
  isSelected: PropTypes.bool,
});

export default cellShape;
