import PropTypes from 'prop-types';

const columnShape = PropTypes.shape({
  /**
   * Required string representing a unique identifier for the column.
   */
  id: PropTypes.string.isRequired,
  /**
   * String of text to render within the column header cell.
   */
  displayName: PropTypes.string,

  /**
   * Width of the column
   */
  width: PropTypes.number,

  /**
   * Whether the column width can grow
   */
  flexGrow: PropTypes.boolean,
});

export default columnShape;
