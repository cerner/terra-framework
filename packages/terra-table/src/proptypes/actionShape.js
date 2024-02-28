import PropTypes from 'prop-types';

const actionShape = PropTypes.shape({
  /**
   * The label for the action button.
   */
  label: PropTypes.string.isRequired,
  /**
   * The callback for action onClick.
   */
  onClick: PropTypes.func.isRequired,
});

export default actionShape;
