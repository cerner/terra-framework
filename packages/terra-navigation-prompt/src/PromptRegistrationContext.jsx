import React from 'react';

/**
 * The default value for the PromptRegistrationContext includes a flag to indicate that the value is the default value,
 * which can be used to detect whether any context Providers are rendered. Also included are no-op implementations
 * for register/deregisterPrompt to minimize branching logic in the context consumers.
 */
export default React.createContext({
  isDefaultValue: true,
  registerPrompt: () => {},
  deregisterPrompt: () => {},
});
