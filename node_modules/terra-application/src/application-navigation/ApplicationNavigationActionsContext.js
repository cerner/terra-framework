import { createContext } from 'react';
import PropTypes from 'prop-types';

/**
 * The ApplicationNavigationActionsContext can be used by content within the main region
 * to have access to and set actions that can be rendered within that main content region.
 * If leveraged it is the responsibility of that content to render said actions.
 */
const ApplicationNavigationActionsContext = createContext({});

const actionShape = PropTypes.shape({
  /**
   * An identifier for the action. This must be unique within the provided
   * actions.
   */
  key: PropTypes.string.isRequired,
  /**
   * A string description for the action. This will be presented to users and
   * should be translated if necessary.
   */
  label: PropTypes.string.isRequired,
  /**
   * A graphic representing the action. This may be used by the context consumer
   * to render controls for the action.
   */
  icon: PropTypes.element,
  /**
   * A function executed upon selection of the action.
   */
  onSelect: PropTypes.func,
});

const contextShape = {
  /**
   * Action definitions for the layout.
   */
  actions: PropTypes.arrayOf(actionShape),
};

export default ApplicationNavigationActionsContext;
export { contextShape };
