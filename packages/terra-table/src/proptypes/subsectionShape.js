import PropTypes from 'prop-types';
import rowShape from './rowShape';

const sectionShape = PropTypes.shape({
  /**
   * An identifier for the section. This identifier should be unique across the set of sections provided.
   */
  id: PropTypes.string.isRequired,
  /**
   * A text string to render within the section header.
   */
  text: PropTypes.string,
  /**
   * An array of row objects to be rendered within the section.
   */
  rows: PropTypes.arrayOf(rowShape),
});

export default sectionShape;
