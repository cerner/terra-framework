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
   * String that specifies the column width. Any valid CSS width value is accepted.
   */
  width: PropTypes.string,
  /**
   * String that specifies the minimum column width in pixels
   */
  minimumWidth: PropTypes.string,
  /**
   * String that specifies the minimum column width in pixels
   */
  maximumWidth: PropTypes.string,
  /**
   * Boolean value indicating whether or not the column header is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * A boolean indicating whether or not the column header is resizable.
   */
  isResizable: PropTypes.bool,
});

export default columnShape;
