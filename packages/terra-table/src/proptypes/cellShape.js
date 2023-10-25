import PropTypes from 'prop-types';

const cellShape = PropTypes.shape({
  /**
   * Content that will be rendered within the Cell.
   */
  content: PropTypes.node,

  /**
   * Boolean indicating if cell contents are masked.
   */
  isMasked: PropTypes.bool,

  /**
   * Provides a custom string for masked cells to be read by screen readers. This value is only applied if the cell is masked.
   */
  maskedLabel: PropTypes.string,

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
