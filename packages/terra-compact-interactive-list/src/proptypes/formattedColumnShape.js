import PropTypes from 'prop-types';
import { alignTypes } from '../utils/constants';

const formattedColumnShape = PropTypes.shape({
  /**
   * Required string representing a unique identifier for the column.
   */
  id: PropTypes.string.isRequired,

  /**
   * String of text which will be used to provide a column context and to serve as a column header if needed.
   */
  displayName: PropTypes.string,

  /**
   * Width of the column is a number value in px, em, or rem units.
   * If not set, the column will be considered a flex growing column.
   * If width is set, but flexGrow prop is also set to true, the width will be disregarded.
   */
  width: PropTypes.number,

  /**
   * Minimum width of the column is a number value in px, em, or rem units.
   * Will be disregarded if the width is set and flexGrow is omitted or false.
   * Is reccomended in cases the column is flex growing column.
   */
  minimumWidth: PropTypes.number,

  /**
   * Maximum width of the column is a number value in px, em, or rem units.
   * Will be disregarded if the width is set and flexGrow is omitted or false.
   * Is reccomended in cases the column is flex growing column.
   */
  maximumWidth: PropTypes.number,

  /**
   * Whether the column width can grow (a flex growing column).
   * Defaults to false if the width is set and true if the width is not set.
   */
  flexGrow: PropTypes.bool,

  /**
   * Aligns the cell content to center, righ, or left. Defaults to the left.
   */
  align: PropTypes.oneOf([
    alignTypes.CENTER,
    alignTypes.RIGHT,
    alignTypes.LEFT,
  ]),

});

export default formattedColumnShape;
