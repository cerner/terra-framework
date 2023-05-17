import PropTypes from 'prop-types';

const columnHeaderCellShape = PropTypes.shape({
  /**
   * String representing a unique identifier for the column header cell.
   */
  id: PropTypes.string.isRequired,
  /**
   * String of text to render within the column header cell.
   */
  displayName: PropTypes.string,
  /**
   * Boolean value indicating whether or not the cell can accept focus.
   */
  acceptsFocus: PropTypes.bool,
});

export default columnHeaderCellShape;
