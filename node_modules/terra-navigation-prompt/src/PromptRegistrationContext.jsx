import React from 'react';
import PropTypes from 'prop-types';

/**
 * The default value for the PromptRegistrationContext includes a flag to indicate that the value is the default value,
 * which can be used to detect whether any matching context Providers are rendered. Also included are no-op implementations
 * for register/unregisterPrompt to minimize branching logic in the context consumers.
 */
export default React.createContext({
  isDefaultContextValue: true,
  registerPrompt: () => {},
  unregisterPrompt: () => {},
});

export const promptRegistrationContextValueShape = PropTypes.shape({
  isDefaultContextValue: PropTypes.bool,
  registerPrompt: PropTypes.func.isRequired,
  unregisterPrompt: PropTypes.func.isRequired,
});
