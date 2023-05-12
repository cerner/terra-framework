import PropTypes from 'prop-types';

const columnHeaderCellShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  displayName: PropTypes.string,
  acceptsFocus: PropTypes.bool,

});

export default columnHeaderCellShape;
