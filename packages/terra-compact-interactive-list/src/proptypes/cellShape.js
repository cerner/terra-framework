import PropTypes from 'prop-types';

const cellShape = PropTypes.shape({
  /**
   * Content that will be rendered within the Cell.
   */
  content: PropTypes.node,

  /**
   * Boolean value indicating whether or not the cell should render as selected.
   */
  isSelected: PropTypes.bool,
});

export default cellShape;
