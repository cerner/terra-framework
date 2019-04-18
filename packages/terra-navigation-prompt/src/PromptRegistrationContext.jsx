import React from 'react';
import PropTypes from 'prop-types';

/**
 * The default value for the PromptRegistrationContext includes a flag to indicate that the value is the default value,
 * which can be used to detect whether any matching context Providers are rendered. Also included are no-op implementations
 * for register/deregisterPrompt to minimize branching logic in the context consumers.
 */
export default React.createContext({
  isDefaultContextValue: true,
  registerPrompt: () => {},
  deregisterPrompt: () => {},
});

export const promptRegistrationContextValueShape = PropTypes.shape({
  isDefaultContextValue: PropTypes.bool,
  registerPrompt: PropTypes.func.isRequired,
  deregisterPrompt: PropTypes.func.isRequired,
});
