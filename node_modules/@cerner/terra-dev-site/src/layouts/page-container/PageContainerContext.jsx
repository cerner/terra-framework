import React from 'react';
import PropTypes from 'prop-types';

/**
 * The PageContainerContext is used by PageContainers to communicate state
 * and configuration to Page components rendered within them.
 */
const PageContainerContext = React.createContext();

const actionShape = PropTypes.shape({
  /**
   * An identifier for the action. This must be unique within the provided
   * actions.
   */
  key: PropTypes.string.isRequired,
  /**
   * A string description for the action. This will accessible to users and
   * should be translated sif necessary.
   */
  label: PropTypes.string.isRequired,
  /**
   * A graphic representing the action. This may be used by the context consumer
   * to render controls for the action.
   */
  icon: PropTypes.elementType,
  /**
   * A function executed upon selection of the action.
   */
  onSelect: PropTypes.func,
});

const contextShape = {
  /**
   * Action definitions to be rendered by the Page within the Page's leading
   * action region.
   */
  containerStartActions: PropTypes.arrayOf(actionShape),
  /**
   * Action definitions to be rendered by the Page within the Page's trailing
   * action region.
   */
  containerEndActions: PropTypes.arrayOf(actionShape),
};

export default PageContainerContext;
export { contextShape };
