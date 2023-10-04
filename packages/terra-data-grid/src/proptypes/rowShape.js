import PropTypes from 'prop-types';
import cellShape from './cellShape';

const rowShape = PropTypes.shape({
  /**
   * An identifier to uniquely identify the row within the grid.
   */
  id: PropTypes.string.isRequired,

  /**
   * An array of cell objects that define the content to be rendered in the row. Cells will be rendered in the order given and are expected to be in the same order as the columns.
   */
  cells: PropTypes.arrayOf(cellShape),
  /**
   * A boolean indicating whether or not the row should render as selected.
   */
  isSelected: PropTypes.bool,
  /**
   * A string identifier used to describe the row contents. This value will be used for accessibility when announcing the row (un)selection.
   */
  ariaLabel: PropTypes.string,
});

export default rowShape;
