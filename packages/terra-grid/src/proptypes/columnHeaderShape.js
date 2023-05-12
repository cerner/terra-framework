import PropTypes from 'prop-types';
import columnHeaderCellShape from './columnHeaderCellShape';

const columnHeaderShape = PropTypes.shape({
  height: PropTypes.string,
  columns: PropTypes.arrayOf(columnHeaderCellShape),

});

export default columnHeaderShape;
