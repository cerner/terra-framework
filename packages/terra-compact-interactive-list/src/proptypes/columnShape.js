import PropTypes from 'prop-types';

const columnShape = PropTypes.shape({
  /**
   * Required string representing a unique identifier for the column.
   */
  id: PropTypes.string.isRequired,

  /**
   * String of text which will be used to provide a column context and to serve as a column header if needed.
   */
  displayName: PropTypes.string,

  /**
   * Width of the column in width units set by widthUnits prop, defaults to px.
   * If not set, the column will be considered a flex growing column.
   * If width is set, but flexGrow prop is also set to true, the width will be used as a flex basis of flex growing column.
   */
  width: PropTypes.number,

  /**
   * Minimum width of the column in width units set by widthUnits prop, defaults to px.
   * Will be disregarded if the width is set and flexGrow is omitted or false.
   * Is reccomended in cases the column is flex growing column.
   */
  mimimumWidth: PropTypes.number,

  /**
   * Maximum width of the column in width units set by widthUnits prop, defaults to px.
   * Will be disregarded if the width is set and flexGrow is omitted or false.
   * Is reccomended in cases the column is flex growing column.
   */
  maximumWidth: PropTypes.number,

  /**
   * Whether the column width can grow (a flex growing column).
   * Defaults to false if the width is set and true if the width is not set.
   */
  flexGrow: PropTypes.boolean,

  /**
   * Whether the column content should be aligned to the center. If not set to true, the content will be aligned to the left.
   */
  alignToCenter: PropTypes.boolean,

});

export default columnShape;
