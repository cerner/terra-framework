import React from 'react';

const DisclosureManagerHeaderAdapterContext = React.createContext({
  register: () => {
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn('DisclosureManagerHeaderAdapter was mounted without the appropriate context present. If this is unexpected, please validate that the terra-disclosure-manager package is not being duplicated in the bundle.');
      /* eslint-enable no-console */
    }
  },
});

export default DisclosureManagerHeaderAdapterContext;
