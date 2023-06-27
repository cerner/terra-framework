import PropTypes from 'prop-types';

const columnShape = PropTypes.shape({
  /**
   * Required string representing a unique identifier for the column header cell.
   */
  id: PropTypes.string.isRequired,
  /**
   * String of text to render within the column header cell.
   */
  displayName: PropTypes.string,
  /**
   * Boolean value indicating whether or not the column header is selectable.
  */
  isSelectable: PropTypes.bool,
  /**
   * A number (in px) specifying the width of the column. If not provided, the DataGrid's default column width will be used.
   */
  width: PropTypes.number,
});

export default columnShape;
