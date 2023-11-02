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
   * Width of the column in px.
   * If not set, the column will be considered a flex growing column.
   * If width is set, but flexGrow prop is also set to true, the width will be used as a flex basis of flex growing column.
   */
  width: PropTypes.number,

  /**
   * Maximum width of the column in px.
   * Will be disregarded if the width is set and flexGrow is omitted or false.
   * Is reccomended in cases the column is flex growing column.
   */
  maximumWidth: PropTypes.number,

  /**
   * Determines whether the column's width can grow (a flex growing column).
   * Defaults to false if the width is set and true if the width is not set.
   */
  flexGrow: PropTypes.boolean,

});

export default columnShape;
