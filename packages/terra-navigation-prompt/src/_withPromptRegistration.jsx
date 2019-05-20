import React from 'react';
import PromptRegistrationContext from './PromptRegistrationContext';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

const withPromptRegistration = (WrappedComponent) => {
  const WithPromptRegistrationComp = React.forwardRef((props, ref) => (
    <PromptRegistrationContext.Consumer>
      {promptRegistration => <WrappedComponent {...props} ref={ref} promptRegistration={promptRegistration} />}
    </PromptRegistrationContext.Consumer>
  ));

  WithPromptRegistrationComp.displayName = `withPromptRegistration(${getDisplayName(WrappedComponent)})`;
  WithPromptRegistrationComp.WrappedComponent = WrappedComponent;

  return WithPromptRegistrationComp;
};

export default withPromptRegistration;
