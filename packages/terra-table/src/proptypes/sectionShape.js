import PropTypes from 'prop-types';
import rowShape from './rowShape';
import subsectionShape from './subsectionShape';

const sectionShape = PropTypes.shape({
  /**
   * An identifier for the section. This identifier should be unique across the set of sections provided.
   */
  id: PropTypes.string.isRequired,
  /**
   * A boolean indicating whether or not the the section is collapsible.
   */
  isCollapsible: PropTypes.bool,
  /**
   * A boolean indicating whether or not the section is collapsed. If true, contents of the section will not be displayed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * A text string to render within the section header.
   */
  text: PropTypes.string,
  /**
   * An array of row objects to be rendered within the section.
   */
  rows: PropTypes.arrayOf(rowShape),
  /**
   * An array of subsections objects to be rendered within the section.
   */
  subsections: PropTypes.arrayOf(subsectionShape),
});

export default sectionShape;
