import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
   * React element defining the graphic representation of the action.
   */
  icon: PropTypes.element,
  /**
   * String describing the action to users.
   */
  label: PropTypes.string.isRequired,
  /**
   * Function executed upon selection of the action. If not provided, the action
   * control will render as disabled.
   */
  onSelect: PropTypes.func,
  /**
   * Function executed upon rendering of the action control, providing a ref
   * to the action control element.
   */
  refCallback: PropTypes.func,
};
/* eslint-enable react/no-unused-prop-types */

/**
 * The PageAction component allows Page consumers to define visible actions
 * using JSX. The Page will parse props from the PageAction and present a
 * variety of controls for the action depending on Page constraints.
 *
 * The PageAction component should not be rendered directly.
 */
const PageAction = () => <React.Fragment />;

PageAction.propTypes = propTypes;

export default PageAction;
