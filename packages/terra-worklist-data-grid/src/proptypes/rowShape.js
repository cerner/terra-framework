import PropTypes from 'prop-types';
import cellShape from './cellShape';

const rowShape = PropTypes.shape({
  height: PropTypes.string,
  cells: PropTypes.arrayOf(cellShape),
});

export default rowShape;
