import PropTypes from 'prop-types';

const SortIndicators = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

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
   * A string indicating which sorting indicator should be rendered. If not provided, no sorting indicator will be rendered.
   * If a `component` value is specified, `sortIndicator` will be ignored. One of `ascending`, `descending`.
   */
  sortIndicator: PropTypes.oneOf(Object.values(SortIndicators)),
  /**
   * Boolean value indicating whether or not the cell can accept focus.
   */
  acceptsFocus: PropTypes.bool,
});

export { columnShape, SortIndicators };
