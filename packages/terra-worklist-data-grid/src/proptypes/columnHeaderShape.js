import PropTypes from 'prop-types';
import columnHeaderCellShape from './columnHeaderCellShape';

const columnHeaderShape = PropTypes.shape({
  /**
   * String that specifies the column header height. Any valid CSS height value is accepted.
   */
  height: PropTypes.string,
  /**
   * Data to be displayed in column headers. Columns will be presented in the order given.
   */
  columns: PropTypes.arrayOf(columnHeaderCellShape),
});

export default columnHeaderShape;
