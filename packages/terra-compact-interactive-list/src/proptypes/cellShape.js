import PropTypes from 'prop-types';

const cellShape = PropTypes.shape({
  /**
   * An identifier to uniquely identify the cell.
   */
  id: PropTypes.string.isRequired,

  /**
   * Content that will be rendered within the Cell.
   */
  content: PropTypes.node,
});

export default cellShape;
