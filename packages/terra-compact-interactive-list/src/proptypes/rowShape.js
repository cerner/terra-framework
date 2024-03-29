import PropTypes from 'prop-types';
import cellShape from './cellShape';

const rowShape = PropTypes.shape({
  /**
   * An identifier to uniquely identify the row within the table.
   */
  id: PropTypes.string.isRequired,

  /**
   * Data to be displayed in the cells of the row. Cells will be rendered in the row in the order given.
   */
  cells: PropTypes.arrayOf(cellShape),
});

export default rowShape;
