import PropTypes from 'prop-types';
import actionShape from './actionShape';

const SortIndicators = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

const ColumnHighlightColor = {
  ORANGE: 'orange',
  GREEN: 'green',
};

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
   * Number that specifies the column span value.
   */
  columnSpan: PropTypes.number,
  /**
   * Object containing label and onClick properties for column action button, which will be displayed in an additional row below the column header row.
   */
  action: PropTypes.shape({ actionShape }),
  /**
   * Boolean value indicating whether or not the column has an error in the data.
   */
  hasError: PropTypes.bool,
  /**
   * Boolean value indicating whether or not the column header is resizable.
   */
  isResizable: PropTypes.bool,
  /**
   * Boolean value indicating whether or not the column header is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Number that specifies the minimum column width in pixels.
   */
  minimumWidth: PropTypes.number,
  /**
   * Number that specifies the maximum column width in pixels.
   */
  maximumWidth: PropTypes.number,
  /**
   * A number (in px) specifying the width of the column. If not provided, the Table's default column width will be used.
   */
  width: PropTypes.number,
  /* A string indicating which sorting indicator should be rendered. If not provided, no sorting indicator will be rendered.
   * One of `ascending`, `descending`.
   */
  sortIndicator: PropTypes.oneOf(Object.values(SortIndicators)),

  /**
   * The color to be used for highlighting a column.
   */
  columnHighlightColor: PropTypes.oneOf(Object.values(ColumnHighlightColor)),

  /**
   * The information to be conveyed to screen readers about the highlighted column.
   */
  columnHighlightDescription: PropTypes.string,
});

export default columnShape;
export { SortIndicators, ColumnHighlightColor };
