import PropTypes from 'prop-types';

const cellShape = PropTypes.shape({
  /**
   * String indicating content to be displayed for the cell.
   */
  text: PropTypes.string,
});

export default cellShape;
